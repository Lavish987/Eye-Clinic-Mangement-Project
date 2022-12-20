import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
export default function Header(props) {
  const [show, setShow] = useState(false);


  function handleModal() {
    show === true? setShow(false):setShow(true);
  }
 return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>Diana Eye Clinic</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {props.h?<Link className="nav-link active" aria-current="page" type="submit" to={"/"}>Home</Link>:""}
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">

        {/* {props.l? <Link className="btn btn-outline-success" custom_btn type="submit" to={"/login"}>Login</Link>:""} */}

        {props.l? 
        <>
          <Button onClick={() => handleModal()}> Click Me </Button>
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


