import mongoose from "mongoose";
import { COLLECTION } from "../config/db.js";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true , unique : true},
  description: { type: String, required: true },
  priority: { type: String, required: true, enum: ["high", "medium", "low"] },
  isCompleted: { type: Boolean, default: false },
  completionDate: Date,
  dueDate: Date,
});

export const Task = mongoose.model(COLLECTION, taskSchema);
