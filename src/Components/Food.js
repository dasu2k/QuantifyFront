import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import styles from '../styles/food.module.css';

import DailyFoodStats from './SubComponents/DailyFoodStats';

function Food() {
  
  const date = new Date().toDateString();
  

  const [foods, setFoods] = useState([{}]);
  
  const [newFood , setNewFood] = useState({
    name:'',
    calories:0,
    protein:0
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6969/food');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  
  const handleChange = (e) =>{
    setNewFood((prevNewFood)=>( {
      ...prevNewFood,
      [e.target.name] : e.target.value,
    }))
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setNewFood({
        name:'',
        calories:0,
        protein:0
      })
      await axios.post('http://localhost:6969/food',newFood);
      const response = await axios.get("http://localhost:6969/food");
      setFoods(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

 
  
  return (
    <div className={styles.Food}>
      
      <div>
      <h1>{date}</h1>
        <table className={styles.Tab}>
          <thead>
            <tr>
              <th>Food</th>
              <th>calories</th>
              <th>protein</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food)=>(
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.calories}</td>
                <td>{food.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className={styles.FoodInput}>
            <form onSubmit={handleSubmit}>
              <label>food</label>
              <input type='text' name='name'  required='true' value ={newFood.name} onChange={handleChange}/>
              <label>calories</label>
              <input type='text' name='calories' required='true' value ={newFood.calories} onChange={handleChange}/>
              <label>protein</label>
              <input type='text' name='protein' required='true' value ={newFood.protein} onChange={handleChange}/>
              <button type='submit' >submit</button>
            </form>
      </div>
      <DailyFoodStats foods={foods}/>
    </div>
  )
}

export default Food;