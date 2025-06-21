# Email Capture, Storage (Supabase), and Delivery (Resend) – Implementation Plan

## Phase 1 – Architectural Decisions

1. **Choose stack**
   - **Front-end:** keep existing framework (e.g. Next.js / React) and add a simple "Join" component.  
   - **Back-end:** a lightweight API route (Next.js API, Express, or serverless function) to handle `POST` requests.  
   - **Database:** Supabase (PostgreSQL + Row-level Security + built-in auth if desired).  
   - **Email service:** Resend (SMTP-style HTTP API).
2. **Secure credentials**
   - ENV variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (or `anon` if RLS allows inserts), `RESEND_API_KEY`, `RESEND_FROM_EMAIL`.  
   - Store in `.env.local` (never commit) and add to cloud-host secrets.

## Phase 2 – Supabase Setup

1. **Create project** → obtain `supabaseUrl` and `supabaseServiceRoleKey`.
2. **Create table `email_subscribers`**
   | Column       | Type          | Notes                                   |
   |--------------|---------------|-----------------------------------------|
   | `id`         | UUID (PK)     | default `uuid_generate_v4()`            |
   | `email`      | varchar       | `UNIQUE NOT NULL`                       |
   | `created_at` | timestamptz   | default `now()`                         |
   | `confirmed`  | boolean       | default `false` (for double-opt-in)     |
3. **Row-level Security**
   - Enable RLS.  
   - Policy for inserts: allow anonymous inserts on `email` (future: move logic to service-role key in server).

## Phase 3 – Resend Setup

1. Sign up → verify domain (or use Resend's shared domain for dev).
2. Generate `RESEND_API_KEY`.
3. Configure "From" address matching verified domain.

## Phase 4 – Code Implementation (high-level)

### Front-end

1. Reusable component `EmailSignupForm` with:
   - Email input (+ basic HTML5 validation).
   - Submit button, loading & success / error states.
   - Optional checkbox for privacy / marketing consent.

### Back-end

1. `POST /api/subscribe`
   1. Validate email server-side.
   2. Insert into `email_subscribers` via Supabase JS client using service-role key.
   3. If insert succeeds:
      - **Option A:** Send welcome email immediately with Resend.
      - **Option B:** Send verification email containing confirmation link (double-opt-in).
   4. Return JSON `{ success: true }` or appropriate error.

### Email Content (Resend templates or inline HTML)

- Welcome / verification template with brand styling.
- Unsubscribe footer with link pointing to `/unsubscribe?id=<uuid>` that flips `confirmed` to false or deletes row.

## Phase 5 – Deployment & CI/CD

1. Add environment variables to Vercel, Netlify, or Render.
2. Protect staging vs production keys.
3. Set up automated migrations (Supabase CLI or SQL files in repo).

## Phase 6 – Analytics & Administration

1. Supabase dashboard → quick view of subscriber count.
2. Optional CRON (Supabase Edge Function or external job) to export new emails daily to marketing CRM.
3. Build simple admin page (auth-protected) listing subscribers with pagination & CSV export.

## Phase 7 – Compliance & Best Practices

1. Privacy Policy update: describe data storage (Supabase), email provider (Resend), and unsubscribe method.
2. Add reCAPTCHA or Honeypot in form to limit spam.
3. Double-opt-in recommended for GDPR.
4. DKIM / SPF records for sending domain to improve deliverability.

## Phase 8 – Future Enhancements

- Tagging / segmentation columns (`source_page`, `tags` JSONB).
- A/B test different welcome emails.
- Webhooks from Resend → update `delivered`, `bounced` statuses in Supabase.
- Integrate Supabase Edge Functions to handle webhooks server-side.

---

### Next Steps Checklist

1. [ ] Create Supabase project and table.
2. [ ] Generate Resend key.
3. [ ] Add ENV variables locally.
4. [ ] Scaffold `/api/subscribe` with Supabase client.
5. [ ] Build minimal form and test end-to-end locally with logs. 