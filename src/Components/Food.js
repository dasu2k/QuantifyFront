import React, { useContext } from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import styles from '../styles/food.module.css';
import DailyFoodStats from './SubComponents/DailyFoodStats';
import { getToken } from '../AuthService';
import moment from 'moment';

function Food() {
  const date = new Date().toDateString();
  const formatedDate = moment().format('DD-MM-YYYY dddd');
  const [foods, setFoods] = useState([]);
  const [newFood , setNewFood] = useState({
    name:'',
    calories:0,
    protein:0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization : `Bearer ${getToken()}`
        }
        const response = await axios.get('https://quantifyback.onrender.com/food', {headers});
        setFoods(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
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
    const headers = {
      Authorization : `Bearer ${getToken()}`
    }
    
    try{
      setNewFood({
        name:'',
        calories:0,
        protein:0
      })  
      await axios.post('https://quantifyback.onrender.com/food',  newFood , {headers});
      const response = await axios.get("https://quantifyback.onrender.com/food" , {headers});
      setFoods(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className={styles.Food}>
      
      <div className={styles.firstHalf}>
      <p className={styles.Date}>{formatedDate}</p>
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
              <tr >
                <td>{food.name}</td>
                <td>{food.calories}</td>
                <td>{food.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.SecondHalf}>
        <p className={styles.innerHeading}>Create a new entry</p>
        <div className={styles.FoodInput}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>food</label>
                  <input type='text' name='name'  required='true' value ={newFood.name} onChange={handleChange}/>
                </div>

                <div>
                  <label>calories</label>
                  <input type='text' name='calories' required='true' value ={newFood.calories} onChange={handleChange}/>
                </div>
                <div>
                  <label>protein</label>
                  <input type='text' name='protein' required='true' value ={newFood.protein} onChange={handleChange}/>
                </div>
                <button type='submit'>submit</button>
              </form>
        </div>
        <br></br>
        <p>Today's intake</p>
        <DailyFoodStats foods={foods}/>
      </div>
    </div>
  )
}

export default Food;