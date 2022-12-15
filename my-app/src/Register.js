import React from 'react'
import Header from './MyComponent/Header'
import Footer from './MyComponent/Footer'
import {Grid,Paper,TextField,} from'@material-ui/core'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [occupation,setOccupation]=useState("");
  const [password,setPassword]=useState("");
  const [address,setAddress]=useState("");
  const [message,setMessage]=useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post("http://localhost:8080/patient/register", {name, email, password, mobile, address, gender, age,weight,height, occupation}, {
        
          headers: {
            "Content-Type": "application/json"
          }

      })
       if (res.status === 200) {
         setName("");
         setEmail("");
         setAddress("");
         setMobile("");
         setPassword("");
         setAge("");
         setGender("");
         setWeight("");
         setHeight("");
         setOccupation("");
         setMessage("User created successfully");
       } else {
         setMessage("Some error occured");
       }
    } catch (err) {
      console.log(err);
    }
  };

    const paperStyle={padding:20,height:'60vh',width:280,margin:"20px auto"}
  const btnStyle={margin:"10px 0px -5px"}
  return (
    <div>
        <Header r={false} h={false}/>
      <Grid>
           <Paper  elevation={10} style={paperStyle}>
            <Grid align='left'>
            <h1>Sign up</h1>
            </Grid>
            <form onSubmit={handleSubmit}>
          <input type="text" id="margin-dense" margin="dense"  label='Full Name' variant= 'outlined' value={name} placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)} fullwidth required/>
          <input type="text" id="margin-dense" margin="dense" label='Email' variant= 'outlined' value={email} placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} fullwidth required/>
          <input  id="margin-dense" margin="dense"  label='Password' variant= 'outlined'value={password} placeholder='Enter your password'  onChange={(e) => setPassword(e.target.value)}type='password' fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Mobile' variant= 'outlined' value={mobile} placeholder='Mobile NO.' onChange={(e) => setMobile(e.target.value)} fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Address' variant= 'outlined' value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)}fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Address' variant= 'outlined' value={age} placeholder='Age' onChange={(e) => setAge(e.target.value)}fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Address' variant= 'outlined' value={weight} placeholder='Weight' onChange={(e) => setWeight(e.target.value)}fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Address' variant= 'outlined' value={height} placeholder='Height' onChange={(e) => setHeight(e.target.value)}fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Address' variant= 'outlined' value={gender} placeholder='Gender' onChange={(e) => setGender(e.target.value)}fullwidth required/>
          <input type="text" id="margin-dense" margin="dense"  label='Address' variant= 'outlined' value={occupation} placeholder='Occupation' onChange={(e) => setOccupation(e.target.value)}fullwidth required/>
          <Button type='submit' fullwidth variant='contained' color='success' style={btnStyle} >Create an account</Button> 
          <div >{message ? <p>{message}</p> : null}</div>
          </form>
          <div>
            <p style={{marginTop: "20px"}}>
              Already have an account?
              <Link type="submit" to={"/login"}>Login</Link>
            </p>

          </div>
          
           </Paper>
      </Grid>
        <Footer/>

    </div>
  )
}

export default Register;