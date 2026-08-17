# Guia de Deployment

## Ambientes

### Desenvolvimento
- Local com Docker Compose
- Banco de dados local
- Logs no console

### Staging
- Servidor de teste
- Dados fictícios
- Testes de carga

### Produção
- Servidor em produção
- Banco de dados gerenciado (AWS RDS)
- CDN para assets estáticos
- SSL/TLS obrigatório
- Backups automáticos

## Pré-requisitos

- Docker e Docker Compose instalados
- Conta em serviço de hospedagem (AWS, Heroku, DigitalOcean)
- Chaves de API configuradas
- Domínio registrado

## Deploy com Docker

### 1. Build das imagens

```bash
# Build backend
docker build -t projeto1-backend:latest ./backend

# Build frontend
docker build -t projeto1-frontend:latest ./frontend

# Verifiqueimagens criadas
docker images
```

### 2. Push para registro (Docker Hub/ECR)

```bash
# Faça login
docker login

# Tag das imagens
docker tag projeto1-backend:latest seu_usuario/projeto1-backend:latest
docker tag projeto1-frontend:latest seu_usuario/projeto1-frontend:latest

# Push
docker push seu_usuario/projeto1-backend:latest
docker push seu_usuario/projeto1-frontend:latest
```

### 3. Deploy em produção

```bash
# Em seu servidor, puxe as imagens
docker pull seu_usuario/projeto1-backend:latest
docker pull seu_usuario/projeto1-frontend:latest

# Inicie com docker-compose
docker-compose -f docker-compose.prod.yml up -d
```

## Deploy em Plataformas Específicas

### Heroku

```bash
# Instale Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Faça login
heroku login

# Crie apps
heroku create projeto1-backend
heroku create projeto1-frontend

# Configure variáveis de ambiente
heroku config:set DATABASE_URL="postgresql://..." -a projeto1-backend
heroku config:set JWT_SECRET="sua_chave" -a projeto1-backend

# Deploy
git push heroku main
```

### AWS (EC2 + RDS)

```bash
# SSH na instância EC2
ssh -i seu_key.pem ec2-user@seu_ip

# Instale dependências
sudo yum install docker -y
sudo systemctl start docker

# Clone repositório
git clone https://github.com/kingempresa2000-sys/projeto1.git
cd projeto1

# Configure variáveis
cp .env.example .env
# Edite .env com as credenciais RDS

# Inicie serviços
sudo docker-compose up -d
```

## Checklist de Produção

- [ ] SSL/TLS configurado
- [ ] Variáveis de ambiente definidas
- [ ] Banco de dados migrado
- [ ] Backups configurados
- [ ] Logs centralizados (ELK Stack, CloudWatch)
- [ ] Monitoramento ativo (New Relic, DataDog)
- [ ] Rate limiting configurado
- [ ] Proteção contra DDoS
- [ ] Testes de carga executados
- [ ] Plano de rollback preparado

## CI/CD com GitHub Actions

Ver: `.github/workflows/deploy.yml` (a implementar)

## Escalabilidade

- Load balancer (Nginx, AWS ALB)
- Database replication
- Caching com Redis
- CDN para assets (CloudFront, Cloudflare)
- Microserviços (opcional, futuro)

## Monitoramento

```bash
# Health checks
curl https://seu_dominio.com/health

# Logs
docker-compose logs -f backend

# Métricas
# Configure ferramentas como Prometheus, Grafana
```

## Rollback

```bash
# Verifique versão anterior
docker images

# Role back para versão anterior
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
```

---

**Mais detalhes em documentação específica da plataforma escolhida.**
