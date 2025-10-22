import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import ProjectItem from "./ProjectItem";
import TaskItem from "./TaskItem";

const TaskLists = () => {
  const [tasks, setTasks] = useState([]);
  const id = localStorage.getItem('id')

  useEffect(() => {
    const tasksRef = ref(db, `tasks/${id}`);

    const unsubscribe = onValue(tasksRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        const loadedTasks = Object.values(data);

        setTasks(loadedTasks);
      } else {
        setTasks([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
            gap: "20px",
            marginTop : '20px'
          }}
        >
          {tasks.map((task) => {
            return <TaskItem task={task} />;
          })}
        </div>
      )}
    </>
  );
};

export default TaskLists;
