import { Task } from "../models/task.model.js";

export const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.json({ error: "Incomplete or wrong Data Received" });
  }
};

export const getAllTasks = async (req, res) =>{
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
     res.json({ error: "Tasks not Received" });
  }
}

export const updateTask = async (req,res) =>{
  try {
    const id = req.params.id
    const updates = req.body
    const updated = await Task.findByIdAndUpdate(id, updates, {new : true})
    res.json(updated)
  } catch (error) {
    res.json({ error: "Unexprected error while updating task" });
  }
}

export const deleteTasks = async(req, res) =>{
  try {
    const {priority} = req.query
    const filter = {}
    filter.priority = priority
    const result = await Task.deleteMany(filter)
    res.json(`${result.deletedCount} tasks deleted`)
  } catch (error) {
    res.json({ error: "Unexprected error while deleting tasks" });
  }
}