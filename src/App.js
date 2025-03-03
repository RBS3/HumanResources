import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from "./Components/Dashboard/Dashboard";
import Jobapp from "./Components/job_application/Jobapp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}
export default App;
