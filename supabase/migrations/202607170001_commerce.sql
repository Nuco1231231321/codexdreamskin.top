create extension if not exists pgcrypto;

create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  creem_event_id text not null unique,
  event_type text not null,
  creem_order_id text,
  payload jsonb not null,
  received_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  creem_checkout_id text not null unique,
  creem_order_id text not null unique,
  creem_customer_id text,
  creem_product_id text not null,
  request_id text,
  product_slug text not null check (
    product_slug in ('skin-quick-setup', 'custom-skin-early-access')
  ),
  customer_email text not null,
  customer_name text,
  amount integer not null check (amount >= 0),
  currency text not null check (char_length(currency) = 3),
  payment_status text not null check (
    payment_status in ('paid', 'refunded', 'disputed')
  ),
  mode text not null check (mode in ('test', 'prod', 'sandbox')),
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.skin_briefs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.orders(id) on delete restrict,
  product_slug text not null check (
    product_slug in ('skin-quick-setup', 'custom-skin-early-access')
  ),
  platform text not null check (platform in ('macos', 'windows')),
  visual_direction text not null check (
    visual_direction in ('soft', 'dark', 'bright', 'minimal', 'surprise-me')
  ),
  accent_color text,
  image_path text,
  notes text,
  rights_confirmed boolean not null default false,
  brief_status text not null default 'received' check (
    brief_status in ('received', 'in_progress', 'delivered', 'canceled')
  ),
  delivery_path text,
  submitted_at timestamptz not null default now(),
  delivered_at timestamptz
);

create table if not exists public.pets (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  author text not null,
  format text not null check (format in ('V1', 'V2')),
  tags text[] not null default '{}',
  image_path text not null,
  source_url text not null,
  status text not null default 'published' check (
    status in ('draft', 'published', 'archived')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pet_submissions (
  id uuid primary key default gen_random_uuid(),
  submitter_email text not null,
  pet_name text not null,
  creator_name text not null,
  source_url text,
  package_path text,
  notes text,
  rights_confirmed boolean not null default false,
  review_status text not null default 'pending' check (
    review_status in ('pending', 'approved', 'rejected')
  ),
  submitted_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  topic text not null check (
    topic in ('order', 'installation', 'rights', 'privacy', 'other')
  ),
  message text not null,
  message_status text not null default 'new' check (
    message_status in ('new', 'read', 'resolved', 'spam')
  ),
  created_at timestamptz not null default now()
);

alter table public.payment_events enable row level security;
alter table public.orders enable row level security;
alter table public.skin_briefs enable row level security;
alter table public.pets enable row level security;
alter table public.pet_submissions enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "Published pets are publicly readable" on public.pets;
create policy "Published pets are publicly readable"
on public.pets
for select
to anon, authenticated
using (status = 'published');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  (
    'pet-public',
    'pet-public',
    true,
    10485760,
    array['image/png', 'image/jpeg', 'image/webp', 'application/zip']
  ),
  (
    'pet-submissions',
    'pet-submissions',
    false,
    15728640,
    array['image/png', 'image/jpeg', 'image/webp', 'application/zip']
  ),
  (
    'custom-orders',
    'custom-orders',
    false,
    15728640,
    array['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif']
  )
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public pet files are readable" on storage.objects;
create policy "Public pet files are readable"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'pet-public');

create index if not exists orders_product_status_idx
on public.orders (product_slug, payment_status, created_at desc);

create index if not exists skin_briefs_status_idx
on public.skin_briefs (brief_status, submitted_at);

create index if not exists pets_status_idx
on public.pets (status, created_at desc);

create index if not exists pet_submissions_status_idx
on public.pet_submissions (review_status, submitted_at);

