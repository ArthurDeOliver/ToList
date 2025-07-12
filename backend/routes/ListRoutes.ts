import { ListController } from "../controller/ListController";
import { Router } from "express";
import express, { Request, Response } from "express";

const ListRouter = Router();

//rota de criação de lista
ListRouter.post("/", async (req: Request, res: Response) => {
  try {
    await ListController.createList(req, res);
    res.status(200).json({ message: "List created successfully" });
  } catch (error) {
    console.error("Error in ListRouter POST /:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//rota de busca de todas as listas
ListRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    await ListController.deleteList(req, res);
    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    console.error("Error in ListRouter DELETE /:id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//rota de marcar tarefa como concluída
ListRouter.patch("/:listId/:taskId", async (req: Request, res: Response) => {
  try {
    await ListController.markTaskComplete(req, res);
    res.status(200).json({ message: "Task marked as completed successfully" });
  } catch (error) {
    console.error("Error in ListRouter PATCH /:listId/:taskId:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

ListRouter.get("/", async (req: Request, res: Response) => {
  try {
    await ListController.getAllLists(req, res);
    res.status(200).json({ message: "Lists retrieved successfully" });
  } catch (error) {
    console.error("Error in ListRouter GET /:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default ListRouter;
