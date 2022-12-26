
import Header from './MyComponent/Header'
import Footer from './MyComponent/Footer'
import {Grid,Paper,TextField,} from'@material-ui/core'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

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
  const [err, setErr] = useState("")
  const [iserror,setIserror]=useState(false);
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (iserror===true){
      alert("Enter data correct");
      return
    }
    
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
  const reset=()=>{
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
         setErr("");
  }
  const validateUser=()=>{
    if (email && data){
    data.forEach(row=>{
      if(row.email===email){
        setErr('User is already exists')
        setIserror(true);
      }
      // if (err !== ""){
      // reset()
      // }
    })
  .catch(err=>{
    console.log(err);
  })
    }
  }
  const [data,setData]=useState([]);
  useEffect(()=>{
    
    axios.get("http://localhost:8080/patient/doget").then((response)=>{
  console.log(response);
  setData(response.data);
  });

  },[])
  
  
  return (
    
      
     

    

<div>
    <Header r={false} />
<div className='reg_adjust'>
      {/* <div className="container py-5 h-100"> */}
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo" className="img-fluid"
                  style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase"> Registration Form</h3>
                  <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example1m"> Name</label>
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" value={name} placeholder='Enter Full Name' onChange={(e) => { setIserror(true);setName(e.target.value)}} required/>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example99">Email ID</label>
                    <input type="Email" id="form3Example99" className="form-control form-control-lg" value={email} placeholder='Enter Email'  onChange={(e) => {setErr("") ;setEmail(e.target.value)}} required/>
                    {err && <p> {err}</p>}
                  </div>

                    <div className="">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example1n">Password</label>
                        <input type="password" id="form3Example1n" className="form-control form-control-lg" value={password} placeholder='Enter Password' onFocus={validateUser}  onChange={(e) => setPassword(e.target.value)} required/>
                        
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example9">Mobile</label>
                    <input type="text" id="form3Example9" className="form-control form-control-lg" value={mobile} placeholder='Enter Mobile NO.' onChange={(e) => setMobile(e.target.value)} required/>
                    
                  </div>


                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example1m1">Height</label>
                        <input type="text" id="form3Example1m1" className="form-control form-control-lg" value={height} placeholder='Enter Height' onChange={(e) => setHeight(e.target.value)} required/>
                        
                      </div>
                    </div>
                   
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example1n1">Age</label>
                        <input type="text" id="form3Example1n1" className="form-control form-control-lg" value={age} placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} required/>
                        
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example97">Weight</label>
                    <input type="text" id="form3Example97" className="form-control form-control-lg" value={weight} placeholder='Enter Weight' onChange={(e) => setWeight(e.target.value)} required/>
                   
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example8">Occupation</label>
                    <input type="text" id="form3Example8" className="form-control form-control-lg" value={occupation} placeholder='Enter Occupation' onChange={(e) => setOccupation(e.target.value)} required/>
                    
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example8">Gender</label>
                    <input type="text" id="form3Example8" className="form-control form-control-lg" value={gender} placeholder='Enter Gender' onChange={(e) => setGender(e.target.value)} required/>
                    
                  </div>

                 


                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example90">Address</label>
                    <input type="text" id="form3Example90" className="form-control form-control-lg" value={address} placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)} required/>
                    
                  </div>



                  <div className="d-flex justify-content-end pt-3">
                    <button type="button" className="btn btn-light btn-lg" onClick={reset}>Reset all</button>
                    <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                  </div>

                  <div >{message ? <p>{message}</p> : null}</div>
              </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>


  )









}

export default Register;