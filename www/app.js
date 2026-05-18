const screens = document.querySelectorAll(".phone");
const navTargets = document.querySelectorAll("[data-screen]");
const scoreButtons = document.querySelectorAll(".wheel button");
const reasonInput = document.querySelector("#reason");
const count = document.querySelector("#count");
const save = document.querySelector("#save");
const finalScore = document.querySelector("#finalScore");
const homeScore = document.querySelector("#homeScore");
const finalReason = document.querySelector("#finalReason");
const scoreDial = document.querySelector("#scoreDial");
const scoreFill = document.querySelector("#scoreFill");
const signupButton = document.querySelector("#signupButton");
const loginButton = document.querySelector("#loginButton");
const rememberMe = document.querySelector("#rememberMe");
const userNameEl = document.querySelector("#userName");
const homeAvatarInitial = document.querySelector("#homeAvatarInitial");
const profileTopInitial = document.querySelector("#profileTopInitial");
const avatarInitialEls = document.querySelectorAll(".avatar-initial");
const afterFriendsList = document.querySelector("#afterFriendsList");
const shareScoreButton = document.querySelector("#shareScoreButton");
const boostScoreButton = document.querySelector("#boostScoreButton");
const subscriptionCard = document.querySelector("#subscriptionCard");
const subscriptionTitle = document.querySelector("#subscriptionTitle");
const subscriptionCopy = document.querySelector("#subscriptionCopy");
const subscriptionStatus = document.querySelector("#subscriptionStatus");
const subscriptionCta = document.querySelector("#subscriptionCta");
const restorePurchasesButton = document.querySelector("#restorePurchasesButton");
const paywallModal = document.querySelector("#paywallModal");
const paywallTitle = document.querySelector("#paywallTitle");
const paywallCopy = document.querySelector("#paywallCopy");
const paywallBuyButton = document.querySelector("#paywallBuyButton");
const paywallRestoreButton = document.querySelector("#paywallRestoreButton");
const paywallDismissButton = document.querySelector("#paywallDismissButton");
const weeklyAverage = document.querySelector("#weeklyAverage");
const scoreLine = document.querySelector("#scoreLine");
const scoreDots = document.querySelector("#scoreDots");
const scoreBars = document.querySelector("#scoreBars");
const highestScore = document.querySelector("#highestScore");
const highestDay = document.querySelector("#highestDay");
const lowestScore = document.querySelector("#lowestScore");
const lowestDay = document.querySelector("#lowestDay");
const overallAverage = document.querySelector("#overallAverage");
const overallAverageNote = document.querySelector("#overallAverageNote");
const daysScored = document.querySelector("#daysScored");
const analyticsDate = document.querySelector("#analyticsDate");
const todayDate = document.querySelector("#todayDate");
const archiveList = document.querySelector("#archiveList");
const archiveCount = document.querySelector("#archiveCount");
const openArchiveButton = document.querySelector("#openArchiveButton");
const archiveModal = document.querySelector("#archiveModal");
const closeArchiveModal = document.querySelector("#closeArchiveModal");
const archiveModalCalendar = document.querySelector("#archiveModalCalendar");
const archiveModalMonth = document.querySelector("#archiveModalMonth");
const scorePopover = document.querySelector("#scorePopover");
const closeScorePopover = document.querySelector("#closeScorePopover");
const popoverDate = document.querySelector("#popoverDate");
const popoverScore = document.querySelector("#popoverScore");
const popoverReason = document.querySelector("#popoverReason");
const chartDays = document.querySelector("#chartDays");
const groupNameInput = document.querySelector("#groupName");
const inviteLinkInput = document.querySelector("#inviteLink");
const createGroupButton = document.querySelector("#createGroupButton");
const createGroupShortcut = document.querySelector("#createGroupShortcut");
const inviteFriendButton = document.querySelector("#inviteFriendButton");
const groupList = document.querySelector("#groupList");
const homeFriendsList = document.querySelector("#homeFriendsList");
const rivalryCard = document.querySelector("#rivalryCard");
const weeklyLeaderboard = document.querySelector("#weeklyLeaderboard");
const leaderboardCount = document.querySelector("#leaderboardCount");
const profileName = document.querySelector("#profileName");
const profileEmail = document.querySelector("#profileEmail");
const profileInitial = document.querySelector("#profileInitial");
const profileAverage = document.querySelector("#profileAverage");
const profileScores = document.querySelector("#profileScores");
const profileGroups = document.querySelector("#profileGroups");
const profileStreak = document.querySelector("#profileStreak");
const profilePhotoInput = document.querySelector("#profilePhotoInput");
const profilePhoto = document.querySelector("#profilePhoto");
const friendScorePanel = document.querySelector("#friendScorePanel");
const enableReminderButton = document.querySelector("#enableReminderButton");
const reminderStatus = document.querySelector("#reminderStatus");
const reminderTimeInput = document.querySelector("#reminderTime");
const ratingReminderText = document.querySelector("#ratingReminderText");
const privacyPolicyButton = document.querySelector("#privacyPolicyButton");
const termsButton = document.querySelector("#termsButton");
const legalModal = document.querySelector("#legalModal");
const closeLegalModal = document.querySelector("#closeLegalModal");
const legalTitle = document.querySelector("#legalTitle");
const legalBody = document.querySelector("#legalBody");
const logoutButton = document.querySelector("#logoutButton");
const deleteAccountButton = document.querySelector("#deleteAccountButton");
const homeStreak = document.querySelector("#homeStreak");
const scoreCalendar = document.querySelector("#scoreCalendar");
const calendarMonth = document.querySelector("#calendarMonth");
const weeklyReflection = document.querySelector("#weeklyReflection");

const USER_KEY = "dayScoreUser.v1";
const SCORES_KEY = "dayScoreScores.v1";
const GROUPS_KEY = "dayScoreGroups.v1";
const REMINDER_KEY = "dayScoreReminder.v1";
const SESSION_KEY = "dayScoreRemember.v1";
const PENDING_INVITE_KEY = "dayScorePendingInvite.v1";
const ACTIVE_USER_KEY = "dayScoreActiveUser.v1";
const SUBSCRIPTION_KEY = "dayScoreSubscription.v1";
const LOCALE_KEY = "dayScoreLocale.v1";
const TRIAL_DAYS = 7;
const LIFETIME_PRICE = "$2.99";
const IAP_PRODUCT_ID = "com.ismoztas.dayscore.lifetime";

