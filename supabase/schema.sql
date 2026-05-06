-- What Your Day Score - Supabase schema
-- Run this once in Supabase SQL Editor for your project.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null default '',
  avatar_url text,
  reminder_time time not null default '20:00',
  trial_started_at timestamptz not null default now(),
  lifetime_unlocked boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.daily_scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  score integer not null check (score between 0 and 10),
  reason text not null default '',
  score_date date not null,
  created_at timestamptz not null default now(),
  unique (user_id, score_date)
);

create table if not exists public.groups (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  invite_code text not null unique default encode(gen_random_bytes(6), 'hex'),
  created_at timestamptz not null default now()
);

create table if not exists public.group_members (
  group_id uuid not null references public.groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'member')),
  joined_at timestamptz not null default now(),
  primary key (group_id, user_id)
);

create table if not exists public.friend_invites (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  invited_by uuid not null references auth.users(id) on delete cascade,
  invite_code text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.daily_scores enable row level security;
alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.friend_invites enable row level security;

drop policy if exists "profiles_select_self" on public.profiles;
create policy "profiles_select_self" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_insert_self" on public.profiles;
create policy "profiles_insert_self" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_self" on public.profiles;
create policy "profiles_update_self" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "scores_select_visible" on public.daily_scores;
create policy "scores_select_visible" on public.daily_scores
  for select using (
    auth.uid() = user_id
    or exists (
      select 1
      from public.group_members gm_self
      join public.group_members gm_other on gm_other.group_id = gm_self.group_id
      where gm_self.user_id = auth.uid()
        and gm_other.user_id = daily_scores.user_id
    )
  );

drop policy if exists "scores_insert_self" on public.daily_scores;
create policy "scores_insert_self" on public.daily_scores
  for insert with check (auth.uid() = user_id);

drop policy if exists "scores_update_self" on public.daily_scores;
create policy "scores_update_self" on public.daily_scores
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "groups_select_member" on public.groups;
create policy "groups_select_member" on public.groups
  for select using (
    owner_id = auth.uid()
    or exists (
      select 1 from public.group_members gm
      where gm.group_id = groups.id and gm.user_id = auth.uid()
    )
  );

drop policy if exists "groups_insert_owner" on public.groups;
create policy "groups_insert_owner" on public.groups
  for insert with check (owner_id = auth.uid());

drop policy if exists "groups_update_owner" on public.groups;
create policy "groups_update_owner" on public.groups
  for update using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "members_select_group_member" on public.group_members;
create policy "members_select_group_member" on public.group_members
  for select using (
    user_id = auth.uid()
    or exists (
      select 1 from public.group_members gm
      where gm.group_id = group_members.group_id and gm.user_id = auth.uid()
    )
  );

drop policy if exists "members_insert_self_or_owner" on public.group_members;
create policy "members_insert_self_or_owner" on public.group_members
  for insert with check (
    user_id = auth.uid()
    or exists (
      select 1 from public.groups g
      where g.id = group_members.group_id and g.owner_id = auth.uid()
    )
  );

drop policy if exists "invites_select_group_member" on public.friend_invites;
create policy "invites_select_group_member" on public.friend_invites
  for select using (
    invited_by = auth.uid()
    or exists (
      select 1 from public.group_members gm
      where gm.group_id = friend_invites.group_id and gm.user_id = auth.uid()
    )
  );

drop policy if exists "invites_insert_member" on public.friend_invites;
create policy "invites_insert_member" on public.friend_invites
  for insert with check (
    invited_by = auth.uid()
    and exists (
      select 1 from public.group_members gm
      where gm.group_id = friend_invites.group_id and gm.user_id = auth.uid()
    )
  );

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.email, '')
  )
  on conflict (id) do update
  set email = excluded.email,
      full_name = coalesce(nullif(excluded.full_name, ''), profiles.full_name),
      updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

