-- Ochane : fiches détaillées + photos. À exécuter une fois dans Supabase > SQL Editor.
create table if not exists public.place_details (
  key text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.place_details enable row level security;

drop policy if exists "lecture publique" on public.place_details;
create policy "lecture publique" on public.place_details for select using (true);
drop policy if exists "ecriture admin" on public.place_details;
create policy "ecriture admin" on public.place_details for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public) values ('place-photos', 'place-photos', true) on conflict (id) do nothing;
drop policy if exists "photos lecture" on storage.objects;
create policy "photos lecture" on storage.objects for select using (bucket_id = 'place-photos');
drop policy if exists "photos ajout admin" on storage.objects;
create policy "photos ajout admin" on storage.objects for insert to authenticated with check (bucket_id = 'place-photos');
drop policy if exists "photos maj admin" on storage.objects;
create policy "photos maj admin" on storage.objects for update to authenticated using (bucket_id = 'place-photos');
