import React from 'react'
import styles from '../styles/register.module.css';
import { useState } from 'react';
import axios from 'axios';
import { isAuthenticated, setToken } from '../AuthService';
import { useNavigate } from 'react-router-dom';


function Login(props) {
  const navigate = useNavigate();
  const [responseMessage,setResponseMessage] = useState('');
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
      setResponseMessage(response.data.message);
      if(response.data.token)
      {
        setToken(response.data.token);
        navigate('/food');
      }
      setUser({
        email:'',
        password:'',
      })
      
      props.authSetter(isAuthenticated());
    }catch(err){
      console.log("this error is from Login component :" + err);
    }
  }

  return (
    <div className={styles.registration}>
      <h1>{responseMessage}</h1>
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