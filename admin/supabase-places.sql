-- Ochane : ajout / modification / masquage de lieux depuis l'admin. À exécuter une fois dans Supabase > SQL Editor.
-- Les 395 lieux d'origine restent dans index.html (base inchangée) ; cette table ne contient que les différences.
-- Ce bloc de sécurité est volontairement autonome pour que ce fichier puisse être exécuté seul.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
do $$
begin
  if (select count(*) from auth.users) = 1 then
    insert into public.admin_users (user_id) select id from auth.users on conflict do nothing;
  end if;
end $$;
create or replace function public.is_ochane_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;
revoke all on function public.is_ochane_admin() from public;
grant execute on function public.is_ochane_admin() to authenticated;

create table if not exists public.place_overrides (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.place_overrides enable row level security;
drop policy if exists "lieux lecture publique" on public.place_overrides;
create policy "lieux lecture publique" on public.place_overrides for select using (true);
drop policy if exists "lieux ecriture admin" on public.place_overrides;
create policy "lieux ecriture admin" on public.place_overrides for all to authenticated
using (public.is_ochane_admin()) with check (public.is_ochane_admin());
