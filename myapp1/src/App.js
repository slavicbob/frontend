import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProcessDetail from "./pages/ProcessDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/process/:id" element={<ProcessDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
