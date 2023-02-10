import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { CardBody, CardHeader } from 'reactstrap';
import './Interview.css';
import {getCurrentUserDetail, getToken} from '../auth'

function Interview() {

     const [formData,setFormData]=useState({
     ques1:"",
     ques2:"",
     ques3:"",
     ques4:""

     })
     const [user,setUser]=useState("")
     const [token,setToken]=useState("")
     useEffect(()=>{
      setUser(getCurrentUserDetail())
      setToken(getToken())
     },[])
     
  let handleForm=async(e)=>{
    e.preventDefault();
    const email=user.email
    const res=await axios.post(`http://localhost:8080/patient/interviewForm/${email}`,{ques1:formData.ques1,ques2:formData.ques2,ques3:formData.ques3,ques4:formData.ques4},{
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

    }) 

    toast.success("Data Stored Successfully");
  }
  return (
    
    <>
    <Container className='card_allignment'> 
    
    <div className='appointment_form'>
      <h2 style={{padding: "10px",color:'white'}}>INTERVIEW FORM</h2>
     <CardBody >
         
     
     <Form onSubmit={handleForm}>
     
        <div className='form-group'>
        <Form.Label><span className='form_allignment'>1. Do you have any allergies?</span></Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques1} onChange={(e)=>{setFormData({...formData,ques1:e.target.value})}} required/>


        <Form.Label className='form_allignment'>2. List all your medications you take?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques2} onChange={(e)=>{setFormData({...formData,ques2:e.target.value})}} required/>

        <Form.Label className='form_allignment'>3. List all your injuries/hospitalizations you have had?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques3} onChange={(e)=>{setFormData({...formData,ques3:e.target.value})}} required/>

        <Form.Label className='form_allignment'>4. Do you wear glasses/lens?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques4} onChange={(e)=>{setFormData({...formData,ques4:e.target.value})}} required/>

    
        </div>
      

      <Button type='Submit'  variant="primary"  >
         Submit Question
      </Button>
    </Form>
          
     </CardBody>
     </div>
    </Container>
  
      
    
    </>


  )
}

export default Interview
