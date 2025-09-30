const fs = require("fs");

const getTodos = () => {
  try {
    return JSON.parse(fs.readFileSync("db.json", "utf-8"));
  } catch (e) {
    return [];
  }
};

const getByTitle = (title) => {
  return getTodos().filter((todo) =>
    todo.title.toLowerCase().includes(title.toLowerCase())
  );
};

const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  fs.writeFileSync("db.json", JSON.stringify(todos, null, 2), "utf-8");
};

const updateTodo = (id, updates) => {
  const todos = getTodos();
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    Object.assign(todo, updates);
    fs.writeFileSync("db.json", JSON.stringify(todos, null, 2), "utf-8");
    return true;
  } else {
    return false;
  }
};

const deleteTodo = (id) => {
  const todos = getTodos();
  const idx = todos.findIndex((t) => t.id === id);
  if (idx !== -1) {
    todos.splice(idx, 1);
    fs.writeFileSync("db.json", JSON.stringify(todos, null, 2), "utf-8");
    return true;
  } else {
    return false;
  }
};

module.exports = { getTodos, getByTitle, addTodo, updateTodo, deleteTodo };
