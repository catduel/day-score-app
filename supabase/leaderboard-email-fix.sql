drop function if exists public.get_group_leaderboard(uuid, date);

create function public.get_group_leaderboard(group_id_input uuid, score_date_input date)
returns table (
  user_id uuid,
  full_name text,
  email text,
  score integer,
  reason text,
  score_date date,
  is_you boolean
)
language sql
security definer
set search_path = public
as $$
  select
    gm.user_id,
    coalesce(nullif(p.full_name, ''), split_part(coalesce(p.email, ''), '@', 1), 'Friend') as full_name,
    coalesce(p.email, '') as email,
    ds.score,
    ds.reason,
    ds.score_date,
    gm.user_id = auth.uid() as is_you
  from public.group_members gm
  left join public.profiles p on p.id = gm.user_id
  left join public.daily_scores ds
    on ds.user_id = gm.user_id
   and ds.score_date = score_date_input
  where gm.group_id = group_id_input
    and exists (
      select 1
      from public.group_members current_member
      where current_member.group_id = gm.group_id
        and current_member.user_id = auth.uid()
    )
    and ds.score is not null
  order by ds.score desc, ds.created_at asc;
$$;
