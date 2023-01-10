import React, { useEffect } from 'react'
import Footer from '../../MyComponent/Footer'
import Header from '../../MyComponent/Header'
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const history = useNavigate();
  return (
    <>
    <Header/>
    <div>Welcome to UserDashboard</div>
    <Footer/>
    </>
  )
}

export default UserDashboard