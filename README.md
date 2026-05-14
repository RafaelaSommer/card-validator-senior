# 💳 Card Validator Senior

Validador de bandeiras de cartões de crédito desenvolvido com foco em arquitetura limpa, boas práticas e validação inteligente de BINs (Bank Identification Number).

---

## 🚀 Funcionalidades

- ✅ Identificação automática da bandeira do cartão
- ✅ Suporte para múltiplas bandeiras
- ✅ Validação através de Regex
- ✅ Código organizado em padrão profissional
- ✅ Estrutura escalável
- ✅ Tratamento de erros
- ✅ Interface simples e intuitiva
- ✅ Fácil manutenção

---

## 🏦 Bandeiras suportadas

- Visa
- MasterCard
- Elo
- American Express
- Hipercard
- Diners Club
- Discover
- JCB
- Aura

---

## 📂 Estrutura do Projeto

```bash
card-validator-senior/
│
├── src/
│   ├── services/
│   │   └── cardValidator.js
│   │
│   ├── utils/
│   │   └── regexPatterns.js
│   │
│   ├── styles/
│   │   └── style.css
│   │
│   ├── app.js
│   │
│   └── index.html
│
├── assets/
│
├── README.md
│
├── package.json
│
└── .gitignore
```

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Git
- GitHub

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/RafaelaSommer/card-validator-senior.git
```

### 2. Entre na pasta

```bash
cd card-validator-senior
```

### 3. Execute o projeto

Abra o arquivo:

```bash
index.html
```

ou utilize uma extensão como:

- Live Server (VS Code)

---

## 🧠 Como funciona a validação

O sistema identifica a bandeira através dos números iniciais do cartão utilizando expressões regulares (Regex).

Exemplo:

| Bandeira | Prefixo |
|---|---|
| Visa | 4 |
| MasterCard | 51-55 |
| American Express | 34 ou 37 |

---

## 📸 Preview

```txt
Número do cartão: 4111111111111111
Bandeira identificada: VISA
```

---

## 📌 Melhorias futuras

- [ ] Implementar algoritmo de Luhn
- [ ] Adicionar testes automatizados
- [ ] Criar versão em React
- [ ] Adicionar API de validação
- [ ] Deploy online

---

## 🤝 Contribuição

Contribuições são bem-vindas.

1. Faça um Fork
2. Crie uma branch

```bash
git checkout -b minha-feature
```

3. Commit suas alterações

```bash
git commit -m "Minha nova feature"
```

4. Push na branch

```bash
git push origin minha-feature
```

5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👩‍💻 Desenvolvedora

Projeto desenvolvido por Rafaela Sommer 🚀

GitHub:
https://github.com/RafaelaSommer# card-validator-senior
