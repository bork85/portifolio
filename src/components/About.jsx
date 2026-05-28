import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary animate-slide-up">
            Minha Jornada Profissional
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left animate-slide-up">
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha trajetória de mais de duas décadas na área de TI representa uma transição significativa e estratégica entre gestão de projetos complexos e desenvolvimento full stack avançado.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Iniciei minha carreira liderando equipes de infraestrutura e gerenciando grandes projetos de migração, incluindo implementações ERP de escala nacional que impactavam milhares de usuários.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Essa experiência me proporcionou uma visão holística dos negócios, compreendendo não apenas o "como" técnico, mas também o "porquê" estratégico por trás de cada decisão de arquitetura e implementação.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-dark-card p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-accent-purple mb-3">
                  Visão Holística
                </h3>
                <p className="text-gray-400">
                  Capaz de traduzir requisitos de negócio em soluções técnicas robustas e escaláveis.
                </p>
              </div>
              
              <div className="bg-dark-card p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-accent-emerald mb-3">
                  Arquitetura Sólida
                </h3>
                <p className="text-gray-400">
                  Foco em código limpo, padrões de projeto bem definidos e soluções sustentáveis.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hoje, aplico essa experiência madura no desenvolvimento de arquiteturas modernas, criando soluções que não apenas funcionam, mas que são mantíveis, escaláveis e alinhadas aos objetivos estratégicos da organização.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About