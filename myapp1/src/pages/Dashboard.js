import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, List, ListItem, ListItemText, Container, Typography } from "@mui/material";

function Dashboard() {
  const [processes, setProcesses] = useState([
    { id: 1, name: "Process A", status: "In Progress" },
    { id: 2, name: "Process B", status: "Completed" }
  ]);

  const [newProcess, setNewProcess] = useState("");

  const addProcess = () => {
    if (newProcess.trim()) {
      setProcesses([...processes, { id: processes.length + 1, name: newProcess, status: "Pending" }]);
      setNewProcess("");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Process Tracker</Typography>

      <TextField
        label="Enter process name"
        variant="outlined"
        value={newProcess}
        onChange={(e) => setNewProcess(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addProcess} style={{ marginLeft: 10 }}>Add</Button>

      <List>
        {processes.map((process) => (
          <ListItem key={process.id} button component={Link} to={`/process/${process.id}`}>
            <ListItemText primary={`${process.name} - ${process.status}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Dashboard;
