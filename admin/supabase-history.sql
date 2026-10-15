-- Ochane Admin v2 : historique des modifications. À exécuter une fois dans Supabase > SQL Editor.
create table if not exists public.place_history (
  id bigint generated always as identity primary key,
  key text not null,
  data jsonb not null,
  saved_at timestamptz not null default now()
);
create index if not exists place_history_key_idx on public.place_history (key, saved_at desc);
alter table public.place_history enable row level security;
drop policy if exists "historique lecture admin" on public.place_history;
create policy "historique lecture admin" on public.place_history for select to authenticated using (true);
drop policy if exists "historique ajout admin" on public.place_history;
create policy "historique ajout admin" on public.place_history for insert to authenticated with check (true);
