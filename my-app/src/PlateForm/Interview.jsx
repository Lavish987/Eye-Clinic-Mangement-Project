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
    if (res.status===200){
      toast.success('Data Stored Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      toast.error("There is some error occur");
    }
  }
  return (
    
    <>
    <Container className='container_allignment'> 
    <Card className="card_allignment">
      <h3 style={{textAlign:"center" ,color:'red'}}>INTERVIEW FORM</h3>
     <CardBody style={{backgroundColor:'#a8e36e'}}>
     <Form onSubmit={handleForm}>
      <Form.Group controlId="formQuestion">
        <Form.Label><span className='form_allignment'>1. Do you have any allergies?</span></Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques1} onChange={(e)=>{setFormData({...formData,ques1:e.target.value})}}/>


        <Form.Label className='form_allignment'>2. List all your medications you take?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques2} onChange={(e)=>{setFormData({...formData,ques2:e.target.value})}}/>

        <Form.Label className='form_allignment'>3. List all your injuries/hospitalizations you have had?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques3} onChange={(e)=>{setFormData({...formData,ques3:e.target.value})}}/>

        <Form.Label className='form_allignment'>4. Do you wear glasses/lens?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" value={formData.ques4} onChange={(e)=>{setFormData({...formData,ques4:e.target.value})}}/>
        
      </Form.Group>

      <Button type='Submit'  variant="primary" type="submit">
         Submit Question
      </Button>
    </Form>
          
     </CardBody>
    </Card>
    </Container>
  
      
    
    </>


  )
}

export default Interview
