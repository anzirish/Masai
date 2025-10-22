import express from "express";
import { Task } from "./TaskModel.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { status, dueDate } = req.query;
    let filter = {};
    if (status) filter.status = status;
    if (dueDate) filter.dueDate = { $lte: new Date(dueDate) };
    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, updates, {
      new: true,
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Task.findByIdAndDelete(id);
    res.json(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
