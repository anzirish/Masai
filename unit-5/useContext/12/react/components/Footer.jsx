import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Footer() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      <p>{isLoggedIn ? "Welcome, user" : "Please login"}</p>
    </>
  );
}