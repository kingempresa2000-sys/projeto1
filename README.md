# Aplicativo de Transporte de Moto 🏍️

Um aplicativo moderno de transporte por motocicleta com suporte para web, mobile e backend robusto.

## 📋 Visão Geral

Este projeto é uma plataforma completa de transporte de moto com as seguintes funcionalidades:

- ✅ Autenticação e gerenciamento de usuários
- ✅ Localização em tempo real (GPS)
- ✅ Sistema de pagamento integrado
- ✅ Chat em tempo real entre motoristas e passageiros
- ✅ Sistema de ratings e avaliações
- ✅ Histórico de viagens
- ✅ Interface responsiva (Web + Mobile)

## 🏗️ Arquitetura

```
projeto1/
├── backend/              # API Node.js + Express
├── frontend/             # Aplicação React
├── mobile/               # App React Native
├── docs/                 # Documentação
└── docker-compose.yml    # Orquestração de containers
```

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL 14+
- **Cache**: Redis
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io
- **Payment**: Stripe/PagSeguro
- **Maps**: Google Maps API

### Frontend (Web)
- **Framework**: React 18+
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **UI Components**: Material-UI (MUI)
- **Maps**: React-Leaflet
- **Real-time**: Socket.io-client

### Mobile (React Native)
- **Framework**: React Native 0.72+
- **Navigation**: React Navigation
- **State Management**: Redux Toolkit
- **Maps**: React Native Maps
- **Geolocation**: React Native Geolocation
- **Notifications**: React Native Push Notifications

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ e npm/yarn
- PostgreSQL 14+
- Redis (opcional, para cache)
- Docker e Docker Compose (para desenvolvimento containerizado)

### Instalação Rápida

1. Clone o repositório:
```bash
git clone https://github.com/kingempresa2000-sys/projeto1.git
cd projeto1
```

2. Instale as dependências:
```bash
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

3. Configure as variáveis de ambiente (veja `.env.example` em cada pasta)

4. Inicie os serviços:
```bash
# Opção 1: Com Docker Compose
docker-compose up -d

# Opção 2: Manualmente
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start

# Terminal 3 - Mobile
cd mobile && npm start
```

## 📚 Documentação

- [Backend API](./docs/API.md)
- [Guia de Autenticação](./docs/AUTHENTICATION.md)
- [Estrutura do Banco de Dados](./docs/DATABASE.md)
- [Guia de Contribuição](./CONTRIBUTING.md)

## 🔑 Principais Endpoints da API

### Autenticação
- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Renovar token

### Usuários
- `GET /api/users/profile` - Perfil do usuário
- `PUT /api/users/profile` - Atualizar perfil
- `GET /api/users/:id/ratings` - Ratings do usuário

### Viagens
- `POST /api/rides/request` - Solicitar viagem
- `POST /api/rides/:id/accept` - Aceitar viagem
- `GET /api/rides/active` - Viagens ativas
- `GET /api/rides/history` - Histórico de viagens
- `POST /api/rides/:id/complete` - Completar viagem

### Pagamentos
- `POST /api/payments/process` - Processar pagamento
- `GET /api/payments/history` - Histórico de pagamentos

### Chat
- `GET /api/messages/:rideId` - Obter mensagens
- `POST /api/messages` - Enviar mensagem (WebSocket)

### Ratings
- `POST /api/ratings` - Criar rating
- `GET /api/ratings/:userId` - Obter ratings do usuário

## 📱 Funcionalidades Principais

### Para Passageiros
1. Criar conta e fazer login
2. Solicitar viagem informando origem e destino
3. Ver motoristas disponíveis próximos
4. Chat em tempo real com o motorista
5. Rastrear a localização do motorista em tempo real
6. Efetuar pagamento seguro
7. Avaliar motorista após a viagem

### Para Motoristas
1. Criar conta como motorista
2. Verificação e documentação
3. Receber solicitações de viagem
4. Chat com passageiro
5. Compartilhar localização em tempo real
6. Aceitar/Recusar viagens
7. Receber pagamentos
8. Ser avaliado pelos passageiros

## 🔐 Segurança

- Autenticação com JWT
- Senhas com hash bcrypt
- Rate limiting nas APIs
- Validação de entrada (sanitização)
- HTTPS obrigatório em produção
- CORS configurado
- Proteção contra CSRF

## 📊 Variáveis de Ambiente

Ver arquivos `.env.example` em cada pasta para configuração completa.

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para guidelines de contribuição.

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](./LICENSE) para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue ou entre em contato com o time de desenvolvimento.

---

**Desenvolvido com ❤️ por kingempresa2000-sys**
