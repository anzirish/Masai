
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), title, status: false },
});

const updateTodo = (id) => ({
  type: UPDATE_TODO,
  payload: id,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export { addTodo, updateTodo, removeTodo };
