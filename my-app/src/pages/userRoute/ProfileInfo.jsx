import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentUserDetail, getToken } from '../../auth';
import Footer from '../../MyComponent/Footer'
import Header from '../../MyComponent/Header'
import UserDashboard from './UserDashboard';
import "./Profile.css"
import { getImageListItemBarUtilityClass } from '@mui/material';

function ProfileInfo() {
       
       const [formData, setFormData] = useState(null);
       const [userData,setUserData]=useState(null);
       const [token,setToken]=useState("");
       useEffect(()=>{
            const userdet=getCurrentUserDetail();
            setUserData(userdet);
            const tokennum=getToken();
            setToken(tokennum);
            const emailid=userdet.email;
        axios.get(`http://localhost:8080/patient/getByEmail/${emailid}`,
        {
          headers:{
          'Authorization':`Bearer ${tokennum}`
        }}).then((res)=>{
          setFormData(res.data)}).catch(err=>{
            console.log(err)
          })
       },[])
  const [msg,setMsg]=useState(null);
    let handleSubmit= async(e)=>{
  e.preventDefault();
  try {
    const res = await axios.put("http://localhost:8080/patient/update", { name:formData.name, email:formData.email, password:formData.password, mobile:formData.mobile, address:formData.address, gender:formData.gender, age:formData.age,weight:formData.weight,height:formData.height, occupation:formData.occupation},{
       
         headers: {
           "Content-Type": "application/json",
           "Authorization":`Bearer ${token}`
         }

     })
      if (res.status === 200) {
        alert("User Updated successfully");
      } else {
        alert("Some error occured");
      }
   } catch (err) {
     console.log(err);
   }


    }
    let handleEmail=(e)=>{
    
        setMsg("Email cannot be Change")
    }
    let handleMsg=(e)=>{
    
        setMsg("")
    }


  return (
    <>
    <Header/>
    <h1 style={{textAlign : "center",padding:"10px",color:"purple"}}>Profile</h1>
    <form className='form' onSubmit={handleSubmit}>
      {formData && (
        <>
          <label className='form-label'>
            Name:
            <input type="text" value={formData.name} onChange={(e) => {setFormData({...formData,name:e.target.value})}} />
          </label>
          <br />
          <label className='form-label'>
            Email:
            <input type="email" value={formData.email} onBlur={()=>{handleMsg()}} onFocus={()=>{handleEmail()}} readOnly  />
            
          </label>
          {msg && <p> {msg}</p>}
          <br />
          <label className='form-label'>
            Contact:
            <input type="text" value={formData.mobile}  onChange={(e) => {setFormData({...formData,mobile:e.target.value})}}/>
          </label>
          <br />
          <label className='form-label'>
            Occupation:
            <input type="text" value={formData.occupation}  onChange={(e) => {setFormData({...formData,occupation:e.target.value})}}/>
          </label>
          <br />
          <label className='form-label'>
            Weight:
            <input type="text" value={formData.weight} onChange={(e) => {setFormData({...formData,weight:e.target.value})}} />
          </label>
          <br />
          <label className='form-label'>
            Height:
            <input type="text" value={formData.height} onChange={(e) => {setFormData({...formData,height:e.target.value})}} />
          </label>
          <br />
          <label className='form-label'>
            Age:
            <input type="text" value={formData.age} onChange={(e) => {setFormData({...formData,age:e.target.value})}} />
          </label>
          <br />
          <label className='form-label'>
            Gender
            <input type="text" value={formData.gender} onChange={(e) => {setFormData({...formData,gender:e.target.value})}} />
          </label>
          <br />
          <label className='form-label'>
            Address:
            <input type="text" value={formData.address}  onChange={(e) => {setFormData({...formData,address:e.target.value})}}/>
          </label>
          <br />
          <button type="submit" className="form-button">
        Update
      </button>
       
        </>
      )}
    </form>

         <Footer/>
    </>
  )
}

export default ProfileInfo