import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './port/header';
import Home from './port/home';
import Projects from './port/Projects';
import Languages from './port/Languages';
import AboutMe from './port/about_me';
import Resume from './port/Resume';
import Contact from './port/Contact';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

