import React from 'react';
import navStyle from '../styles/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken } from '../AuthService';


function Navbar(props) {
  const navigate = useNavigate(); 

  const logout = () => {
    removeToken();
    navigate('/login');
    props.authSetter(false);
  }

  return (
    <div className={navStyle.navbar}>
      
      <div className={navStyle.logo}>Quantify</div>
      <div className={navStyle.navItems}>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar