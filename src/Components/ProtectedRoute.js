import React from 'react'
import { Outlet , Navigate} from 'react-router-dom'
import { getToken, isAuthenticated } from '../AuthService'

function ProtectedRoute() {
    console.log("is authenticated: "+isAuthenticated());
    console.log("token in local storage:"+localStorage.getItem('token'));
  return (
    isAuthenticated() ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoute