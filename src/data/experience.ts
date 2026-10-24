export const experience = [
  {
    role: 'Frontend Developer',
    company: 'M10c',
    url: 'https://www.m10c.com/',
    location: 'London',
    period: 'Oct 2025 — Now',
    note: 'Web & cross-platform mobile apps for 4 client projects with React, Next.js and React Native. Automating the team workflow with AI agents (Claude Code & Cursor).',
    details: [
      'Build and maintain web and cross-platform mobile apps for 4 client projects using React, Next.js and React Native',
      "Broke down the team's development workflow into repeatable steps and automated them with AI agents — codified 100+ code review comments into modular Claude Code and Cursor rules (core, React patterns, styles, shared components) and set up automated AI code review",
      'Defined component architecture guidelines for when to mirror Figma structure versus abstract independently, keeping the shared component library consistent across projects',
      'Wrote unit tests with Jest and Maestro E2E tests for key mobile user flows',
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
    note: "Taiwan's top AR startup. Marker-based AR with Three.js + TypeScript. +20% interaction, −30% load time.",
    details: [
      "Led frontend development for Taiwan's top AR startup, building marker-based AR experiences with TypeScript and Three.js that overlay 3D objects onto real-world scenes via mobile camera",
      'Integrated GLTF/GLB 3D assets with custom lighting setups (directional and ambient) and camera controls, boosting user interaction by 20%',
      'Optimised mobile performance by implementing progressive asset loading, cutting initial load times by 30%',
      'Built a local Three.js preview environment to validate 3D assets early, catching material and lighting discrepancies between Blender exports and in-browser rendering before handoff',
      'Collaborated closely with 3D designers to iterate on visual fidelity and ensure creative intent translated accurately into production',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Hannlync Co.',
    location: 'Taipei',
    period: '2020 — 2023',
    note: 'Mobile-first B2B products, live-streaming for corporate events, real-time tracking app for UMC.',
    details: [
      'Collaborated closely with the UX/UI team to implement mobile-first responsive designs, improving user engagement by 15%',
      'Led the development of a personnel tracking app for UMC during the pandemic, integrating real-time data processing for efficient tracking of entry/exit activities',
      'Developed a live-streaming platform for corporate events, utilising multi-national servers to ensure high-quality, stable connections for shareholder and internal meetings',
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
