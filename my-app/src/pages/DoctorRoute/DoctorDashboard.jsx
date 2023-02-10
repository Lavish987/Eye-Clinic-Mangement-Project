import React, { useState } from 'react'
import Footer from '../../MyComponent/Footer'
import DoctorHeader from './DoctorHeader'
import PatientForm from './PatientForm';
import PatientReport from './PatientReport';
import DoctorSidebar from './DoctorSidebar';
import DoctorApponiment from './DoctorApponiment';

function DoctorDashboard() {
  const [view, setView] = useState("Welcome");
  return (<>
    <DoctorHeader/>
    <div className="sidebar_and_main">
      <DoctorSidebar setView={setView}/>
      <div className="main">
        {view==="Welcome"?<h1>"Welcome to Dashboard"</h1>:null}
        {view === "PatientReport" ?  <PatientReport/>: null}
        {view==="PatientForms"?<PatientForm/>:null}
        {view==="Appointment"?<DoctorApponiment/>:null}
      </div>
    </div>
    
    </>
  )
}

export default DoctorDashboard