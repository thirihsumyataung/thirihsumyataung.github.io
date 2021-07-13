import React, { useState, useEffect} from 'react'; 

import * as emailjs from 'emailjs-com'; 
import { Row, Col, Card, Form, ListGroupItem, Image, ListGroup , Button } from "react-bootstrap"; 
//import { Button,FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'; 
import "./contact.css"; 
import FormContainer from "./FormContainer"; 
const Contact = () => {
    const [ name , setName ] = useState(''); 
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState(''); 

   
    const resetForm = ()=> { 
      setName('');
      setEmail(''); 
      setSubject(''); 
      setMessage('');  
      
    }
    const handleContactSubmit = (e) => { 
        e.preventDefault(); 
      let templateParams = {
        sender_name: name,
      from_name: email,
      to_name: 'moriwoh_ying',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      "moriwoh_ying","malying_templateID",
      templateParams,"user_4RuiPOrVf9v0VOEMaTeT9"
 )
 resetForm(); 

        console.log("Your message was sent !"); 

    } 


    //   const templateId = 'malying_templateID';
    
      
    
    // const sendFeedback = (templateId, variables) => {
    //   window.emailjs.send(
    //     'malying22222@gmail.com', templateId,
    //     variables
    //     ).then(res => {
    //       console.log('Email successfully sent!')
    //     })
    //     // Handle errors here however you like, or use a React error boundary
    //     .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    //   }
    //   sendFeedback(templateId, {message_html: message, from_name: name, reply_to: email})
      
   
    return (
        
            <FormContainer> 
                          <h1> Let's Chat ! </h1>
                 <Form onSubmit={handleContactSubmit}> 
  <Form.Group>
    <Form.Label>Your Name </Form.Label>
    <Form.Control id="full-name" name="name" value={name} type="text" placeholder="John Doe" onChange={(e)=> setName(e.target.value)}></Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={email} placeholder="johndoe@example.com" onChange={(e)=>setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="subject" value={subject} placeholder="Let's in touch" onChange={(e)=>setSubject(e.target.value)}/>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} value = {message} onChange={(e)=>setMessage(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={handleContactSubmit}>
    Submit
  </Button>
</Form>
            </FormContainer>
             
            
      
    )
}

export default Contact
