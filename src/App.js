import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import Exercise from './Components/Exercise';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';

import UserContext from './UserContext';


function App() {
  const [user , setUser] = useState({});

  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        const response = await axios.get("http://localhost:6969/user");
        setUser(response.data);
        console.log("user in the App component passing down : " +user);
      }catch(err){
        console.log(err);
      }
    }
    fetchUser();
  },[]);

  return (
    <div className="App">
      
        <Router>
          <Navbar/>
          <Routes>

            <Route path='register' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route element={<ProtectedRoute/>}>
              <UserContext.Provider value={{user,setUser}}/>
                <Route element={<Food/>} path='/food'/>
                <Route element={<Exercise/>} path='/exercise'/>
              <UserContext.Provider/>
            </Route>

            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
