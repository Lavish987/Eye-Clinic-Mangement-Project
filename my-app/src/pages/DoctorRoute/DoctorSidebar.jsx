import React, { useState } from 'react';
import '../userRoute/Sidebar.css'
import { Button } from '@material-ui/core';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { AiOutlineUser,AiFillEdit ,AiFillCopy,AiOutlineSchedule} from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const DoctorSidebar = (props) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "80px"}} className="sidebar">
               <div className="top_section">

                
                   <div style={{display: isOpen ? "block" : "none"}} className="logo" ><img height="50px" width="150px"src={process.env.PUBLIC_URL+"/eye.jpg"}/></div>
                   <div style={{marginLeft: isOpen ? "80px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {/* {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               } */}
               <div className="ss">
                
              
              <Button  variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={()=>props.setView("PatientForms")}>
              {!isOpen ? <div><AiFillEdit/></div> : null}
              {isOpen ? "PatientForms" : null}
              </Button>

              <Button variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={()=>props.setView("PatientReport")}>
              {!isOpen?<div><AiFillCopy/></div>:null}
              {isOpen?"PatientReport":null}
                 
              </Button>
              <Button variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={()=>props.setView("Appointment")}>
              {!isOpen?<div><AiFillCopy/></div>:null}
              {isOpen?"Appoinment":null}
                 
              </Button>
              
             
           </div>
           </div>
        </div>
    );
};

export default DoctorSidebar;
 