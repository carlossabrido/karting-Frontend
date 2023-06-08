import React, { useEffect, useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../UserSlice';
import { useNavigate } from 'react-router-dom';
import { logMe } from '../../Services/Apicalls';

export const Login = () => {
  const dispatch= useDispatch()
  const dataRdx=useSelector(userData)
  const navigate= useNavigate()
  
  const[credentials, setCredentials]=useState({
    email:"",
    password:""
  })

  useEffect(() => {
    if (dataRdx.credentials.token) {
      navigate();
    }
  }, []);
  
  const handlerLogin=(e)=>{
    setCredentials((prevState)=>({
      ...prevState,
    [e.target.name]:e.target.value  
    }))
  }

  const loginFunction=(e)=>{
    e.preventDefault()
    logMe(credentials)
    .then((resultado) => {
      console.log(resultado);
      const decoded = jwt_decode(resultado.data.token);
      console.log(decoded);
      const datos = {
        token: decoded,
        bearer: resultado.data.token
 
      };

      dispatch(login({ credentials: datos }));

      setMessage(`Bienvenido de nuevo mr.${decoded.name}`);
      setTimeout(() => {
        navigate("/");
      }, 2750);
    })
    .catch((error) => console.log(error));
};

  
  return (
    <div className='loginDesign'>
     <Form className='loginForm'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name='email' placeholder="Enter email" onChange={handlerLogin} />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label></Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" onChange={handlerLogin} />
    </Form.Group>
    <Form.Group className="mb-3" >
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(e)=>loginFunction(e)}>
      Submit
    </Button>
  </Form>
  </div>
  
  )
}
