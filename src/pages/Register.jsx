import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddImg from "../img/add.png";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storage = getStorage();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);


      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL
            })
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Room</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="test@gmail.com" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="pic" />
          <label htmlFor="pic">
            <img
              src={AddImg}
              style={{ width: "32px", height: "32px" }}
              alt="upload"
            />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>something went wrong</span>}
        </form>
        <small>
          You already have an account? <Link to="/login">Login</Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
