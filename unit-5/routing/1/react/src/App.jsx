import "./App.css";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";
import { Link, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "none",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "none",
          })}
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
