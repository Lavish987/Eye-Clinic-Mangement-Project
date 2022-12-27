import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentUserDetail } from '../../auth';
import Footer from '../../MyComponent/Footer'
import Header from '../../MyComponent/Header'
import UserDashboard from './UserDashboard';

function ProfileInfo() {
    const [userdata,setUserdata]=useState([]);
    useEffect(()=>{
     setUserdata(getCurrentUserDetail())
    })

  return (
    <>
    <Header/>
    <h1 style={{textAlign : "center",padding:"10px",color:"purple"}}>Profile</h1>
     
    <Footer/>
    </>
  )
}

export default ProfileInfo