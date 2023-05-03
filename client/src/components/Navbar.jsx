import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/css/navbar.css"

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <nav>
        <div className= "navContainer">
          <div className="navTopBar"></div>
          <div className="linksContainer">
            <Link
              to="/"
              className="navLink">
              <button className="navButton">
                <p className="navName">HOME</p>
              </button>
            </Link>
            <Link
              to="/about"
              className="navLink">
              <button className="navButton">
                <p className="navName">ABOUT</p>
              </button>
            </Link>
            <div
              className="classes.menuIcon"
              onClick="toggleMobileNav">
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;