const I18N = {
  en: {
    "intro.title": "What's<br />Your Day<br />Score?",
    "intro.lead": "Rate your day between 1-10 and see yourself and your friends.",
    "intro.feat1.title": "Daily Reminder",
    "intro.feat1.body": "Choose the time your day usually ends.",
    "intro.feat2.title": "Friends & Groups",
    "intro.feat2.body": "Create your own groups and share your scores.",
    "intro.feat3.title": "Weekly Analytics",
    "intro.feat3.body": "Track your average score, trends and progress.",
    "intro.feat4.title": "Private Sharing",
    "intro.feat4.body": "Share with selected friends or just yourself.",
    "intro.note": "This is not a mood tracker. It's a complete score-based self-evaluation system.",
    "intro.signupHint": "New here?",
    "welcome.title": "What's<br />Your Day<br />Score?",
    "welcome.lead": "Give your day a score,<br />see your progress.",
    "welcome.start": "Let's Get Started",
    "welcome.login": "Log In",
    "auth.signup": "Sign Up",
    "auth.login": "Log In",
    "auth.fullName": "Full Name",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.confirmPassword": "Confirm Password",
    "auth.rememberMe": "Remember me",
    "auth.forgot": "Forgot password?",
    "auth.haveAccount": "Already have an account?",
    "auth.noAccount": "Don't have an account?",
    "home.greeting": "Hey,",
    "home.hint": "How was your day? Let's see your score.",
    "home.todaysScore": "Today's Score",
    "home.tapToScore": "Tap to give<br />your score",
    "home.currentStreak": "Current Streak",
    "home.streakHint": "Keep the chain alive",
    "home.friends": "Friends",
    "home.seeAll": "See All >",
    "home.noFriends": "No friends yet.",
    "home.quote": "Every day is a new chance to be better.",
    "rating.checkIn": "End-of-day check-in",
    "rating.scoreHint": "Score when your day is done.",
    "rating.question": "What's your day score?",
    "rating.selectScore": "Select score",
    "rating.reasonLabel": "Why did you give this score?",
    "rating.reasonMax": "(Max. 180 characters)",
    "rating.reasonPlaceholder": "Give a short reason...",
    "rating.save": "Save",
    "after.great": "Great!",
    "after.todaysScore": "Today's Score",
    "after.whyScore": "Why did you give this score?",
    "after.friendsScores": "Friends' Scores Today",
    "after.noFriendScores": "No shared friend scores yet.",
    "after.share": "Share",
    "analytics.title": "Weekly Analytics",
    "analytics.weeklyAverage": "Weekly Average",
    "analytics.highest": "Highest Score",
    "analytics.lowest": "Lowest Score",
    "analytics.allTimeAvg": "All-time Avg",
    "analytics.daysScored": "Days Scored",
    "analytics.scoreCalendar": "Score Calendar",
    "analytics.weeklyReflection": "Weekly Reflection",
    "analytics.reflectionEmpty": "Score a few days to see your weekly reflection.",
    "analytics.scoreArchive": "Score Archive",
    "analytics.openCalendar": "Open calendar",
    "analytics.archiveHint": "Tap to see every saved score.",
    "analytics.noData": "No data yet",
    "analytics.allDays": "All days you scored",
    "groups.title": "Groups",
    "groups.createGroup": "Create Group",
    "groups.groupName": "Group name",
    "groups.create": "Create",
    "groups.inviteLink": "Invite Link",
    "groups.inviteHint": "Create a group first",
    "groups.share": "Share",
    "groups.noGroups": "No groups yet",
    "groups.noGroupsHint": "Create your first private group.",
    "groups.avgScore": "Avg. Score",
    "groups.socialPulse": "Social Pulse",
    "groups.socialPulseBody": "Invite friends and compare today's score.",
    "groups.weeklyLeaderboard": "Weekly Leaderboard",
    "groups.players": "players",
    "groups.unlockLeaderboard": "Invite friends to unlock weekly competition.",
    "groups.private": "Private",
    "groups.inviteOnly": "Invite only",
    "groups.friendScore": "Friend Score",
    "groups.noSharedScore": "No shared score",
    "groups.activeGroup": "Active group",
    "groups.topToday": "Top Today",
    "groups.inviteCode": "Invite code:",
    "groups.noSharedScores": "No shared scores today",
    "profile.title": "Profile",
    "profile.average": "Average",
    "profile.scores": "Scores",
    "profile.streak": "Streak",
    "profile.account": "Account",
    "profile.accountBody": "Your daily score archive, groups, and private sharing settings will live here.",
    "profile.privacy": "Privacy",
    "profile.privacyBody": "Scores stay private unless you share them with selected friends or groups.",
    "profile.privacyPolicy": "Privacy Policy",
    "profile.termsOfUse": "Terms of Use",
    "profile.reminderTime": "Reminder Time",
    "profile.enableReminder": "Enable Reminder",
    "profile.reminderOff": "Reminder is off.",
    "profile.logout": "Log Out",
    "profile.deleteAccount": "Delete account",
    "profile.restorePurchases": "Restore Purchases",
    "profile.language": "Language",
    "sub.trialActive": "Trial active",
    "sub.trialExpired": "Trial expired",
    "sub.paid": "Paid",
    "sub.lifetimeUnlocked": "Lifetime unlocked",
    "sub.lifetimeBody": "Thanks for supporting My Day Point. All features are unlocked forever.",
    "sub.trialOverBody": "Unlock lifetime access with a one-time {price} payment. No subscriptions, no renewals.",
    "sub.trialBody": "After the 7-day trial, unlock lifetime access with a one-time {price} payment. No subscriptions, no renewals.",
    "sub.trialLeft": "{n} day{s} of trial left",
    "sub.trialEnded": "Trial ended",
    "sub.oneTime": "One-time",
    "sub.active": "Active",
    "paywall.title": "Your free trial has ended",
    "paywall.body": "To keep saving daily scores and using friend groups, unlock lifetime access. One-time {price} — no subscription, no auto-renewal.",
    "paywall.unlock": "Unlock for {price}",
    "paywall.restore": "Restore Purchase",
    "paywall.later": "Maybe later",
    "common.alreadyScored": "You already scored today. You can score again tomorrow.",
    "common.alreadyInGroup": "You are already in this group.",
    "common.joinedGroup": "You joined the group.",
    "common.createGroupFirst": "Create a group first.",
    "common.writeGroupName": "Write a group name first.",
    "common.inviteCopied": "Invite link copied.",
    "common.notSupported": "Notifications are not supported in this browser.",
    "common.permissionDenied": "Reminder permission was not allowed.",
    "common.reminderOn": "Reminder is on for {time}.",
    "common.lifetimeRestored": "Lifetime access restored. Welcome back!",
    "common.noPurchaseFound": "No previous purchase was found on this Apple ID.",
    "common.loadingStore": "Loading the store… please try again in a moment.",
    "common.purchaseFailed": "Purchase failed. Please try again.",
    "common.deleteConfirm1": "Delete your account?\n\nThis permanently removes your profile, every saved score, your groups, and all shared data. This action cannot be undone.",
    "common.deleteConfirm2": "Are you absolutely sure?\n\nTap OK to permanently delete your account now.",
    "common.deleted": "Your account and all data have been permanently deleted.",
    "common.emailPasswordRequired": "Email and password are required.",
    "common.createAccountFirst": "Create an account first.",
    "common.wrongCreds": "Email or password is incorrect.",
    "common.signingIn": "Signing in...",
    "common.creatingAccount": "Creating account...",
    "common.creating": "Creating...",
    "common.deleting": "Deleting..."
  },
  tr: {
    "intro.title": "Gününe<br />Kaç Puan<br />Veriyorsun?",
    "intro.lead": "Gününe 1-10 arası puan ver, kendini ve arkadaşlarını gör.",
    "intro.feat1.title": "Günlük Hatırlatıcı",
    "intro.feat1.body": "Gününün bittiği saati sen seç.",
    "intro.feat2.title": "Arkadaşlar ve Gruplar",
    "intro.feat2.body": "Kendi grubunu kur, puanlarını paylaş.",
    "intro.feat3.title": "Haftalık Analiz",
    "intro.feat3.body": "Ortalama puanını, trendlerini ve gelişimini takip et.",
    "intro.feat4.title": "Özel Paylaşım",
    "intro.feat4.body": "Seçtiğin arkadaşlarla paylaş veya sadece kendine sakla.",
    "intro.note": "Bu bir mood tracker değil. Tamamen puan tabanlı bir öz-değerlendirme sistemi.",
    "intro.signupHint": "Yeni misin?",
    "welcome.title": "Gününe<br />Kaç Puan<br />Veriyorsun?",
    "welcome.lead": "Gününe bir puan ver,<br />gelişimini gör.",
    "welcome.start": "Hadi Başlayalım",
    "welcome.login": "Giriş Yap",
    "auth.signup": "Üye Ol",
    "auth.login": "Giriş Yap",
    "auth.fullName": "Ad Soyad",
    "auth.email": "E-posta",
    "auth.password": "Şifre",
    "auth.confirmPassword": "Şifreyi Onayla",
    "auth.rememberMe": "Beni hatırla",
    "auth.forgot": "Şifremi unuttum",
    "auth.haveAccount": "Zaten hesabın var mı?",
    "auth.noAccount": "Hesabın yok mu?",
    "home.greeting": "Selam,",
    "home.hint": "Günün nasıldı? Puanını verelim.",
    "home.todaysScore": "Bugünkü Puan",
    "home.tapToScore": "Puan vermek için<br />dokun",
    "home.currentStreak": "Aktif Seri",
    "home.streakHint": "Zinciri devam ettir",
    "home.friends": "Arkadaşlar",
    "home.seeAll": "Tümünü Gör >",
    "home.noFriends": "Henüz arkadaş yok.",
    "home.quote": "Her gün daha iyisi için yeni bir fırsat.",
    "rating.checkIn": "Gün sonu değerlendirme",
    "rating.scoreHint": "Gününü bitirince puanla.",
    "rating.question": "Gününe kaç puan?",
    "rating.selectScore": "Puanı seç",
    "rating.reasonLabel": "Bu puanı neden verdin?",
    "rating.reasonMax": "(En fazla 180 karakter)",
    "rating.reasonPlaceholder": "Kısa bir sebep yaz...",
    "rating.save": "Kaydet",
    "after.great": "Harika!",
    "after.todaysScore": "Bugünkü Puan",
    "after.whyScore": "Bu puanı neden verdin?",
    "after.friendsScores": "Arkadaşların Bugünkü Puanları",
    "after.noFriendScores": "Henüz paylaşılan arkadaş puanı yok.",
    "after.share": "Paylaş",
    "analytics.title": "Haftalık Analiz",
    "analytics.weeklyAverage": "Haftalık Ortalama",
    "analytics.highest": "En Yüksek",
    "analytics.lowest": "En Düşük",
    "analytics.allTimeAvg": "Tüm Zaman Ort.",
    "analytics.daysScored": "Puanlanan Gün",
    "analytics.scoreCalendar": "Puan Takvimi",
    "analytics.weeklyReflection": "Haftalık Değerlendirme",
    "analytics.reflectionEmpty": "Haftalık özet için birkaç gün puanla.",
    "analytics.scoreArchive": "Puan Arşivi",
    "analytics.openCalendar": "Takvimi aç",
    "analytics.archiveHint": "Tüm kayıtlı puanlar için dokun.",
    "analytics.noData": "Veri yok",
    "analytics.allDays": "Puanladığın tüm günler",
    "groups.title": "Gruplar",
    "groups.createGroup": "Grup Oluştur",
    "groups.groupName": "Grup adı",
    "groups.create": "Oluştur",
    "groups.inviteLink": "Davet Linki",
    "groups.inviteHint": "Önce bir grup oluştur",
    "groups.share": "Paylaş",
    "groups.noGroups": "Henüz grup yok",
    "groups.noGroupsHint": "İlk özel grubunu oluştur.",
    "groups.avgScore": "Ort. Puan",
    "groups.socialPulse": "Sosyal Nabız",
    "groups.socialPulseBody": "Arkadaş davet et, bugünkü puanları karşılaştır.",
    "groups.weeklyLeaderboard": "Haftalık Lider Tablosu",
    "groups.players": "oyuncu",
    "groups.unlockLeaderboard": "Haftalık yarış için arkadaş davet et.",
    "groups.private": "Özel",
    "groups.inviteOnly": "Sadece davet",
    "groups.friendScore": "Arkadaş Puanı",
    "groups.noSharedScore": "Paylaşılan puan yok",
    "groups.activeGroup": "Aktif grup",
    "groups.topToday": "Günün En'i",
    "groups.inviteCode": "Davet kodu:",
    "groups.noSharedScores": "Bugün paylaşılan puan yok",
    "profile.title": "Profil",
    "profile.average": "Ortalama",
    "profile.scores": "Puan",
    "profile.streak": "Seri",
    "profile.account": "Hesap",
    "profile.accountBody": "Günlük puan arşivin, grupların ve gizlilik ayarların burada.",
    "profile.privacy": "Gizlilik",
    "profile.privacyBody": "Puanların özeldir; sadece seçtiğin arkadaş veya gruplarla paylaşılır.",
    "profile.privacyPolicy": "Gizlilik Politikası",
    "profile.termsOfUse": "Kullanım Koşulları",
    "profile.reminderTime": "Hatırlatma Saati",
    "profile.enableReminder": "Hatırlatıcıyı Aç",
    "profile.reminderOff": "Hatırlatıcı kapalı.",
    "profile.logout": "Çıkış Yap",
    "profile.deleteAccount": "Hesabı sil",
    "profile.restorePurchases": "Satın Almayı Geri Yükle",
    "profile.language": "Dil",
    "sub.trialActive": "Deneme aktif",
    "sub.trialExpired": "Deneme bitti",
    "sub.paid": "Ödenmiş",
    "sub.lifetimeUnlocked": "Ömür boyu erişim aktif",
    "sub.lifetimeBody": "My Day Point'i desteklediğin için teşekkürler. Tüm özellikler süresiz açık.",
    "sub.trialOverBody": "Tek seferlik {price} ödeyerek ömür boyu erişimi aç. Abonelik yok, yenileme yok.",
    "sub.trialBody": "7 günlük denemeden sonra, tek seferlik {price} ile ömür boyu erişimi aç. Abonelik yok, yenileme yok.",
    "sub.trialLeft": "Denemeden {n} gün kaldı",
    "sub.trialEnded": "Deneme bitti",
    "sub.oneTime": "Tek seferlik",
    "sub.active": "Aktif",
    "paywall.title": "Ücretsiz deneme süren bitti",
    "paywall.body": "Puan kaydetmeye ve arkadaş gruplarını kullanmaya devam etmek için ömür boyu erişimi aç. Tek seferlik {price} — abonelik yok, otomatik yenileme yok.",
    "paywall.unlock": "{price} ile aç",
    "paywall.restore": "Satın Almayı Geri Yükle",
    "paywall.later": "Belki sonra",
    "common.alreadyScored": "Bugün zaten puanladın. Yarın tekrar puanlayabilirsin.",
    "common.alreadyInGroup": "Zaten bu gruptasın.",
    "common.joinedGroup": "Gruba katıldın.",
    "common.createGroupFirst": "Önce bir grup oluştur.",
    "common.writeGroupName": "Önce bir grup adı yaz.",
    "common.inviteCopied": "Davet linki kopyalandı.",
    "common.notSupported": "Bu tarayıcı bildirimleri desteklemiyor.",
    "common.permissionDenied": "Bildirim izni verilmedi.",
    "common.reminderOn": "Hatırlatıcı {time} için aktif.",
    "common.lifetimeRestored": "Ömür boyu erişim geri yüklendi. Tekrar hoşgeldin!",
    "common.noPurchaseFound": "Bu Apple ID'de önceki bir satın alma bulunamadı.",
    "common.loadingStore": "Mağaza yükleniyor… lütfen biraz sonra tekrar dene.",
    "common.purchaseFailed": "Satın alma başarısız. Lütfen tekrar dene.",
    "common.deleteConfirm1": "Hesabını silmek istiyor musun?\n\nBu işlem profilini, kayıtlı tüm puanlarını, gruplarını ve paylaşılan tüm verilerini kalıcı olarak siler. Geri alınamaz.",
    "common.deleteConfirm2": "Tamamen emin misin?\n\nHesabını şimdi kalıcı olarak silmek için Tamam'a bas.",
    "common.deleted": "Hesabın ve tüm verilerin kalıcı olarak silindi.",
    "common.emailPasswordRequired": "E-posta ve şifre gerekli.",
    "common.createAccountFirst": "Önce hesap oluştur.",
    "common.wrongCreds": "E-posta veya şifre hatalı.",
    "common.signingIn": "Giriş yapılıyor...",
    "common.creatingAccount": "Hesap oluşturuluyor...",
    "common.creating": "Oluşturuluyor...",
    "common.deleting": "Siliniyor..."
  }
};

