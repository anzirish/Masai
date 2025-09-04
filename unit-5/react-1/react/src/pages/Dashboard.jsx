import React from "react";
import ProjectLists from "../components/ProjectLists";
import AddProject from "./AddProject";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Dashboard</h1>
        <button onClick={() => navigate("/addproject")}>Add Projects</button>
      </div>
      <ProjectLists />
    </>
  );
};

export default Dashboard;
