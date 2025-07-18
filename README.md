# 🎮 Games 2025 Web API – Node.js + TypeScript

<img src="https://github.com/EwertonSolitto/node-dio-ts-webapi-without-frameworks-games-2025/blob/main/asset/preview.png" alt="App preview" />

## 📝 About

A lightweight and framework-free API built with **Node.js** and **TypeScript**, serving a curated list of upcoming and released games in 2025.  
Perfect for quick prototyping, filtering data via query strings, and exploring HTTP without external frameworks.

## 🧩 Features

✅ Built using **native Node.js HTTP module** – no frameworks involved  
✅ Parses and filters a `.json` file with game data  
✅ Query support for **filtering by category**  
✅ Clean architecture with modular code  
✅ Easy to run and extend

## 📁 API Routes

- `GET /` → Returns the full list of 2025 games  
- `GET /category?c=<category>` → Filters games by category (e.g. `Action`, `RPG`, etc.)

## ⚙️ Technologies

- 🧠 Node.js  
- 🔡 TypeScript

## 📦 Dependencies

- 🚀 [`tsup`](https://www.npmjs.com/package/tsup) – for bundling the TypeScript code  
- 💡 [`tsx`](https://www.npmjs.com/package/tsx) – for running TypeScript without manual compilation

## 🧪 Example Requests

- All games:

```nginx
GET http://localhost:3333/
```

- Filtered by category (e.g. RPG):

```nginx
GET http://localhost:3333/category?c=RPG
```

## 🚀 Getting Started

> Make sure you have **Node.js** installed

1. 📁 Clone the repository

```bash
git clone https://github.com/EwertonSolitto/node-dio-ts-webapi-without-frameworks-games-2025.git
```

2. 📂 Navigate into the project folder

```bash
cd node-dio-ts-webapi-without-frameworks-games-2025
```

3. 📦 Install the dependencies

```bash
npm install
```

4. ▶️ Run the development server

```bash
npm run start
```

5. 🛠 Build for production

```bash
npm run dist
```