let currentLocale = (function () {
  const saved = localStorage.getItem(LOCALE_KEY);
  if (saved === "en" || saved === "tr") return saved;
  const lang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  return lang.startsWith("tr") ? "tr" : "en";
})();

function t(key, params) {
  const dict = I18N[currentLocale] || I18N.en;
  let str = dict[key] || I18N.en[key] || key;
  if (params) {
    Object.keys(params).forEach((k) => {
      str = str.replace(new RegExp("\\{" + k + "\\}", "g"), params[k]);
    });
  }
  return str;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.documentElement.lang = currentLocale;
}

function setLocale(locale) {
  if (locale !== "en" && locale !== "tr") return;
  currentLocale = locale;
  localStorage.setItem(LOCALE_KEY, locale);
  applyI18n();
  if (typeof renderSubscription === "function") renderSubscription();
  if (typeof updateAnalytics === "function") updateAnalytics();
  if (typeof renderGroups === "function") renderGroups();
  if (typeof renderHomeFriends === "function") renderHomeFriends();
  if (typeof updateDateUi === "function") updateDateUi();
  if (typeof updateStreakUi === "function") updateStreakUi();
  if (typeof setReminderUi === "function") setReminderUi(getReminderTime());
  if (typeof hydrateUser === "function") hydrateUser();
}
const backend = window.DayScoreBackend;

let reminderTimer = null;

let selectedScore = 10;

function updateScoreDial(score) {
  if (scoreDial) scoreDial.style.setProperty("--fill", `${(score / 10) * 360}deg`);
  if (scoreFill) scoreFill.style.strokeDashoffset = String(100 - score * 10);
}

function getScores() {
  try {
    return JSON.parse(localStorage.getItem(SCORES_KEY) || "[]");
  } catch {
    return [];
  }
}

function setScores(scores) {
  localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
}

function mergeScores(localScores, remoteScores) {
  const byDay = new Map();
  localScores.forEach((entry) => byDay.set(dayKey(entry.at), entry));
  remoteScores.forEach((entry) => byDay.set(dayKey(entry.at), entry));
  return Array.from(byDay.values()).sort((a, b) => new Date(a.at) - new Date(b.at));
}

function dayKey(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDailyScores() {
  const byDay = new Map();
  getScores().forEach((entry) => byDay.set(dayKey(entry.at), entry));
  return Array.from(byDay.values()).sort((a, b) => new Date(a.at) - new Date(b.at));
}

function getGroups() {
  try {
    return JSON.parse(localStorage.getItem(GROUPS_KEY) || "[]");
  } catch {
    return [];
  }
}

function setGroups(groups) {
  localStorage.setItem(GROUPS_KEY, JSON.stringify(groups));
}

function formatFullDate(value) {
  return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" });
}

function getFieldValue(screenId, placeholder) {
  return document.querySelector(`#${screenId} input[placeholder="${placeholder}"]`)?.value.trim() || "";
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function fillAuthEmail(screenId, email) {
  const input = document.querySelector(`#${screenId} input[placeholder="Email"]`);
  if (input) input.value = email;
}

function backendEnabled() {
  return Boolean(backend?.enabled?.());
}

async function syncBackendState() {
  if (!backendEnabled() || !backend.getSession?.()) return;
  try {
    await backend.refreshSession?.();
    const currentUserId = backend.currentUserId?.();
    const backendUser = backend.currentUser?.();
    const localUser = getUser();
    if (backendUser?.id && localUser?.id !== backendUser.id) {
      setUser({
        id: backendUser.id,
        name: backendUser.user_metadata?.full_name || backendUser.email?.split("@")[0] || "there",
        email: backendUser.email || localUser?.email || ""
      });
    }
    const previousUserId = localStorage.getItem(ACTIVE_USER_KEY);
    if (currentUserId && previousUserId && previousUserId !== currentUserId) {
      clearLocalAppData();
    }
    if (currentUserId) localStorage.setItem(ACTIVE_USER_KEY, currentUserId);
    const remoteScores = await backend.getScores();
    const remoteGroups = await backend.getGroups();
    const groupsWithMembers = await Promise.all(remoteGroups.map(async (group) => {
      try {
        const members = await backend.getGroupLeaderboard(group.id, dayKey(new Date()));
        return { ...group, members };
      } catch (error) {
        console.warn(error);
        return group;
      }
    }));
    const localScores = getScores();
    if (remoteScores.length || !localScores.length) {
      setScores(mergeScores(localScores, remoteScores));
    }
    setGroups(groupsWithMembers);
    updateAnalytics();
    renderGroups();
    renderHomeFriends();
    updateProfile();
  } catch (error) {
    console.warn(error);
  }
}

function captureInviteFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const invite = params.get("invite");
  if (invite) {
    localStorage.setItem(PENDING_INVITE_KEY, invite);
    params.delete("invite");
    const query = params.toString();
    const cleanUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", cleanUrl);
  }
}

async function consumePendingInvite() {
  const invite = localStorage.getItem(PENDING_INVITE_KEY);
  if (!invite || !backendEnabled() || !backend.getSession?.()) return false;
  try {
    const joinedGroup = await backend.joinGroupByInvite(invite);
    localStorage.removeItem(PENDING_INVITE_KEY);
    await syncBackendState();
    const currentGroups = getGroups();
    if (joinedGroup?.id && !currentGroups.some((group) => group.id === joinedGroup.id)) {
      setGroups([{ ...joinedGroup, members: [] }, ...currentGroups]);
      renderGroups();
    }
    alert(joinedGroup?.alreadyMember ? t("common.alreadyInGroup") : t("common.joinedGroup"));
    showScreen("groups");
    return true;
  } catch (error) {
    const message = String(error?.message || "");
    if (message.includes("duplicate key") || message.includes("group_members_pkey")) {
      localStorage.removeItem(PENDING_INVITE_KEY);
      await syncBackendState();
      alert(t("common.alreadyInGroup"));
      showScreen("groups");
      return true;
    }
    if (message.toLowerCase().includes("function") && message.toLowerCase().includes("does not exist")) {
      alert("Group invites need a Supabase update. Please run supabase/groups-rpc.sql in your Supabase SQL Editor and try again.");
      return false;
    }
    alert(message || "Could not join the group.");
    return false;
  }
}

function setUser(user) {
  const current = getUser() || {};
  const next = { ...current, ...user };
  localStorage.setItem(USER_KEY, JSON.stringify(next));
  if (userNameEl) userNameEl.textContent = next.name || "there";
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || "null");
  } catch {
    return null;
  }
}

