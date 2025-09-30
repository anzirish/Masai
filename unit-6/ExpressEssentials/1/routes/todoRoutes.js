const express = require("express");
const { getAllTodos, addNewTodo, searchTodo, updateATodo, deleteATodo } = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.get("/search", searchTodo)
todoRouter.get("/", getAllTodos);
todoRouter.post("/", addNewTodo);
todoRouter.put("/:id", updateATodo);
todoRouter.delete("/:id", deleteATodo);

module.exports = {todoRouter};
