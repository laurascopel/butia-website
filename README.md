# Butiá — Site Institucional

Site institucional da **Butiá**, assessoria de comunicação especializada no mercado audiovisual brasileiro.

## Sobre a Butiá

A Butiá nasce da necessidade de um olhar integrado sobre a divulgação de obras cinematográficas. Diferente de uma assessoria de imprensa tradicional, voltada majoritariamente à imprensa e à crítica, a proposta atua na construção da presença pública da obra, desenvolvendo materiais, campanhas e estratégias de comunicação multiplataforma — do pré à pós-produção e distribuição.

## Tecnologias

- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)** — biblioteca de UI e bundler/dev server
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[React Router](https://reactrouter.com/)** — roteamento entre páginas
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilização utilitária
- **[Framer Motion](https://www.framer.com/motion/)** — animações de entrada e transições
- **[Biome](https://biomejs.dev/)** — linter e formatter
- **[clsx](https://github.com/lukeed/clsx)** — concatenação segura de classes condicionais

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

## Licença

Este projeto foi desenvolvido para uso exclusivo da Butiá. Todos os direitos de marca, identidade visual e conteúdo pertencem à Butiá.

---

Desenvolvido por [Laura](https://github.com/laurascopel) 