import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoginContext } from "../context/LoginContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const toggleLoggedIn = () => {
    setLogin(isLoggedIn ? false : true);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLoggedIn }}>
      <Navbar />
      <Main />
      <Footer />
    </LoginContext.Provider>
  );
}

export default App;
