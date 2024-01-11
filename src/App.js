import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom';
import Food from './Components/Food';

import Registration from './Components/Registration';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';

import AuthRoutes from './Components/AuthRoutes';
import { useEffect, useState } from 'react';
import { getToken, isAuthenticated } from './AuthService';
import UserContext from './Components/UserContext';
import axios from 'axios';


function App() {
  const [user,setUser] = useState('');
  const [isAuth,setIsAuth] = useState(false);
  useEffect(()=>{
    const fetchUser= async ()=>{
      try{
        const headers = {
          Authorization : `Bearer ${getToken()}`
        };
        const response = await axios.get("https://quantifyback.onrender.com/user",{headers});
        setUser(response.data[0].username);
      }catch(err){
        console.log(err);
      }
    }

    const authCheck = () =>{
      setIsAuth(isAuthenticated());
    }

    authCheck();
    fetchUser();

  },[]);

  return (
    <div className="App">
        <Router>
          <UserContext.Provider value={user}>
            <Navbar authSetter = {setIsAuth}/>
          </UserContext.Provider>
          <Routes>
            <Route element={<AuthRoutes/>}>
              <Route path='register' element={<Registration authSetter = {setIsAuth}/>} />
              <Route path='login' element={<Login authSetter = {setIsAuth}/>}/>
            </Route>
            <Route element={<ProtectedRoute/>}>
                <Route element={<Food/>} path='/food'/>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
