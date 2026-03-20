# RAYPUB — UI Breakdown & Site Architecture

## Live Site: https://raypub.vercel.app
## Repo: https://github.com/blueprintmediatech/RAYPUB

---

## Site Map

```
raypub.vercel.app
│
├── /                     Landing Page (Public)
├── /login                Client Login
├── /signup               Client Registration
├── /admin-login          Admin Login
│
├── /dashboard            Client Portal
│   ├── /dashboard                Overview
│   ├── /dashboard/catalog        Music Catalog
│   ├── /dashboard/contracts      Contracts & Signing
│   ├── /dashboard/royalties      Royalties & Revenue
│   └── /dashboard/settings       Account Settings
│
└── /admin                Admin Panel
    ├── /admin                    Dashboard & KPIs
    ├── /admin/clients            Client CRM
    ├── /admin/contracts          Contract Management
    ├── /admin/revenue            Revenue Tracking
    ├── /admin/tasks              Task Management
    ├── /admin/messages           Client Messaging
    └── /admin/settings           Platform Settings
```

---

## Authentication

| Portal | URL | Email | Password | Redirects To |
|--------|-----|-------|----------|-------------|
| Client | `/login` | client@client.com | CLIENT26! | `/dashboard` |
| Admin | `/admin-login` | ADMIN@ADMIN.com | ADMIN26! | `/admin` |

- Session-based auth via `sessionStorage`
- Role-based routing (admin vs. client)
- Unauthorized users redirected to login
- Logout clears session and returns to respective login page

---

## PUBLIC PAGES

### Landing Page — `/`

**WebGL Background Layer**
- GPU fluid simulation (fractal Brownian motion, mouse-reactive)
- Morphing terrain mesh (200x200 vertices, scroll-driven displacement)
- Waveform ring (512-point, multi-frequency audio visualization)
- Volumetric light cones with animated noise bands
- God rays (8 additive-blended light planes)
- 30 floating gold orbs with orbital motion
- Post-processing: bloom, chromatic aberration, film grain, vignette
- Fades out as user scrolls past hero

**Navbar** (fixed, glassmorphism)
- RAYPUB logo
- Nav links: Services, Packages, FAQ, Contact
- Login button → `/login`
- Get Started button → `/signup`
- Mobile hamburger menu
- Transparent → dark backdrop on scroll

**Hero Section**
- Animated badge: "Publishing Administration for Independent Artists"
- Heading: "Your Music. Your Money. Our Expertise." (heavy text shadows)
- Subtext describing the platform
- CTA: "Get Started Today" → `/signup`
- CTA: "View Packages" → scrolls to packages
- Trust indicators: BMI, SoundExchange, UnitedMasters
- GSAP entrance animations (staggered)

**Services Section** — 6 cards with icons
| Service | Icon |
|---------|------|
| Publishing Registration | FileText |
| Royalty Collection | BarChart3 |
| Distribution | Globe |
| LLC & EIN Formation | Building2 |
| Legal & Contracts | Scale |
| Label Accounting | Receipt |
- GSAP scroll-triggered staggered reveal

**Packages Section** — 3 pricing tiers
| Package | Price | Highlight |
|---------|-------|-----------|
| Registration | $1,000 one-time | — |
| Publishing Admin | $1,000 + $100/mo | MOST POPULAR badge |
| Full Label Services | $1,000 one-time | — |
- Feature checklists (8 items each)
- "Get Started" button on each → `/signup`
- 3D perspective entrance animation on scroll
- Hover: lift + shadow

**FAQ Section** — 8 items, accordion
- What does RAYPUB do?
- Do I keep ownership?
- How long does registration take?
- Package differences?
- Can I upgrade?
- What contracts do I sign?
- How do I get paid?
- Minimum commitment?
- GSAP staggered slide-in

