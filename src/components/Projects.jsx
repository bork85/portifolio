import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import veiculos from '../assets/veiculos.png'
import devburger from '../assets/home-devburger.png'
import devbills from '../assets/devbills_mini.png'
import marmitaria from '../assets/marmitaria.png'
import captura from '../assets/captura.png'
import petshop from '../assets/petshop-mini.png'
import devmovies from '../assets/devmovies-mini.png'
import bestpizza from '../assets/bestpizza-mini.png'

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestão de Estacionamentos - ParkTech',
      description: `Desenvolvimento de sistema para controle de entrada/saída de veículos com implementação de lógica de precificação dinâmica por tempo. Backend estruturado com ORM Prisma e validação com Zod e arquitetura baseada em APIs REST com comunicação frontend/backend e interface front-end moderna com React + TypeScript`,
      image: veiculos,
      technologies: [ 'React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
      githubUrl: 'https://github.com/bork85/ParkTech',
      demoUrl: '#'
    },
    {
      title: 'E-commerce Full Stack - DevBurger',
      description: `Desenvolvimento completo de aplicação de e-commerce (frontend + backend). Implementação de autenticação e autorização com JWT e Bcrypt, criação de APIs REST para gestão de produtos, pedidos e usuários. Desenvolvimento de painel administrativo com controle de pedidos, com interface responsiva mobile-first com TailwindCSS. Integração completa entre frontend e backend via Axios.`,
      image: devburger,
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'JWT', 'TailwindCSS', 'API Rest', 'Axios'],
      githubUrl: 'https://github.com/bork85/devburger-Frontend',
      demoUrl: '#'
    },
    {
      title: ' Aplicação de Controle Financeiro - DevBills',
      description: `Aplicação para gestão de receitas e despesas com dashboard analítico. Implementação de autenticação de usuários e persistência em MongoDB, back-end com Fastify focado em performance e front-end com React e vite para manter uma estrutura modular com separação clara de responsabilidades`,
      image: devbills,
      technologies: ['React', 'vite', 'TypeScript', 'Node.js', 'Fastify', 'MongoDB'],
      githubUrl: 'https://github.com/bork85/Devbills-Interface',
      demoUrl: 'https://devbills.vercel.app/'
    },
        {
      title: ' Automação para atendimento de clientes com IA via WhatsApp',
      description: `Aplicação para automatizar o atendimentos de clientes de uma marmitaria para receber mensagens via WhatsApp e conduzir o atendimento, respondendo mensagens, encaminhando cardápio e finalizando pedidos com o encaminhamento do mesmo a equipe de cozinha.`,
      image: marmitaria,
      technologies: ['n8n', 'JavaScript', 'EvolutionAPI'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: ' Aplicação de recebimento e tratamento de dados financeiros',
      description: `Aplicação para gestão de dados financeiros, com recebimento de dados via e-mail com CSV de relatório de vendas, validação e uniformização dos dados de entrada, tratamento dos mesmos e retorno tambem via e-mail com os dados tratados e consolidados.`,
      image: captura,
      technologies: ['n8n', 'JavaScript'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Landing Page PetCenter',
      description: `Landing Page para petshops com visual moderno e eficiente. Possui seções de hero, serviços, depoimentos com carrousel e localização com integração ao Google Maps`,
      image: petshop,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/bork85/petCenter',
      demoUrl: 'https://bork85.github.io/petCenter/'
    },
        {
      title: 'Landing Page de consulta de filmes - DevMovies',
      description: `Landing Page para visualização de sugestão de filmes, utilizando API da IMDB. Lista os top filmes do momento, com possibilidade de visualizar os principais dados do filme e seu trailer`,
      image: devmovies,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'vite'],
      githubUrl: 'https://github.com/bork85/DevMovies',
      demoUrl: 'https://devmovies-bork85.vercel.app/'
    },
    {
      title: 'Landing Page Pizzaria - BestPizza',
      description: `Landing Page para pizzarias com visual moderno com seções de hero, sabores mais pedidos, link para page de cardapio completo, depoimentos, localização com integração ao Google Maps e CTA para envio de pedido via WhatsApp`,
      image: bestpizza,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/bork85/Pizza',
      demoUrl: 'https://bork85.github.io/Pizza/'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Portfólio de Soluções
          </h2>
          <p className="text-xl text-gray-400">
            Projetos que demonstram expertise técnica e visão de negócios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-dark-card rounded-xl overflow-hidden border border-gray-700 hover:border-accent-purple transition-all duration-300"
            >
              {/* Imagem do Projeto */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              {/* Conteúdo do Card */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs hover:bg-accent-purple hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-3">
                  {
                    project.githubUrl !== '#' && (
                      <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-accent-purple hover:text-white transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                    )
                  }
                  
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-accent-emerald hover:text-white transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects