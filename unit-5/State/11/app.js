import React, { useState } from "react";

// 1. Added a validation before adding the task whether it's empty or valid
// 2. Add style on task text which adds strike through dynamically based on task completion
// 3. Corrected the filtering tasks via index to filter out the desired taks

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) {
      alert(`Empty task can't be saved`);
      return;
    }
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleComplete(i)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

