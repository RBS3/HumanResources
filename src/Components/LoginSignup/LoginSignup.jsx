import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import mailIcon from "../Assets/envelope.png";
import passwordIcon from "../Assets/lock.png";

const LoginSignup = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // Instantly navigates to the dashboard
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={mailIcon} alt="Email Icon" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click Here</span>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>Login</button>
      </div>
      <div className="toggle">
        <a href="#">Create an account</a>
      </div>
    </div>
  );
};

export default LoginSignup;