function userInitial(user) {
  const seed = user?.name?.trim() || user?.email?.trim() || "U";
  return seed.charAt(0).toUpperCase();
}

function hydrateUser() {
  const user = getUser();
  const initial = userInitial(user);
  if (userNameEl) userNameEl.textContent = user?.name || "there";
  if (profileName) profileName.textContent = user?.name || "there";
  if (profileEmail) profileEmail.textContent = user?.email || "No email yet";
  if (profileInitial) profileInitial.textContent = initial;
  if (homeAvatarInitial) homeAvatarInitial.textContent = initial;
  if (profileTopInitial) profileTopInitial.textContent = initial;
  avatarInitialEls.forEach((el) => { el.textContent = initial; });
  if (profilePhoto && profileInitial) {
    profilePhoto.src = user?.photo || "";
    profileInitial.parentElement?.classList.toggle("has-photo", Boolean(user?.photo));
  }
}

function showScreen(id) {
  const target = document.querySelector(`#${id}`);
  if (!target) return;
  if (id === "analytics") updateAnalytics();
  if (id === "groups") renderGroups();
  if (id === "profile") { updateProfile(); renderSubscription(); }
  if (id === "after") renderAfterFriends();
  screens.forEach((screen) => screen.classList.toggle("is-current", screen === target));
  target.scrollTop = 0;
  if (!window.matchMedia("(max-width: 640px)").matches) {
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}

navTargets.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.screen));
});

scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedScore = Number(button.dataset.score);
    scoreButtons.forEach((choice) => choice.classList.toggle("selected", choice === button));
    updateScoreDial(selectedScore);
  });
});

function selectScore(score) {
  selectedScore = Math.max(0, Math.min(10, Number(score)));
  scoreButtons.forEach((choice) => choice.classList.toggle("selected", Number(choice.dataset.score) === selectedScore));
  updateScoreDial(selectedScore);
}

reasonInput.addEventListener("input", () => {
  count.textContent = `${reasonInput.value.length}/180`;
});

async function persistScoreToBackend(score, reason) {
  if (!backendEnabled()) return;
  try {
    const activeUser = getUser();
    const backendUser = backend.currentUser?.();
    backend.upsertProfile({
      full_name: activeUser?.name || backendUser?.user_metadata?.full_name || backendUser?.email?.split("@")[0] || "",
      email: activeUser?.email || backendUser?.email || ""
    }).catch((error) => console.warn("profile sync", error));
    await backend.saveScore({ score, reason, scoreDate: dayKey(new Date()) });
    syncBackendState().catch((error) => console.warn("sync", error));
  } catch (error) {
    const message = String(error?.message || "");
    if (message.toLowerCase().includes("duplicate")) {
      console.warn("score already exists remotely", error);
      return;
    }
    console.warn("score backend save failed", error);
  }
}

save.addEventListener("click", () => {
  if (!canUsePaidFeatures()) {
    openPaywall("expired");
    return;
  }
  const reason = reasonInput.value.trim();
  const scores = getScores();
  if (scores.some((entry) => dayKey(entry.at) === dayKey(new Date()))) {
    alert(t("common.alreadyScored"));
    return;
  }
  const entry = { score: selectedScore, reason, at: new Date().toISOString() };
  scores.push(entry);
  setScores(scores);
  finalScore.textContent = selectedScore;
  homeScore.textContent = selectedScore;
  finalReason.textContent = reason;
  reasonInput.value = "";
  if (count) count.textContent = "0/180";
  if (boostScoreButton) {
    boostScoreButton.classList.remove("boosted");
    boostScoreButton.textContent = "^";
  }
  updateAnalytics();
  renderGroups();
  renderAfterFriends();
  showScreen("after");
  persistScoreToBackend(selectedScore, reason);
});

function formatDay(value) {
  return new Date(value).toLocaleDateString("en-US", { weekday: "short" });
}

