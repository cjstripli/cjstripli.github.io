export type Project = {
  title: string
  description: string
  tags: string[]
  year: string
  href: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and why it matters. Replace with your real work.',
    tags: ['React', 'TypeScript'],
    year: '2025',
    href: 'https://github.com/cjstripli',
    repo: 'https://github.com/cjstripli',
  },
  {
    title: 'Project Two',
    description:
      'Another project showcase entry. Keep the description one or two sentences.',
    tags: ['Vite', 'API'],
    year: '2024',
    href: 'https://github.com/cjstripli',
    repo: 'https://github.com/cjstripli',
  },
  {
    title: 'Project Three',
    description:
      'Add as many projects as you like in src/data/projects.ts.',
    tags: ['Design', 'Frontend'],
    year: '2024',
    href: 'https://github.com/cjstripli',
  },
]
