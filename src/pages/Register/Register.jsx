import React,  { useEffect, useState }from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {registerMe } from '../../Services/Apicalls';



export const Register = () => {
   const navigate= useNavigate()
  const[registration,setRegistration]=useState ({
     
    name: "",
    lastname: "",
    email: "",
    password: "",
    role:"client",
    phone_number:""

})

  // useEffect(()=>{console.log(registration),[registration]})

  const handlerRegister=(e)=>{
    setRegistration((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value,
    }))
  }

  const registerMeFunction = (e) => {
    e.preventDefault()
    registerMe(registration)
      .then(navigate('/login'))
      .catch((error) => console.error(error));
  };

  return (
    <div className='registerDesign'>
     <Form className='registerForm'>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="text" name='name' placeholder="name" onChange={handlerRegister}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="text" name='lastname' placeholder="last name" onChange={handlerRegister} />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="number" name='phone_number' placeholder="Phone number" onChange={handlerRegister}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label></Form.Label>
      <Form.Control type="email" name='email' placeholder="Enter email" onChange={handlerRegister} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label></Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" onChange={handlerRegister} />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(e)=>registerMeFunction(e)}>
      Submit
    </Button>
  </Form></div>
  )
}



