import React  from 'react';
import navStyle from '../styles/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken } from '../AuthService';
import { useState } from 'react';

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

  const toggleBurger = () =>{
    
  }
  return (
    <div className={navStyle.navbar}>
      <div className={navStyle.logo}>Quantify</div>
      <div className={navStyle.navItems}>
        
        {isAuthenticated()?
          <div style={{display:'flex'}}>
            <p>welcome,  {user}</p>
            <div className={navStyle.menu}>
              <button>profile</button>
              <button onClick={logout}>logout</button>
            </div>
            <div className={navStyle.burger}>
              <button onClick={toggleBurger}>menu</button>
            </div>
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