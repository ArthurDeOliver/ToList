import { Request, Response } from "express";
import { ListService } from "../service/ListService";
//controller é a camada de controle que recebe as requisições do usuário e chama os serviços correspondentes
// ela é responsável por processar as requisições e enviar as respostas de volta ao usuário

export class ListController {
  static async createList(req: Request, res: Response) {
    try {
      const data = req.body;
      const listService = new ListService();
      const newList = await listService.create(data);
      res.status(201).json(newList);
    } catch (error) {
      console.error("Error creating list:", error);
      res.status(500).json({ message: "Failed to create list" });
    }
  }

  static async getAllLists(req: Request, res: Response) {
    try {
      const listService = new ListService();
      const lists = await listService.getAll();
      res.status(200).json(lists);
    } catch (error) {
      console.error("Error fetching lists:", error);
      res.status(500).json({ message: "Failed to fetch lists" });
    }
  }

  static async markTaskComplete(req: Request, res: Response) {
    try {
      const { listId, taskId } = req.params;
      const listService = new ListService();
      const updateTaskToCompleted = await listService.markTaskCompleted(
        listId,
        taskId
      );
      res.status(200).json(updateTaskToCompleted);
    } catch (error) {
      console.error("Error marking task as completed:", error);
      res.status(500).json({ message: "Failed to mark task as completed" });
    }
  }

  static async deleteList(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const listService = new ListService();
      await listService.deleteList(id);
      res.status(200).json({ message: "List deleted successfully" });
    } catch (error) {
      console.error("Error deleting list:", error);
      res.status(500).json({ message: "Failed to delete list" });
    }
  }
}
