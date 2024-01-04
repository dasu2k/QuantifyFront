import React from 'react'
import styles from '../styles/register.module.css';
import { useState } from 'react';
import axios from 'axios';
import { isAuthenticated, removeToken, setToken } from '../AuthService';
import { useNavigate } from 'react-router-dom';


function Login(props) {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:'',
    password:'',
  })

  const handleChange = (e) =>{
    setUser((prevUser)=>({
      ...prevUser,
      [e.target.name]:e.target.value
    }));
  }
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:6969/login",user);
      console.log("recieved data from backend after login submit: " +  JSON.stringify(response.data));
      setToken(response.data.token);
      setUser({
        email:'',
        password:'',
      })
      navigate('/food');
      props.authSetter(isAuthenticated());
    }catch(err){
      console.log("this error is from Login component :" + err);
      removeToken();
    }
    
  }

  return (
    <div className={styles.registration}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit" rel='/food'>Login</button>
      </form>
    </div>
  );
}

export default Login