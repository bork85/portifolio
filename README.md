# Portfólio Tech - Daniel Bork

Um portfólio tech minimalista e premium que posiciona o profissional como um especialista maduro com forte bagagem técnica e experiência Full Stack.

## 🎨 Design e Estilo

- **Tema**: Dark mode padrão com tons de grafite escuro
- **Acentos**: Azul-violeta elétrico (#8b5cf6) e verde-esmeralda (#10b981)
- **Estilo**: Minimalista premium com efeitos glassmorphism
- **Animações**: Fade-in on scroll, micro-interações, transições suaves

## 🚀 Funcionalidades Magnéticas

- **Navbar fixa com backdrop blur**
- **Layout Hero em duas colunas**
- **Cards de skills com hover effects**
- **Grid responsivo de projetos com zoom effects**
- **Toggle de tema Dark/Light**
- **Total responsividade (mobile-first)**

## 🛠 Tecnologias Utilizadas

- **React 18** para desenvolvimento frontend
- **Tailwind CSS** para estilização
- **React Icons** para ícones
- **Vite** para build e desenvolvimento rápido
- **Framer Motion** para animações (opcional)

## 📦 Instalação e Execução

1. Instale as dependências:

```bash
npm install
```

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

1. Acesse o projeto no navegador:

```bash
http://localhost:3000
```

## 🏗 Estrutura de Componentes

```bash
src/
├── components/
│   ├── Header.jsx      # Navegação e toggle de tema
│   ├── Hero.jsx        # Seção hero com duas colunas
│   ├── About.jsx       # Sobre mim com storytelling
│   ├── Skills.jsx      # Cards de habilidades
│   ├── Projects.jsx    # Grid de projetos
│   └── Footer.jsx      # Rodapé
├── App.jsx            # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:

- **Mobile**: Layout vertical adaptado
- **Tablet**: Grid adaptado
- **Desktop**: Layout completo com duas colunas

## 🎯 Diretrizes Implementadas

1. **Header/Navbar**: Fixa, com backdrop blur e links ancorados
2. **Hero Badge**: "Disponível para novos projetos e desafios sênior"
3. **Storytelling**: Foco em experiência de 20+ anos e transição especializada
4. **Skills Cards**: Categorizadas com hover effects elegantes
5. **Projetos**: Grid com casos de sucesso e links funcionais
6. **Performance**: Código otimizado, carregamento rápido

## 🎨 Personalização

- **Cores**: Modifique em `tailwind.config.js`
- **Animações**: Ajuste em `index.css`
- **Conteúdo**: Edite os componentes individuais
- **Imagens**: Substitua os placeholders por suas próprias fotos

## 🚀 Deploy

Para gerar o build para produção:

```bash
npm run build
```

O build será gerado na pasta `dist/` e pode ser deployado em qualquer servidor estático.
