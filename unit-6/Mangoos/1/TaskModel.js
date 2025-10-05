import mongoose from "mongoose";

const taskSchema  = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: "pending" },
  dueDate: Date,
});

export const Task = mongoose.model("Task", taskSchema)