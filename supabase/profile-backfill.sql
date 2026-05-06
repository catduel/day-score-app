insert into public.profiles (id, full_name, email)
select
  u.id,
  coalesce(nullif(u.raw_user_meta_data->>'full_name', ''), split_part(coalesce(u.email, ''), '@', 1), ''),
  coalesce(u.email, '')
from auth.users u
where not exists (
  select 1
  from public.profiles p
  where p.id = u.id
);

update public.profiles p
set
  email = coalesce(nullif(p.email, ''), u.email, ''),
  full_name = coalesce(nullif(p.full_name, ''), nullif(u.raw_user_meta_data->>'full_name', ''), split_part(coalesce(u.email, ''), '@', 1), ''),
  updated_at = now()
from auth.users u
where p.id = u.id
  and (p.email = '' or p.full_name = '');
