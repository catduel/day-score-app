-- Account deletion RPC for App Store Guideline 5.1.1(v)
-- Run this once in Supabase SQL Editor.

drop function if exists public.delete_my_account();

create function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  current_uid uuid;
begin
  current_uid := auth.uid();
  if current_uid is null then
    raise exception 'Not authenticated';
  end if;

  -- All public.* tables reference auth.users(id) with ON DELETE CASCADE,
  -- so deleting the auth row removes profiles, daily_scores, groups,
  -- group_members, and friend_invites in one shot.
  delete from auth.users where id = current_uid;
end;
$$;

grant execute on function public.delete_my_account() to authenticated;

-- Explicitly allow the function to delete from auth.users via SECURITY DEFINER.
-- The function owner needs DELETE privilege on auth.users.
-- (In Supabase, functions in `public` schema are owned by `postgres` which already has this.)
