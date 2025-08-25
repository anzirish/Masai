import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/settings">Settings</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
