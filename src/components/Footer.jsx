import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-surface border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            Projetado e desenvolvido por Daniel Bork.
          </p>
          <div className="flex justify-center space-x-6 text-gray-500">
            <a href="#hero" className="hover:text-accent-purple transition-colors duration-200">
              Início
            </a>
            <a href="#about" className="hover:text-accent-purple transition-colors duration-200">
              Sobre
            </a>
            <a href="#skills" className="hover:text-accent-purple transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className="hover:text-accent-purple transition-colors duration-200">
              Projetos
            </a>
            <a href="#contact" className="hover:text-accent-purple transition-colors duration-200">
              Contato
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 Daniel Bork. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer