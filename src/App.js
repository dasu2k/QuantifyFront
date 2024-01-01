import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import Exercise from './Components/Exercise';
import Registration from './Components/Registration';
import Login from './Components/Login';
import {  useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

  

  return (
    <div className="App">
      
        <Router>
          <Navbar/>
          <Routes>
            <Route element={<ProtectedRoute/>}>
              <Route element={<Food/>} path='/food'/>
            </Route>
            <Route path='register' element={<Registration />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
