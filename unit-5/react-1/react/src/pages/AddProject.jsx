import React, { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleProject = async () => {
    if (!title.trim() || !desc.trim()) {
      setError("Title or description is empty");
      return;
    }
    const project = { id: Date.now(), title, desc };

    await set(ref(db, "projects/" + project.id), project);

    setTitle("");
    setDesc("");
    console.log(project);
  };

  useEffect(() => {
    setError("");
  }, [title, desc]);

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
          placeholder="Enter project title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea
          placeholder="Enter project description"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleProject}>Add Project</button>
        <button onClick={()=> navigate('/dashboard')}>View Projects</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default AddProject;
