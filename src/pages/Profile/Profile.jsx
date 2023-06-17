import React,{ useEffect, useState } from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { userData } from '../UserSlice';
import { bringProfile } from '../../Services/Apicalls';

export const Profile = () => {
  const dataRx=useSelector(userData)

  const [infoProfile,setInfoProfile]= useState([])

  useEffect(()=>{console.log(dataRx)})


  useEffect(()=>{
    bringProfile(dataRx.credentials)
    .then((resultado)=>{
      setInfoProfile(resultado)
    })
    .catch((error)=>console.log(error))
  },[])


  return (
    <div className="profileDesing">
    {infoProfile.name != 0 ? (
  
    <div className='containerProfile'>
    <div className='desingpp'>{infoProfile.name}</div>
    <div className='desingp'>{infoProfile.lastname}</div>
    <div className='desingp'>{infoProfile.email}</div>
    <div className='desingp'>{infoProfile.phone_number}</div>
    </div>
  
    ) : (
    <div>CARGANDO</div>
    )}
    </div>
    );
    }


