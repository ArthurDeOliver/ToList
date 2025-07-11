import document, { type Types } from "mongoose";
import { TaskInterface } from "./TaskInterface";

export interface ListInterface extends document.Document {
  _id: Types.ObjectId;
  name: string;
  description: string;
  tasks: TaskInterface[];
  createdAt: Date;
  updatedAt: Date;
}
