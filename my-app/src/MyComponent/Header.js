import React ,{useEffect, useState} from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
export default function Header(props) {
  const [show, setShow] = useState(false);
  const [login,setLogin]=useState(false);
  const [user,setUser]=useState(undefined);
  const navigate=useNavigate();
  const logout=()=>{
    
    doLogout(()=>{
      navigate("/")
      setLogin(false)
      setUser(undefined)
    })
  
  }

  useEffect(()=>{
        setLogin(isLoggedIn());
        setUser(getCurrentUserDetail());
  },[login])
  

  

  function handleModal() {
    show === true? setShow(false):setShow(true);
  }
 return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" type='submit' to={"/"}><b>Diana Eye Clinic</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {props.h?<Link className="nav-link active" aria-current="page" type="submit" to={"/"}>Home</Link>:""}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" type="submit" to={"/about"}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" type="submit" to={"/contact"}>Contact Us</Link>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">

        {/* {props.l? <Link className="btn btn-outline-success" custom_btn type="submit" to={"/login"}>Login</Link>:""} */}
        {
          login && (<>
            <Link className='me1' to={"/user/profile-info"}>Welcome {user.name}</Link>
          <button className="btn btn-outline-success" custom_btn type="submit" onClick={logout} >Logout</button>
          
          </>
          )  
        }
      {
        !login && (
          <>
        {props.l? 
        <>
          <Link className="btn btn-outline-success" custom_btn type="submit" onClick={() => handleModal()}>Login </Link>
          <Modal show={show} onHide={()=>handleModal()}>
          
            <Modal.Header closeButton>
              <h3 >Welcome!!</h3>
            </Modal.Header>
            <Modal.Body>Are you a Doctor or Patient?</Modal.Body>
            <Modal.Footer>
            <Link className="btn btn-outline-success" custom_btn type="submit" to={"/login"}>Patient</Link>
            <Link className="btn btn-outline-success" custom_btn type="submit" to={"/doctor"}>Doctor</Link>
              
            
            </Modal.Footer>
          </Modal>
        </>
        :""}

        {props.r?<Link className="btn btn-outline-success" custom_btn type="submit" to={"/signup"}>Register</Link>:""}
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
Header.defaultProps={
    l:true ,
    r:true ,
    h:true
}


