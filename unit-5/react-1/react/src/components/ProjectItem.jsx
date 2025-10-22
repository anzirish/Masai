import React from "react";
import { useNavigate } from "react-router-dom";
import {ref, remove} from 'firebase/database'
import { db } from "../firebase";

const ProjectItem = ({ project }) => {
    const navigate = useNavigate()

  const handleProject = (id) => {
    localStorage.setItem('id', id)
    navigate('/projectdetails')
  };

  const deleteHandler = async ()=> {

    await remove(ref(db, `projects/${project.id}`));
  }

  return (
    <>
    {console.log(project)}
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
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <p>Created at: {new Date(project.id).toLocaleString()}</p>
      <button onClick={() => handleProject(project.id)}>View Tasks</button>
      <button onClick={deleteHandler}>Delete</button>
      <button>Edit</button>
    </div>
    </>
  );
};

export default ProjectItem;
