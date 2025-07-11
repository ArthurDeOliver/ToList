import { ListInterface } from "../model/interfaces/ListInterface";
import { listModel } from "../model/listModel";
// service é a camada de serviço que contém a lógica de negócio
// ela é responsável por interagir com o modelo e realizar operações de CRUD

export class ListService {
  //serviço de criar lista
  async create(data: ListInterface) {
    try {
      const newList = await listModel.create(data);
      return newList;
    } catch (error) {
      console.error("Error creating list:", error);
      throw new Error("Failed to create list");
    }
  }

  //serviço de buscar todas as listas
  async getAll() {
    return await listModel.find().populate("tasks");
  }

  // Marcar tarefa como concluída
  async markTaskCompleted(listId: string, taskId: string) {
    return await listModel.updateOne(
      { _id: listId, "tasks._id": taskId },
      { $set: { "tasks.$.completed": true } }
    );
  }

  async deleteList(listId: string) {
    try {
      const deletedList = await listModel.findByIdAndDelete(listId);
      if (!deletedList) {
        throw new Error("List not found");
      }
      return deletedList;
    } catch (error) {
      console.error("Error deleting list:", error);
      throw new Error("Failed to delete list");
    }
  }
}