function calculateStreak(scores = getDailyScores()) {
  const scoredDays = new Set(scores.map((entry) => dayKey(entry.at)));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!scoredDays.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (scoredDays.has(dayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function getStreakMilestone(streak) {
  if (streak >= 100) return { label: "Legend streak", message: "100-day master chain", level: "legend" };
  if (streak >= 30) return { label: "Moon streak", message: "30 days of momentum", level: "moon" };
  if (streak >= 14) return { label: "Strong streak", message: "Two-week chain alive", level: "strong" };
  if (streak >= 7) return { label: "Week streak", message: "7-day chain unlocked", level: "week" };
  if (streak >= 1) return { label: "Current Streak", message: "Keep the chain alive", level: "active" };
  return { label: "Current Streak", message: "Start your chain today", level: "empty" };
}

function updateStreakUi() {
  const streak = calculateStreak();
  const milestone = getStreakMilestone(streak);
  const streakCard = homeStreak?.closest(".streak-card");
  if (streakCard) {
    streakCard.dataset.level = milestone.level;
    streakCard.querySelector("span").textContent = milestone.label;
    streakCard.querySelector("small").textContent = milestone.message;
  }
  if (homeStreak) {
    if (currentLocale === "tr") {
      homeStreak.textContent = `${streak} gün`;
    } else {
      homeStreak.textContent = `${streak} day${streak === 1 ? "" : "s"}`;
    }
  }
  if (profileStreak) profileStreak.textContent = streak;
}

function updateAnalytics() {
  const allScores = getDailyScores();
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - 6);
  weekStart.setHours(0, 0, 0, 0);
  const weekStartKey = dayKey(weekStart);
  const todayKey = dayKey(today);
  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    return date;
  });
  const scores = allScores.filter((entry) => {
    const key = dayKey(entry.at);
    return key >= weekStartKey && key <= todayKey;
  });
  if (analyticsDate) {
    const formatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
    analyticsDate.textContent = `${formatter.format(weekStart)} - ${formatter.format(today)}`;
  }
  if (chartDays) {
    chartDays.innerHTML = weekDays.map((date) => `<span>${date.toLocaleDateString("en-US", { weekday: "short" })}</span>`).join("");
  }
  if (calendarMonth) {
    calendarMonth.textContent = today.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  if (scoreCalendar) {
    scoreCalendar.innerHTML = weekDays.map((date) => {
      const entry = scores.find((item) => dayKey(item.at) === dayKey(date));
      const label = date.toLocaleDateString("en-US", { weekday: "short" });
      const day = date.getDate();
      return `<button class="${entry ? "scored" : ""}" title="${entry?.reason || "No score"}">${label}<small>${entry ? entry.score : day}</small></button>`;
    }).join("");
  }
  if (!scores.length) {
    if (weeklyAverage) weeklyAverage.textContent = "--";
    if (scoreLine) scoreLine.setAttribute("points", "");
    if (scoreDots) scoreDots.innerHTML = "";
    if (scoreBars) scoreBars.innerHTML = "";
    if (highestScore) highestScore.textContent = "--";
    if (lowestScore) lowestScore.textContent = "--";
    if (highestDay) highestDay.textContent = "No data yet";
    if (lowestDay) lowestDay.textContent = "No data yet";
    if (overallAverage) overallAverage.textContent = "--";
    if (overallAverageNote) overallAverageNote.textContent = "All days you scored";
    if (daysScored) daysScored.textContent = "0";
    if (archiveCount) archiveCount.textContent = "0 saved";
    renderArchiveSummary(allScores);
    renderArchiveModalCalendar(allScores);
    if (weeklyReflection) weeklyReflection.textContent = "Score a few days to see your weekly reflection.";
    updateStreakUi();
    return;
  }

  const total = scores.reduce((sum, entry) => sum + entry.score, 0);
  const average = total / scores.length;
  const highest = scores.reduce((best, entry) => entry.score > best.score ? entry : best, scores[0]);
  const lowest = scores.reduce((best, entry) => entry.score < best.score ? entry : best, scores[0]);
  const points = weekDays.map((date, index) => {
    const entry = scores.find((item) => dayKey(item.at) === dayKey(date));
    if (!entry) return null;
    const x = 46 + (224 / 6) * index;
    const y = 112 - entry.score * 9.6;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).filter(Boolean);

  if (weeklyAverage) weeklyAverage.textContent = average.toFixed(1);
  if (scoreLine) scoreLine.setAttribute("points", points.length > 1 ? points.join(" ") : "");
  if (scoreBars) {
    scoreBars.innerHTML = points.map((point) => {
      const [x, y] = point.split(",");
      return `<line class="score-bar" x1="${x}" y1="112" x2="${x}" y2="${y}" />`;
    }).join("");
  }
  if (scoreDots) {
    scoreDots.innerHTML = points.map((point) => {
      const [cx, cy] = point.split(",");
      return `<circle cx="${cx}" cy="${cy}" r="5" />`;
    }).join("");
  }
  if (highestScore) highestScore.textContent = highest.score;
  if (lowestScore) lowestScore.textContent = lowest.score;
  if (highestDay) highestDay.textContent = formatDay(highest.at);
  if (lowestDay) lowestDay.textContent = formatDay(lowest.at);
  const allTotal = allScores.reduce((sum, entry) => sum + entry.score, 0);
  const allAverage = allScores.length ? (allTotal / allScores.length) : 0;
  if (overallAverage) overallAverage.textContent = allScores.length ? allAverage.toFixed(1) : "--";
  if (overallAverageNote) overallAverageNote.textContent = `${allScores.length} day${allScores.length === 1 ? "" : "s"} total`;
  if (daysScored) daysScored.textContent = scores.length;
  if (archiveCount) archiveCount.textContent = `${allScores.length} saved`;
  renderArchiveSummary(allScores);
  renderArchiveModalCalendar(allScores);
  if (archiveModalCalendar) {
    archiveModalCalendar.querySelectorAll("[data-archive-day]").forEach((button) => {
      button.addEventListener("click", () => {
        const entry = allScores.find((item) => dayKey(item.at) === button.dataset.archiveDay);
        if (entry) showScorePopover(entry);
      });
    });
  }
  if (weeklyReflection) {
    const streak = calculateStreak(allScores);
    weeklyReflection.textContent = `This week your average is ${average.toFixed(1)}. Best day was ${formatFullDate(highest.at)} with ${highest.score}. Current streak: ${streak} day${streak === 1 ? "" : "s"}.`;
  }
  updateStreakUi();
}

function renderArchiveSummary(scores) {
  if (!archiveList) return;
  if (!scores.length) {
    archiveList.innerHTML = `<strong>No scores yet</strong><span>Your saved days will appear here.</span>`;
    return;
  }
  const latest = scores[scores.length - 1];
  archiveList.innerHTML = `<strong>Open calendar</strong><span>Latest: ${formatFullDate(latest.at)} with ${latest.score}. Tap to inspect all days.</span>`;
}

function renderArchiveModalCalendar(scores) {
  if (archiveModalMonth) archiveModalMonth.textContent = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
  if (!archiveModalCalendar) return;
  archiveModalCalendar.innerHTML = renderArchiveCalendar(scores);
}

function renderArchiveCalendar(scores) {
  if (!scores.length) return `<div class="empty-state">No scores saved yet.</div>`;
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const startOffset = firstDay.getDay();
  const cells = [];
  for (let index = 0; index < startOffset; index += 1) {
    cells.push(`<span class="calendar-blank"></span>`);
  }
  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(today.getFullYear(), today.getMonth(), day);
    const key = dayKey(date);
    const entry = scores.find((item) => dayKey(item.at) === key);
    cells.push(
      entry
        ? `<button class="has-score" data-archive-day="${key}"><span>${day}</span><b>${entry.score}</b></button>`
        : `<button disabled><span>${day}</span></button>`
    );
  }
  return `<div class="archive-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div><div class="archive-month">${cells.join("")}</div>`;
}

function showScorePopover(entry) {
  if (!scorePopover) return;
  if (popoverDate) popoverDate.textContent = formatFullDate(entry.at);
  if (popoverScore) popoverScore.textContent = entry.score;
  if (popoverReason) popoverReason.textContent = entry.reason || "No note written.";
  scorePopover.classList.add("open");
  scorePopover.setAttribute("aria-hidden", "false");
}

function hideScorePopover() {
  if (!scorePopover) return;
  scorePopover.classList.remove("open");
  scorePopover.setAttribute("aria-hidden", "true");
}

function openArchiveModal() {
  if (!archiveModal) return;
  renderArchiveModalCalendar(getDailyScores());
  archiveModalCalendar?.querySelectorAll("[data-archive-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = getDailyScores().find((item) => dayKey(item.at) === button.dataset.archiveDay);
      if (entry) showScorePopover(entry);
    });
  });
  archiveModal.classList.add("open");
  archiveModal.setAttribute("aria-hidden", "false");
}

function closeArchiveModalPanel() {
  if (!archiveModal) return;
  hideScorePopover();
  archiveModal.classList.remove("open");
  archiveModal.setAttribute("aria-hidden", "true");
}

openArchiveButton?.addEventListener("click", openArchiveModal);
closeArchiveModal?.addEventListener("click", closeArchiveModalPanel);
archiveModal?.addEventListener("click", (event) => {
  if (event.target === archiveModal) closeArchiveModalPanel();
});
closeScorePopover?.addEventListener("click", hideScorePopover);
scorePopover?.addEventListener("click", (event) => {
  if (event.target === scorePopover) hideScorePopover();
});

function updateProfile() {
  const scores = getDailyScores();
  const groups = getGroups();
  const average = scores.length ? (scores.reduce((sum, entry) => sum + entry.score, 0) / scores.length).toFixed(1) : "--";
  if (profileAverage) profileAverage.textContent = average;
  if (profileScores) profileScores.textContent = scores.length;
  if (profileGroups) profileGroups.textContent = groups.length;
  if (profileStreak) profileStreak.textContent = calculateStreak(scores);
  hydrateUser();
}

function updateDateUi() {
  if (todayDate) {
    todayDate.textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
  }
  const latestScore = getDailyScores().at(-1);
  if (homeScore) homeScore.textContent = latestScore?.score ?? "--";
  updateAnalytics();
}

function renderGroups() {
  const groups = getGroups();
  if (!groupList) return;
  if (!groups.length) {
    groupList.innerHTML = `<article class="glass group empty-group"><div><strong>No groups yet</strong><small>Create your first private group.</small></div><p>Avg. Score <b>--</b></p></article>`;
    if (inviteLinkInput) inviteLinkInput.value = "";
    renderSocialCompetition();
    renderHomeFriends();
    return;
  }
  const latestScore = getDailyScores().at(-1)?.score ?? "--";
  const firstLink = makeInviteLink(groups[0]);
  if (inviteLinkInput) inviteLinkInput.value = firstLink;
  const groupCards = groups.map((group, index) => {
    const inviteCode = group.inviteCode || group.id.slice(0, 8);
    const scoredMembers = (group.members || []).filter((member) => isVisibleScoredMember(member));
    const topMember = scoredMembers.slice().sort((a, b) => b.score - a.score)[0];
    const bestScore = topMember?.score ?? "--";
    const scoreSummary = topMember
      ? `${memberLabel(topMember)} shared ${topMember.score}/10`
      : "No shared scores today";
    const scorerDetail = topMember?.email ? `<small>${topMember.email}</small>` : "";
    const invites = `<div class="invite-row">Invite code:<br><button data-friend="${inviteCode}">${inviteCode}</button></div>`;
    if (index === 0) {
      return `<article class="glass group active-group"><div><span class="group-kicker">Active group</span><strong>${group.name}</strong><small>${scoreSummary}</small>${scorerDetail}${invites}</div><p>Top Today <b>${bestScore}</b></p></article>`;
    }
    return `<button class="group-pill" data-friend="${inviteCode}"><span>${group.name}</span><b>${bestScore}</b></button>`;
  });
  const extraCount = Math.max(0, groups.length - 1);
  groupList.innerHTML = `${groupCards[0] || ""}${extraCount ? `<div class="group-pills"><small>${extraCount} more group${extraCount === 1 ? "" : "s"}</small>${groupCards.slice(1).join("")}</div>` : ""}`;
  groupList.querySelectorAll("[data-friend]").forEach((button) => {
    button.addEventListener("click", () => showFriendScore(button.dataset.friend));
  });
  renderSocialCompetition();
  renderHomeFriends();
}

function hasTodayScore() {
  return getDailyScores().some((entry) => dayKey(entry.at) === dayKey(new Date()));
}

function isCurrentMember(member) {
  const currentId = backend?.currentUserId?.();
  return Boolean(member?.you || (currentId && member?.id === currentId));
}

function isVisibleScoredMember(member) {
  if (typeof member?.score !== "number") return false;
  return !isCurrentMember(member) || hasTodayScore();
}

function memberLabel(member) {
  if (!member) return "Friend";
  if (isCurrentMember(member)) return "You";
  return member.name || member.email?.split("@")[0] || "Friend";
}

function memberDetail(member) {
  if (!member) return "";
  return member.email || member.reason || "";
}

function memberInitial(member) {
  const label = memberLabel(member);
  return label.trim().charAt(0).toUpperCase() || "?";
}

function showFriendScore(email) {
  if (!friendScorePanel) return;
  const board = getSocialBoard();
  const topFriend = board.find((entry) => !entry.you);
  friendScorePanel.innerHTML = topFriend
    ? `<i class="social-icon score"></i><strong>${memberLabel(topFriend)}</strong><span>${topFriend.score}/10 today</span>`
    : `<i class="social-icon score"></i><strong>${email}</strong><span>Waiting for score</span>`;
}

