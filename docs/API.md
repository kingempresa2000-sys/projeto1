# Documentação da API

## Base URL

```
http://localhost:3001/api
```

## Autenticação

Todas as requisições autenticadas devem incluir o header:

```
Authorization: Bearer <token>
```

## Endpoints

### 🔐 Autenticação

#### Registrar Usuário
```http
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "phone": "11999999999",
  "userType": "passenger" // ou "driver"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "name": "João Silva",
    "email": "joao@example.com",
    "userType": "passenger"
  }
}
```

### 👤 Usuários

#### Obter Perfil
```http
GET /users/profile
Authorization: Bearer <token>
```

#### Atualizar Perfil
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "João Silva",
  "phone": "11999999999",
  "avatar": "url_da_imagem"
}
```

#### Obter Ratings do Usuário
```http
GET /users/:userId/ratings
```

### 🚗 Viagens

#### Solicitar Viagem
```http
POST /rides/request
Authorization: Bearer <token>
Content-Type: application/json

{
  "pickupLocation": {
    "latitude": -23.5505,
    "longitude": -46.6333,
    "address": "Av. Paulista, 1000, São Paulo"
  },
  "dropoffLocation": {
    "latitude": -23.5505,
    "longitude": -46.6333,
    "address": "Rua Augusta, 2000, São Paulo"
  },
  "scheduledTime": null
}
```

#### Aceitar Viagem
```http
POST /rides/:rideId/accept
Authorization: Bearer <token>
```

#### Obter Viagens Ativas
```http
GET /rides/active
Authorization: Bearer <token>
```

#### Obter Histórico de Viagens
```http
GET /rides/history?limit=10&offset=0
Authorization: Bearer <token>
```

#### Completar Viagem
```http
POST /rides/:rideId/complete
Authorization: Bearer <token>
Content-Type: application/json

{
  "finalLocation": {
    "latitude": -23.5505,
    "longitude": -46.6333
  },
  "totalAmount": 35.50
}
```

### 💳 Pagamentos

#### Processar Pagamento
```http
POST /payments/process
Authorization: Bearer <token>
Content-Type: application/json

{
  "rideId": "uuid",
  "amount": 35.50,
  "paymentMethod": "credit_card", // ou "debit_card", "pix", "wallet"
  "cardToken": "stripe_token_aqui"
}
```

#### Histórico de Pagamentos
```http
GET /payments/history?limit=20&offset=0
Authorization: Bearer <token>
```

### 💬 Chat

#### Obter Mensagens
```http
GET /messages/:rideId
Authorization: Bearer <token>
```

#### Enviar Mensagem (WebSocket)
```javascript
socket.emit('message:send', {
  rideId: 'uuid',
  content: 'Olá, estou chegando!',
  timestamp: new Date()
});
```

### ⭐ Ratings

#### Criar Rating
```http
POST /ratings
Authorization: Bearer <token>
Content-Type: application/json

{
  "rideId": "uuid",
  "rating": 5,
  "comment": "Excelente motorista!",
  "ratedUserId": "uuid"
}
```

#### Obter Ratings do Usuário
```http
GET /ratings/:userId
```

## Códigos de Status

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
