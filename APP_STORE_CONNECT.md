# App Store Connect — Submission Pack

This document is the copy/paste pack for filling out App Store Connect for **My Day Point** (bundle id `com.ismoztas.dayscore`).

---

## 1. App Information

| Field | Value |
|---|---|
| Name | `My Day Point` |
| Subtitle (30 chars) | `Score your day, see trends` |
| Bundle ID | `com.ismoztas.dayscore` |
| SKU | `mydaypoint-ios-001` |
| Primary Language | English (U.S.) |
| Primary Category | **Lifestyle** |
| Secondary Category (optional) | Health & Fitness |
| Content Rights | I do not have any third-party rights / I own all content. |
| Age Rating | **4+** (no objectionable content) |

---

## 2. URLs

> Public after you turn on GitHub Pages (see `docs/README.md`).

| Field | URL |
|---|---|
| Privacy Policy URL (required) | `https://catduel.github.io/day-score-app/privacy-policy.html` |
| Marketing URL | `https://catduel.github.io/day-score-app/` |
| Support URL (required) | `https://catduel.github.io/day-score-app/support.html` |
| EULA | Standard Apple EULA + custom Terms at `https://catduel.github.io/day-score-app/terms-of-use.html` |

---

## 3. Pricing

- Price tier: **Free** (the app itself)
- The lifetime unlock is sold as an **in-app purchase**, not as the app price.

---

## 4. In-App Purchase

Create one IAP in App Store Connect → My Day Point → In-App Purchases.

| Field | Value |
|---|---|
| Type | **Non-Consumable** |
| Reference Name | `Lifetime Access` |
| Product ID | `com.ismoztas.dayscore.lifetime` |
| Price Tier | Tier 3 ($2.99 USD) |
| Display Name (Localization) | `Lifetime Access` |
| Description | `Unlock all features of My Day Point forever. One-time payment, no subscription.` |
| Review Screenshot | A screenshot of the paywall modal |
| Review Notes | `Trigger the IAP from Profile → Subscription card → tap $2.99 button. Or wait for the 7-day trial to expire and the paywall modal will appear.` |

---

## 5. Promotional Text (170 chars, can update without re-review)

```
Score your day from 0 to 10, write one short reason, and watch your weekly average grow. Private by default. One-time $2.99 — no subscription.
```

---

## 6. Description (4000 chars max)

```
My Day Point is the simplest way to track how good your days actually are.

At the end of every day, give your day a score from 0 to 10 and write one short reason in 180 characters. Over time, you'll see real patterns instead of guessing.

WHY IT'S DIFFERENT
• Not a mood tracker. A score-based self-evaluation.
• Not a journal. One number, one sentence, takes 15 seconds.
• Not a subscription. 7 days free, then a one-time $2.99 unlock for lifetime access.

WEEKLY & LIFETIME ANALYTICS
• Weekly average and trend chart.
• Highest and lowest day of the week.
• All-time average across every day you have ever scored.
• Streak counter to keep the chain alive.
• Score archive with tap-to-view notes.

PRIVATE FRIEND GROUPS
• Create a private group, share an invite link.
• See your friends' scores for today only — never historical.
• Compare today's score with a mini leaderboard.
• Group is invite-only, never public.

ON-DEVICE REMINDER
• Pick the time your day usually ends.
• Get a local notification when it's time to score.
• Reminder runs on your device only.

PRIVACY YOU CONTROL
• Scores are private by default.
• Shared scores are visible only inside groups you create or join.
• No ads, no tracking SDKs, no data sold.
• Delete your account anytime from the Profile screen.

ONE-TIME PAYMENT
• 7 days free trial, no credit card needed.
• After the trial, unlock lifetime access for $2.99.
• That's it. No auto-renewal, no surprise charge, no hidden tier.

Have feedback? Email is.oztas@hotmail.com.
```

---

## 7. Keywords (100 chars total, comma-separated)

```
day score,daily,journal,mood,habit,reflection,streak,gratitude,wellness,life,tracker,1-10,weekly
```

---

## 8. What's New (release notes — first version)

```
Welcome to My Day Point.
• Score your day 0–10 with a short reason.
• Weekly chart, all-time average, streaks.
• Private friend groups with invite links.
• 7 days free, then $2.99 lifetime unlock.
```

---

## 9. App Review Information

| Field | Value |
|---|---|
| Sign-in required | **Yes** |
| Demo account email | (create a Supabase test user, e.g. `apple-review@yourdomain.com`) |
| Demo account password | (a strong password you only use for review) |
| Contact First Name | Ismail |
| Contact Last Name | Oztas |
| Contact Phone | (your phone) |
| Contact Email | is.oztas@hotmail.com |
| Notes for the Reviewer | See below |

### Notes for the Reviewer

```
Thank you for reviewing My Day Point.

DEMO ACCOUNT
Email:    apple-review@<your-domain>
Password: <your-test-password>

WHAT TO TEST
1. Sign in with the demo account.
2. The Home screen shows a circular orb. Tap it to score today's day from 0–10, write a short reason, tap Save.
3. The "Today's Score" + "Friends' Scores Today" appear on the After screen.
4. Open Analytics tab to see the weekly chart, highs, lows, all-time average, and the score calendar.
5. Open Groups tab to create a group, share an invite link.
6. Open Profile → Subscription card. Tap "$2.99" to test the in-app purchase. The IAP product ID is com.ismoztas.dayscore.lifetime (Non-Consumable). "Restore Purchases" is also available there.

PAYWALL
The 7-day free trial begins on first sign-in. After 7 days, score saving and group creation are blocked behind the paywall modal that requires either a successful $2.99 purchase or "Restore Purchases" if the Apple ID has previously bought it. Reviewers can use the IAP sandbox.

PRIVACY
The app uses Supabase Auth for sign-in. Daily scores and group membership are stored in Supabase. No third-party advertising or analytics SDKs are present. Local notifications are optional and used only for the daily score reminder.

CONTACT
For anything unclear, please write to is.oztas@hotmail.com.
```

---

## 10. App Privacy (Data Privacy form)

When App Store Connect asks you to declare privacy practices, answer:

| Question | Answer |
|---|---|
| Does your app collect data? | **Yes** |
| Do you or your third-party partners use this data for tracking? | **No** |
| Are these data types collected? | Email Address, Name, User Content (notes/score), User ID |
| Linked to user? | **Yes** (account-bound) |
| Used for tracking? | **No** |
| Used for: | App Functionality, Account Management |

---

## 11. Encryption / Export Compliance

Already automated in `codemagic.yaml`:
- `ITSAppUsesNonExemptEncryption = false`

This skips the manual "Export Compliance" prompt for every TestFlight build.

---

## 12. Auto-renewal & subscription disclosure

Apple requires this exact wording near the paywall (already in the in-app paywall modal copy). When you submit, it's also useful to confirm in App Review notes:

> "The lifetime unlock is a one-time non-consumable in-app purchase. The app contains no subscription, no auto-renewal, and no automatic billing."

---

## 13. Required Screenshots (6.7" iPhone — iPhone 15 Pro Max)

You need at least 3 (Apple recommends 5):

1. **Home / score orb** — captures the daily prompt
2. **Rating wheel + Save button** — score selection
3. **After / Today's Score + Friends list** — the social moment
4. **Analytics with chart + calendar** — the value proposition (trends)
5. **Profile with subscription card** — pricing transparency

Use the actual TestFlight build with the `apple-review@…` account so the screenshots show real data (e.g. a few scored days for the chart).

Resolution: 1290 × 2796 px (6.7"). Apple will auto-scale for smaller devices.
