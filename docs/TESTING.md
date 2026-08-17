# Testing Guide

## Tipos de Teste

### 1. Testes Unitários

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test

# Cobertura
npm test -- --coverage
```

**Exemplo:**

```javascript
// utils/__tests__/validator.test.js
const { validateEmail } = require('../validator');

describe('Validator', () => {
  test('validateEmail deve retornar true para email válido', () => {
    expect(validateEmail('test@test.com')).toBe(true);
  });

  test('validateEmail deve retornar false para email inválido', () => {
    expect(validateEmail('invalid')).toBe(false);
  });
});
```

### 2. Testes de Integração

```javascript
// routes/__tests__/auth.test.js
const request = require('supertest');
const app = require('../../server');

describe('Auth API', () => {
  test('POST /api/auth/login deve retornar token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password123'
      });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
```

### 3. Testes E2E

```bash
# Com Cypress (a instalar)
npm install --save-dev cypress
npx cypress open
```

**Exemplo:**

```javascript
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  it('Usuário deve fazer login com sucesso', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

### 4. Testes de Carga

```bash
# Com Apache Bench
ab -n 1000 -c 10 http://localhost:3001/health

# Com wrk
wrk -t4 -c100 -d30s http://localhost:3001/health
```

## Setup para Testes

### Backend (Jest)

```bash
cd backend
npm install --save-dev jest supertest @testing-library/react
```

**jest.config.js:**

```javascript
module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.test.js'],
};
```

### Frontend (Jest + React Testing Library)

```bash
cd frontend
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Rodar Testes

```bash
# Todos os testes
npm test

# Teste específico
npm test -- auth.test.js

# Com cobertura
npm test -- --coverage

# Watch mode
npm test -- --watch
```

## Mocking

```javascript
// Mock API
jest.mock('./services/api', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} }))
}));

// Mock Redux
const mockStore = configureStore({
  reducer: { auth: authReducer }
});
```

## Continuous Integration

**.github/workflows/test.yml:**

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test -- --coverage
      - run: npm run lint
```

---

Para mais detalhes, consulte a documentação das ferramentas:
- [Jest Docs](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Cypress Docs](https://docs.cypress.io/)
