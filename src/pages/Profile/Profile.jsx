import React,{ useEffect, useState } from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { userData } from '../UserSlice';
import {  bringProfile, modifyProfilee } from '../../Services/Apicalls';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Profile = () => {

  const [show, setShow] = useState(false);
  const[showError,setShowError]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dataRx=useSelector(userData)

  const [modifyProfile,setModifyProfile]=useState({
    
    name: "",
    lastname: "",
    email: "",
    password:"",
    role: "client",
    phone_number: ""
  })

  const handlerModify=(e)=>{
    setModifyProfile((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value,
    }))
  }



  const [infoProfile,setInfoProfile]= useState([])

 


  useEffect(()=>{
    bringProfile(dataRx.credentials)
    .then((resultado)=>{
      setInfoProfile(resultado)
    })
    .catch((error)=>console.log(error))
  },[])

  const updateProfile=(()=>{
    bringProfile(dataRx.credentials)
    .then((resultado)=>{
      setInfoProfile(resultado)
    })
    .catch((error)=>console.log(error))
    
  })

  const editProfile=async(profileId)=>{
    console.log(profileId,'soy un duro')
    if(
      modifyProfile.name ===""||
      modifyProfile.lastname===""||
      modifyProfile.email=== ""||
      modifyProfile.password===""||
      modifyProfile.phone_number===""
    ){
      setShowError(true)}
      else{setShowError(false)

    console.log(profileId,'soy un duro')
    modifyProfilee(dataRx.credentials,profileId,modifyProfile)
    .then((resultado)=>
    setModifyProfile(resultado))
    updateProfile()
    handleClose()
    .catch((error)=>console.log(error))
  }
  }
  return (
    <div className="profileDesing">
    {infoProfile.name != 0 ? (
  
    <div className='containerProfile'>
    <div className='desingpp'>{infoProfile.name}</div>
    <div className='desingp'>{infoProfile.lastname}</div>
    <div className='desingp'>{infoProfile.email}</div>
    <div className='desingp'>{infoProfile.phone_number}</div>
    
    <div className='desingButton'>  <Button variant="primary" onClick={handleShow}>
        Edit 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
      
        <Modal.Body> <input placeholder='name' type="text" name="name" onChange={handlerModify}/></Modal.Body>
        <Modal.Body> <input placeholder='lastname' type="text" name="lastname" onChange={handlerModify}/></Modal.Body>
        <Modal.Body> <input placeholder='number' type="number" name='phone_number' onChange={handlerModify}/></Modal.Body>
        <Modal.Body> <input placeholder='email' type="email"  name="email" onChange={handlerModify}/></Modal.Body>
        <Modal.Body> <input placeholder='password' type="password"  name="password" onChange={handlerModify}/></Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>editProfile(infoProfile._id)}>
            Save Changes
          </Button>
          {showError && <div className='error-message'>Fill up all the fields</div>}
        </Modal.Footer>
      </Modal></div>
   
    </div>
  
    ) : (
    <div>CARGANDO</div>
    )}
    </div>
    );
    }


