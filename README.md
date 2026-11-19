# ALIA — Alerta Inteligente de Apoio

## Sobre o projeto

O **ALIA** é um projeto acadêmico desenvolvido com o objetivo de propor uma solução tecnológica voltada à segurança feminina, utilizando recursos digitais para facilitar o registro e o acompanhamento de situações de risco.

A proposta reúne três elementos principais:

- **Aplicativo mobile:** permite que a usuária acione um alerta SOS e acompanhe o andamento de uma ocorrência.
- **Plataforma web:** apresenta informações sobre o projeto, orientações de segurança e canais de apoio.
- **Central ALIA:** ambiente de gerenciamento no qual operadores autenticados podem visualizar e atualizar o status das ocorrências.

O projeto também contempla o conceito de um **dispositivo vestível discreto**, pensado para permitir o acionamento de alertas em situações de emergência. Nesta etapa, seu funcionamento é representado por uma simulação no aplicativo.

## Objetivo

Desenvolver uma solução integrada, acessível e intuitiva que demonstre como tecnologias web e mobile podem contribuir para a criação de ferramentas de apoio à segurança feminina.

O ALIA busca oferecer uma experiência simples para a usuária e uma interface organizada para o acompanhamento de ocorrências.

## Funcionalidades

### Plataforma web

- Página inicial responsiva com apresentação do ALIA.
- Informações sobre o funcionamento da solução.
- Conteúdo de conscientização e orientação.
- Divulgação de canais oficiais de apoio, como 180 e 190.
- Navegação entre a página institucional e a Central ALIA.

### Central ALIA

- Autenticação de operadores por e-mail e senha.
- Controle de acesso à área administrativa.
- Listagem de ocorrências registradas no banco de dados.
- Indicadores de ocorrências pendentes, em acompanhamento e concluídas.
- Busca e filtragem de registros.
- Atualização do status das ocorrências.
- Persistência das alterações no Supabase.
- Encerramento de sessão.

### Integração com o aplicativo mobile

O aplicativo mobile e a plataforma web utilizam o mesmo projeto Supabase.

Quando uma usuária autenticada aciona o SOS demonstrativo no aplicativo, uma nova ocorrência é registrada no banco de dados.

A Central ALIA pode consultar essa ocorrência e atualizar seu status. O aplicativo consulta periodicamente o banco para refletir as alterações realizadas pelo operador.

O fluxo integrado contempla:

1. Autenticação da usuária no aplicativo.
2. Acionamento do SOS demonstrativo.
3. Registro da ocorrência no Supabase.
4. Visualização da ocorrência na Central ALIA.
5. Atualização do status pelo operador.
6. Sincronização das alterações com o aplicativo.
7. Encerramento do modo de emergência demonstrativo após a conclusão da ocorrência.

## Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface web |
| Vite | Ambiente de desenvolvimento e compilação |
| JavaScript | Lógica e interatividade da plataforma |
| HTML5 e CSS3 | Estrutura, estilização e responsividade |
| React Router DOM | Navegação entre páginas |
| Lucide React | Ícones da interface |
| Supabase | Autenticação e integração com o banco de dados |
| PostgreSQL | Armazenamento das ocorrências |
| Git e GitHub | Versionamento e disponibilização do código |
| Netlify | Hospedagem prevista para a plataforma web |

O aplicativo mobile integrado foi desenvolvido com **React Native, Expo e TypeScript**.

## Estrutura do projeto

```text
alia-web/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Central.jsx
│   ├── services/
│   │   └── supabase.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── central.css
│   │   └── login.css
│   └── App.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Acesso a um projeto Supabase configurado.
- Git, caso deseje clonar o repositório.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/alia-web.git
```

Acesse a pasta:

```bash
cd alia-web
```

Instale as dependências:

```bash
npm install
```

### Configuração do Supabase

Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis:

```env
VITE_SUPABASE_URL=URL_DO_SEU_PROJETO
VITE_SUPABASE_PUBLISHABLE_KEY=SUA_CHAVE_PUBLICAVEL
```

Utilize somente a chave publicável do Supabase. Nunca adicione chaves secretas ou senhas ao repositório.

A configuração do banco de dados, das políticas de acesso e das contas de demonstração deve ser realizada separadamente no Supabase.

### Inicialização

Execute:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
```

## Interface e experiência do usuário

A identidade visual do ALIA utiliza tons de vinho, rosa, preto e branco, buscando transmitir acolhimento, seriedade e clareza.

A interface foi desenvolvida considerando:

- Layout responsivo para diferentes tamanhos de tela.
- Navegação simples e organizada.
- Hierarquia visual para destacar informações importantes.
- Contraste entre elementos e textos.
- Identificação visual dos status das ocorrências.
- Feedback visual para ações e interações.

A plataforma web e o aplicativo mobile compartilham uma proposta visual coerente, mas apresentam interfaces adaptadas às necessidades de cada ambiente.

## Segurança e controle de acesso

A autenticação é realizada pelo Supabase Auth.

A Central ALIA possui acesso restrito a contas cadastradas como operadores. As ocorrências são armazenadas no PostgreSQL e protegidas por políticas de segurança em nível de linha (Row Level Security — RLS).

As usuárias do aplicativo podem registrar e consultar suas próprias ocorrências, enquanto operadores autorizados podem consultar e atualizar os registros da Central.

## Limitações do protótipo

O ALIA foi desenvolvido para fins acadêmicos e de demonstração.

O dispositivo vestível é conceitual, e o acionamento SOS é simulado pelo aplicativo. O sistema não realiza acionamentos reais de serviços policiais, equipes de emergência ou contatos pessoais.

A integração implementada demonstra o registro e o acompanhamento de ocorrências entre duas plataformas, mas não representa uma infraestrutura operacional de atendimento emergencial.

## Próximas melhorias

- Notificações em tempo real para novas ocorrências.
- Recuperação do histórico completo de ocorrências após reiniciar o aplicativo.
- Integração com um dispositivo vestível físico.
- Aprimoramento dos recursos de acessibilidade.
- Ampliação dos testes de segurança e confiabilidade.
- Aperfeiçoamento do gerenciamento de ocorrências e das permissões dos operadores.

## Integrantes

- Yuri Guerreiro Lopes de Avila
- [Nome da segunda integrante]

## Considerações finais

O projeto ALIA demonstra a integração entre desenvolvimento web, aplicativo mobile, autenticação e banco de dados em uma solução voltada a uma questão social relevante.

A implementação permite simular o envio de alertas pelo aplicativo e seu acompanhamento por uma Central web, evidenciando a comunicação entre as plataformas e a aplicação prática das tecnologias estudadas.

**Projeto acadêmico — ALIA.**