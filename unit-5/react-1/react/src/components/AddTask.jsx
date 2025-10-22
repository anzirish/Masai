import React, { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { db, auth } from "../firebase";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");
  const priorities = ["high", "mid", "low"];

  const handleTask = async () => {
    if (!title.trim() || !priority.trim()) {
      setError("Title or prioeity is empty");
      return;
    }

    if (!priorities.includes(priority)) {
      setError("Priority is not correct");
      return;
    }

    const task = { id: Date.now(), title, priority, status : false };
    const projectId = localStorage.getItem("id").toString();

    await set(ref(db, `tasks/${projectId}/${task.id}`), task);

    setTitle("");
    setPriority("");
    console.log(task);
  };

  useEffect(() => {
    setError("");
  }, [title, priority]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "100px",
          border: "1px solid aqua",
          borderRadius: "5px",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        <input
          placeholder="Enter Task title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter priority [high, mid, low]"
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <button onClick={handleTask}>Add Task</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default AddTask;
