import React from 'react'
import { isAuthenticated } from '../AuthService'
import { Outlet , Navigate} from 'react-router-dom'

function AuthRoutes() {
  return (!isAuthenticated() ? <Outlet/>: <Navigate to='/food'/>)
}

export default AuthRoutes