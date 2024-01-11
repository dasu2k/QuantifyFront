import React, { useContext } from 'react';
import navStyle from '../styles/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken } from '../AuthService';
import UserContext from './UserContext';


function Navbar(props) {

  const navigate = useNavigate();
  const user = useContext(UserContext);
  console.log(user);
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

  return (
    <div className={navStyle.navbar}>
      <div className={navStyle.logo}>Quantify</div>
      <div className={navStyle.navItems}>
        
        
        {isAuthenticated()?
          <div style={{display:'flex'}}>
            <p>welcome,  {user}</p>
            <button>profile</button>
            <button onClick={logout}>logout</button>
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