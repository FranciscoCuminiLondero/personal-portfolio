type SkillCategory = {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Linux'],
  },
  {
    title: 'Currently Learning',
    skills: [
      'Backend Development',
      'Software Architecture',
      'Full Stack Development',
      'AI-assisted Development',
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Stack y herramientas
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {skillCategories.map((category) => {
          // "Currently Learning" se distingue visualmente (borde punteado +
          // acento) del resto: comunica evolución, no dominio consolidado.
          const isLearning = category.title === 'Currently Learning'

          return (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={
                      isLearning
                        ? 'rounded-full border border-dashed border-accent/50 px-3 py-1 text-sm text-accent'
                        : 'rounded-full border border-border px-3 py-1 text-sm text-foreground'
                    }
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
