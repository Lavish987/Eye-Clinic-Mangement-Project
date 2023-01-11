import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isDoctorLoggedIn } from '../auth'

function DoctorPrivateRoute() {
 if (isDoctorLoggedIn()){
    return <Outlet/>
 }
 else{
  return <Navigate to={"/doctor"}/>
 }
}

export default DoctorPrivateRoute