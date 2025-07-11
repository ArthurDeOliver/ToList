import mongoose from "mongoose";
import { ListInterface } from "./interfaces/ListInterface";
import { Task } from "./schema/taskSchema";
//o model é a camada responsável por interagir com o banco de dados
// ele define o esquema dos dados e fornece métodos para criar, ler, atualizar e excluir documentos diretamente no banco de dados

// este código define o esquema de uma lista, que contém um nome, descrição, data de criação e uma lista de tarefas
export const listSchema = new mongoose.Schema<ListInterface>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  tasks: [Task],
});

//este código cria um modelo de lista a partir do esquema definido acima
export const listModel = mongoose.model<ListInterface>("List", listSchema);
