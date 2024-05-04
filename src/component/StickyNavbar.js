import React, { useState, useEffect } from 'react';
import '../style/StickyNavbar.css'; // Import your CSS file

function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="mainNav" className={isSticky ? 'sticky' : ''}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </nav>
  );
}

export default StickyNavbar;