**Contact Section** — split layout
- Left: heading, email, phone, location with icons
- Right: contact form
  - First Name / Last Name
  - Email
  - Package dropdown
  - Message textarea
  - Send Message button
- GSAP slide-in from left/right

**Footer**
- RAYPUB branding + tagline
- Services links
- Company links
- Legal links
- Copyright

---

### Client Login — `/login`

| Element | Details |
|---------|---------|
| Logo | RAYPUB branding |
| Subtitle | "Sign in to your client portal" |
| Email field | Text input |
| Password field | Password input |
| Remember me | Checkbox |
| Forgot password | Link |
| Sign In button | Gold, loading state |
| Error display | Red banner on invalid credentials |
| Sign up link | → `/signup` |

---

### Admin Login — `/admin-login`

| Element | Details |
|---------|---------|
| Logo | RAYPUB branding |
| Badge | Shield icon + "Admin Portal" (red) |
| Admin Email field | Text input |
| Password field | Password input |
| Admin Sign In button | Red themed |
| Error display | Red banner on invalid credentials |

---

### Sign Up — `/signup`

| Field | Type |
|-------|------|
| First Name | Text |
| Last Name | Text |
| Artist / Label Name | Text |
| Email | Email |
| Phone | Tel |
| Password | Password |
| Select Package | Dropdown (3 tiers) |
| Terms checkbox | Required |
| Contract notice checkbox | Required |
| Create Account button | → `/dashboard` |

---

## CLIENT PORTAL — `/dashboard`

### Sidebar Navigation
| Link | Icon | Route |
|------|------|-------|
| Overview | LayoutDashboard | `/dashboard` |
| Catalog | Music | `/dashboard/catalog` |
| Contracts | FileText | `/dashboard/contracts` |
| Royalties | DollarSign | `/dashboard/royalties` |
| Settings | Settings | `/dashboard/settings` |
- User card: avatar (initials), name, package tier
- Sign Out button

---

### Dashboard Overview — `/dashboard`

**Welcome Banner**
- "Welcome to RAYPUB" with setup instructions
- Gold gradient background

**Stats Cards** (4 columns)
| Stat | Value | Icon |
|------|-------|------|
| Total Royalties | $0.00 | DollarSign |
| Songs Registered | 0 | Music |
| Contracts Signed | 0/3 | FileCheck |
| Account Status | Setup | Clock |

**Registration Progress** (6 items)
| Registration | Status |
|-------------|--------|
| BMI Registration | Pending |
| SoundExchange | Pending |
| SongTrust | Pending |
| UnitedMasters | Pending |
| LLC Formation | Pending |
| EIN Registration | Pending |

**Contracts & Agreements** (3 items)
- Publishing Administration Agreement — Review & Sign
- Distribution Agreement — Review & Sign
- Letter of Direction — Review & Sign
- Warning banner: "You must sign all required contracts..."

---

### Music Catalog — `/dashboard/catalog`

**Header**
- Song count
- [+ Add Song] button → opens modal

**Search Bar** — filters by title/artist

**Empty State** (when no songs)
- Music icon, "No songs yet" heading
- [+ Add Your First Song] button

**Songs Table** (when songs exist)
| Column | Details |
|--------|---------|
| Title | Song name |
| Artist | Artist name |
| Album | Album or "—" |
| Genre | Genre tag |
| ISRC | Code or "Pending" |
| Release | Date |
| Actions | More menu |

**Add Song Modal**
| Field | Type |
|-------|------|
| Song Title | Text (required) |
| Artist | Text (required) |
| Album / Single | Text |
| Genre | Dropdown (10 genres) |
| Release Date | Date picker (required) |
| ISRC Code | Text |
| Songwriter(s) | Text (required) |
| Producer(s) | Text |
| Ownership Splits | Text |
| Cancel / Add Song | Buttons |

**Info Card** — what metadata is needed per song

---

### Contracts & Signing — `/dashboard/contracts`

**Signing Progress Bar** — X/6 signed, gold fill

