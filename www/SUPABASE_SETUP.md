# Supabase Setup

Project dashboard:
https://supabase.com/dashboard/org/djcdfnxdgsevvbmecgzd

## 1. Create the database tables

Open your Supabase project, go to SQL Editor, paste and run:

`supabase/schema.sql`

This creates:
- `profiles`
- `daily_scores`
- `groups`
- `group_members`
- `friend_invites`
- RLS policies
- automatic profile creation after sign up

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

