import mongoose from "mongoose";
import express from "express";
import ListRouter from "./routes/ListRoutes"; // Importando o roteador de listas

const app = express(); // criando uma instância do Express
const PORT = 3000;
app.use(express.json()); // Middleware para analisar o corpo das requisições como JSON

// criando a conexão com o MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/ToList")
  .then(() => {
    console.log("✅ Connection to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });

app.use("/list", ListRouter);

// servidor http configurado para escutar na porta 3000
app.listen(PORT, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
