import React, { useState } from 'react';
import '../styles/footer.scss';



function Footer() {
  const [showNavButtons] = useState(false);

  return (
    <div className="footDiv">
        
         <div className={`footButtons ${showNavButtons ? 'active' : ''}`}>
        <p className="footName">
            Address:
            17292 McFadden Ave, Ste L Tustin, CA 92780
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
      
      
    </div>
    
  );
}
export default Footer;




