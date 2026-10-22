export const osho = {
  title: 'Osho Zen Insight',
  url: 'https://osho-tarot.vercel.app',
  subtitle: 'AI Tarot Platform · Solo Project · 2024–Present',
  meta: 'Next.js 16 / Groq / TypeScript',
  lead: 'An AI tarot product I designed, built and shipped on my own.',
  description:
    'Full-stack AI SaaS built entirely solo — product, design, and engineering. Users flow through a guided 4-step journey, draw cards, and receive streaming AI interpretations via Llama 3.3 70B on Groq. Bilingual: Traditional Chinese and English.',
  decisions: [
    { key: 'Groq over OpenAI',  value: '10× faster inference — critical for real-time streaming UX at lower cost' },
    { key: 'App Router + RSC',  value: 'Next.js 16 Server Components for SEO and cold load performance' },
    { key: 'Rate limiting',     value: 'In-memory per-IP (10 req/day) — cost control without a DB dependency' },
    { key: 'i18n architecture', value: 'react-i18next with browser auto-detect and lazy-loaded namespaces' },
  ],
  tags: ['Next.js 16', 'Groq LLM', 'TypeScript', 'Tailwind', 'Vercel', 'react-i18next'],
  metrics: [
    { n: 'zh-TW / EN', l: 'Bilingual i18n' },
    { n: '500+',        l: 'Concurrent users' },
    { n: 'Streaming',   l: 'Real-time AI response' },
    { n: '100%',        l: 'Solo — design to deploy' },
  ],
  // sample readings for the on-page demo; the live app writes a new one per draw
  readings: [
    { card: 'Existence', n: 'I', text: 'You are not an accident. Whatever you are building now has a place waiting for it — begin before you feel ready.' },
    { card: 'Inner Voice', n: 'II', text: 'The answer you keep asking others for is already yours. Quiet the noise for a day and listen to it.' },
    { card: 'Creativity', n: 'III', text: 'Make the thing for its own sake. The work that comes out of play is the work people remember.' },
    { card: 'Courage', n: 'VIII', text: 'The path ahead looks narrow because you are looking at it from the old place. Take the first step and it widens.' },
    { card: 'Change', n: 'X', text: 'The wheel is already turning. Hold your plans lightly and let the new shape show itself.' },
    { card: 'Breakthrough', n: 'XI', text: 'Something that has felt stuck is about to give way. Push once more, and push where it is softest.' },
    { card: 'Silence', n: 'XVII', text: 'Not every question needs an answer today. Rest in not knowing a little longer; clarity is close.' },
    { card: 'Completion', n: 'XXI', text: 'A chapter is ready to close. Finish it properly, say thank you, and leave room for what comes next.' },
  ],
}

export const projects = [
  {
    name: 'Consultant Panel',
    cat: 'Enterprise SPA · Mulder Tech',
    title: 'Consultant Panel',
    impact: 'Regulatory compliance platform for medical device lifecycle tracking — dashboard, document control, AI regulatory intelligence, and 13+ role-based access across multi-tenant architecture.',
    tags: ['React', 'TypeScript', 'AWS', 'RBAC'],
    image: '/img/ConsultantPanelMockup.png',
  },
  {
    name: 'AR Experience',
    cat: 'AR / 3D · Spe3d Co.',
    title: 'AR Experience Platform',
    impact: "Led frontend for Taiwan's top AR startup. +20% interaction, −30% load time via Three.js + TypeScript overhaul.",
    tags: ['Three.js', 'TypeScript', 'AR'],
    image: '/img/Spe3dMockup.png',
  },
  {
    name: 'Mlytics',
    cat: 'Freelance · Mlytics',
    title: 'Official Website Reconstruction',
    impact: 'Migrated corporate site from WordPress to Gatsby.js + React — SEO optimisation, i18n, RWD, and marketing-aligned animations.',
    tags: ['Gatsby.js', 'React', 'i18n', 'SEO', 'RWD'],
    image: '/img/MlyticsMockup.png',
    url: 'https://www.mlytics.com',
    urlLabel: 'mlytics.com',
  },
  {
    name: 'Hannlync B2B',
    cat: 'Enterprise · Hannlync Co.',
    title: 'B2B Product Platform',
    impact: 'Rebuilt product pages for 4 service lines (NaaS/MaaS/SaaS/RaaS). +15% user engagement after redesign.',
    tags: ['React', 'MUI', 'RWD'],
    image: '/img/HanMockup.png',
  },
]
