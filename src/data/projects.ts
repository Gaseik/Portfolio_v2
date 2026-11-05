export const osho = {
  title: 'Osho Zen Insight',
  url: 'https://osho-tarot.vercel.app',
  subtitle: 'AI Tarot Platform · Solo Project · 2024–Present',
  meta: 'Next.js 16 / Groq / TypeScript',
  description:
    'Full-stack AI SaaS built entirely solo — product, design, and engineering. Users flow through a guided 4-step journey, draw cards, and receive streaming AI interpretations via Llama 3.3 70B on Groq. Bilingual: Traditional Chinese and English.',
  decisions: [
    { key: 'Groq over OpenAI',  value: '10× faster inference — critical for real-time streaming UX at lower cost' },
    { key: 'App Router + RSC',  value: 'Next.js 16 Server Components for SEO and cold load performance' },
    { key: 'Rate limiting',     value: 'In-memory per-IP (10 req/day) — cost control without a DB dependency' },
    { key: 'i18n architecture', value: 'react-i18next with browser auto-detect and lazy-loaded namespaces' },
  ],
  tags: ['Next.js 16', 'Groq LLM', 'TypeScript', 'Tailwind', 'Vercel', 'react-i18next'],
  highlightTags: ['Next.js 16', 'Groq LLM', 'TypeScript'],
  metrics: [
    { n: 'zh-TW / EN', l: 'Bilingual i18n' },
    { n: '500+',        l: 'Concurrent users' },
    { n: 'Streaming',   l: 'Real-time AI response' },
    { n: '100%',        l: 'Solo — design to deploy' },
  ],
}

export const wushi = {
  title: 'wushi 晤室',
  short: 'wushi',
  url: 'https://wushi-phi.vercel.app/',
  subtitle: 'Multi-tenant Clinic Booking SaaS · Solo Project · 2026',
  meta: 'React / Hono / Drizzle / Neon Postgres',
  description:
    "Designed and built solo, from a clinic owner's business needs to product requirements, multi-tenant architecture and final UI. Online booking, admin dashboard, payments, email notifications, i18n and handwritten e-signatures for clinical records, plus the product's marketing website. In pilot testing with its first clinic in Taiwan.",
  decisions: [
    { key: 'Sessions are real rows', value: 'Materialised sessions make the double-booking check a single query' },
    { key: 'Permissions as functions', value: 'Pure, tested functions instead of Postgres RLS, checked on client and server' },
    { key: 'Tenant on every table', value: 'Monorepo with shared, API and web packages; new clinics onboard with no client-specific code' },
    { key: 'Sensitive data stays closed', value: 'The presenting concern is never selected in list views, only opened per record' },
  ],
  tags: ['React', 'TypeScript', 'Hono', 'Drizzle', 'Neon Postgres', 'Vite', 'Vercel'],
  highlightTags: ['React', 'TypeScript', 'Hono'],
  metrics: [
    { n: '~5,000',    l: 'Projected users' },
    { n: '59',        l: 'Vitest unit tests' },
    { n: 'Encrypted', l: 'Sensitive client data' },
    { n: '0',         l: 'Client-specific code' },
  ],
}

export const projects = [
  {
    num: '01',
    cat: 'Enterprise · Hannlync Co.',
    title: 'B2B Product Platform',
    impact: 'Rebuilt product pages for 4 service lines (NaaS/MaaS/SaaS/RaaS). +15% user engagement after redesign.',
    tags: ['React', 'MUI', 'RWD'],
    image: '/img/HanMockup.png',
    tint: '#e8f0ff',
  },
  {
    num: '02',
    cat: 'Enterprise SPA · Mulder Tech',
    title: 'Consultant Panel',
    impact: 'Regulatory compliance platform for medical device lifecycle tracking — dashboard, document control, AI regulatory intelligence, and 13+ role-based access across multi-tenant architecture.',
    tags: ['React', 'TypeScript', 'AWS', 'RBAC'],
    image: '/img/ConsultantPanelMockup.png',
    tint: '#eef7f1',
  },
  {
    num: '03',
    cat: 'AR / 3D · Spe3d Co.',
    title: 'AR Experience Platform',
    impact: 'Marker-based AR that overlays 3D objects onto real-world scenes via the phone camera. GLTF/GLB assets with custom lighting: +20% interaction, −30% initial load via progressive asset loading.',
    tags: ['Three.js', 'TypeScript', 'AR', 'GLTF'],
    image: '/img/Spe3dMockup.png',
    tint: '#f3edff',
  },
  {
    num: '04',
    cat: 'Freelance · Mlytics',
    title: 'Official Website Reconstruction',
    impact: 'Migrated corporate site from WordPress to Gatsby.js + React — SEO optimisation, i18n, RWD, and marketing-aligned animations.',
    tags: ['Gatsby.js', 'React', 'i18n', 'SEO', 'RWD'],
    image: '/img/MlyticsMockup.png',
    tint: '#fff1f6',
    url: 'https://www.mlytics.com',
    urlLabel: 'mlytics.com ↗',
  },
]