function getFriendBoard(groups = getGroups()) {
  return getSocialBoard(groups).filter((entry) => !entry.you);
}

function renderHomeFriends() {
  if (!homeFriendsList) return;
  const friends = getFriendBoard();
  if (!friends.length) {
    homeFriendsList.className = "empty-state";
    homeFriendsList.innerHTML = t("home.noFriends");
    return;
  }
  homeFriendsList.className = "friend-strip";
  homeFriendsList.innerHTML = friends.slice(0, 3).map((friend) => (
    `<button data-friend="${friend.email || friend.id || friend.name}">
      <span>${memberInitial(friend)}</span>
      <strong>${memberLabel(friend)}</strong>
      <b>${friend.score}</b>
    </button>`
  )).join("");
  homeFriendsList.querySelectorAll("[data-friend]").forEach((button) => {
    button.addEventListener("click", () => {
      showFriendScore(button.dataset.friend);
      showScreen("groups");
    });
  });
}

function getSocialBoard(groups = getGroups()) {
  const latest = getDailyScores().at(-1);
  if (!groups.length) return [];
  const sharedMembers = groups.flatMap((group) => group.members || []);
  const scoredMembers = sharedMembers.filter((member) => isVisibleScoredMember(member));
  if (scoredMembers.length) {
    const unique = new Map();
    const currentId = backend?.currentUserId?.();
    scoredMembers.forEach((member) => {
      const key = member.id || member.email || member.name;
      unique.set(key, {
        ...member,
        you: Boolean(member.you || (currentId && member.id === currentId))
      });
    });
    return Array.from(unique.values()).sort((a, b) => b.score - a.score);
  }
  if (!latest) return [];
  return [{ name: "You", score: latest.score, note: latest.reason, you: true }];
}

function renderSocialCompetition() {
  const groups = getGroups();
  const board = getSocialBoard(groups);
  const yourEntry = board.find((entry) => entry.you);
  const topEntry = board[0];
  const betterFriend = board.find((entry) => !entry.you && yourEntry && entry.score > yourEntry.score);

  if (!groups.length) {
    if (rivalryCard) {
      rivalryCard.innerHTML = `<i class="social-icon vs"></i><div><strong>Social Pulse</strong><p>Invite friends and compare today's score.</p></div><b>VS</b>`;
    }
    if (leaderboardCount) leaderboardCount.textContent = "0 players";
    if (weeklyLeaderboard) weeklyLeaderboard.innerHTML = `<li class="empty-row"><span><b>+</b>Invite friends</span><strong>0</strong></li>`;
    return;
  }

  if (!board.length) {
    if (rivalryCard) {
      rivalryCard.innerHTML = `<i class="social-icon spark"></i><div><strong>Score first</strong><p>Leaderboard unlocks after today's score.</p></div><b>--</b>`;
    }
    if (leaderboardCount) leaderboardCount.textContent = "waiting";
    if (weeklyLeaderboard) weeklyLeaderboard.innerHTML = `<li class="empty-row"><span><b>#</b>No scores yet</span><strong>--</strong></li>`;
    return;
  }

  if (rivalryCard) {
    rivalryCard.innerHTML = !yourEntry && topEntry
      ? `<i class="social-icon hot"></i><div><strong>${memberLabel(topEntry)} scored today</strong><p>${memberDetail(topEntry) || "Give your score to enter the ranking."}</p></div><b>${topEntry.score}</b>`
      : betterFriend
        ? `<i class="social-icon hot"></i><div><strong>${memberLabel(betterFriend)} is ahead</strong><p>${betterFriend.score} vs your ${yourEntry.score} today.</p></div><b>${betterFriend.score}</b>`
        : `<i class="social-icon spark"></i><div><strong>Your score is live</strong><p>${board.length - 1} friend score${board.length === 2 ? "" : "s"} visible.</p></div><b>${yourEntry.score}</b>`;
  }
  if (leaderboardCount) leaderboardCount.textContent = `${board.length} players`;
  if (weeklyLeaderboard) {
    weeklyLeaderboard.innerHTML = board.map((entry, index) => (
      `<li class="${entry.you ? "you" : ""}"><span><b>${index + 1}</b>${memberLabel(entry)}</span><strong>${entry.score ?? "--"}</strong></li>`
    )).join("");
  }
}

function makeInviteLink(group) {
  const code = group.inviteCode || group.id.slice(0, 8);
  return `${window.location.origin}/phone-preview.html?invite=${code}`;
}

async function createGroup() {
  if (!canUsePaidFeatures()) {
    openPaywall("expired");
    return;
  }
  const name = groupNameInput?.value.trim();
  if (!name) {
    alert(t("common.writeGroupName"));
    return;
  }
  const release = lockButton(createGroupButton, t("common.creating"));
  try {
    if (backendEnabled()) {
      const created = await backend.createGroup(name);
      const existing = getGroups();
      if (created && !existing.some((group) => group.id === created.id)) {
        setGroups([{ ...created, members: [] }, ...existing]);
      }
      groupNameInput.value = "";
      renderGroups();
      backend.getGroups().then((groups) => {
        setGroups(groups.map((group) => ({ ...group, members: [] })));
        renderGroups();
        syncBackendState().catch((error) => console.warn(error));
      }).catch((error) => console.warn(error));
      return;
    }
    const groups = getGroups();
    groups.push({ id: crypto.randomUUID(), name, inviteCode: Math.random().toString(36).slice(2, 10), invites: [] });
    setGroups(groups);
    groupNameInput.value = "";
    renderGroups();
  } catch (error) {
    alert(error.message);
  } finally {
    release();
  }
}

async function inviteFriend() {
  const groups = getGroups();
  if (!groups.length) {
    alert(t("common.createGroupFirst"));
    return;
  }
  const link = makeInviteLink(groups[0]);
  if (navigator.share) {
    await navigator.share({ title: "Join my Day Score group", text: "Join my private Day Score group.", url: link });
  } else if (navigator.clipboard) {
    await navigator.clipboard.writeText(link);
    alert(t("common.inviteCopied"));
  } else {
    alert(link);
  }
  showFriendScore(groups[0].inviteCode || groups[0].id.slice(0, 8));
}

createGroupButton?.addEventListener("click", createGroup);
createGroupShortcut?.addEventListener("click", () => groupNameInput?.focus());
inviteFriendButton?.addEventListener("click", inviteFriend);

function getReminderTime() {
  try {
    return JSON.parse(localStorage.getItem(REMINDER_KEY) || "null")?.time || "20:00";
  } catch {
    return "20:00";
  }
}

function setReminderUi(time) {
  if (reminderTimeInput) reminderTimeInput.value = time;
  if (ratingReminderText) ratingReminderText.textContent = `Your reminder time is ${time}.`;
}

function nextReminderDelay(time) {
  const now = new Date();
  const target = new Date();
  const [hours, minutes] = time.split(":").map(Number);
  target.setHours(hours, minutes, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target.getTime() - now.getTime();
}

function scheduleReminder() {
  clearTimeout(reminderTimer);
  const time = getReminderTime();
  reminderTimer = setTimeout(() => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("What's Your Day Score?", {
        body: "Your day is wrapping up. Time to score it.",
        icon: "./assets/logo-perfect.png"
      });
    }
    scheduleReminder();
  }, nextReminderDelay(time));
}

function isNativePlatform() {
  return Boolean(window.Capacitor?.isNativePlatform?.());
}

async function enableNativeReminder(time) {
  const localNotifications = window.Capacitor?.Plugins?.LocalNotifications;
  if (!localNotifications) return false;
  try {
    const permission = await localNotifications.requestPermissions?.();
    if (permission && permission.display !== "granted") {
      if (reminderStatus) reminderStatus.textContent = "Reminder permission was not allowed.";
      return true;
    }
    const [hours, minutes] = time.split(":").map(Number);
    await localNotifications.cancel?.({ notifications: [{ id: 7710 }] }).catch(() => {});
    await localNotifications.schedule({
      notifications: [{
        id: 7710,
        title: "What's Your Day Score?",
        body: "Your day is wrapping up. Time to score it.",
        schedule: { on: { hour: hours, minute: minutes }, allowWhileIdle: true, repeats: true }
      }]
    });
    return true;
  } catch (error) {
    console.warn("LocalNotifications schedule failed", error);
    if (reminderStatus) reminderStatus.textContent = "Could not schedule the reminder. Please try again.";
    return true;
  }
}

async function enableReminder() {
  const time = reminderTimeInput?.value || "20:00";
  if (isNativePlatform()) {
    const handled = await enableNativeReminder(time);
    if (handled) {
      localStorage.setItem(REMINDER_KEY, JSON.stringify({ enabled: true, time, native: true }));
      setReminderUi(time);
      if (reminderStatus) reminderStatus.textContent = `Reminder is on for ${time}.`;
      return;
    }
    localStorage.setItem(REMINDER_KEY, JSON.stringify({ enabled: true, time, pendingNative: true }));
    setReminderUi(time);
    if (reminderStatus) reminderStatus.textContent = `Reminder set for ${time}. Native notifications will activate after the next build.`;
    return;
  }
  if (!("Notification" in window)) {
    localStorage.setItem(REMINDER_KEY, JSON.stringify({ enabled: true, time }));
    setReminderUi(time);
    if (reminderStatus) reminderStatus.textContent = t("common.reminderOn", { time });
    return;
  }
  const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
  if (permission !== "granted") {
    if (reminderStatus) reminderStatus.textContent = t("common.permissionDenied");
    return;
  }
  localStorage.setItem(REMINDER_KEY, JSON.stringify({ enabled: true, time }));
  setReminderUi(time);
  scheduleReminder();
  if (reminderStatus) reminderStatus.textContent = t("common.reminderOn", { time });
}

