import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import Contact from "./assets/components/Contact";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import About from "./assets/components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
