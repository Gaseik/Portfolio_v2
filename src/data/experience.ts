export const experience: {
  role: string
  company: string
  location: string
  period: string
  note: string
  url?: string
  details: string[]
}[] = [
  {
    role: 'Frontend Developer',
    company: 'M10c',
    location: 'London',
    period: 'Oct 2025 — Now',
    note: 'React, Next.js, React Native. E2E testing with Maestro. Agency environment — multi-client projects across web & mobile.',
    url: 'https://www.m10c.com/',
    details: [
      'Developed and maintained web applications and cross-platform mobile apps using React, Next.js, and React Native',
      'Worked across multiple client projects simultaneously, adapting quickly to different technical requirements and codebases',
      'Implemented E2E testing workflows using Maestro, improving test coverage across mobile app flows',
      'Collaborated closely with designers and backend developers to deliver end-to-end product features across web and mobile platforms',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Mulder Tech',
    location: 'London',
    period: 'Oct 2024 — Nov 2025',
    note: 'Medical device traceability — React + Hyperledger Fabric. AWS deployment, CI/CD pipelines.',
    details: [
      'Built medical device traceability platform using React and Hyperledger Fabric blockchain',
      'Implemented features for tracking usage, inventory, and disposal of medical supplies',
      'Managed AWS deployment and CI/CD pipelines for reliable full-stack delivery',
      'Collaborated with backend developers to design and integrate RESTful APIs',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Spe3d Co.',
    location: 'Taipei',
    period: '2023 — 2024',
    note: "Taiwan's top AR startup. Three.js + TypeScript. +20% interaction, −30% load time.",
    details: [
      "Led frontend for Taiwan's leading AR startup — integrated 3D/AR experiences using Three.js & TypeScript",
      'Boosted user interaction by 20% through optimised 3D rendering and interaction design',
      'Overhauled build workflow — cut load times by 30% and improved scalability in Agile environment',
      'Collaborated cross-functionally with design and product teams on feature delivery',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Hannlync Co.',
    location: 'Taipei',
    period: '2020 — 2023',
    note: 'Mobile-first B2B products, live-streaming for corporate events, real-time tracking app for UMC.',
    details: [
      'Implemented mobile-first responsive designs with UX/UI team — improved engagement by 15%',
      'Led development of personnel tracking app for UMC during COVID with real-time data processing',
      'Built live-streaming platform for corporate shareholder meetings using multi-national servers',
      'Developed 4 B2B product pages across NaaS / MaaS / SaaS / RaaS service lines',
    ],
  },
]

export const education = [
  {
    degree: 'MSc Computer Science',
    school: 'Queen Mary University of London',
    year: '2024–2025',
  },
  {
    degree: 'BSc Psychology',
    school: 'Chung Shan Medical University · Taiwan',
    year: '2009–2012',
  },
]
