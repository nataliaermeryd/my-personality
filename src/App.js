import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Music from './Music';
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>  
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h1>⦒IS IT ABOUT ME⦑</h1>
  </div>
);

export default App;