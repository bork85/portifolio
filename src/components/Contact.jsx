import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from 'react-icons/fa'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState(null)

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        form.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-400">
            Tem um projeto em mente? Entre em contato.
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nome</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent-purple transition-colors duration-200"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">E-mail</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent-purple transition-colors duration-200"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Assunto</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent-purple transition-colors duration-200"
              placeholder="Sobre o que você quer falar?"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Mensagem</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent-purple transition-colors duration-200 resize-none"
              placeholder="Descreva seu projeto ou dúvida..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-accent-purple hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200 hover:scale-[1.02]"
          >
            <FaPaperPlane />
            <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}</span>
          </button>

          {status === 'success' && (
            <p className="text-center text-accent-emerald">Mensagem enviada com sucesso!</p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400">Erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
