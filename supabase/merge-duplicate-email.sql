-- Replace the email below, then run once in Supabase SQL Editor.
-- It keeps the newest scoring user as the main account and moves old rows to it.

do $$
declare
  target_email text := 'n@hotmail.com';
  keeper_id uuid;
begin
  select ds.user_id
  into keeper_id
  from public.daily_scores ds
  join public.profiles p on p.id = ds.user_id
  where lower(p.email) = lower(target_email)
  order by ds.created_at desc
  limit 1;

  if keeper_id is null then
    select p.id
    into keeper_id
    from public.profiles p
    where lower(p.email) = lower(target_email)
    order by p.updated_at desc nulls last, p.created_at desc
    limit 1;
  end if;

  if keeper_id is null then
    raise exception 'No profile found for %', target_email;
  end if;

  insert into public.daily_scores (user_id, score, reason, score_date, created_at)
  select keeper_id, ds.score, ds.reason, ds.score_date, ds.created_at
  from public.daily_scores ds
  join public.profiles p on p.id = ds.user_id
  where lower(p.email) = lower(target_email)
    and ds.user_id <> keeper_id
  on conflict (user_id, score_date) do update
  set score = excluded.score,
      reason = excluded.reason,
      created_at = excluded.created_at;

  delete from public.daily_scores ds
  using public.profiles p
  where p.id = ds.user_id
    and lower(p.email) = lower(target_email)
    and ds.user_id <> keeper_id;

  update public.groups g
  set owner_id = keeper_id
  from public.profiles p
  where g.owner_id = p.id
    and lower(p.email) = lower(target_email)
    and g.owner_id <> keeper_id;

  insert into public.group_members (group_id, user_id, role, joined_at)
  select gm.group_id, keeper_id, gm.role, gm.joined_at
  from public.group_members gm
  join public.profiles p on p.id = gm.user_id
  where lower(p.email) = lower(target_email)
    and gm.user_id <> keeper_id
  on conflict (group_id, user_id) do update
  set role = case
    when public.group_members.role = 'owner' or excluded.role = 'owner' then 'owner'
    else public.group_members.role
  end;

  delete from public.group_members gm
  using public.profiles p
  where p.id = gm.user_id
    and lower(p.email) = lower(target_email)
    and gm.user_id <> keeper_id;

  update public.friend_invites fi
  set invited_by = keeper_id
  from public.profiles p
  where fi.invited_by = p.id
    and lower(p.email) = lower(target_email)
    and fi.invited_by <> keeper_id;

  update public.profiles p
  set email = concat('merged+', left(p.id::text, 8), '+', p.email),
      full_name = concat(coalesce(nullif(p.full_name, ''), split_part(target_email, '@', 1)), ' (merged)'),
      updated_at = now()
  where lower(p.email) = lower(target_email)
    and p.id <> keeper_id;

  update public.profiles
  set email = lower(target_email),
      updated_at = now()
  where id = keeper_id;

  raise notice 'Merged duplicate profiles for %, keeper user_id: %', target_email, keeper_id;
end $$;
