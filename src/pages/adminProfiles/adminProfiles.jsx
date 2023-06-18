import React, { useEffect, useState } from 'react'
import './AdminProfiles.css'
import { userData } from '../UserSlice'
import { useSelector } from 'react-redux'
import { bringAllProfiles, deleteProfile } from '../../Services/Apicalls'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


const AdminProfiless = () => {
    const[profile,setProfiles]=useState([])
    const[seek, setSeek]=useState("")
    const rdxData=useSelector(userData)

    const HandlerSeek=(e)=>{
        setSeek(e.target.value)
    }

    useEffect(() => {
        if (seek !== "") {
          const bring = setTimeout(() => {
            bringAllProfiles(rdxData.credentials, seek)
              .then((searchResults) => {
                
                setProfiles(searchResults);
              })
              .catch((error) => console.log(error));
          }, 375);
      
          return () => clearTimeout(bring);
        } else {
          if (profile.length !== 0) {
            setProfiles([]);
          } else {
            bringAllProfiles(rdxData.credentials)
              .then((searchResults) => {
               
                setProfiles(searchResults);
              })
              .catch((error) => console.log(error));
          }
        }
      }, [seek]);


    useEffect(()=>{
        bringAllProfiles(rdxData.credentials)
        .then((resultado)=>{
            console.log(resultado,'tio')
        if(resultado.length>0){
            setProfiles(resultado)
        }})
        .catch((error)=>console.log(error))
    },[])

// update Profiles
const updateProfiles = () => {
  bringAllProfiles(rdxData.credentials)
    .then((resultado) => setProfiles(resultado))
    .catch((error) => console.log(error));
};



    const removeProfile=async(profileId)=>{
      console.log(profileId,'no me jodas')
     await deleteProfile(rdxData.credentials,profileId)
      .then((resultado)=>console.log(resultado,'estoy bien'))
      updateProfiles()
      .catch((error)=>console.log(error))
    }


  return (
     <div className='main'>
        <div className='topScreen'>
         <Container  className="topCol justify-content-center">
        <Row>
          <Col >
            <input className='seekDesign'
              type="text"
              name="seek"
              placeholder='search'
              onChange={(e) => HandlerSeek(e)}
            />
          </Col>
        </Row>
      </Container>
      </div>
      <div className='adminDesign'>
     <Container className='margin'>
            {profile.map((profile)=>(
                <Row className='table' key={profile.id}>
                    <Col>{profile.name}</Col>
                    <Col>{profile.lastname}</Col>
                    <Col className='noMobile'>{profile.email}</Col>
                    <Col >{profile.phone_number}</Col>
                    <Col className='noMobile'>{profile.role}</Col>
                    <Col>  <Button variant="danger" className='deleteButton' onClick={()=>removeProfile(profile._id)}></Button>{' '}
         
                    
                    </Col>
                </Row>
            ))}
     </Container>
     </div>
     </div>
  )
  
}

export default AdminProfiless