# Troubleshooting Guide

## Problemas Comuns

### Backend

#### 1. Erro: "Cannot find module"

```bash
# Solução
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### 2. PostgreSQL não conecta

```bash
# Verificar se está rodando
psql -U postgres -d projeto1

# Se erro de senha, reset:
psql -U postgres
ALTER USER postgres PASSWORD 'new_password';

# Ou use Docker
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:15
```

#### 3. Redis não conecta

```bash
# Test conexão
redis-cli ping
# Esperado: PONG

# Se erro, inicie Redis
redis-server

# Ou com Docker
docker run -d -p 6379:6379 redis:7-alpine
```

#### 4. Port 3001 já em uso

```bash
# Linux/Mac
lsof -i :3001
kill -9 <PID>

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Ou mude a porta no .env
PORT=3002
```

### Frontend

#### 1. Erro: "Failed to compile"

```bash
# Limpe cache
cd frontend
rm -rf node_modules .cache
npm install
npm start
```

#### 2. CORS error ao chamar API

```bash
# Verificar .env
REACT_APP_API_URL=http://localhost:3001/api

# Verificar CORS no backend (src/server.js)
app.use(cors());

# Ou seja específico
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

#### 3. Redux state não atualiza

```javascript
// Certifique-se de usar dispatch
const dispatch = useDispatch();
dispatch(actionName(payload));

// E selecionar corretamente
const value = useSelector(state => state.sliceName.propertyName);
```

#### 4. Material-UI components não renderizam

```bash
# Verifique instalação
npm list @mui/material

# Reinstale se necessário
npm install @mui/material @emotion/react @emotion/styled
```

### Mobile

#### 1. Expo Go não abre o app

```bash
# Certifique-se que está na mesma rede
ifconfig | grep "inet "

# Use seu IP no .env
REACT_APP_API_URL=http://SEU_IP:3001/api

# Reinicie
npm start
```

#### 2. Permissões negadas (Android)

```javascript
// Verifique app.json
{
  "expo": {
    "plugins": [
      ["expo-location", {
        "locationAlwaysAndWhenInUsePermission": "Allow..."
      }]
    ]
  }
}
```

#### 3. Build error no Expo

```bash
# Clear cache
npm start -- --clear

# Ou rebuild
Expired --no-cache
```

### Docker

#### 1. Container não inicia

```bash
# Ver logs
docker-compose logs backend

# Rebuild imagem
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

#### 2. Volum não funciona

```bash
# Verifique path
# No docker-compose.yml
volumes:
  - ./backend:/app  # Caminho relativo
  - /app/node_modules  # Exclude node_modules
```

#### 3. Network não conecta entre containers

```bash
# Verifique nome do service
# DATABASE_URL deve usar nome do service
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/projeto1
#                                              ^^^^^^ nome do service
```

## Debugging

### Backend

```javascript
// Console logs
console.log('Debug:', value);

// Debugger
node --inspect src/server.js
// Acesse chrome://inspect

// Logger
const logger = require('./utils/logger');
logger.info('Info');
logger.error('Erro');
```

### Frontend

```bash
# React DevTools
# Instale extensão do Chrome

# Redux DevTools
# chrome-extension://lmjngelajlbjnlmgeflhjdcjicmattab

# Console
console.log('Debug:', value);
console.table(array);

# Breakpoints
// F12 -> Sources -> Set breakpoint
```

### Mobile

```bash
# Expo DevTools
npm start
# Pressione 'd' no terminal

# Console
console.log('Debug:', value);

# Inspect element
# Menu -> Enable Element Inspector
```

## Performance

### Backend

```bash
# Profile com node
node --prof src/server.js
node --prof-process *.log > profile.txt

# Monitorar uso
watch -n 1 'ps aux | grep node'
```

### Frontend

```bash
# Lighthouse
# F12 -> Lighthouse

# Analyze bundle
npm install -D source-map-explorer
npm run build
source-map-explorer 'build/static/js/*.js'
```

### Database

```sql
-- Explicar query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@test.com';

-- Ver índices
\d+ users

-- Monitor conexões
SELECT count(*) FROM pg_stat_activity;
```

## Segurança

```bash
# Scan vulnerabilidades
npm audit
npm audit fix

# Check dependências
npm outdated
npm update

# OWASP dependency check
npx audit
```

## Contato e Suporte

Para problemas não resolvidos:
1. Consulte a documentação em `/docs`
2. Abra uma issue no GitHub
3. Entre em contato com o time

---

**Última atualização: 2026-08-17**
