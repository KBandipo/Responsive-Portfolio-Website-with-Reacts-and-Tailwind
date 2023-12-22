import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import Contact from "./assets/components/Contact";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import About from "./assets/components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />}
        />
        <Route path="/contact" element={<Contact darkMode={darkMode} toggleTheme={toggleTheme}/>} />
        <Route path="/projects" element={<Projects darkMode={darkMode} toggleTheme={toggleTheme}/>} />
        <Route path="/skills" element={<Skills darkMode={darkMode} toggleTheme={toggleTheme}/>} />
        <Route path="/about" element={<About darkMode={darkMode} toggleTheme={toggleTheme}/>} />
      </Routes>
    </Router>
  );
}

export default App;
