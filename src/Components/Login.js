import React, { useEffect } from 'react'
import styles from '../styles/register.module.css';
import { useState } from 'react';
import axios from 'axios';
import { isAuthenticated, setToken } from '../AuthService';
import { useNavigate } from 'react-router-dom';
import {LineWave} from 'react-loader-spinner';

function Login(props) {
  const navigate = useNavigate();
  const [responseMessage,setResponseMessage] = useState('');
  const [isLoading , setIsLoading] = useState(false);
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
      setIsLoading(true);
      setResponseMessage('');
      const response = await axios.post("https://quantifyback.onrender.com/login",user);
      //console.log("recieved data from backend after login submit: " +  JSON.stringify(response.data));
      setResponseMessage(response.data.message);
      setIsLoading(false);
      if(response.data.token)
      {
        setToken(response.data.token);
        navigate('/food');
      }
      setUser({
        email:'',
        password:'',
      })
      
      //console.log("user name after login " + response.data.username);
      props.userSetter(response.data.username);
      props.authSetter(isAuthenticated());
    }catch(err){
      setIsLoading(false);
      console.log("this error is from Login component :" + err);
    }
  }

  return (
    <div className={styles.registration}>
      <h1>{responseMessage}</h1>
      <div>
        <LineWave color='aqua' visible={isLoading}/>
          
          
      </div>
      
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