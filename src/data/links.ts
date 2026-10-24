export const CAREER_START = new Date(2019, 6, 1)

/** Whole years of experience as of `now`. */
export function yearsOfExperience(now = Date.now()) {
  return Math.floor((now - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
}

export const EMAIL = 'james800822@hotmail.com'
export const GITHUB = 'https://github.com/Gaseik'
export const LINKEDIN = 'https://www.linkedin.com/in/weichieh-cheng-fe'

export const STACK = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'Three.js', 'Claude Code',
  'Tailwind', 'Redux', 'Jest / Maestro', 'Python', 'MySQL', 'AWS', 'Docker', 'Figma',
]
