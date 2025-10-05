import express from 'express'
import { addTask, deleteTasks, getAllTasks, updateTask } from '../controllers/task.controllers.js'

export const taskRouter = express.Router()

taskRouter.post("/", addTask)
taskRouter.get("/", getAllTasks)
taskRouter.patch("/:id", updateTask)
taskRouter.delete("/", deleteTasks)