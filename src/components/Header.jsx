import React from 'react'
import { FaDownload, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ]

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-effect bg-dark-surface/80 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-accent-purple">
            <img src="src\assets\logo-unBork-invert.webp" alt="logo-unbork" className='h-10'/>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 justify-end">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-accent-purple transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-400" />
              )}
            </button> */}
            
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header