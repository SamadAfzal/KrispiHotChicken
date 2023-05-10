import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import logo from '../images/circle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showNavButtons, setShowNavButtons] = useState(false);

  const toggleNavButtons = () => {
    setShowNavButtons(!showNavButtons);
  };

  return (
    <div className="navDiv">
      <Link to="/" className="navLink">
        <img src={logo} alt="SAFERescue" className="logo" />
      </Link>
      <div className={`navButtons ${showNavButtons ? 'active' : ''}`}>
        <Link to="/Home" className="navLink">
          <button className="navButton">
            <p className="navName">Home</p>
          </button>
        </Link>
        <Link to="/About" className="navLink">
          <button className="navButton">
            <p className="navName">About</p>
          </button>
        </Link>
        <Link to="/Menu" className="navLink">
          <button className="navButton">
            <p className="navName">Menu</p>
          </button>
        </Link>
        <Link to="https://www.clover.com/online-ordering/krispi-hot-chicken-tustin?employee_id=1QTGF85A6P6H0&order_type=dine_in" className="navLink">
          <button className="navButton">
            <p className="navName">Order</p>
          </button>
        </Link>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger"
        onClick={toggleNavButtons}
      />
    </div>
  );
}

export default Navbar;




