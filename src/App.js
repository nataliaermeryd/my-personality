import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Music from './Music';
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
          </Routes>
        </div>  
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;