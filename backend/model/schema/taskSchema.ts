import { Schema } from "mongoose";
import type { TaskInterface } from "../interfaces/TaskInterface";

export const Task = new Schema<TaskInterface>({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
