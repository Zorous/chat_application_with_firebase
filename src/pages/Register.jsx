import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">Chat_Room</span>
      <span className="title">Register</span>
        <form>
          <input type="text" placeholder="your name"/>
          <input type="email" placeholder="test@gmail.com"/>
          <input type="password" placeholder="password"/>
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <small>You already have an account? <Link to="/login">Login</Link></small>
      </div>
    </div>
  );
}

export default Register;