**Contracts List** (6 contracts)
| Contract | Required | Actions |
|----------|----------|---------|
| Publishing Administration Agreement | Yes | Preview, PDF, Sign |
| Distribution Agreement | Yes | Preview, PDF, Sign |
| Master Recording License | Yes | Preview, PDF, Sign |
| Letter of Direction | Yes | Preview, PDF, Sign |
| Non-Disclosure Agreement | No | Preview, PDF, Sign |
| Terms of Service & Privacy Policy | Yes | Preview, PDF, Sign |

**Sign Contract Modal**
| Element | Details |
|---------|---------|
| Agreement summary | Scrollable text box |
| Full Legal Name | Text input |
| Date | Auto-filled, disabled |
| Agreement checkbox | Must check to enable sign |
| Cancel / Sign Agreement | Buttons (sign disabled until valid) |

After signing: green "Signed" badge replaces Sign button

---

### Royalties & Revenue — `/dashboard/royalties`

**Stats Cards** (3 columns)
| Stat | Value |
|------|-------|
| Total Earnings | $0.00 |
| This Quarter | $0.00 |
| Next Payout | — |

**Revenue Breakdown**
| Source | Amount |
|--------|--------|
| Performance Royalties (BMI) | $0.00 |
| Digital Performance (SoundExchange) | $0.00 |
| Mechanical Royalties (SongTrust) | $0.00 |
| Distribution (UnitedMasters) | $0.00 |
| Sync Licensing | $0.00 |

**Payout History** — empty state

---

### Account Settings — `/dashboard/settings`

**Personal Information**
- First Name, Last Name, Email, Phone

**Business Information**
- Artist/Label Name, LLC Name, EIN, Business Address

**PRO & Registration IDs**
- BMI CAE/IPI #, SoundExchange ID, SongTrust ID, UnitedMasters ID

**Payment Information**
- Payout Method dropdown (ACH / Wire / Check)
- Routing Number, Account Number

**[Save Changes]** button

---

## ADMIN PANEL — `/admin`

### Sidebar Navigation
| Link | Icon | Route |
|------|------|-------|
| Dashboard | LayoutDashboard | `/admin` |
| Clients | Users | `/admin/clients` |
| Contracts | FileText | `/admin/contracts` |
| Revenue | DollarSign | `/admin/revenue` |
| Tasks | ClipboardList | `/admin/tasks` |
| Messages | MessageSquare | `/admin/messages` |
| Settings | Settings | `/admin/settings` |
- ADMIN badge (red) next to logo
- Shield icon with "Master Admin" + email
- Sign Out button

---

### Admin Dashboard — `/admin`

**KPI Cards** (4 columns)
| KPI | Value | Trend |
|-----|-------|-------|
| Total Clients | 12 | +3 this month |
| Revenue (MTD) | $14,200 | +$4,200 vs last month |
| Contracts Pending | 7 | Action required |
| Open Tasks | 23 | 5 due today |

**Recent Clients** (5 rows)
- Avatar, name, artist, package, status badge, revenue
- "View All" link → `/admin/clients`

**Upcoming Tasks** (5 rows)
- Task name, client, priority badge, due date
- Alert icon for high priority
- "View All" link → `/admin/tasks`

**Revenue by Package** (3 cards)
| Package | Revenue | Clients | % |
|---------|---------|---------|---|
| Registration | $4,000 | 4 | 28% |
| Publishing Admin | $6,200 | 5 | 44% |
| Full Label | $4,000 | 3 | 28% |
- Progress bars

---

### Clients CRM — `/admin/clients`

**Header**
- Client count
- [+ Add Client] button → opens modal

**Filters**
- Search bar (name, artist, email)
- Package dropdown filter
- Status dropdown filter

