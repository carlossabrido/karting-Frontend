import React,{ useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import { Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { userData } from '../../pages/UserSlice';
import { getCircuit, modifyBookingBack } from '../../Services/Apicalls';


export const ModalB = ({showModal, handleCloseModal, handleShowModal}) => {

    const rdxData=useSelector(userData)
  const[hour,setHour]=useState(["11:00","12:00","13:00","16:00","17:00","18:00","19:00","20:00"])
  const[modifyBooking, setModifyBooking]=useState({
      type:"",
      start_date:"",
      start_time:"",
  })
  const [circuit, setCircuit]=useState()

  useEffect(()=>{
    getCircuit()
    .then((resultado)=>{
      console.log(resultado,'soy circuito')
      setCircuit(resultado)
    })
  },[])


   const handleClose=()=>{
   handleCloseModal()}

  const handlerModifyBooking= async(name,value)=>{
    setModifyBooking((prevState)=>({
        ...prevState,
    [name]: value,
    }) )
   }

   

    const editBooking= (e)=>{
      e.preventDefault();
      const selectDate= moment(modifyBooking.start_date);
      const selectTime=moment(modifyBooking.start_time,'HH:mm')
      const adjustedDate = selectDate
      .set('hour', selectTime.hours())
      .set('minute', selectTime.minutes())
      .set('second', 0);
      const fixDate=adjustedDate.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
      const updateBooking={...modifyBooking, start_date:fixDate}
  
      modifyBookingBack(rdxData.credentials,updateBooking)
      .then((resultado)=>{
          console.log(resultado)
      })
      .catch((error)=>console.log(error))
  }

  return (
    <div>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <DropdownButton type="text" id="type" title="Dropdown button" onSelect={(value)=>{handlerModifyBooking('circuit',value)}}>
{circuit.map((circuit)=>(
<Dropdown.Item  Key={circuit.id}>{circuit.circuit}</Dropdown.Item>))}
</DropdownButton>
    
      </Modal.Body>
      <Modal.Body>
     <input  type="date" name='start_date' placeholder="start date" onChange={(e)=>{handlerModifyBooking('start_date',e.target.value)}} />
      </Modal.Body>
      <Modal.Body>
      <DropdownButton type="time" id="start_time" title="Dropdown button" onSelect={(value)=>{handlerModifyBooking('start_time',value)}}>
{hour.map((hour)=>(
<Dropdown.Item  eventKey={hour}>{hour}</Dropdown.Item>))}
</DropdownButton>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> 
         <Button variant="primary" >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal></div>
  )
}
