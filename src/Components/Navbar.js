import React, { useContext } from 'react';
import navStyle from '../styles/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../AuthService';
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
        <button onClick={logout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar