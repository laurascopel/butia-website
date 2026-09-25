# Butiá — Site Institucional

Site institucional da **[Butiá](https://butiacinema.com.br/)**, assessoria de comunicação especializada no mercado audiovisual brasileiro.

<img width="2520" height="1080" alt="butia" src="https://github.com/user-attachments/assets/cc8ee5df-80c5-470e-9ae8-a4a4b916ed10" />

## Sobre a Butiá

A Butiá nasce da necessidade de um olhar integrado sobre a divulgação de obras cinematográficas. Diferente de uma assessoria de imprensa tradicional, voltada majoritariamente à imprensa e à crítica, a proposta atua na construção da presença pública da obra, desenvolvendo materiais, campanhas e estratégias de comunicação multiplataforma — do pré à pós-produção e distribuição.

## Tecnologias

- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)** 
- **[React Router](https://reactrouter.com/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[Framer Motion](https://www.framer.com/motion/)**
- **[Biome](https://biomejs.dev/)**
- **[Formspree](https://formspree.io/)**

Componentes de UI construídos sob medida, sem dependência de bibliotecas de componentes prontos.

## Estrutura do projeto

```
src/
├── assets/           # Logos, ilustrações e vetores
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas da aplicação
├── App.tsx            # Definição das rotas
├── main.tsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais e tema Tailwind
```

## Como rodar o projeto localmente

### Instalação

```bash
# Clone o repositório
git clone https://github.com/laurascopel/butia-website.git

# Acesse a pasta do projeto
cd butia-website

# Instale as dependências
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

### Lint e formatação

```bash
npm run lint
```

## Deploy

O site está hospedado no **[Cloudflare Pages](https://pages.cloudflare.com/)**, com deploy automático via integração com o GitHub.

## Licença

Este projeto foi desenvolvido para uso exclusivo da Butiá. Todos os direitos de marca, identidade visual e conteúdo pertencem à Butiá.
