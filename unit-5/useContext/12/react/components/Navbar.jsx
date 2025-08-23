import { useContext } from "react";
import { useState } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Navbar() {
  const { isLoggedIn, toggleLoggedIn } = useContext(LoginContext);

  return (
    <>
      <button onClick={toggleLoggedIn}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}
