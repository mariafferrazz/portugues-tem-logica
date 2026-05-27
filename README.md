Português Tem Lógica

Plataforma educacional desenvolvida para transformar o aprendizado da língua portuguesa em uma experiência interativa, acessível e intuitiva.

O projeto foi pensado para unir educação e tecnologia, oferecendo uma interface moderna, responsiva e organizada para alunos acompanharem conteúdos, progresso e atividades.

Sobre o Projeto

O Português Tem Lógica é uma plataforma web focada no ensino da língua portuguesa através de lições organizadas, acompanhamento de progresso e experiência personalizada para o usuário.

A aplicação está sendo desenvolvida com foco em:

Experiência do usuário (UX)
Interface moderna e responsiva
Organização de conteúdos educacionais
Sistema de autenticação
Persistência de dados
Escalabilidade da aplicação
Objetivos da Plataforma
Facilitar o aprendizado da língua portuguesa
Tornar o estudo mais visual e intuitivo
Permitir acompanhamento de progresso do aluno
Centralizar conteúdos em uma plataforma moderna
Criar uma estrutura escalável para futuras funcionalidades
Funcionalidades Desenvolvidas
Autenticação de Usuário
Cadastro de usuários
Login de usuários
Proteção de rotas
Persistência de sessão
Integração com banco de dados
Sistema de Lições
Organização de conteúdos por módulos
Estrutura de aulas e lições
Navegação entre conteúdos
Registro de progresso do aluno
Salvamento automático do progresso
Controle de Progresso
Acompanhamento das lições concluídas
Registro individual por usuário
Integração entre usuários e progresso no banco de dados
Responsividade

A plataforma está sendo desenvolvida com foco em experiência responsiva para:

Desktop
Tablets
Smartphones
Interface e Experiência do Usuário
Layout moderno
Componentização da interface
Navegação intuitiva
Estrutura visual limpa
Foco em acessibilidade e usabilidade
Tecnologias Utilizadas
Client
HTML5
CSS3
JavaScript
React
TailwindCSS
Server
Node.js
Express.js
Banco de Dados
MySQL
Prisma ORM
Ferramentas e Versionamento
Git
GitHub
VS Code
Estrutura do Projeto
portugues-tem-logica/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── styles/
│
├── server/
│   ├── prisma/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md
Banco de Dados

O projeto utiliza relacionamento entre tabelas para gerenciamento de:

Usuários
Lições
Progresso do aluno
Controle de autenticação

Estrutura pensada para expansão futura da plataforma.

Funcionalidades em Desenvolvimento
Área do Aluno
Dashboard personalizada
Histórico de progresso
Continuação automática de estudos
Sistema Gamificado
Pontuação
Conquistas
Sistema de evolução
Melhorias Futuras
Certificados
Exercícios interativos
Quiz em tempo real
Painel administrativo
Ranking de alunos
Sistema de comentários
Upload de materiais
Segurança

A aplicação está sendo estruturada com:

Validação de dados
Proteção de rotas privadas
Autenticação segura
Separação entre client e server
Como Rodar o Projeto
Clone o repositório
git clone https://github.com/seu-usuario/portugues-tem-logica.git
Acesse as pastas
cd portugues-tem-logica
Instale as dependências
Client
cd client
npm install
Server
cd server
npm install
Configure o banco de dados

Crie um arquivo .env com:

DATABASE_URL="mysql://usuario:senha@localhost:3306/portugues_tem_logica"
Rode as migrations do Prisma
npx prisma migrate dev
Inicie o projeto
Server
npm run dev
Client
npm start
Aprendizados Durante o Desenvolvimento

Durante o desenvolvimento do projeto estão sendo aplicados conhecimentos em:

Desenvolvimento Full Stack
Arquitetura de aplicações web
Banco de dados relacionais
Responsividade
Componentização com React
Integração API REST
Gerenciamento de estados
Organização de código
UX/UI Design
Status do Projeto

🚧 Em desenvolvimento

A plataforma continua recebendo melhorias, novas funcionalidades e otimizações.

Desenvolvedora

Desenvolvido por Maria Gabriella Ferraz.

GitHub: https://github.com/mariafferrazz
LinkedIn: https://www.linkedin.com/in/maria-gabriella-ferraz-6aa7b914a/
Considerações Finais

O projeto Português Tem Lógica representa a união entre tecnologia e educação, buscando criar uma plataforma acessível, moderna e eficiente para auxiliar estudantes no aprendizado da língua portuguesa.

Além do desenvolvimento técnico, o projeto também reforça práticas de organização, experiência do usuário e construção de aplicações escaláveis para ambientes reais.