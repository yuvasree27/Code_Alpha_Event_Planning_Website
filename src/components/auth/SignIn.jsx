import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

   
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Log In to your Account</h1>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      {/* Add a link/button to switch to the sign-up form */}
      <p>Don't have an account? <button onClick={() => navigate("/signup")}>Sign Up</button></p>
    </div>
  );
};

export default SignIn;