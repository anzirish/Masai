import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Weather from "./Weather";
import Home from "./Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
