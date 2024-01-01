import React from 'react';
import navStyle from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className={navStyle.navbar}>
      <div className={navStyle.navItems}>
        <Link to='/food'>Food</Link>
      </div>
      <div className={navStyle.logo}>Quantify</div>
        
    </div>
  )
}

export default Navbar