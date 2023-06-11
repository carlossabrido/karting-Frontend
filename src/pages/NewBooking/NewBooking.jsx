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
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const NewBooking = () => {

    const rdxData=useSelector(userData)
    const[hour,setHour]=useState(["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"])
    const[booking, setBooking]=useState({
        type:"",
        start_date:"",
        start_time:"",
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


const handlerBooking= async(name,value)=>{
    setBooking((prevState)=>({
        ...prevState,
    [name]: value,
    }) )

}

const makeBooking= (e)=>{
    e.preventDefault();
    const addDateHour= booking.start_date + 'T' + booking.start_time
    const updateBooking={...booking, start_date:addDateHour}
    createBooking(rdxData.credentials,updateBooking)
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
        <Form.Control type="date" name='start_date' placeholder="start date" onChange={(e)=>{handlerBooking('start_date',e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <DropdownButton type="time" name="start_time" title="Dropdown button" onSelect={(value)=>{handlerBooking('start_time',value)}}>
            {hour.map((hour)=>(
    
      <Dropdown.Item key={hour.id} eventKey={hour}>{hour}</Dropdown.Item>))}
    </DropdownButton>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="datetime-local" name='end_date' placeholder="end date" onChange={(e)=>{handlerBooking('end_date', e.target.value)}}/>
      </Form.Group>
      <Button style={{backgroundColor : 'brown'}} variant="primary" type="submit" onClick={(e)=>makeBooking(e)}>
      Submit
    </Button>
    </Form>
    </div>   
    </div>
    
  )
}

