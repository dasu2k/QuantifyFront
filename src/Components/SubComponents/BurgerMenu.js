import React from 'react'
import styles from '../../styles/burgermenu.module.css'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../../AuthService'



function BurgerMenu() {

  const navigate = useNavigate();

  const logout = () => {
    console.log("trying to log out");
    removeToken();
    navigate('/login');
  }

  return (
    <div className={styles.menu}>
        <ul>
            <li><a onClick={logout}>Log out</a></li>
            <li><a>History</a></li>
            <li><a>Today's</a></li>
        </ul>
    </div>
  )
}

export default BurgerMenu