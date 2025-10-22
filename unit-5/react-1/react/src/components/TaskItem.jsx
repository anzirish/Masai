import React from "react";
import { useNavigate } from "react-router-dom";
import {ref, remove} from 'firebase/database'
import { db } from "../firebase";

const TaskItem = ({task }) => {
    const navigate = useNavigate()
    const id = localStorage.getItem('id')

  const deleteHandler = async ()=> {
  
      await remove(ref(db, `tasks/${id}/${task.id}`));
    }

  return (
    <>
    {console.log(task)}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "10px",
        border: "2px solid aqua",
        borderRadius: "20px",
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.priority}</p>
      <p>Task completed : {task.status?'Yes':'No'}</p>
      <button onClick={deleteHandler}>Delete</button>
      <button>Edit</button>
    </div>
    </>
  );
};

export default TaskItem;
