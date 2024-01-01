import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/register.module.css';
function Registration() {

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
            await axios.post("http://localhost:6969/user" , user);
            alert("registration successful");
            setUser({
                username : '',
                password : '',
                email : ''
            });
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