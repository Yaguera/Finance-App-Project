<h1 align="center">Finance Dashboard API</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-in%20development-yellow.svg)]()
[![Node](https://img.shields.io/badge/node.js-API-green)]()
[![License](https://img.shields.io/badge/license-ISC-blue)]()
[![Made By](https://img.shields.io/badge/Made%20By-Yago%20Gomes-blue)]()

</div>

<br>

## 👨🏻‍💻 Projeto

Esta é uma **API REST** robusta para um **Dashboard Financeiro**, desenvolvida para gerenciar usuários e transações com foco em escalabilidade e manutenção. 

A aplicação foi construída utilizando **Node.js** e segue rigorosamente os princípios de **Clean Architecture**, garantindo que as regras de negócio sejam independentes de frameworks e bancos de dados.

<br>

## 🎯 Objetivo

O projeto visa fornecer uma base sólida para controle financeiro pessoal ou empresarial, permitindo:

- **Gestão de Usuários**: Cadastro seguro com criptografia de senhas.
- **Controle de Transações**: Registro de receitas (Earnings), despesas (Expenses) e investimentos.
- **Arquitetura Escalável**: Facilidade para trocar o banco de dados ou adicionar novas funcionalidades sem afetar o núcleo da aplicação.

### 🏗️ Arquitetura
A aplicação segue o fluxo de responsabilidades:
**Controller** (Entrada) → **UseCase** (Regra de Negócio) → **Repository** (Dados) → **Database** (Persistência)

<br>

## 💻 Tecnologias & Ferramentas

- **Runtime**: [Node.js](https://nodejs.org/) (v20+)
- **Framework**: [Express](https://expressjs.com/)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)
- **ORM/Query Builder**: [pg (node-postgres)](https://node-postgres.com/)
- **Segurança**: [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) para hash de senhas e [UUID](https://github.com/uuidjs/uuid) para IDs.
- **Padronização**: [ESLint](https://eslint.org/), [Husky](https://typicode.github.io/husky/), [Commitlint](https://commitlint.js.org/) e [Lint-staged](https://github.com/okonet/lint-staged).
- **Ambiente**: [Docker](https://www.docker.com/) (em breve).

<br>

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado.
- Instância do PostgreSQL rodando localmente ou via Docker.

### Configuração
1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz:
   ```env
   PORT=3000
   POSTGRES_USER=seu_usuario
   POSTGRES_PASSWORD=sua_senha
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_DATABASE=financeapp
   ```
4. Execute as migrações para criar as tabelas:
   ```bash
   npm run migrations
   ```
5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

<br>

## 📁 Estrutura de Pastas

```text
src/
├── controllers/    # Camada de entrada (HTTP)
├── use-cases/      # Regras de negócio
├── repositories/   # Interface de comunicação com o banco
└── db/             # Configurações de banco e migrations
```

<br>

## 📄 Licença

Este projeto está sob a licença [ISC](https://opensource.org/licenses/ISC).

---
<p align="center">Desenvolvido com ❤️ por Yago Gomes</p>
