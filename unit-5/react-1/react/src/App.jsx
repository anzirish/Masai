import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
