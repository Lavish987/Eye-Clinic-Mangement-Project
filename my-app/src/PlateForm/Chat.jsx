import React from 'react'
import ChatBot from 'react-simple-chatbot';
import './Interview.css'

function Chat() {



  const steps = [
    {


      id: "1",

      message: "Hello, Welcome to our Clinic!!",

      trigger: "2",

    },

    {

      id: "2",

      message: "Please enter your name!",

      trigger: "3",

    },

    {

      id: "3",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "Appointment",

          label: "Appointment",

          trigger: "Appointment",

        },

        { value: "Clinic_Timing", label: "Clinic_Timing", trigger: "Clinic_Timing" },




      ],
    },
  
      {

      id: "Appointment",

      message:

        "Thanks for letting your appointment issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Clinic_Timing",

      message:

        "The timing for the clinic is 9:00 AM-7:00PM",

      end: true,

    },

  ];

  
  return (
  
    <> 
    <div className="container_allignment">
    <ChatBot steps={steps}/>
    </div>

    
      







 </>
    
  )
}

export default Chat
