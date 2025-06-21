-- Create the email_subscribers table
create extension if not exists "uuid-ossp";

create table public.email_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email varchar unique not null,
  created_at timestamptz default now(),
  confirmed boolean default false
);

-- Enable Row Level Security (optional but recommended)
alter table public.email_subscribers enable row level security;

-- Allow anonymous inserts (for the signup form)
create policy "Allow anonymous inserts" on public.email_subscribers
  for insert with check (true);

-- Allow service role to read all (for admin purposes)
create policy "Allow service role full access" on public.email_subscribers
  for all using (auth.role() = 'service_role');
