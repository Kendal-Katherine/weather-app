# 🌦 Weather App (TypeScript)

Aplicação simples de linha de comando desenvolvida em TypeScript que consome a API da Open-Meteo para exibir dados meteorológicos de forma amigável.

---

## 🚀 Tecnologias utilizadas

* Node.js
* TypeScript
* Axios

---

## 📁 Estrutura do projeto

```
src/
├── api/        # Comunicação com API externa
├── services/   # Regras de negócio
├── types/      # Tipagens
├── ui/         # Exibição dos dados
├── utils/      # Funções auxiliares
└── index.ts    # Arquivo principal
```

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```

Build e execução:

```bash
npm run build
npm start
```

---

## 🌍 Funcionalidade

O aplicativo:

1. Define coordenadas (latitude e longitude)
2. Busca dados meteorológicos na API Open-Meteo
3. Processa os dados
4. Exibe no console de forma amigável

Exemplo de saída:

```
🌤 Clima atual:
Temperatura: 28.7°C
Vento: 12.5 km/h
```

---

## 📌 Melhorias futuras

* Input de cidade pelo usuário
* Conversão de cidade → coordenadas (geocoding)
* Interface web
* Tratamento de erros
* Testes automatizados

---

## 🔐 Security and Ethics

This project uses a public API (Open-Meteo) and does not handle sensitive user data.

Good practices applied:
- No storage of personal data
- Safe handling of API responses
- Error handling to prevent application crashes

This project was developed with the support of AI tools, used responsibly to assist learning and improve code quality.


## 👩‍💻 Autora

Kendal Katherine
