import React, { useContext } from 'react';
import navStyle from '../styles/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken } from '../AuthService';
import UserContext from './UserContext';


function Navbar(props) {

  const navigate = useNavigate();
  const user = useContext(UserContext);
  
  console.log("userdata recieved from user context : " + JSON.stringify(user));
  const logout = () => {
    removeToken();
    navigate('/login');
    props.authSetter(false);
  }

  return (
    <div className={navStyle.navbar}>
      <div className={navStyle.logo}>Quantify</div>
      <div className={navStyle.navItems}>
        <p>welcome , john doe</p>
        <button>profile</button>
        {isAuthenticated()?
        <button onClick={logout}>logout</button>:<button onClick={navigate('/register')}>register</button>
    }
      </div>
    </div>
  )
}

export default Navbar