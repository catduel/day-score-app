# Supabase Setup

Project dashboard:
https://supabase.com/dashboard/org/djcdfnxdgsevvbmecgzd

## 1. Create the database tables

Open your Supabase project, go to SQL Editor, paste and run **all** of these files in order:

1. `supabase/schema.sql` — tables, RLS policies, profile auto-creation trigger
2. `supabase/my-scores-rpc.sql` — `get_my_scores` RPC
3. `supabase/recover-scores-by-email.sql` — `recover_my_scores_by_email` RPC
4. `supabase/leaderboard-email-fix.sql` — `get_group_leaderboard` RPC (friends' scores)
5. `supabase/groups-rpc.sql` — `get_my_groups`, `join_group_by_invite` RPC + auto add owner trigger
6. `supabase/profile-backfill.sql` — backfill `email` for existing profiles (only needed if you already have rows)
7. `supabase/merge-duplicate-email.sql` — merges duplicate score rows by email (only needed once if you have duplicates)

Without step 5 the friend-invite link will fail with "function does not exist" and joined members won't appear in the group leaderboard.

## 2. Add app keys

In Supabase, open Project Settings > API.

Copy:
- Project URL
- anon public key

Then edit:

`supabase-config.js`

```js
window.DAY_SCORE_SUPABASE = {
  url: "https://YOUR_PROJECT_REF.supabase.co",
  anonKey: "YOUR_SUPABASE_ANON_KEY"
};
```

## 3. Test flow

After config is filled:

1. Open `http://127.0.0.1:4177/phone-preview.html`
2. Sign up with an email/password
3. Give today's score
4. Create a group
5. Check Supabase tables for created rows

If email confirmation is enabled in Supabase, sign up may ask you to confirm the email before login works.

