-- Groups RPC functions
-- Run this once in Supabase SQL Editor.

drop function if exists public.get_my_groups();

create function public.get_my_groups()
returns table (
  id uuid,
  name text,
  invite_code text,
  owner_id uuid,
  created_at timestamptz,
  member_count bigint
)
language sql
security definer
set search_path = public
as $$
  select
    g.id,
    g.name,
    g.invite_code,
    g.owner_id,
    g.created_at,
    (select count(*) from public.group_members gm2 where gm2.group_id = g.id) as member_count
  from public.groups g
  where g.owner_id = auth.uid()
     or exists (
       select 1 from public.group_members gm
       where gm.group_id = g.id and gm.user_id = auth.uid()
     )
  order by g.created_at desc;
$$;

grant execute on function public.get_my_groups() to authenticated;

drop function if exists public.join_group_by_invite(text);

create function public.join_group_by_invite(invite_code_input text)
returns table (
  id uuid,
  name text,
  invite_code text,
  already_member boolean
)
language plpgsql
security definer
set search_path = public
as $$
declare
  target_group public.groups%rowtype;
  was_member boolean := false;
begin
  if auth.uid() is null then
    raise exception 'Log in first.';
  end if;

  select * into target_group
  from public.groups g
  where g.invite_code = invite_code_input
  limit 1;

  if not found then
    raise exception 'Invalid invite code.';
  end if;

  select exists (
    select 1 from public.group_members gm
    where gm.group_id = target_group.id and gm.user_id = auth.uid()
  ) into was_member;

  if not was_member then
    insert into public.group_members (group_id, user_id, role)
    values (target_group.id, auth.uid(), 'member')
    on conflict (group_id, user_id) do nothing;
  end if;

  return query select target_group.id, target_group.name, target_group.invite_code, was_member;
end;
$$;

grant execute on function public.join_group_by_invite(text) to authenticated;

-- When the owner creates a group, automatically add them as a member.
create or replace function public.handle_new_group()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.group_members (group_id, user_id, role)
  values (new.id, new.owner_id, 'owner')
  on conflict (group_id, user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_group_created on public.groups;
create trigger on_group_created
after insert on public.groups
for each row execute function public.handle_new_group();
