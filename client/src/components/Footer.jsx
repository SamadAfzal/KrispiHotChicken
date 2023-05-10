import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import reactDom from 'react-dom';
import Fire from './Fire/Fire.jsx';


function Footer() {
  const [showNavButtons, setShowNavButtons] = useState(false);

  const toggleNavButtons = () => {
    setShowNavButtons(!showNavButtons);
  };

  return (
    <div className="navDiv">
      <div className={`navButtons ${showNavButtons ? 'active' : ''}`}>
        <p className="navName">
            Address:
            17292 McFadden Ave Ste L Tustin, CA 92780
            <br />
            Phone Number:
            (657) 356-8611
            <br />
            Hours of Operation:
            Monday - Friday: 10:00am - 9:00pm
            Saturday - Sunday: 11:00am - 9:00pm
            <br />
        </p>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger"
        onClick={toggleNavButtons}
      />
    </div>
  );
}
// reactDom.render(<Fire />, document.getElementById('root'));
export default Footer;




