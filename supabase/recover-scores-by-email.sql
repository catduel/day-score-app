drop function if exists public.recover_my_scores_by_email();

create function public.recover_my_scores_by_email()
returns table (
  id uuid,
  user_id uuid,
  score integer,
  reason text,
  score_date date,
  created_at timestamptz
)
language sql
security definer
set search_path = public, auth
as $$
  with current_account as (
    select lower(coalesce(p.email, u.email)) as email
    from auth.users u
    left join public.profiles p on p.id = u.id
    where u.id = auth.uid()
  )
  select
    ds.id,
    ds.user_id,
    ds.score,
    ds.reason,
    ds.score_date,
    ds.created_at
  from public.daily_scores ds
  join public.profiles score_profile on score_profile.id = ds.user_id
  join current_account ca on lower(score_profile.email) = ca.email
  order by ds.score_date asc;
$$;

grant execute on function public.recover_my_scores_by_email() to authenticated;
