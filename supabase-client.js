(function () {
  const config = window.DAY_SCORE_SUPABASE || {};
  const SESSION_KEY = "dayScoreSupabaseSession.v1";
  const configured = Boolean(
    config.url &&
    config.anonKey &&
    !config.url.includes("YOUR_PROJECT_REF") &&
    !config.anonKey.includes("YOUR_SUPABASE_ANON_KEY")
  );

  function cleanUrl(path) {
    return `${String(config.url || "").replace(/\/$/, "")}${path}`;
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }

  function setSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function decodeJwtPayload(token) {
    try {
      const payload = token.split(".")[1];
      const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
      const json = decodeURIComponent(
        atob(base64)
          .split("")
          .map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`)
          .join("")
      );
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  function authHeaders() {
    const session = getSession();
    return {
      apikey: config.anonKey,
      Authorization: `Bearer ${session?.access_token || config.anonKey}`,
      "Content-Type": "application/json"
    };
  }

  async function refreshSession() {
    const session = getSession();
    if (!session?.refresh_token) return null;
    const response = await fetch(cleanUrl("/auth/v1/token?grant_type=refresh_token"), {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ refresh_token: session.refresh_token })
    });
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) return null;
    setSession(data);
    return data;
  }

  async function request(path, options = {}, retried = false) {
    if (!configured) throw new Error("Supabase is not configured.");
    const response = await fetch(cleanUrl(path), {
      ...options,
      headers: { ...authHeaders(), ...(options.headers || {}) }
    });
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
      const message = data?.msg || data?.message || "";
      if (!retried && (response.status === 401 || message.toLowerCase().includes("jwt"))) {
        const refreshed = await refreshSession();
        if (refreshed) return request(path, options, true);
      }
      throw new Error(data?.msg || data?.message || data?.hint || "Supabase request failed.");
    }
    return data;
  }

  async function signUp({ name, email, password }) {
    const data = await request("/auth/v1/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, data: { full_name: name } })
    });
    if (data.session) setSession(data.session);
    return data;
  }

  async function signIn({ email, password }) {
    const data = await request("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    setSession(data);
    return data;
  }

  async function signOut() {
    if (configured && getSession()) {
      await request("/auth/v1/logout", { method: "POST" });
    }
    localStorage.removeItem(SESSION_KEY);
  }

  function currentUserId() {
    const session = getSession();
    return session?.user?.id || decodeJwtPayload(session?.access_token || "")?.sub || null;
  }

  function currentUser() {
    const session = getSession();
    const tokenUser = decodeJwtPayload(session?.access_token || "");
    return session?.user || (tokenUser ? {
      id: tokenUser.sub,
      email: tokenUser.email,
      user_metadata: tokenUser.user_metadata || {}
    } : null);
  }

  async function upsertProfile(profile) {
    const id = currentUserId();
    if (!id) return null;
    const rows = await request("/rest/v1/profiles?on_conflict=id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify([{ id, ...profile }])
    });
    return rows?.[0] || null;
  }

  async function getScores() {
    const userId = currentUserId();
    if (!userId) return [];
    let ownRows = [];
    let recoveredRows = [];
    try {
      ownRows = await request("/rest/v1/rpc/get_my_scores", {
        method: "POST",
        body: JSON.stringify({})
      });
    } catch (error) {
      ownRows = await request(`/rest/v1/daily_scores?select=id,user_id,score,reason,score_date,created_at&user_id=eq.${encodeURIComponent(userId)}&order=score_date.asc`, {
        method: "GET"
      });
    }
    try {
      recoveredRows = await request("/rest/v1/rpc/recover_my_scores_by_email", {
        method: "POST",
        body: JSON.stringify({})
      });
    } catch (error) {
      console.warn(error);
    }
    const byDay = new Map();
    [...recoveredRows, ...ownRows].forEach((row) => {
      const current = byDay.get(row.score_date);
      if (!current || row.user_id === userId) byDay.set(row.score_date, row);
    });
    const rows = Array.from(byDay.values()).sort((a, b) => String(a.score_date).localeCompare(String(b.score_date)));
    return rows.map((row) => ({
      id: row.id,
      userId: row.user_id,
      score: row.score,
      reason: row.reason,
      at: `${row.score_date}T12:00:00`
    }));
  }

  async function saveScore({ score, reason, scoreDate }) {
    const userId = currentUserId();
    if (!userId) throw new Error("Log in first.");
    const rows = await request("/rest/v1/daily_scores", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify([{ user_id: userId, score, reason, score_date: scoreDate }])
    });
    return rows?.[0] || null;
  }

  async function getGroups() {
    const groups = await request("/rest/v1/rpc/get_my_groups", { method: "POST", body: JSON.stringify({}) });
    return groups.map((group) => ({
      id: group.id,
      name: group.name,
      inviteCode: group.invite_code,
      invites: []
    }));
  }

  async function getGroupLeaderboard(groupId, scoreDate) {
    const rows = await request("/rest/v1/rpc/get_group_leaderboard", {
      method: "POST",
      body: JSON.stringify({ group_id_input: groupId, score_date_input: scoreDate })
    });
    return rows.map((row) => ({
      id: row.user_id,
      name: row.full_name || "Friend",
      email: row.email || "",
      score: row.score,
      reason: row.reason || "",
      scoreDate: row.score_date,
      you: row.is_you
    }));
  }

  async function joinGroupByInvite(inviteCode) {
    if (!currentUserId()) throw new Error("Log in first.");
    const result = await request("/rest/v1/rpc/join_group_by_invite", {
      method: "POST",
      body: JSON.stringify({ invite_code_input: inviteCode })
    });
    const group = Array.isArray(result) ? result[0] : result;
    if (!group?.id) throw new Error("Invalid invite code.");
    return {
      id: group.id,
      name: group.name,
      inviteCode: group.invite_code,
      alreadyMember: Boolean(group.already_member),
      invites: []
    };
  }

  async function createGroup(name) {
    const userId = currentUserId();
    if (!userId) throw new Error("Log in first.");
    const rows = await request("/rest/v1/groups", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify([{ owner_id: userId, name }])
    });
    const group = rows?.[0];
    return group ? { id: group.id, name: group.name, inviteCode: group.invite_code, invites: [] } : null;
  }

  window.DayScoreBackend = {
    enabled: () => configured,
    getSession,
    currentUser,
    currentUserId,
    refreshSession,
    signUp,
    signIn,
    signOut,
    upsertProfile,
    getScores,
    saveScore,
    getGroups,
    getGroupLeaderboard,
    createGroup,
    joinGroupByInvite
  };
})();
