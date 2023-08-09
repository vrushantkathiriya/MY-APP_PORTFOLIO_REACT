import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element= {<About />} />
      <Route path="/Project" element= {<Project />} />
      <Route path="/Contact" element= {<Contact />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
