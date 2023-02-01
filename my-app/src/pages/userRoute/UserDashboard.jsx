import React, { useState, useEffect } from 'react'
import Footer from '../../MyComponent/Footer'
import Header from '../../MyComponent/Header'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../MyComponent/Sidebar';
import Chat from '../../PlateForm/Chat';
import Report from '../../PlateForm/Report';
import Appointment from '../../PlateForm/Appointment';

import './Sidebar.css'
import Interview from '../../PlateForm/Interview';

function UserDashboard() {
 const history = useNavigate();
 const [view, setView] = useState("");


  return (
    <>
    <Header/>
    <div className="sidebar_and_main">
      <Sidebar setView={setView}
             
      />
      <div className="main">
        {view === "chat" ? <Chat/> : null}
        {view==="form"?<Interview/>:null}
        {view==="report"?<Report/>:null}
        {view==="appointment"?<Appointment/>:null}
      </div>
    </div>
    {/* <Footer/> */}


    </>
  )
}

export default UserDashboard