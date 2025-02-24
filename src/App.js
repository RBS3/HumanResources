import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import mailIcon from './Components/Assets/envelope.png';
import passwordIcon from './Components/Assets/lock.png';
import userIcon from './Components/Assets/user.png';
import Dashboard from "./Components/Dashboard/Dashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
