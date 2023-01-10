import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getCurrentUserDetail, getToken } from '../../auth';
import Footer from '../../MyComponent/Footer';
import Header from '../../MyComponent/Header';
import "./Profile.css"
function UpdatePass() {
    const [oldpass,setOldpass]=useState("");
    const [newpass,setNewpass]=useState("");
    const [conpass,setConpass]=useState("");
    const [userPass,setUserPass] =useState("");
    const [userData,setUserData] =useState("");
    useEffect(()=>{
        const token=getToken();
        setUserData(getCurrentUserDetail());
        const userdat=getCurrentUserDetail()
        axios.get(`http://localhost:8080/patient/getPass/${userdat.email}`,{
            headers:{
   'Authorization':`Bearer ${token}`
            }
        }).then((res)=>{
            setUserPass(res.data)
        }).catch(err=>console.log(err))
    },[])
    let handleUpdate=(e)=>{
        e.preventDefault();
        console.log(userPass)
        console.log(oldpass)
        if (userPass==oldpass){
            alert("pass same")
        }else{
            alert("pass dif")
        }
    }
  return(
    <>
    <Header/>
    <h1 style={{textAlign : "center",padding:"10px",color:"purple"}}>Update Password</h1>
    <form className='form-update' onSubmit={handleUpdate}>
    <div className='form-padd'>
    <label className='form-label'> Old Password</label>
    <input type="text" value={oldpass} onChange={(e)=> setOldpass(e.target.value)}required/>
    </div>
    <div className='form-padd'>
    <label className='form-label' > New Password</label>
    <input type="text" value={newpass}  onChange={(e)=> setNewpass(e.target.value)} required/>
    </div>
    <div className='form-padd'>
    <label className='form-label'> Confirm Password</label>
    <input type="text" value={conpass} onChange={(e)=> setConpass(e.target.value)} required/>
    </div>
    <div className='form-padd'>
    <button type="submit" className='form-button'>Update</button>
    </div>

    </form>
    <Footer/>
    </>

  )
}

export default UpdatePass