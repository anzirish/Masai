const {
  getTodos,
  addTodo,
  getByTitle,
  updateTodo,
  deleteTodo,
} = require("../models/todoModel");

const getAllTodos = (req, res) => [res.json(getTodos())];

const addNewTodo = (req, res) => {
  const { title, completed } = req.body;
  if (title == null || completed == null) {
    return res
      .status(404)
      .json({ msg: "Please provide value of title and completed" });
  }

  addTodo({ id: Date.now(), title, completed });
  res.json({ msg: "Added new TODO" });
};

const searchTodo = (req, res) => {
  const input = req.query.q;
  const filteredTodos = getByTitle(input);
  if (filteredTodos.length == 0) {
    return res
      .status(404)
      .json({ msg: "No todos found with this matching query" });
  }
  res.json(filteredTodos);
};

const updateATodo = (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body
  const updated = updateTodo(id, updates);
  if (updated) {
    res.status(200).json({ msg: "Updated" });
  } else {
    res.status(404).json({ msg: "No todos found with this iḍ to update" });
  }
};

const deleteATodo = (req, res) =>{
    const id = Number(req.params.id)
    const deleted = deleteTodo(id)
    if (deleted) {
    res.status(200).json({ msg: "deleted" });
  } else {
    res.status(404).json({ msg: "No todos found with this iḍ to delete" });
  }
}

module.exports = { getAllTodos, addNewTodo, searchTodo , updateATodo, deleteATodo};
