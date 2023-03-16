import React from "react";
import { Link } from "react-router-dom";
import AddImg from "../img/add.png";


function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">Chat Room</span>
      <span className="title">Register</span>
        <form>
          <input type="text" placeholder="your name"/>
          <input type="email" placeholder="test@gmail.com"/>
          <input type="password" placeholder="password"/>
          <input style={{display:"none"}} type="file"  id="pic"  />
          <label htmlFor="pic">
          <img src={AddImg}style={{width:"32px",height:"32px"}} alt="upload"/>
          <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <small>You already have an account? <Link to="/login">Login</Link></small>
      </div>
    </div>
  );
}

export default Register;