enableReminderButton?.addEventListener("click", enableReminder);

profilePhotoInput?.addEventListener("change", () => {
  const file = profilePhotoInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    setUser({ photo: String(reader.result) });
    if (backendEnabled()) backend.upsertProfile({ avatar_url: String(reader.result) }).catch(console.warn);
    hydrateUser();
  });
  reader.readAsDataURL(file);
});

const LEGAL_BASE_URL = "https://catduel.github.io/day-score-app";

const legalCopy = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "My Day Point stores your account profile, daily scores, written reasons, groups, invite codes, reminder preference, and optional profile photo.",
      "Scores are private by default. They become visible only to members of groups you create or join, and only after you submit a score for that day.",
      "Authentication and data storage run on Supabase. We do not sell or share data with advertisers, and the app contains no third-party tracking.",
      "You can log out or delete your account from the Profile screen. Deletion removes your scores and owned groups within 30 days.",
      `Read the full policy at ${LEGAL_BASE_URL}/privacy-policy.html`
    ]
  },
  terms: {
    title: "Terms of Use",
    body: [
      "My Day Point is a personal self-evaluation tool, not a medical, therapy, or diagnostic service.",
      "The app offers a 7-day free trial. After the trial, lifetime access can be unlocked as a one-time $2.99 in-app purchase. There is no subscription and no auto-renewal.",
      "Restore Purchases is available from the Profile screen if you previously paid on the same Apple ID.",
      "You are responsible for the notes and scores you share with invited friends or groups, and you agree to use invite links lawfully.",
      `Read the full Terms at ${LEGAL_BASE_URL}/terms-of-use.html`
    ]
  }
};

function openLegal(type) {
  const copy = legalCopy[type];
  if (!copy || !legalModal || !legalTitle || !legalBody) return;
  legalTitle.textContent = copy.title;
  legalBody.innerHTML = copy.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  legalModal.classList.add("open");
  legalModal.setAttribute("aria-hidden", "false");
}

function closeLegal() {
  if (!legalModal) return;
  legalModal.classList.remove("open");
  legalModal.setAttribute("aria-hidden", "true");
}

privacyPolicyButton?.addEventListener("click", () => openLegal("privacy"));
termsButton?.addEventListener("click", () => openLegal("terms"));
closeLegalModal?.addEventListener("click", closeLegal);
legalModal?.addEventListener("click", (event) => {
  if (event.target === legalModal) closeLegal();
});

function clearLocalSession() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("dayScoreSupabaseSession.v1");
  localStorage.removeItem(ACTIVE_USER_KEY);
}

function clearLocalAppData() {
  localStorage.removeItem(SCORES_KEY);
  localStorage.removeItem(GROUPS_KEY);
  if (homeScore) homeScore.textContent = "--";
  if (finalScore) finalScore.textContent = "--";
  if (finalReason) finalReason.textContent = "";
  updateAnalytics();
  renderGroups();
  updateProfile();
}

logoutButton?.addEventListener("click", async () => {
  if (backendEnabled()) {
    try {
      await backend.signOut();
    } catch (error) {
      console.warn(error);
    }
  }
  clearLocalSession();
  clearLocalAppData();
  if (rememberMe) rememberMe.checked = false;
  showScreen("welcome");
});

deleteAccountButton?.addEventListener("click", async () => {
  const first = confirm(t("common.deleteConfirm1"));
  if (!first) return;
  const second = confirm(t("common.deleteConfirm2"));
  if (!second) return;

  const release = lockButton(deleteAccountButton, t("common.deleting"));
  try {
    if (backendEnabled() && backend.deleteAccount) {
      try {
        await backend.deleteAccount();
      } catch (error) {
        const message = String(error?.message || "");
        if (message.toLowerCase().includes("function") && message.toLowerCase().includes("does not exist")) {
          alert("Account deletion is being prepared on the server. Please email is.oztas@hotmail.com so we can complete it for you.");
          return;
        }
        alert(message || "Account deletion failed. Please try again or email is.oztas@hotmail.com.");
        return;
      }
    }
    clearLocalSession();
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(SCORES_KEY);
    localStorage.removeItem(GROUPS_KEY);
    localStorage.removeItem(SUBSCRIPTION_KEY);
    localStorage.removeItem(REMINDER_KEY);
    localStorage.removeItem(PENDING_INVITE_KEY);
    localStorage.removeItem(ACTIVE_USER_KEY);
    hydrateUser();
    updateDateUi();
    renderGroups();
    updateProfile();
    renderSubscription();
    alert(t("common.deleted"));
    showScreen("welcome");
  } finally {
    release();
  }
});

signupButton?.addEventListener("click", async () => {
  const name = getFieldValue("signup", "Full Name") || "there";
  const email = normalizeEmail(getFieldValue("signup", "Email"));
  const password = getFieldValue("signup", "Password");
  if (!email || !password) {
    alert("Email and password are required.");
    return;
  }
  if (backendEnabled()) {
    const release = lockButton(signupButton, t("common.creatingAccount"));
    try {
      const data = await backend.signUp({ name, email, password });
      const identities = data.user?.identities;
      if (Array.isArray(identities) && identities.length === 0) {
        fillAuthEmail("login", email);
        alert("This email already has an account. Please log in.");
        showScreen("login");
        return;
      }
      const session = backend.getSession?.() ? data : await backend.signIn({ email, password });
      setUser({ id: session.user?.id || data.user?.id, name, email });
      localStorage.setItem(SESSION_KEY, "true");
      ensureTrialStarted();
      hydrateUser();
      showScreen("home");
      backend.upsertProfile({ full_name: name, email }).catch((error) => console.warn(error));
      syncBackendState().then(() => consumePendingInvite()).catch((error) => console.warn(error));
    } catch (error) {
      const message = String(error.message || "");
      if (message.toLowerCase().includes("already") || message.toLowerCase().includes("registered")) {
        fillAuthEmail("login", email);
        alert("This email already has an account. Please log in.");
        showScreen("login");
        return;
      }
      alert(error.message);
    } finally {
      release();
    }
    return;
  }
  setUser({ name, email, password });
  ensureTrialStarted();
  hydrateUser();
  showScreen("home");
});

function lockButton(button, busyLabel) {
  if (!button) return () => {};
  const original = button.textContent;
  button.disabled = true;
  button.dataset.busy = "true";
  button.textContent = busyLabel;
  return () => {
    button.disabled = false;
    delete button.dataset.busy;
    button.textContent = original;
  };
}

loginButton?.addEventListener("click", async () => {
  const saved = getUser();
  const email = normalizeEmail(getFieldValue("login", "Email"));
  const password = getFieldValue("login", "Password");
  if (backendEnabled()) {
    if (!email || !password) {
      alert(t("common.emailPasswordRequired"));
      return;
    }
    const release = lockButton(loginButton, t("common.signingIn"));
    try {
      const session = await backend.signIn({ email, password });
      const fullName = session.user?.user_metadata?.full_name || saved?.name || email.split("@")[0];
      setUser({ id: session.user?.id, name: fullName, email });
      localStorage.setItem(SESSION_KEY, rememberMe?.checked ? "true" : "false");
      hydrateUser();
      showScreen("home");
      backend.upsertProfile({ full_name: fullName, email }).catch((error) => console.warn(error));
      syncBackendState().then(() => consumePendingInvite()).catch((error) => console.warn(error));
    } catch (error) {
      alert(error.message);
    } finally {
      release();
    }
    return;
  }
  if (!saved) {
    alert(t("common.createAccountFirst"));
    showScreen("signup");
    return;
  }
  if (email && password && (email !== saved.email || password !== saved.password)) {
    alert(t("common.wrongCreds"));
    return;
  }
  localStorage.setItem(SESSION_KEY, rememberMe?.checked ? "true" : "false");
  hydrateUser();
  showScreen("home");
});

function renderAfterFriends() {
  if (!afterFriendsList) return;
  const friends = getFriendBoard();
  if (!friends.length) {
    afterFriendsList.className = "empty-state";
    afterFriendsList.innerHTML = t("after.noFriendScores");
    return;
  }
  afterFriendsList.className = "after-friends";
  afterFriendsList.innerHTML = friends.slice(0, 5).map((friend) => (
    `<article>
      <span>${memberInitial(friend)}</span>
      <strong>${memberLabel(friend)}</strong>
      <b>${friend.score}/10</b>
    </article>`
  )).join("");
}

