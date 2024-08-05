import React  from 'react';
import navStyle from '../styles/navbar.module.css';
import {  useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken } from '../AuthService';
import { useState } from 'react';
import BurgerMenu from './SubComponents/BurgerMenu';

import { slide as Menu } from 'react-burger-menu';

function Navbar(props) {

  const [burgerMenu , setBurgerMenu] = useState(false);
  const navigate = useNavigate();
  
  const user = props.username;
  const logout = () => {
    removeToken();
    navigate('/login');
    props.authSetter(false);
  }

  const registerBtn = () =>{
    navigate('/register');
  }
  const loginBtn = () =>{
    navigate('/login');
  }
  
  const previousLogs = () =>{
    navigate('/prev');
  }

  return (
    <div className={navStyle.navbar}>
      <div className={navStyle.logo}>Quantify</div>
      <div className={navStyle.navItems}>
        {isAuthenticated()?
          <div style={{display:'flex'}}>
            <p>welcome,  {user}</p>
            <button onClick={logout}> log out</button>
          </div>
          :
          <div>
            <button onClick={loginBtn}>login</button>
            <button onClick={registerBtn}>register</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar