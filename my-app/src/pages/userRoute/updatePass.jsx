import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getCurrentUserDetail, getToken } from '../../auth';
import Footer from '../../MyComponent/Footer';
import Header from '../../MyComponent/Header';
import "./Profile.css"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/react-toastify.css'

function UpdatePass() {
    const [oldpass,setOldpass]=useState("");
    const [newpass,setNewpass]=useState("");
    const [conpass,setConpass]=useState("");
    const [formData,setFormData] =useState("");
    const [token,setToken]=useState("");
    useEffect(()=>{
        setToken(getToken());
        setFormData(getCurrentUserDetail());
    },[])
    let handleUpdate= async(e)=>{
        e.preventDefault();
        if (conpass!==newpass){
            alert("New Password not matched with Confirm Password");
            return;
        }
    try{
      const res=await axios.put(`http://localhost:8080/patient/updatePass/${newpass}`,{ name:formData.name, email:formData.email, password:formData.password, mobile:formData.mobile, address:formData.address, gender:formData.gender, age:formData.age,weight:formData.weight,height:formData.height, occupation:formData.occupation,password:oldpass},{
        headers:{
          "Content-Type":"application/json",
          "Authorization" :`Bearer ${token}`
        }
      })

      if (res.status===200){
        if (res.data==true){
            alert("Password Updated")
        }
        else{
            alert("Old Password Not Correct")
        }
      }
      
    }catch(err){
      console.log(err);
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
    <input type="password" value={newpass}  onChange={(e)=> setNewpass(e.target.value)} required/>
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