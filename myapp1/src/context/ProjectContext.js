import { createContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", status: "In Progress", progress: 60 },
    { id: 2, name: "AI Model Training", status: "Pending", progress: 10 },
    { id: 3, name: "Marketing Strategy", status: "Completed", progress: 100 },
  ]);

  const addProject = (name) => {
    const newProject = {
      id: projects.length + 1,
      name,
      status: "Pending",
      progress: 0,
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id, progress) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, progress, status: progress === 100 ? "Completed" : "In Progress" } : p
      )
    );
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
