import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import styles from '../../styles/food.module.css'
function DailyFoodStats({foods}) {
    
    const [stats,setStats] = useState({
        name:'',
        calories:0,
        protein:0
    });
    useEffect(()=>{
        var cals = 0;
        var prot = 0;
        
        foods.map((food)=>{
          cals+=food.calories;
          prot+=food.protein;
        })
    
        setStats(()=>(
          {
            calories: cals,
            protein : prot
          }
        ))
      }, [foods]);


  return (
    <div>
        <div className={styles.foodStats}>
          <label>calories:</label>
            <p>{stats.calories}</p>
          <label>protein:</label>
            <p>{stats.protein}</p>
      </div>
    </div>
  )
}

export default DailyFoodStats;