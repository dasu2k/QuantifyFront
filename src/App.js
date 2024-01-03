import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import Exercise from './Components/Exercise';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';
import axios from 'axios';



function App() {
  
  return (
    <div className="App">
      
        <Router>
          <Navbar/>
          <Routes>

            <Route path='register' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route element={<ProtectedRoute/>}>
             
                <Route element={<Food/>} path='/food'/>
                <Route element={<Exercise/>} path='/exercise'/>
              
            </Route>

            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
