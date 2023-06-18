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
  import moment from 'moment/moment'
  import { useNavigate } from 'react-router-dom'



  export const NewBooking = () => {
      const navigate=useNavigate()
      const today= new Date().toISOString().split('T')[0]
      const rdxData=useSelector(userData)
      const [showError,setShowError]=useState(false);
      const[hour,setHour]=useState(["11:00","12:00","13:00","16:00","17:00","18:00","19:00","20:00"])
      const[booking, setBooking]=useState({
          type:"",
          start_date:"",
          start_time:"",
      })

      const[selectHour,setSelectHour]=useState("")
      const[selectCircuit,setSelectCircuit]=useState("")

      
    
  const handlerType = async(id)=>{
      setBooking((prevState)=>({
          ...prevState,
          type:id
      }))
      setSelectCircuit(id)

  }


  const handlerBooking= async(name,value)=>{
      setBooking((prevState)=>({
          ...prevState,
      [name]: value,
      }) )
      setSelectHour(value)

  }

  const makeBooking= (e)=>{
    if(booking.type===""||
    booking.start_date===""||
    booking.start_time===""){
      setShowError(true)

    } else {
      setShowError(false)
    

      e.preventDefault();
      
      const selectDate= moment(booking.start_date);
      const selectTime=moment(booking.start_time,'HH:mm')
      const adjustedDate = selectDate
      .set('hour', selectTime.hours())
      .set('minute', selectTime.minutes())
      .set('second', 0);
      const fixDate=adjustedDate.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
      const updateBooking={...booking, start_date:fixDate}

      createBooking(rdxData.credentials,updateBooking)
      .then((resultado)=>{
          console.log(resultado)
          navigate('/bookings')
      })
      .catch((error)=>console.log(error))
  }
  
  }
      
    return (
      <div className='bookingDesign'>
          <div className='pictures'>
          <Container>
        <Row>  
          <Col  xs={6} md={4}>
            <Image src={cirtuito1} rounded className={ `pic ${selectCircuit ==="648ef23d96e7727b50f5dcae" ? "picSelected":"" }`} name="type" onClick={()=>handlerType("648ef23d96e7727b50f5dcae")}  />Baku
          </Col>  
          <Col xs={6} md={4}>
          <Image src={cirtuito2} rounded className={ `pic ${selectCircuit ==="648ee9cb96e7727b50f5dcaa" ? "picSelected":"" }`} name="type" onClick={()=>handlerType("648ee9cb96e7727b50f5dcaa")} />Silverstone
          </Col>  
          <Col xs={6} md={4}>
          <Image src={cirtuito3} rounded className={ `pic ${selectCircuit ==="648ef24c96e7727b50f5dcb0" ? "picSelected":"" }`} name="type" onClick={()=>handlerType("648ef24c96e7727b50f5dcb0")}/>Barein
          </Col>
        </Row>
      </Container>   
          </div>
          <div className='createForm'>
          <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label></Form.Label>
          <Form.Control type="date" name='start_date' min={today} placeholder="start date" onChange={(e)=>{handlerBooking('start_date',e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label></Form.Label>
          <DropdownButton  type="time" id="start_time" title={selectHour?selectHour:"Time"} onSelect={(value)=>{handlerBooking('start_time',value)}}>
              {hour.map((hour)=>(
        <Dropdown.Item  eventKey={hour}>{hour}</Dropdown.Item>))}
      </DropdownButton>
        </Form.Group>
        {showError && <div className='error-message'>Fill up all the fields</div>}
        <Button style={{backgroundColor : 'brown'}} variant="primary" type="submit" onClick={(e)=>makeBooking(e)}>
        Submit
      </Button>
      </Form>
      </div>   
      </div>
      
    )
  }