**Client Table** (8 demo clients)
| Column | Details |
|--------|---------|
| Client | Avatar + name + artist |
| Package | Tier name |
| Status | Colored badge |
| Registrations | Progress (e.g. 4/6) |
| Revenue | Dollar amount |
| Joined | Date |
| Actions | Mail, Phone, More icons |

**Add Client Modal**
| Field | Type |
|-------|------|
| First Name | Text (required) |
| Last Name | Text (required) |
| Artist / Label Name | Text (required) |
| Email | Email (required) |
| Phone | Tel |
| Package | Dropdown (3 tiers) |
| Cancel / Add Client | Buttons |

---

### Contract Management — `/admin/contracts`

**Status Cards** (4)
- Signed, Pending, Sent, Draft — each with count

**Contracts Table** (12 contracts across clients)
| Column | Details |
|--------|---------|
| Client | Name |
| Contract | Document name |
| Status | Colored badge |
| Signed Date | Date or "—" |
| Actions | Preview, Send (drafts only) |

---

### Revenue Tracking — `/admin/revenue`

**Stats** (3 columns)
| Stat | Value |
|------|-------|
| Total Revenue | $48,600 |
| Monthly Recurring | $800 |
| Avg Revenue/Client | $4,050 |

**Monthly Revenue** (6 months, bar chart)
- Oct 2025 → Mar 2026 with amounts and client counts

**Revenue by Client** (table, 8 clients)
- Client, Package, Setup Fee, Monthly, Total

---

### Task Management — `/admin/tasks`

**Header**
- Task count by status
- [+ Add Task] button → opens modal

**3 Sections**
- In Progress (2 tasks)
- To Do (7 tasks)
- Completed (3 tasks)

**Each Task**
- Clickable status icon (cycles: todo → in progress → done)
- Task name (strikethrough when done)
- Client name
- Priority badge (high/medium/low)
- Due date

**Add Task Modal**
| Field | Type |
|-------|------|
| Task Name | Text (required) |
| Client | Text (required) |
| Priority | Dropdown (high/medium/low) |
| Due Date | Date picker (required) |
| Cancel / Add Task | Buttons |

---

### Messages — `/admin/messages`

**3-Column Layout**
- Left (1/3): Conversation list
  - Search bar
  - 6 conversations with avatar, name, preview, time, unread dot
- Right (2/3): Chat interface
  - Header: client avatar, name, package
  - Message bubbles (incoming gray, outgoing gold)
  - Timestamps
  - Message input + Send button

---

### Admin Settings — `/admin/settings`

**Master Admin Account**
- Shield icon, email display

**Company Information**
- Company Name, Contact Email, Phone, Address

**Package Pricing**
- Registration Fee, Publishing Admin Setup, Publishing Monthly, Full Label Fee

**Change Password**
- Current, New, Confirm password fields

**[Save Changes]** button

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | #0a0a0a | Page background |
| `--foreground` | #f5f5f5 | Primary text |
| `--gold` | #d4a843 | Brand accent, CTAs, highlights |
| `--gold-light` | #e8c96a | Hover states |
| `--gold-dark` | #b8922e | Dark gold accents |
| `--surface` | #141414 | Card/panel backgrounds |
| `--surface-light` | #1a1a1a | Input backgrounds, hover states |
| `--border` | #2a2a2a | Borders, dividers |
| `--muted` | #888888 | Secondary text |

**Typography**: Geist Sans + Geist Mono (Google Fonts)
**Icons**: Lucide React
**Animations**: GSAP + ScrollTrigger
**3D**: React Three Fiber + custom GLSL shaders
**Post-Processing**: Bloom, chromatic aberration, film grain, vignette

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| 3D/WebGL | React Three Fiber, Three.js, custom GLSL |
| Animation | GSAP, ScrollTrigger |
| Post-Processing | @react-three/postprocessing |
| Icons | Lucide React |
| Hosting | Vercel (auto-deploy from GitHub) |
| Repo | GitHub (blueprintmediatech/RAYPUB) |
