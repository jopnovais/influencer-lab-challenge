# Influencers Lab - Criação de Avatares

  **Deploy do Projeto**
  https://influencer-lab-challenge.netlify.app
  
## Tecnologias Utilizadas
- **React / Next.js (App Router):** Framework principal para construção da interface e roteamento.
- **Tailwind CSS:** Estilização utilitária para um design rápido, consistente e altamente customizado (modo *dark* com tons em violeta).
- **Zustand:** Gerenciamento de estado global. Utilizado para persistir os dados do influenciador entre as diferentes etapas do formulário sem a necessidade de *prop drilling*.
- **Radix UI:** Componentes primitivos acessíveis. Implementado um contexto customizado (`RadioGroupDeselectContext`) por cima do Radix para permitir que os itens do formulário funcionem como *toggles* (marcar/desmarcar com um clique).
- **React Dropzone:** Upload de imagens com suporte a *drag and drop* para a referência visual do avatar.
- **Lucide React:** Biblioteca de ícones vetoriais.

---

## Como rodar o projeto

Pré-requisitos: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina (versão 18+ recomendada).

1. **Clone o repositório:**
```bash
git clone [https://github.com/jopnovais/influencer-lab-challenge.git]
```

Acesse a pasta do projeto:
```Bash
cd nome-do-repositorio
Instale as dependências:
```

```Bash
npm install
# ou yarn install / pnpm install
Inicie o servidor de desenvolvimento:
```

```Bash
npm run dev
Acesse no navegador:
Abra http://localhost:3000 para ver o projeto rodando.
```
 
 **Decisões Técnicas**
- Gerenciamento de Estado com Zustand: Em formulários multi-step complexos, manter o estado no componente pai pode causar re-renderizações desnecessárias. O Zustand foi escolhido por ser extremamente leve, dispensar boilerplate excessivo (como no Redux) e permitir que qualquer etapa do formulário leia ou atualize os dados do avatar de forma independente e reativa.

- Componentização Avançada (Context API + Radix): Em vez de espalhar lógicas condicionais complexas por cada tela para permitir desmarcar opções de rádio, encapsulamos essa lógica nativamente num contexto (useRadioGroupDeselect) dentro do componente base do RadioGroup. Isso tornou o código das páginas incrivelmente limpo e escalável.

- Layout "Dashboard-like": A interface foi dividida usando Flexbox (h-screen, flex-col xl:flex-row, overflow-hidden), separando uma Sidebar de navegação fixa do conteúdo principal que possui seu próprio scroll (overflow-y-auto oculto com CSS customizado). Isso garante que o Stepper e o Header fiquem sempre visíveis, proporcionando uma sensação fluida de Single Page Application nativa.

- Mobile-First e Acessibilidade: A Sidebar foi adaptada para um modelo Drawer no mobile com um overlay para bloqueio de tela, protegendo o layout principal.

**O que faria diferente com mais tempo**

- Validação de Formulários Avançada: Implementaria o React Hook Form integrado com o Zod para validar campos obrigatórios antes de permitir que o usuário avance no Stepper, exibindo mensagens de erro visuais.

- Edição e Crop de Imagem: Na etapa de upload de referência visual, adicionaria uma biblioteca de corte (como o react-image-crop) para permitir que o usuário ajuste a imagem antes de salvá-la no estado.

- Animações Mais Fluidas: Utilizaria o Framer Motion para gerenciar as transições entre os steps do formulário (animações de slide suaves na montagem e desmontagem dos componentes).

- Persistência de Dados e Backend: Integração com um banco de dados (ex: Supabase, Prisma + PostgreSQL) para salvar os projetos incompletos em rascunho e permitir gerenciar "Meus projetos" na Sidebar.

- Testes Automatizados: Criação de testes unitários para os componentes customizados (ex: garantir que a lógica de deselect do RadioCard nunca quebre) utilizando o Jest + React Testing Library, e testes E2E com o Cypress para simular o fluxo completo de criação de um avatar.
