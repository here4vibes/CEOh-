-- CE Oh! worldview telemetry schema
-- Run this in your Supabase project's SQL Editor (supabase.com → project → SQL Editor)

-- Stores one row per completed game run.
create table if not exists game_runs (
  id              uuid        primary key default gen_random_uuid(),
  background_id   text        not null,
  choices         jsonb       not null default '[]',
  climb_score     integer     not null default 0,
  steward_score   integer     not null default 0,
  lit_count       integer     not null default 0,
  election_won    boolean     not null default false,
  ceo_fired       boolean     not null default false,
  politician_fired boolean    not null default false,
  created_at      timestamptz not null default now()
);

-- No PII is stored. Anonymous inserts are allowed; individual rows are never exposed.
alter table game_runs enable row level security;

create policy "allow anon insert"
  on game_runs for insert to anon
  with check (true);

-- Aggregate view — only this is readable by the public.
create or replace view background_stats as
select
  background_id,
  count(*)                                                         as total_runs,
  round(avg(climb_score))                                          as avg_climb,
  round(avg(steward_score))                                        as avg_steward,
  round(avg(lit_count))                                            as avg_lit,
  round(avg(case when election_won    then 1.0 else 0.0 end) * 100) as election_win_pct,
  round(avg(case when ceo_fired       then 1.0 else 0.0 end) * 100) as ceo_fire_pct
from game_runs
group by background_id;

-- Grant read on the aggregate view to anonymous users.
grant select on background_stats to anon;
