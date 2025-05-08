# Care Time 🩺

Sistema web para gerenciamento de exames, agendamentos e usuários em ambiente hospitalar.

## ✨ Tecnologias

### Frontend
- React
- TypeScript
- Axios

### Backend
- Node.js
- Express
- TypeScript
- Knex.js
- PostgreSQL

## 🌐 Demo

- Demonstração: [self-hosted on raspberry pi](https://care-time.ibonny.uk)

---

## 🚀 Instalação e execução local

1. **Clone o repositório:**
```
git clone https://github.com/seu-usuario/care-time.git
cd care-time
```

2. **Configure o banco de dados:**
```
npm install
```

3. **Configure o banco de dados:**
criar arquivo ".env"
```
DATABASE_URL=postgres://usuario:senha@localhost:5432/caretime
PORT=8080
```

4. **Execute as migrations:**
```
npx knex migrate:latest
```

5. **Inicie o projetos: Back e Front**
```
npm run start:server
start:frontend
```

Estrutura do Projeto 
.
├── server/
│   ├── routes/
│   ├── database/
│   ├── server.ts
│   └── knexfile.ts
├── frontend/
│   ├── src/
├── dist/ (gerado após build do backend)
├── package.json
└── README.md
