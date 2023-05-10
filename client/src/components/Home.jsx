import React from 'react';
import Fire from './Fire/Fire.jsx';


function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="video-container">
        {/*video code here*/}
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <button className="order-button">Order Now</button>
        </div>
      </div>
      
      <Footer />
      
    </div>
  );
}
export default Home;