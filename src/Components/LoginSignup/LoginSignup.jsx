import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import mailIcon from "../Assets/envelope.png";
import passwordIcon from "../Assets/lock.png";
import userIcon from "../Assets/user.png"; // User icon for signup

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Track login/signup state
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin); // Switch between login & signup
  };

  const handleLogin = () => {
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{isLogin ? "Login" : "Sign Up"}</div>
        <div className="underline"></div>
      </div>

      <div className="form-box">
        {/* Login Form */}
        {isLogin ? (
          <div className="form">
            <div className="input">
              <img src={mailIcon} alt="Email Icon" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input">
              <img src={passwordIcon} alt="Password Icon" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="forgot-password">
              Forgot Password? <span>Click Here</span>
            </div>
            <button className="submit" onClick={handleLogin}>Login</button>
          </div>
        ) : (
          // Signup Form
          <div className="form">
            <div className="input">
              <img src={userIcon} alt="User Icon" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input">
              <img src={mailIcon} alt="Email Icon" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input">
              <img src={passwordIcon} alt="Password Icon" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="submit">Sign Up</button>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className="toggle">
        {isLogin ? (
          <span onClick={toggleForm}>Don't have an account? Sign Up</span>
        ) : (
          <span onClick={toggleForm}>Already have an account? Login</span>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
