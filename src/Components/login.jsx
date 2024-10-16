import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
  
    navigate("/home");
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
 

  return (
    <div className="login">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me{" "}
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button onClick={handleLogin} >Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="/registration">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
