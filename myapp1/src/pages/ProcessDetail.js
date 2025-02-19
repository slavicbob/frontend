import { useParams, Link } from "react-router-dom";

function ProcessDetail() {
  const { id } = useParams();
  
  // Simulated process data (replace with API fetch later)
  const process = {
    id,
    name: `Process ${id}`,
    status: id % 2 === 0 ? "Completed" : "In Progress",
    description: `Details about Process ${id}`
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{process.name}</h2>
      <p>Status: {process.status}</p>
      <p>{process.description}</p>

      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default ProcessDetail;
