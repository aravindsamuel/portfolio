import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
