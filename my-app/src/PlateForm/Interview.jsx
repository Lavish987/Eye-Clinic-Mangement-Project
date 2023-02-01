import React from 'react'
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { CardBody, CardHeader } from 'reactstrap';
import './Interview.css';

function Interview() {
  return (
    
    <>
    <Container > 
    <Card className="card_allignment">
      <CardHeader style={{textAlign:"center" ,color:'red'}}>
       
      <h3>INTERVIEW FORM</h3> </CardHeader>
     <CardBody style={{backgroundColor:'#a8e36e'}}>
         
     <Form>
      <Form.Group controlId="formQuestion">
        <Form.Label><span className='form_allignment'>1. Do you have any allergies?</span></Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />


        <Form.Label className='form_allignment'>2. List all your medications you take?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />

        <Form.Label className='form_allignment'>3. List all your injuries/hospitalizations you have had?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />

        <Form.Label className='form_allignment'>4. Do you wear glasses/lens?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />

    
        
      </Form.Group>

      <Button   variant="primary" type="submit">
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
