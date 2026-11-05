export const experience = [
  {
    role: 'Frontend Engineer',
    company: 'M10c',
    url: 'https://www.m10c.com/',
    location: 'London',
    period: 'Oct 2025 — Now',
    note: 'Product agency shipping web & mobile apps at scale — React, Next.js, React Native. Maestro E2E suite (−24% run time), Sentry root-causing, and an MCP server linking AI agents to engineering work logs.',
    details: [
      'Product agency building web and mobile apps at scale, including a leading menopause health app (1M+ downloads, Apple Editors\' Choice), a UK competitions platform (£50M+ in app revenue) and a hospitality staffing platform (used by Hilton and IHG)',
      'Built a Maestro end-to-end test suite for a React Native app, with per-run seeded test data and cached EAS builds, then cut test flow time by 24% (2,519s → 1,907s) by profiling and removing fixed waits',
      'Managed app version iterations, including Expo SDK upgrades, and designed backward-compatible interfaces between frontend and backend so users on older app versions keep a working experience',
      "Root-caused production Sentry errors across web and mobile, including double-submit race conditions colliding with a payment provider's locks and a GTM consent-ordering bug that let tracking fire on the denied path",
      'Shipped continuous feature iterations across web, mobile and admin platforms, including a referral programme with A/B-tested rewards, automated postal-entry review, community moderation and live-stream Q&A',
      'Co-built an internal management platform with an MCP server that connects AI agents to engineering work logs, producing auditable records used as evidence for client billable hours',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Mulder Tech',
    location: 'London',
    period: 'Oct 2024 — Oct 2025',
    note: 'Medical device traceability — React + Hyperledger Fabric. AWS deployment, CI/CD pipelines.',
    details: [
      'Developed a medical device traceability platform using React and blockchain technology (Hyperledger Fabric)',
      'Implemented features for tracking usage, inventory, and disposal of medical supplies, streamlining processes for clients',
      'Managed AWS deployment and CI/CD pipelines for reliable full-stack delivery',
      'Collaborated with backend developers to design and integrate APIs, ensuring seamless data flow and system efficiency',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Spe3d Co.',
    location: 'Taipei',
    period: 'Mar 2023 — Aug 2024',
    note: "Leading Taiwanese AR startup. Marker-based AR with Three.js + TypeScript. +20% interaction, −30% load time.",
    details: [
      'Led frontend development for a leading Taiwanese AR startup, building marker-based AR experiences with TypeScript and Three.js',
      'Integrated GLTF/GLB assets with custom lighting and camera controls, increasing user interaction by 20%',
      'Implemented progressive asset loading, cutting initial mobile load times by 30%',
      'Built a Three.js preview environment to catch material and lighting issues between Blender exports and browser rendering before handoff',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Hannlync Co.',
    location: 'Taipei',
    period: '2020 — 2023',
    note: 'Mobile-first B2B products, real-time tracking app for UMC.',
    details: [
      'Implemented mobile-first responsive designs with the UX/UI team, improving user engagement by 15%',
      'Led development of a personnel tracking app for UMC during the pandemic, processing real-time entry and exit data',
    ],
  },
]

export const education = [
  {
    degree: 'MSc Computer Science',
    school: 'Queen Mary University of London',
    year: '2024–2025',
    emoji: '🎓',
    badge: 'MSc',
  },
  {
    degree: 'BSc Psychology',
    school: 'Chung Shan Medical University · Taiwan',
    year: '2009–2012',
    emoji: '🧠',
    badge: 'BSc',
  },
]

export const companyCount = new Set(experience.map(e => e.company)).size
export const countryCount = new Set(experience.map(e => e.location)).size
