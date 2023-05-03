import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './styles/css/styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutUs';
import Menu from './components/Menu';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Navbar />
        
        <div>Homepage</div>
      
        <Footer />
      </div>
  );
}

export default App;



