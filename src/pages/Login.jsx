import React from "react";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">Chat Room</span>
      <span className="title">Login</span>
        <form>
          <input type="email" placeholder="test@gmail.com"/>
          <input type="password" placeholder="password"/>

          <button>Sign In</button>
        </form>
        <small>You don't have an account yet? <Link to="/register">Register</Link></small>
      </div>
    </div>
  );
}

export default Login;
