import document, { type Types } from "mongoose";

export interface TaskInterface extends document.Document {
  _id: Types.ObjectId;
  name: string;
  completed?: boolean;
  createdAt: Date;
}
