import React, { useState } from 'react';
import '../pages/userRoute/Sidebar.css'
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


const Sidebar = (props) => {
    const children = props.children;
    

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "80px"}} className="sidebar">
               <div className="top_section">

                
                   <div style={{display: isOpen ? "block" : "none",backgroundImage:process.env.PUBLIC_URL+"eye.jpg"}} className="logo" ><img height="50px" width="150px"src={process.env.PUBLIC_URL+"/eye.jpg"}/></div>
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
                
              
              <Button  variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={()=>props.setView("form")}>
              {!isOpen ? <div><AiFillEdit/></div> : null}
              {isOpen ? "InterviewForm" : null}
              </Button>

              <Button variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={()=>props.setView("report")}>
              {!isOpen?<div><AiFillCopy/></div>:null}
              {isOpen?"Report":null}
                 
              </Button>
         
              <Button  variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={()=>props.setView("appointment")}>
              {!isOpen?<div><AiOutlineSchedule/></div>:null}
              {isOpen?"Appointment":null}
                
              </Button>

              <Button  variant="primary" style={{backgroundColor:'#c379aa', color:'white',height:'50%',width:'100%'}} onClick={() => props.setView("chat")}>
              {!isOpen?<div><FaShoppingBag/></div>:null}
              {isOpen?"Chat":null}
                    
                </Button>
              
             
           </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
 