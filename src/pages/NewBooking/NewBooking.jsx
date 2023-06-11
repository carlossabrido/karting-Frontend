import React,{ useEffect, useState } from 'react'
import './NewBooking.css'
import cirtuito1 from "../Media/circuito1.png"
import cirtuito2 from "../Media/circuito2.png"
import cirtuito3 from "../Media/circuito3.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button, Form } from 'react-bootstrap'
import { createBooking } from '../../Services/Apicalls'
import { useSelector } from 'react-redux'
import { userData } from '../UserSlice'


export const NewBooking = () => {

    const rdxData=useSelector(userData)
    const[booking, setBooking]=useState({
        type:"",
        start_date:"",
        end_date:""
    })

    useEffect(()=>{
        console.log(booking)
    })

const handlerType = async(id)=>{
    setBooking((prevState)=>({
        ...prevState,
        type:id
    }))
}


const handlerBooking= async(e)=>{
    setBooking((prevState)=>({
        ...prevState,
    [e.target.name]: e.target.value,
    }) )

}

const makeBooking= (e)=>{
    e.preventDefault();
    createBooking(rdxData.credentials,booking)
    .then((resultado)=>{
        console.log(resultado)
    })
    .catch((error)=>console.log(error))
}

    

  return (
    <div className='bookingDesign'>
        <div className='pictures'>
        <Container>
      <Row>  
        <Col xs={6} md={4}>
          <Image src={cirtuito1} rounded className='pic' name="type" onClick={()=>handlerType("647ef651d1ce20e22cf8199f")}  />
        </Col>  
        <Col xs={6} md={4}>
        <Image src={cirtuito2} rounded className='pic' name="type" onClick={()=>handlerType("647f746e27366c363c97f14c")} />
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
        <Form.Label></Form.Label>
        <Form.Control type="datetime-local" name='start_date' placeholder="start date" onChange={(e)=>{handlerBooking(e,'end_date')}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="datetime-local" name='end_date' placeholder="end date" onChange={(e)=>{handlerBooking(e, 'start_date')}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>makeBooking(e)}>
      Submit
    </Button>
    </Form>
    </div>   
    </div>
    
  )
}

