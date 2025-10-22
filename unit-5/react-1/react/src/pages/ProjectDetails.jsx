import React from "react";
import AddTask from "../components/AddTask";
import TaskLists from "../components/TaskLists";

const ProjectDetails = () => {
  return (
    <>
      <h1>Project details</h1>
      <AddTask />
      <TaskLists />
    </>
  );
};

export default ProjectDetails;
