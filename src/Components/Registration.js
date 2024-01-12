import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/register.module.css';
import { isAuthenticated, setToken } from '../AuthService';
import {  useNavigate } from 'react-router-dom';
function Registration(props) {
    const navigateTo = useNavigate(); 
    const [user , setUser] = useState({
        username : '',
        password : '',
    });

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(user.email)){
            window.alert("invalid email");
            return;
        }

        
        try{
            const response = await axios.post("http://localhost:6969/user" , user);
            if(response.data == "email already exists"){
              alert(response.data);
              setUser({
                username : '',
                password : '',
                email : ''
            });
            }else{
              alert("resigtration successful");
              navigateTo('/login');
          }
        }
        catch(err){
            console.log(err);
        }
    }

    const handleChange = (e) =>{
        setUser((prevUser)=> ({
            ...prevUser, 
            [e.target.name] : e.target.value
        }))
    }

    return (
        <div className={styles.registration}>
          <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
    
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
    
            <button type="submit" onSubmit={handleSubmit}>Register</button>
          </form>
        </div>
      );
    
}

export default Registration