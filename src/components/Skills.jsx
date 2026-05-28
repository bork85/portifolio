import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Arquitetura',
      description: 'Soluções robustas e escaláveis',
      skills: ['Node.js', 'TypeScript', 'Express', 'Fastify', 'APIs RESTful'],
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Frontend & UI',
      description: 'Interfaces modernas e responsivas',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript Moderno'],
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      title: 'Banco de Dados & Infraestrutura',
      description: 'Dados e infraestrutura de alto desempenho',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Docker Compose', 'Prisma ORM'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Automação & Ferramentas',
      description: 'Fluxos de trabalho eficientes',
      skills: ['n8n', 'Integrações de APIs', 'Fluxos de Dados', 'Relatórios Integrados', 'EvolutionAPI'],
      color: 'from-indigo-600 to-indigo-800'
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-400">
            Domínio completo do ecossistema de desenvolvimento moderno
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card bg-dark-card p-8 rounded-xl border border-gray-700 hover:border-accent-purple transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {category.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-accent-purple hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills