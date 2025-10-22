import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import ProjectItem from "./ProjectItem";

const ProjectLists = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsRef = ref(db, "projects");

    const unsubscribe = onValue(projectsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        const loadedProjects = Object.values(data);

        setProjects(loadedProjects);
      } else {
        setProjects([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
            gap: "20px",
            marginTop : '20px'
          }}
        >
          {projects.map((project) => {
            return <ProjectItem project={project} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProjectLists;
