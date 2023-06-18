import React,{ useEffect, useState } from 'react'
import './CreateAdmin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {registerMe } from '../../Services/Apicalls';

export const CreateAdmin = () => {
    const navigate= useNavigate()
  const[registration,setRegistration]=useState ({
     
    name: "",
    lastname: "",
    email: "",
    password: "",
    role:"admin",
    phone_number:""

})

const [errors, setErrors]=useState({})

const handlerHerror=(e)=>{
  e.preventDefault()

  const alertError={}

  if(!registration.name){
    alertError.name="Place your name"
  }
  if(!registration.lastname){
    alertError.lastname="Place your last name"
  }
  if(!registration.email){
    alertError.email="email error"
  }
  if(!registration.phone_number || registration.phone_number.length>9){
    alertError.phone_number="phone number error"
  }
  if(!registration.password){
    alertError.password="password error"
  }

  setErrors(alertError)

  if(Object.keys(alertError).length === 0){
    registerMeFunction()

  }
 }



  const handlerRegister=(e)=>{
    setRegistration((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value,
    }))
  }

  const registerMeFunction = (e) => {
    // e.preventDefault()
    registerMe(registration)
      .then(navigate('/login'))
      .catch((error) => console.error(error));
  };
  return (
    <div className='createDesign'>
         <Form className='registerForm'>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="text" name='name' placeholder="name" onChange={handlerRegister}/>
      {errors.name && <div className='error'>{errors.name}</div>}
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="text" name='lastname' placeholder="last name" onChange={handlerRegister} />
      {errors.lastname && <div className='error'>{errors.lastname}</div>}
  
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="number" name='phone_number' placeholder="Phone number" onChange={handlerRegister}/>
      {errors.phone_number && <div className='error'>{errors.phone_number}</div>}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label></Form.Label>
      <Form.Control type="email" name='email' placeholder="Enter email" onChange={handlerRegister} />
      {errors.email && <div className='error'>{errors.email}</div>}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label></Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" onChange={handlerRegister} />
      {errors.password && <div className='error'>{errors.password}</div>}
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(e)=>handlerHerror(e)}>
      Submit
    </Button>
  </Form></div>
  )

}
