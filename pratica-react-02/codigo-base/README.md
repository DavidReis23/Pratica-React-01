````markdown
# 🚗 Prática React 02 - Consumo de APIs, Manipulação de Dados e Roteamento

Este projeto é a continuação da primeira prática de React da disciplina de Programação Web II. O objetivo desta etapa foi expandir a aplicação de anúncios de veículos implementando navegação entre páginas, consumo de uma API REST simulada e manipulação de estado.

## 🚀 Funcionalidades Implementadas

- **Roteamento Dinâmico:** Navegação fluida entre a página inicial, página de cadastro e página de detalhes usando o `react-router-dom`.
- **Cadastro de Anúncios (POST):** Formulário interativo para adicionar novos veículos ao banco de dados simulado.
- **Página de Detalhes (GET):** Rota dinâmica (`/anuncio/:id`) que busca e exibe as informações completas de um veículo específico.
- **Busca em Tempo Real:** Filtro de pesquisa na página inicial que manipula os dados em memória para uma experiência de usuário instantânea.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js (com Vite)
- **Roteamento:** React Router DOM
- **Backend/API:** JSON Server (API REST fake local)
- **Estilização:** CSS puro

## ⚙️ Como rodar o projeto localmente

Para que a aplicação funcione corretamente, é necessário rodar o servidor do banco de dados (API) e o servidor do frontend simultaneamente em terminais separados.

### Passo 1: Rodar a API (Backend)

Abra um terminal, navegue até a pasta do backend e inicie o servidor:

```bash
cd codigo-base/backend
npm install
npm start
```
````

_O JSON Server estará rodando em `http://localhost:3000_`

### Passo 2: Rodar o Frontend (React)

Abra um **novo** terminal (mantendo o do backend rodando), navegue até a pasta do frontend e inicie a aplicação:

```bash
cd codigo-base/frontend
npm install
npm run dev

```

_A aplicação estará disponível no seu navegador em `http://localhost:5173_`

---

Desenvolvido por David da Silva do Reis e Ana Rosimeire Ferreira da Silva - Análise e Desenvolvimento de Sistemas.
