import express from "express";
import router from "./routes/routes";

// Cria e exporta a função por Default
export default function createApp() {
  const app = express(); // cria aplicação express
  app.use(express.json()); // Utiliza middleware que converte o corpo das requisições para Content-Type JSON
  app.use("/api", router); // importa todas as rotas

  return app;
};