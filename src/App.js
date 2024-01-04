import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';

import Registration from './Components/Registration';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';

import AuthRoutes from './Components/AuthRoutes';
import { useEffect, useState } from 'react';
import { isAuthenticated } from './AuthService';


function App() {
  
  const [isAuth,setIsAuth] = useState(false);
  const message = "this is props sent from app";
  useEffect(()=>{
    const authCheck = () =>{
      setIsAuth(isAuthenticated());
    }
    authCheck();
  },[])

  return (
    <div className="App">
        <Router>
           <Navbar authSetter = {setIsAuth}/>
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
