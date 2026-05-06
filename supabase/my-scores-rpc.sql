drop function if exists public.get_my_scores();

create function public.get_my_scores()
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
set search_path = public
as $$
  select
    ds.id,
    ds.user_id,
    ds.score,
    ds.reason,
    ds.score_date,
    ds.created_at
  from public.daily_scores ds
  where ds.user_id = auth.uid()
  order by ds.score_date asc;
$$;

grant execute on function public.get_my_scores() to authenticated;
