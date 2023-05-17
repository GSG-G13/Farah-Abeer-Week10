import React from 'react';
import { FiDribbble } from 'react-icons/fi';
import './style.css'

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">Uni-Explore <FiDribbble/></div> 
      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
