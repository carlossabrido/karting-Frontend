import React, { useEffect, useState } from 'react'
import './adminProfiles.css'
import { userData } from '../UserSlice'
import { useSelector } from 'react-redux'
import { bringAllProfiles } from '../../Services/Apicalls'


export const adminDesing = () => {
    const[profile,setProfiles]=useState([])
    const[seek, setSeek]=useState("")
    const rdxData=useSelector(userData)


    useEffect(()=>{
        bringAllProfiles(rdxData.credentials)
        .then((resultado)=>{
        if(resultado.lenght>0){
            setProfiles(resultado)
        }})
        .catch((error)=>console.log(error))
    },[])



  return (
    <div></div>
    //  <div className='profileDesing'>
    // //   {infoProfile.map((profiles)=>(
    // //   <Container key={profiles.id}>
    // //   <Row>  
    // //     <Col>{profiles.name}</Col>
    // //   </Row>
    // //   <Row> 
    // //     <Col>{profiles.lastname}</Col>
    // //   </Row>
    // //   <Row> 
    // //     <Col>{profiles.email}</Col>
    // //   </Row>
    // //   <Row> 
    // //     <Col>{profiles.phone_number}</Col>
    // //   </Row>
    
    // // </Container>
    // // ))}
    //  </div>
  )
  
}
