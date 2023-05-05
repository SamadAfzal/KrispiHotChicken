import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fire from './components/fire';
import "./styles/css/styles.css"

function App() {
  return (
    <div>
      <Navbar />
      <h1>Krispi Hot Chicken</h1>
      <canvas>
         <a href="/Order">Order</a>
      </canvas>
      <Fire />
      <Footer />
    </div>
  );
}

export default App;