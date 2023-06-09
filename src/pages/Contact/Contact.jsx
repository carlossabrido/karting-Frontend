import React from 'react'
import './Contact.css'
import { Col, Container, Row } from 'react-bootstrap';
import twiter from '../Media/twitter.svg'
import instagram from '../Media/instagram.svg'


export const Contact = () => {
  return (
    <div className="contactDesing">
    <Container >
      <Row> <Col xs={12} md={4} >
          <div className="icons"> </div>
        </Col>   
        </Row>
      <Row >
        
        <Col xs={12} md={4} className='desing'>
          <div className="icons"> Follow Us in our social media and don´t miss anything</div>
        </Col>
        <Col xs={12} md={4} className='desing'>
          <div className="icons">
            <img className='rrss' src={twiter}  alt="" />
            <img className='rrss' src={instagram} alt="" />
             </div>
            <div>@SpeedRacerKarting</div>
        </Col>
        <Col xs={12} md={4} className='desing'>
          <div className="icons">
           Tlf: 654 254 856 </div>
           {/* <img className='rrss' src={Facebook} alt="" /> */}
        </Col>
      </Row>
      <Row>
        
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div className="map-container mt-5">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95865.22678947024!2d1.9668410451529632!3d41.3352157702301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49a5a59f24c15%3A0xde325dfc289056ed!2sIndoor%20Karting%20Barcelona!5e0!3m2!1ses!2ses!4v1686765438672!5m2!1ses!2ses"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

  )
}
