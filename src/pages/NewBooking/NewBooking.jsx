import React from 'react'
import './NewBooking.css'
import cirtuito1 from "../Media/circuito1.png"
import cirtuito2 from "../Media/circuito2.png"
import cirtuito3 from "../Media/circuito3.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Form } from 'react-bootstrap'


export const NewBooking = () => {
    

  return (
    <div className='bookingDesign'>
        <div className='pictures'>
        <Container>
      <Row>  
        <Col xs={6} md={4}>
          <Image src={cirtuito1} rounded className='pic'  />
        </Col>  
        <Col xs={6} md={4}>
        <Image src={cirtuito2} rounded className='pic' />
        </Col>  
        <Col xs={6} md={4}>
        <Image src={cirtuito3} rounded className='pic'/>
        </Col>
      </Row>
    </Container>   
        </div>
        <div className='createForm'>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    </div>

       
    </div>
    
  )
}

