import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
  }, [email, password]);

  const authHandler = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password");
      return;
    }

    try {
      const userCredencial = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/dashboard");
      localStorage.setItem("loggedIn", true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "100px",
        }}
      >
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={authHandler}>Login</button>
      </div>
      {error && <p style={{color:'red'}}>{error}</p>}
    </>
  );
};

export default Login;
