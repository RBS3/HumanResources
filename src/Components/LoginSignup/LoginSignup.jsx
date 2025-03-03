import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false); // Track login/signup state
  const [isLogin, setIsLogin] = useState(true); // Login/signup toggle
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin); // Switch between login & signup
  };

  const handleLogin = () => {
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="https://accounts.google.com" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="https://www.facebook.com" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.github.com" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" id="name" />
          <input type="email" placeholder="Email" id="mail" />
          <input type="password" placeholder="Password" id="pass" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="https://accounts.google.com" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="https://www.facebook.com" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.github.com" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="button" onClick={handleLogin}>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Log Into Your Account By Clicking Here</p>
            <button className="hidden" onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>No account?</h1>
            <p>Click Here To Register! Make Sure To List All Of Your Informations</p>
            <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
