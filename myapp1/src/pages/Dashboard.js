import { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Link } from "react-router-dom";
import { Button, TextField, List, ListItem, ListItemText, Container, Typography, LinearProgress } from "@mui/material";

function Dashboard() {
  const { projects, addProject } = useContext(ProjectContext);
  const [newProject, setNewProject] = useState("");

  const handleAddProject = () => {
    if (newProject.trim()) {
      addProject(newProject);
      setNewProject("");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Company Process Tracker</Typography>

      <TextField
        label="New Project Name"
        variant="outlined"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddProject}>Add Project</Button>

      <List>
        {projects.map((project) => (
          <ListItem key={project.id} button component={Link} to={`/project/${project.id}`}>
            <ListItemText primary={project.name} secondary={`Status: ${project.status}`} />
            <LinearProgress variant="determinate" value={project.progress} style={{ width: "40%" }} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Dashboard;
