# 🚗 Desafio Angular - Dashboard de Veículos Ford

Um dashboard moderno e responsivo para monitoramento de veículos Ford, desenvolvido com Angular no frontend e Node.js/Express no backend.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)

## 📋 Sobre o Projeto

Este projeto é um sistema de dashboard para monitoramento de frota de veículos Ford, com funcionalidades de:

- 📊 **Dashboard interativo** com métricas de veículos
- 🔐 **Sistema de autenticação** seguro
- 🚗 **Catálogo de veículos** com imagens e dados técnicos
- 📍 **Busca por VIN** com localização em tempo real
- 📱 **Interface responsiva** para desktop e mobile

## 🏗️ Arquitetura

```
📁 Projeto
├── 🎨 frontend/          # Aplicação Angular
│   ├── 📱 src/app/       # Código fonte
│   │   ├── 🏠 home/      # Página inicial
│   │   ├── 🔑 login/     # Sistema de login
│   │   ├── 📊 dashboard/ # Dashboard principal
│   │   └── 🔧 service/   # Serviços da API
│   └── 📦 package.json   # Dependências Angular
├── ⚙️ backend/           # API REST
│   ├── 🚀 api.js         # Servidor Express
│   ├── 📄 db.json        # Dados mock (JSON Server)
│   └── 📦 package.json   # Dependências Node.js
└── 📋 README.md          # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular 17+** - Framework SPA moderno
- **TypeScript** - Tipagem estática
- **RxJS** - Programação reativa
- **Angular Material** - Componentes UI
- **SCSS** - Estilização avançada

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **CORS** - Compartilhamento de recursos
- **JSON Server** - API REST mock

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/liannegrao/Desafio_Angular_Lian-Negrao.git
cd Desafio_Angular_Lian-Negrao
```

### 2. Instale as dependências
```bash
# Instalar dependências do projeto raiz
npm install

# Instalar dependências do frontend
cd frontend
npm install
cd ..

# Instalar dependências do backend
cd backend
npm install
cd ..
```

### 3. Execute o projeto
```bash
# Na raiz do projeto, execute todos os serviços
npm start
```

Isso iniciará:
- 🌐 **Frontend Angular**: http://localhost:4200
- 🚀 **API Express**: http://localhost:3002
- 📊 **JSON Server**: http://localhost:3001

## 🔧 Scripts Disponíveis

### Projeto Raiz
```bash
npm start          # Inicia todos os serviços (frontend + backend + json-server)
npm run dev        # Alias para npm start
```

### Frontend (Angular)
```bash
cd frontend
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Build para produção
npm run test       # Executa os testes
npm run lint       # Verifica qualidade do código
```

### Backend
```bash
cd backend
npm start          # Inicia o servidor Express
npm run backend    # Alias para npm start
npm run json-server # Inicia apenas o JSON Server
```

## 🔑 Acesso ao Sistema

### Credenciais de Login
- **Usuário**: `admin`
- **Senha**: `1234`

### Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/login` | Autenticação de usuário |
| `GET` | `/vehicles` | Lista todos os veículos |
| `POST` | `/vehicleData` | Busca dados por VIN |

### Veículos Disponíveis
- 🚙 **Ford Ranger** - Pickup robusta
- 🏎️ **Ford Mustang** - Esportivo icônico
- 🚐 **Ford Territory** - SUV familiar
- 🏔️ **Ford Bronco Sport** - SUV aventureiro

## 🎨 Funcionalidades

### 📊 Dashboard
- Visualização de métricas de frota
- Gráficos interativos
- Status em tempo real dos veículos

### 🔍 Busca por VIN
- Consulta detalhada por código VIN
- Informações de odômetro, combustível e localização
- Status operacional do veículo

### 📱 Interface Responsiva
- Design moderno e intuitivo
- Compatível com desktop, tablet e mobile
- Tema consistente e profissional

## 🛠️ Desenvolvimento

### Estrutura de Pastas
```
frontend/src/app/
├── componentes/          # Componentes da aplicação
│   ├── dashboard/       # Dashboard principal
│   ├── home/           # Página inicial
│   └── login/          # Formulário de login
├── models/             # Interfaces TypeScript
├── service/            # Serviços da API
└── app.config.ts       # Configuração da aplicação
```

### Variáveis de Ambiente
Para configurar diferentes ambientes, crie arquivos `.env`:
```bash
# frontend/.env
API_URL=http://localhost:3002

# backend/.env
PORT=3002
NODE_ENV=development
```

## 🧪 Testes

```bash
# Frontend
cd frontend
npm run test           # Testes unitários
npm run test:ci        # Testes em CI/CD

# Backend
cd backend
npm test              # Testes da API
```

## 📦 Build para Produção

```bash
# Frontend
cd frontend
npm run build --prod

# Backend
cd backend
npm run build         # Se aplicável
```

## 🚀 Deploy

### Arquitetura Atual: Vercel (Frontend + Serverless Functions)

O projeto usa uma arquitetura unificada no Vercel para máxima simplicidade:

- 🌐 **Frontend**: Vercel (Static Site)
- 🚀 **Backend**: Vercel (Serverless Functions)

### Deploy Automático no Vercel

1. **Conecte seu repositório GitHub ao Vercel**
2. **Vercel detectará automaticamente:**
   - ✅ Frontend Angular (`frontend/`)
   - ✅ API Serverless (`api/`)
   - ✅ Configurações (`vercel.json`)

3. **Deploy automático** - Toda alteração no `main` será deployada

**URLs após deploy:**
- 🌐 **Frontend**: `https://seu-projeto.vercel.app`
- 🚀 **API**: `https://seu-projeto.vercel.app/api/*`

### Desenvolvimento Local
```bash
# Para desenvolvimento (com backend local)
npm run dev

# Para produção (simula Vercel)
npm run build
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Lian Negrao**
- GitHub: [@liannegrao](https://github.com/liannegrao)
- LinkedIn: [Seu LinkedIn]

## 🙏 Agradecimentos

- Ford Motor Company pelos assets dos veículos
- Comunidade Angular pela documentação excepcional
- Express.js pela simplicidade e robustez

---

<div align="center">
  <p>Feito com ❤️ e muita ☕</p>
  <p>
    <a href="#-desafio-angular---dashboard-de-veículos-ford">Voltar ao topo</a>
  </p>
</div>
