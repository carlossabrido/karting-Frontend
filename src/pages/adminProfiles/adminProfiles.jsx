import React, { useEffect, useState } from 'react'
import './AdminProfiles.css'
import { userData } from '../UserSlice'
import { useSelector } from 'react-redux'
import { bringAllProfiles } from '../../Services/Apicalls'
import { Col, Container, Row } from 'react-bootstrap'


export const AdminProfiles = () => {
    const[profile,setProfiles]=useState([])
    const[seek, setSeek]=useState("")
    const rdxData=useSelector(userData)


    useEffect(()=>{
        bringAllProfiles(rdxData.credentials)
        .then((resultado)=>{
            console.log(resultado,'tio')
        if(resultado.length>0){
            setProfiles(resultado)
        }})
        .catch((error)=>console.log(error))
    },[])



  return (
     <div className='adminDesign'>
     <Container>
            {profile.map((profile)=>(
                <Row className='table' key={profile.id}>
                    <Col>{profile.name}</Col>
                    <Col>{profile.lastname}</Col>
                    <Col>{profile.email}</Col>
                    <Col>{profile.phone_number}</Col>
                </Row>
            ))}
     </Container>
     </div>
  )
  
}
