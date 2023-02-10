import React, { useState} from 'react'
import './Sidebar.css'
import Header from '../../MyComponent/Header'
import Sidebar from '../../MyComponent/Sidebar';
import Chat from '../../PlateForm/Chat';
import Report from '../../PlateForm/Report';
import Appointment from '../../PlateForm/Appointment';
import Interview from '../../PlateForm/Interview';

function UserDashboard() {
 const [view, setView] = useState("Welcome");


  return (
    <>
    <Header/>
    <div className="sidebar_and_main">
      <Sidebar setView={setView}/>
      <div className="main">
        {view==="Welcome"?"Welcome to Dashboard":null}
        {view === "chat" ? <Chat/> : null}
        {view==="form"?<Interview/>:null}
        {view==="report"?<Report/>:null}
        {view==="appointment"?<Appointment/>:null}
      </div>
    </div>
    </>
  )
}

export default UserDashboard