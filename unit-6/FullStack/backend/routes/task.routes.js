import express from "express";
import { authorize } from "../middlewares/roles.js";
import { protect } from "../middlewares/auth.js";
import { Task } from "../models/Task.js";

const taskRouter = express.Router();

// Create Resource (Admin/Moderator)
taskRouter.post("/", protect, authorize("admin","moderator"), async (req,res) => {
  const { title } = req.body;
  const task = await Task.create({ title, createdBy: req.user._id });
  res.status(201).json(task);
});

// Get all tasks (All roles)
taskRouter.get("/", protect, async (req,res) => {
  const tasks = await Task.find().populate("createdBy", "name email");
  res.json(tasks);
});

// Update task (Admin/Moderator)
taskRouter.put("/:id", protect, authorize("admin","moderator"), async (req,res) => {
  const task = await Task.findById(req.params.id);
  if(!task) return res.status(404).json({ message: "Not found" });

  const { title } = req.body;
  if(title) task.title = title;

  await task.save();
  res.json(task);
});

// Delete task (Admin only)
taskRouter.delete("/:id", protect, authorize("admin"), async (req,res) => {
  const task = await Task.findById(req.params.id);
  if(!task) return res.status(404).json({ message: "Not found" });
  await task.remove();
  res.json({ message: "Deleted successfully" });
});

export default taskRouter;
