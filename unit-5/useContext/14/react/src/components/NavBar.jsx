import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav style={{ display: "flex" }}>
        {isLoggedIn ? "Logged In" : "Logged out"}
        <button onClick={toggleTheme}>Switch Theme</button>
        <button onClick={toggleLogin}>{isLoggedIn?"Logout":"Login"}</button>
      </nav>
    </>
  );
};
