import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';


function Interview() {
  return (
    
    <>
   <Form>
      <Form.Group controlId="formQuestion">
        <Form.Label>1. Do you have any allergies?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />


        <Form.Label>2. List all your medications you take?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />

        <Form.Label>3. List all your injuries/hospitalizations you have had?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />

        <Form.Label>4. Do you wear glasses/lens?</Form.Label>
        <FormControl as="textarea" rows="3" placeholder="" />

    
        
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Question
      </Button>
    </Form>
      
    
    </>


  )
}

export default Interview
