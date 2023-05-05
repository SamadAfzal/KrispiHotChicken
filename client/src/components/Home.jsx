import React from 'react';



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
