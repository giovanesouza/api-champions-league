# ⚽ API da Champions League com NodeJS e Express

## 📝 Descrição

A API da Champions League é uma aplicação que fornece endpoints para gerenciar informações sobre jogadores de futebol e clubes. A API permite criar, ler, atualizar e excluir dados de jogadores, bem como listar clubes. Foi construída utilizando Node.js com Express e possui um banco de dados em memória para jogadores e um arquivo JSON para clubes.

## 📦 Instalação
1. Clone o repositório:
```bash
git clone https://github.com/giovanesouza/api-champions-league.git
cd api-champions-league
```

2. Instale as dependências:
```bash
npm i
```

## 🚀 Execução
1. Inicie o servirod
```bash
npm run start:dev
```

2. A API estará disponível em:
```bash
http://localhost:3333/api

```

## 🔀 Rotas da API

### 🏠 Rota de Boas-Vindas
- **GET `/api`**: Retorna uma mensagem de boas-vindas.
```json
{
  "message": "Bem vindo(a) à API da Champions League."
}
```

### 👤 Rotas de Jogadores
- **GET `/api/players`**: Retorna uma lista de todos os jogadores.
```json
[
      {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 80,
      "Shooting": 92,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 34,
      "Physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "Overall": 88,
      "Pace": 81,
      "Shooting": 92,
      "Passing": 78,
      "Dribbling": 84,
      "Defending": 34,
      "Physical": 75
    }
  },
]
```

- **GET `/api/players/:id`**: Retorna os detalhes de um jogador específico pelo ID.
```json
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 80,
      "Shooting": 92,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 34,
      "Physical": 65
    }
  }
```

- **POST `/api/players`**: Cria um novo jogador.
> dados necessários para criação (body).

```json
{
  "id": 0,
  "name": "string",
  "club": "string",
  "nationality": "string",
  "position": "string",
  "statistics": {
    "Overall": 0,
    "Pace": 0,
    "Shooting": 0,
    "Passing": 0,
    "Dribbling": 0,
    "Defending": 0,
    "Physical": 0
  }
}
```

- **DELETE `/api/players/:id`**: Remove um jogador específico pelo ID.

- **PATCH `/api/players/:id`**: Atualiza parcialmente os dados de um jogador.
> dados que podem ser atualizados (body).

```json
    "Overall": 0,
    "Pace": 0,
    "Shooting": 0,
    "Passing": 0,
    "Dribbling": 0,
    "Defending": 0,
    "Physical": 0
```

### 🏟️ Rotas de Clubes
- **GET `/api/clubs`**: Retorna uma lista de todos os clubes.
```json
[
  {
    "id": 1,
    "name": "Real Madrid"
  },
  {
    "id": 2,
    "name": "Barcelona"
  },
]
```


## 🗃️ Modelos de Dados

### 🧑‍🤝‍🧑 Jogador (PlayerModel)
```ts
interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    Overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;
  };
}
```

### 📊 Estatísticas (StatisticsModel)
```ts
interface StatisticsModel {
  Overall: number;
  Pace: number;
  Shooting: number;
  Passing: number;
  Dribbling: number;
  Defending: number;
  Physical: number;
}
```

### 🏅 Clube (ClubModel)
```ts
interface ClubModel {
  id: number;
  name: string;
}
```


### 🔄 Resposta HTTP (HttpResponse)

```ts
interface HttpResponse {
  statusCode: number;
  body: any;
}
```


## 🏗️ Informações sobre as camadas da aplicação

### ⚙️ Serviços
Os serviços realizam operações de negócios e interagem com os repositórios para obter ou manipular dados.

- **players-service.ts**: Lógica de negócios para jogadores.
- **clubs-service.ts**: Lógica de negócios para clubes.

### 📂 Repositórios
Os repositórios fornecem métodos para acessar e manipular os dados persistidos.

- **players-repository.ts**: Repositório em memória para jogadores.
- **clubs-repository.ts**: Repositório que lê os dados de clubes de um arquivo JSON.

### 🧰 Utilitários
- **http-helper.ts**: Helper para criar respostas HTTP padronizadas.

### 🕹️ Controladores
Os controladores processam as requisições HTTP e utilizam os serviços para executar a lógica de negócios.

- **players-controller.ts**: Controlador para operações relacionadas a jogadores.
- **club-controller.ts**: Controlador para operações relacionadas a clubes.
- **welcome-controller.ts**: Controlador para a mensagem de boas-vindas.
