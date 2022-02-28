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
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/music" component={Music} />
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