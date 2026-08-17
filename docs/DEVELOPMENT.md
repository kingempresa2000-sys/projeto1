# Guia Completo de Desenvolvimento

## 📋 Índice

1. [Setup Inicial](#setup-inicial)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Como Executar](#como-executar)
5. [Fluxos de Negócio](#fluxos-de-negócio)
6. [API Endpoints](#api-endpoints)
7. [Padrões de Código](#padrões-de-código)
8. [Troubleshooting](#troubleshooting)

## Setup Inicial

### Pré-requisitos

- Node.js 18+ ([Download](https://nodejs.org/))
- npm ou yarn
- PostgreSQL 14+ ([Download](https://www.postgresql.org/))
- Redis ([Download](https://redis.io/))
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kingempresa2000-sys/projeto1.git
cd projeto1

# Instale as dependências
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Mobile
cd ../mobile
npm install
```

### Configuração de Variáveis de Ambiente

1. Copie `.env.example` para `.env` em cada pasta
2. Preencha os valores necessários:

**Backend (.env)**
```
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://postgres:password@localhost:5432/projeto1
JWT_SECRET=sua_chave_jwt_super_secreta
STRIPE_SECRET_KEY=sua_chave_stripe
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_MAPS_API_KEY=sua_chave_google_maps
```

**Mobile (.env)**
```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_SOCKET_URL=http://localhost:3001
```

## Estrutura do Projeto

```
projeto1/
├── backend/                    # API Node.js + Express
│   ├── src/
│   │   ├── server.js          # Entrada principal
│   │   ├── routes/            # Rotas da API
│   │   ├── models/            # Modelos de dados (a implementar)
│   │   ├── controllers/       # Lógica de negócio (a implementar)
│   │   ├── middleware/        # Middlewares (autenticação, etc)
│   │   ├── database/          # Conexão e migrações
│   │   ├── utils/             # Funções auxiliares
│   │   └── services/          # Serviços de negócio (a implementar)
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
│
├── frontend/                   # App React Web
│   ├── src/
│   │   ├── App.js             # Componente principal
│   │   ├── index.js           # Entrada
│   │   ├── pages/             # Páginas da aplicação
│   │   ├── components/        # Componentes reutilizáveis (a implementar)
│   │   ├── services/          # Chamadas à API
│   │   ├── slices/            # Redux slices
│   │   ├── store.js           # Redux store
│   │   └── utils/             # Utilitários
│   ├── public/
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
│
├── mobile/                     # App React Native
│   ├── src/
│   │   ├── screens/           # Telas do app
│   │   ├── components/        # Componentes (a implementar)
│   │   ├── services/          # Chamadas à API
│   │   ├── slices/            # Redux slices
│   │   ├── store.js           # Redux store
│   │   └── utils/             # Utilitários
│   ├── App.js                 # Entrada
│   ├── app.json               # Configuração Expo
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
│
├── docs/                       # Documentação
│   ├── API.md                 # Documentação da API
│   ├── AUTHENTICATION.md      # Fluxo de autenticação
│   ├── DATABASE.md            # Estrutura do BD
│   └── DEPLOYMENT.md          # Deploy (a implementar)
│
├── docker-compose.yml         # Orquestração de containers
├── .gitignore
├── .env.example
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## Stack Tecnológico

### Backend
- **Node.js + Express**: Framework web
- **PostgreSQL**: Banco de dados relacional
- **Redis**: Cache e fila de mensagens
- **Socket.io**: Comunicação em tempo real
- **JWT**: Autenticação
- **Stripe**: Processamento de pagamentos
- **Google Maps API**: Localização e rotas

### Frontend (Web)
- **React 18**: Biblioteca UI
- **Redux Toolkit**: Gerenciamento de estado
- **Material-UI**: Componentes de UI
- **Axios**: Cliente HTTP
- **React Router**: Roteamento
- **Socket.io-client**: WebSockets

### Mobile
- **React Native + Expo**: Desenvolvimento mobile
- **Redux Toolkit**: Gerenciamento de estado
- **React Navigation**: Navegação
- **React Native Maps**: Mapas
- **Expo Location**: Geolocalização
- **React Native Paper**: UI components

## Como Executar

### Opção 1: Com Docker Compose (Recomendado)

```bash
# Copie as variáveis de ambiente
cp .env.example .env

# Inicie todos os serviços
docker-compose up -d

# Verifique os logs
docker-compose logs -f

# Acesse as aplicações
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# API Health: http://localhost:3001/health
```

### Opção 2: Localmente (Desenvolvimento)

**Terminal 1 - Banco de dados**
```bash
# Inicie PostgreSQL (ou use Docker)
docker run --name projeto1-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=projeto1 \
  -p 5432:5432 \
  -d postgres:15-alpine
```

**Terminal 2 - Cache**
```bash
# Inicie Redis (ou use Docker)
docker run --name projeto1-redis \
  -p 6379:6379 \
  -d redis:7-alpine
```

**Terminal 3 - Backend**
```bash
cd backend
npm install
npm run dev
# Rodando em http://localhost:3001
```

**Terminal 4 - Frontend**
```bash
cd frontend
npm install
npm start
# Rodando em http://localhost:3000
```

**Terminal 5 - Mobile**
```bash
cd mobile
npm install
npm start
# Scan o QR code com Expo Go
```

## Fluxos de Negócio

### 1. Fluxo de Registro e Login

```
Usuário
  ↓
[Registrar] → Validação → Banco de Dados → Email de Confirmação
  ↓
[Login] → Validação → JWT Token → App Autenticado
```

### 2. Fluxo de Viagem (Passageiro)

```
Passageiro
  ↓
[Solicitar Viagem] → Localizar Motoristas → Notificação (Socket.io)
  ↓
[Motorista Aceita] → Chat em Tempo Real → Rastreamento GPS
  ↓
[Viagem Inicia] → Pagamento → Rating
```

### 3. Fluxo de Viagem (Motorista)

```
Motorista Online
  ↓
[Recebe Solicitação] → Aceita/Recusa → GPS Compartilhado
  ↓
[Iniciando Viagem] → Chat com Passageiro → Navegação
  ↓
[Completar] → Recebe Pagamento → Ser Avaliado
```

## API Endpoints

### Autenticação

```
POST   /api/auth/register      Registrar novo usuário
POST   /api/auth/login         Fazer login
POST   /api/auth/logout        Fazer logout
POST   /api/auth/refresh       Renovar token
```

### Usuários

```
GET    /api/users/profile      Obter perfil do usuário
PUT    /api/users/profile      Atualizar perfil
GET    /api/users/:id/ratings  Obter ratings de um usuário
```

### Viagens

```
POST   /api/rides/request      Solicitar uma viagem
POST   /api/rides/:id/accept   Aceitar uma viagem
GET    /api/rides/active       Viagens ativas do usuário
GET    /api/rides/history      Histórico de viagens
POST   /api/rides/:id/complete Completar uma viagem
```

### Pagamentos

```
POST   /api/payments/process   Processar pagamento
GET    /api/payments/history   Histórico de pagamentos
```

### Chat

```
GET    /api/messages/:rideId   Obter mensagens de uma viagem
WS     /socket.io              WebSocket para chat em tempo real
```

### Ratings

```
POST   /api/ratings            Criar uma avaliação
GET    /api/ratings/:userId    Obter ratings de um usuário
```

## Padrões de Código

### JavaScript/Node.js

```javascript
// Use const e let, não var
const variable = 'value';
let mutableVariable = 'value';

// Nomes em camelCase
const getUserProfile = () => {};

// Async/await para Promises
const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Destructuring
const { name, email } = user;

// Template literals
const message = `Olá, ${name}!`;
```

### React

```javascript
// Use functional components
const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default MyComponent;
```

### Redux

```javascript
// Use Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'feature',
  initialState: {},
  reducers: {
    action: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { action } = slice.actions;
export default slice.reducer;
```

## Troubleshooting

### Erro: "Cannot connect to database"

```bash
# Verifique se PostgreSQL está rodando
psql -U postgres -d projeto1

# Se não conseguir conectar, verifique DATABASE_URL no .env
DATABASE_URL=postgresql://user:password@host:port/database
```

### Erro: "Redis connection refused"

```bash
# Verifique se Redis está rodando
redis-cli ping

# Se retornar PONG, está funcionando
```

### Erro: "Port 3000/3001 already in use"

```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Frontend não conecta ao Backend

```bash
# Verifique se REACT_APP_API_URL está correto
# Verifique CORS no backend
# Teste com curl: curl http://localhost:3001/health
```

### Mobile não sincroniza com Backend

```bash
# Para Expo Go, certifique-se que está na mesma rede
# Verifique firewall
# Teste conexão: telnet localhost 3001
```

## Próximos Passos

1. ✅ Estrutura base criada
2. ⏳ Implementar autenticação com JWT
3. ⏳ Integrar banco de dados (migrações)
4. ⏳ Implementar endpoints da API
5. ⏳ Integrar com Stripe para pagamentos
6. ⏳ Implementar localização em tempo real
7. ⏳ Testes unitários e de integração
8. ⏳ Configurar CI/CD com GitHub Actions
9. ⏳ Deploy para produção (AWS/Heroku)
10. ⏳ Monitoramento e logs (Sentry, LogRocket)

---

**Para mais informações, consulte a documentação em `/docs`**
