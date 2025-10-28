import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";

import "./App.css";
import FullScreenNav from "./components/Navigation/FullScreenNav";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