async function shareTodayScore() {
  const latest = getDailyScores().at(-1);
  const score = latest?.score ?? selectedScore;
  const reason = latest?.reason || reasonInput?.value?.trim() || "";
  const groups = getGroups();
  const link = groups[0] ? makeInviteLink(groups[0]) : window.location.origin;
  const text = `My Day Score today is ${score}/10${reason ? ` — ${reason}` : ""}.`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "My Day Score", text, url: link });
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${text}\n${link}`);
      alert("Score copied. Paste it anywhere to share.");
      return;
    }
    alert(`${text}\n${link}`);
  } catch (error) {
    if (error?.name !== "AbortError") console.warn(error);
  }
}

function toggleBoost() {
  if (!boostScoreButton) return;
  const next = !boostScoreButton.classList.contains("boosted");
  boostScoreButton.classList.toggle("boosted", next);
  boostScoreButton.setAttribute("aria-pressed", next ? "true" : "false");
  boostScoreButton.textContent = next ? "+1" : "^";
}

shareScoreButton?.addEventListener("click", shareTodayScore);
boostScoreButton?.addEventListener("click", toggleBoost);

function getSubscription() {
  try {
    return JSON.parse(localStorage.getItem(SUBSCRIPTION_KEY) || "null") || {};
  } catch {
    return {};
  }
}

function setSubscription(next) {
  const current = getSubscription();
  localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify({ ...current, ...next }));
}

function ensureTrialStarted() {
  const sub = getSubscription();
  if (!sub.trialStartedAt) setSubscription({ trialStartedAt: new Date().toISOString() });
}

function trialDaysRemaining() {
  const sub = getSubscription();
  if (!sub.trialStartedAt) return TRIAL_DAYS;
  const started = new Date(sub.trialStartedAt).getTime();
  const elapsed = (Date.now() - started) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.ceil(TRIAL_DAYS - elapsed));
}

function renderSubscription() {
  if (!subscriptionCard) return;
  const sub = getSubscription();
  const unlocked = Boolean(sub.lifetime);
  subscriptionCard.classList.toggle("unlocked", unlocked);
  if (unlocked) {
    if (subscriptionTitle) subscriptionTitle.textContent = t("sub.lifetimeUnlocked");
    if (subscriptionCopy) subscriptionCopy.textContent = t("sub.lifetimeBody");
    if (subscriptionStatus) subscriptionStatus.textContent = t("sub.paid");
    if (subscriptionCta) {
      subscriptionCta.disabled = true;
      subscriptionCta.innerHTML = `<b>${t("sub.active")}</b><span>${t("sub.lifetimeUnlocked")}</span>`;
    }
    return;
  }
  const remaining = trialDaysRemaining();
  const trialOver = remaining <= 0;
  if (subscriptionTitle) {
    subscriptionTitle.textContent = trialOver
      ? t("sub.trialEnded")
      : t("sub.trialLeft", { n: remaining, s: (remaining === 1 || currentLocale === "tr") ? "" : "s" });
  }
  if (subscriptionCopy) {
    subscriptionCopy.textContent = trialOver
      ? t("sub.trialOverBody", { price: LIFETIME_PRICE })
      : t("sub.trialBody", { price: LIFETIME_PRICE });
  }
  if (subscriptionStatus) {
    subscriptionStatus.textContent = trialOver ? t("sub.trialExpired") : t("sub.trialActive");
  }
  if (subscriptionCta) {
    subscriptionCta.disabled = false;
    subscriptionCta.innerHTML = `<b>${LIFETIME_PRICE}</b><span>${t("sub.oneTime")}</span>`;
  }
}

function isLifetimeUnlocked() {
  return Boolean(getSubscription().lifetime);
}

function isTrialActive() {
  return trialDaysRemaining() > 0;
}

function canUsePaidFeatures() {
  return isLifetimeUnlocked() || isTrialActive();
}

function openPaywall(reason) {
  if (!paywallModal) return;
  if (paywallTitle) paywallTitle.textContent = t("paywall.title");
  if (paywallCopy) paywallCopy.textContent = t("paywall.body", { price: LIFETIME_PRICE });
  if (paywallBuyButton) paywallBuyButton.textContent = t("paywall.unlock", { price: LIFETIME_PRICE });
  paywallModal.classList.add("open");
  paywallModal.setAttribute("aria-hidden", "false");
}

function closePaywall() {
  if (!paywallModal) return;
  paywallModal.classList.remove("open");
  paywallModal.setAttribute("aria-hidden", "true");
}

function enforcePaywallOnLaunch() {
  if (!getUser()) return;
  if (canUsePaidFeatures()) return;
  openPaywall("expired");
}

let iapReady = false;
let iapProduct = null;

function getCdv() {
  return window.CdvPurchase;
}

function initializeIap() {
  const Cdv = getCdv();
  if (!Cdv) return;
  if (iapReady) return;
  try {
    Cdv.store.verbosity = Cdv.LogLevel.WARNING;
    Cdv.store.register([{
      id: IAP_PRODUCT_ID,
      type: Cdv.ProductType.NON_CONSUMABLE,
      platform: Cdv.Platform.APPLE_APPSTORE
    }]);

    Cdv.store.when()
      .productUpdated((product) => {
        if (product.id === IAP_PRODUCT_ID) iapProduct = product;
      })
      .approved((transaction) => transaction.verify())
      .verified((receipt) => {
        receipt.finish();
        setSubscription({ lifetime: true, purchasedAt: new Date().toISOString() });
        renderSubscription();
        closePaywall();
      });

    Cdv.store.error((err) => {
      console.warn("CdvPurchase error", err);
    });

    Cdv.store.initialize([Cdv.Platform.APPLE_APPSTORE]).then(() => {
      iapReady = true;
      const product = Cdv.store.get(IAP_PRODUCT_ID, Cdv.Platform.APPLE_APPSTORE);
      if (product) iapProduct = product;
    }).catch((err) => console.warn("IAP init failed", err));
  } catch (err) {
    console.warn("IAP setup failed", err);
  }
}

document.addEventListener("deviceready", initializeIap, false);
if (window.cordova || window.CdvPurchase) initializeIap();
setTimeout(initializeIap, 1500);

async function purchaseLifetime() {
  if (isLifetimeUnlocked()) return;
  const Cdv = getCdv();
  const isNative = window.Capacitor?.isNativePlatform?.();

  if (Cdv && isNative) {
    try {
      initializeIap();
      const product = Cdv.store.get(IAP_PRODUCT_ID, Cdv.Platform.APPLE_APPSTORE) || iapProduct;
      if (!product) {
        alert(t("common.loadingStore"));
        return;
      }
      const offer = product.getOffer?.() || product.offers?.[0];
      if (!offer) {
        alert("This product is not available right now.");
        return;
      }
      const result = await Cdv.store.order(offer);
      if (result && result.isError) {
        if (result.code === Cdv.ErrorCode.PAYMENT_CANCELLED) return;
        alert(result.message || "Purchase failed. Please try again.");
      }
      return;
    } catch (error) {
      console.warn("Purchase error", error);
      alert(error?.message || "Purchase failed. Please try again.");
      return;
    }
  }

  if (!isNative) {
    alert("In-app purchases run through StoreKit on the installed iOS app.");
    return;
  }

  alert("The store is still loading. Please try again in a few seconds.");
}

async function restorePurchases() {
  const Cdv = getCdv();
  const isNative = window.Capacitor?.isNativePlatform?.();

  if (Cdv && isNative) {
    try {
      initializeIap();
      await Cdv.store.restorePurchases();
      setTimeout(() => {
        const product = Cdv.store.get(IAP_PRODUCT_ID, Cdv.Platform.APPLE_APPSTORE);
        if (product && product.owned) {
          setSubscription({ lifetime: true, restoredAt: new Date().toISOString() });
          renderSubscription();
          closePaywall();
          alert(t("common.lifetimeRestored"));
        } else {
          alert(t("common.noPurchaseFound"));
        }
      }, 1500);
      return;
    } catch (error) {
      console.warn("Restore error", error);
      alert(error?.message || "Restore failed. Please try again.");
      return;
    }
  }

  if (!isNative) {
    alert("Restore Purchases runs through StoreKit on the installed iOS app.");
    return;
  }

  alert("The store is still loading. Please try again in a few seconds.");
}

subscriptionCta?.addEventListener("click", () => purchaseLifetime());
restorePurchasesButton?.addEventListener("click", restorePurchases);
paywallBuyButton?.addEventListener("click", () => purchaseLifetime());
paywallRestoreButton?.addEventListener("click", restorePurchases);
paywallDismissButton?.addEventListener("click", () => closePaywall());

captureInviteFromUrl();
const remembered = localStorage.getItem(SESSION_KEY) === "true" && Boolean(getUser());
if (rememberMe) rememberMe.checked = remembered;
const initialScreen = window.location.hash.replace("#", "") || (remembered ? "home" : (window.matchMedia("(max-width: 640px)").matches ? "welcome" : "intro"));
const previewScore = new URLSearchParams(window.location.search).get("score");
if (previewScore !== null && !Number.isNaN(Number(previewScore))) selectScore(previewScore);
applyI18n();
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.classList.toggle("active", btn.dataset.lang === currentLocale);
  btn.addEventListener("click", () => {
    setLocale(btn.dataset.lang);
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === currentLocale));
  });
});
setReminderUi(getReminderTime());
if (getUser()) ensureTrialStarted();
enforcePaywallOnLaunch();
showScreen(initialScreen);
updateScoreDial(selectedScore);
hydrateUser();
updateDateUi();
renderGroups();
renderHomeFriends();
updateProfile();
renderSubscription();
syncBackendState();
setInterval(updateDateUi, 60 * 1000);
const savedReminder = (() => {
  try { return JSON.parse(localStorage.getItem(REMINDER_KEY) || "null"); } catch { return null; }
})();
if (savedReminder?.enabled && "Notification" in window && Notification.permission === "granted") {
  scheduleReminder();
  if (reminderStatus) reminderStatus.textContent = `Reminder is on for ${savedReminder.time}.`;
}
