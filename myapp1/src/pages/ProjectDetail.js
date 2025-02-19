import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { Button, Container, Typography, Slider } from "@mui/material";

function ProjectDetail() {
  const { id } = useParams();
  const { projects, updateProject } = useContext(ProjectContext);
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <Typography variant="h6">Project Not Found</Typography>;

  return (
    <Container>
      <Typography variant="h4">{project.name}</Typography>
      <Typography variant="h6">Status: {project.status}</Typography>

      <Typography>Progress: {project.progress}%</Typography>
      <Slider
        value={project.progress}
        onChange={(e, value) => updateProject(project.id, value)}
        min={0}
        max={100}
      />
      
      <Button variant="contained" color="secondary" component={Link} to="/">
        Back to Dashboard
      </Button>
    </Container>
  );
}

export default ProjectDetail;
