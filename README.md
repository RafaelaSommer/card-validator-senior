# 💳 Card Validator Senior

Sistema profissional de validação de cartões de crédito desenvolvido com Node.js, Express e React.

O projeto identifica a bandeira do cartão, valida números utilizando o algoritmo de Luhn e fornece uma API REST completa integrada com frontend moderno.

---

# 🚀 Tecnologias utilizadas

## Backend
- Node.js
- Express
- Cors
- Dotenv
- Jest
- Supertest

## Frontend
- React
- Vite
- Axios

---

# ✨ Funcionalidades

✅ Identificação de bandeira do cartão  
✅ Validação utilizando algoritmo de Luhn  
✅ API REST completa  
✅ Frontend moderno e responsivo  
✅ Estrutura profissional  
✅ Testes automatizados  
✅ Integração frontend + backend  

---

# 💳 Bandeiras suportadas

- Visa
- MasterCard
- American Express
- Elo
- Hipercard
- Discover

---

# 📁 Estrutura do projeto

```bash
card-validator-senior/
│
├── backend/
│
└── frontend/
```

---

# ⚙️ Como executar o projeto

## 🔥 Backend

Entre na pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm run dev
```

Servidor rodando em:

```bash
http://localhost:3000
```

---

## 🎨 Frontend

Entre na pasta frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Frontend rodando em:

```bash
http://localhost:5173
```

---

# 🧪 Testes

Para executar os testes:

```bash
npm test
```

---

# 🌐 Endpoint da API

## Validar cartão

```http
POST /api/card/validate
```

### Body

```json
{
  "cardNumber": "4111111111111111"
}
```

### Resposta

```json
{
  "flag": "Visa",
  "isValid": true
}
```

---

# 📸 Preview

## Tela principal

- Campo para inserir cartão
- Detecção automática de bandeira
- Resultado em tempo real

---

# 📈 Melhorias futuras

- Integração com BIN Lookup API
- Docker
- Swagger
- CI/CD com GitHub Actions
- Deploy automatizado
- Dashboard administrativo
- Tema dark/light
- Máscara automática de cartão

---

# ☁️ Deploy

## Backend
Deploy realizado no Render.

## Frontend
Deploy realizado no Vercel.

---

# 📄 Licença

Este projeto está sob licença MIT.

## 👩‍💻 Desenvolvedora

Projeto desenvolvido por Rafaela Sommer Gonçalves 🚀

GitHub:
https://github.com/RafaelaSommer
