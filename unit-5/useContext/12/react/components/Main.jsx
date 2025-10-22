import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Main() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      <h1>{isLoggedIn ? "User is logged in" : "User is logged out"}</h1>
    </>
  );
}