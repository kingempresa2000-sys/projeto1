# Guia de Autenticação

## Fluxo de Autenticação

### 1. Registro

O usuário fornece seus dados básicos:
- Nome
- Email
- Senha
- Telefone
- Tipo de usuário (passageiro ou motorista)

### 2. Login

O usuário faz login com email e senha, recebendo um JWT token.

### 3. Token JWT

O token contém:
- ID do usuário
- Email
- Tipo de usuário
- Data de expiração (24 horas)

### 4. Refresh Token

Para manter a sessão ativa, o cliente pode renovar o token usando um refresh token.

## Fluxo de Motorista

Motoristas precisam de verificação adicional:

1. Registrar como motorista
2. Fazer upload de documentos:
   - RG/CNH
   - Comprovante de endereço
   - Selfie para verificação facial
3. Aguardar aprovação (até 24 horas)
4. Ativar modo motorista

## Segurança

- Senhas são hasheadas com bcrypt
- Tokens JWT com expiração
- Refresh tokens armazenados de forma segura
- Rate limiting em endpoints de autenticação
- Validação de email (confirmação por código)
