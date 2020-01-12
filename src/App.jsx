import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import about from "./components/about"
import News from "./components/News"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/ComponentNavbar"


function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/"  component={ Home } />
          <Route exact path="/about"  component={ about } />
          <Route exact path="/news"  component={ News } />
        </div>
      </Router>
      
    
  );
}

export default App;
