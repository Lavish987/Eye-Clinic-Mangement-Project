import React ,{useEffect, useState} from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import { fabClasses } from '@mui/material';
import { doDoctorLogout, getDoctor, isDoctorLoggedIn } from '../../auth';
function DoctorHeader(props) {
    const [login,setLogin]=useState(false);
    const [user,setUser]=useState(undefined);
    const navigate=useNavigate();
    const logout=()=>{
      
      doDoctorLogout(()=>{
        navigate("/doctor")
      })
    
    }
  
    useEffect(()=>{
          setLogin(isDoctorLoggedIn());
          setUser(getDoctor());
    },[login])
    
   return (
      <>
      <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div className="navbar-brand"><b>Diana Eye Clinic</b></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {login && (<>
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" type="submit" to={"/doct/dashboard"}>Dashboard</Link>
          </li>
          </>
          )}
          
         
          
        </ul>
        <form className="d-flex" role="search">
  
          {/* {props.l? <Link className="btn btn-outline-success" custom_btn type="submit" to={"/login"}>Login</Link>:""} */}
          {
            login && (<> 
              <Link className='me1' to={"/doct/doctor-info"}>Welcome {user}</Link>
            <button className="btn btn-outline-success" custom_btn type="submit" onClick={logout} >Logout</button>
            </>
            )  
          }
      </form>
      </div>
    </div>
  </nav>
  
  
  </>
    )
}

export default DoctorHeader