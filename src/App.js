import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/AboutMe.js';
import Education from './components/Education.js';
import MyContact from './components/MyContact.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<MyContact />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
