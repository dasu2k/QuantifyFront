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
        <label>calories</label>
        <h2>{stats.calories}</h2>
        <label>protein</label>
        <h2>{stats.protein}</h2>
      </div>
    </div>
  )
}

export default DailyFoodStats;