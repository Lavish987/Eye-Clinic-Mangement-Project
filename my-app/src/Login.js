import React, { useEffect, useState } from 'react'
import Header from './MyComponent/Header'

import { Box, Grid, Paper, TextField, } from '@material-ui/core'
import Button from '@mui/material/Button';
import { Link, redirect } from "react-router-dom"
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const paperStyle = { padding: 20, height: '60vh', width: 280, margin: "20px auto" }
  const btnStyle = { margin: "10px 0px -5px" }
  const [loginDetail,setLoginDetail]=useState(
    {
      username:'',
      password:''
    }
  )
  const [message,setMessage]=useState("");
  const handleChange=(event,field)=>{
    let actualValue=event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]:actualValue
  })
  }
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    if (loginDetail.username.trim()==="" || loginDetail.password===""){
      alert("Username or password is required");
      return;
    }
    try {
      axios.post("http://localhost:8080/patient/auth", {patientName: loginDetail.username, patientPassword: loginDetail.password}).then((response)=>
      {
        if (response.data!==""){
          setMessage("User login successful");
          toast.success("User Login");
          
          


         }else{
          setMessage("Error occured")
         }
    
      }).catch(err=>{
        console.log(err);
      })
     } catch (err) {
       console.log(err);
     }
   };

  

  return (
    <div>
      <Header l={false} h={false} />




      <div className='login_form'>
         
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              
              <div className="form-group mt-3">
                
                <label htmlFor='username'>UserName</label>
                <input
                  autoComplete='username'
                  type="text"
                  id='username'
                  className="form-control mt-1"
                  placeholder="Enter username"
                  value={loginDetail.username}
                  onChange={(e)=>{handleChange(e,'username')}}
                  

                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                   autoComplete='current-password'
                  type="password"
                  id="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={loginDetail.password}
                  onChange={(e)=>{handleChange(e,'password')}}
                  
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                 <Link  to={"/signup"}>Sign Up?</Link>
              </p>
            </div>
            <div className="me">{message ? <p >{message}</p> : null}</div>
          </form>
          
        </div>
      </div>
      
    
    </div>
  )
}

export default Login