-- Ochane : fiches détaillées + photos. À exécuter une fois dans Supabase > SQL Editor.
-- Sécurité : seuls les comptes inscrits dans admin_users peuvent modifier les données.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;

-- Au premier lancement, le compte unique du projet devient administrateur automatiquement.
-- S'il existe plusieurs comptes, ajoute volontairement le bon avec :
-- insert into public.admin_users (user_id) select id from auth.users where email = 'adresse-admin@example.com';
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

create table if not exists public.place_details (
  key text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.place_details enable row level security;

drop policy if exists "lecture publique" on public.place_details;
create policy "lecture publique" on public.place_details for select using (true);
drop policy if exists "ecriture admin" on public.place_details;
create policy "ecriture admin" on public.place_details for all to authenticated
using (public.is_ochane_admin()) with check (public.is_ochane_admin());

insert into storage.buckets (id, name, public) values ('place-photos', 'place-photos', true) on conflict (id) do nothing;
drop policy if exists "photos lecture" on storage.objects;
create policy "photos lecture" on storage.objects for select using (bucket_id = 'place-photos');
drop policy if exists "photos ajout admin" on storage.objects;
create policy "photos ajout admin" on storage.objects for insert to authenticated
with check (bucket_id = 'place-photos' and public.is_ochane_admin());
drop policy if exists "photos maj admin" on storage.objects;
create policy "photos maj admin" on storage.objects for update to authenticated
using (bucket_id = 'place-photos' and public.is_ochane_admin())
with check (bucket_id = 'place-photos' and public.is_ochane_admin());
drop policy if exists "photos suppression admin" on storage.objects;
create policy "photos suppression admin" on storage.objects for delete to authenticated
using (bucket_id = 'place-photos' and public.is_ochane_admin());
