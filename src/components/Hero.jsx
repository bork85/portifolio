import React from 'react'
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa'
import photo from '../assets/photo.webp'
import curriculo from '../assets/curriculo-Dev-Full-Stack-Daniel-Bork.pdf'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo da Esquerda */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-purple/20 text-accent-purple text-sm font-medium">
              Disponível para novos projetos e desafios
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent-purple to-accent-emerald bg-clip-text text-transparent">
                Daniel Bork
              </h1>
              
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                  Desenvolvedor Full Stack
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Unindo mais de 20 anos de experiência em tecnologia, infraestrutura e processos de negócios à criação de arquiteturas web, tanto no Front-end quanto Back-end, de forma escalável, limpa e eficiente.
                </p>
              </div>
            </div>
            
            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={curriculo} target='_blank'>
                <button className="flex items-center space-x-2 px-6 py-3 bg-accent-purple hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105">
                  <FaDownload />
                  <span>Baixar Currículo</span>
                </button>
              </a>
              
              <a href="https://www.linkedin.com/in/daniel-bork" target='_blank'>
                <button className="flex items-center space-x-2 px-6 py-3 border border-accent-purple text-accent-purple hover:bg-accent-purple/10 rounded-lg font-medium transition-all duration-200">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </button>
              </a>
              
              <a href="https://github.com/bork85" target='_blank'>
                <button className="flex items-center space-x-2 px-6 py-3 border border-accent-emerald text-accent-emerald hover:bg-accent-emerald/10 rounded-lg font-medium transition-all duration-200">
                  <FaGithub />
                  <span>GitHub</span>
                </button>
              </a>
            </div>
          </div>
          
          {/* Conteúdo da Direita - Foto de Perfil */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-emerald rounded-full blur-xl opacity-20 animate-float"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800">
                <img 
                  src={photo}
                  alt="Daniel Bork"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero