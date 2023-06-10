import React from 'react'
import './Home.css'
import { CarouselItem, Container, Row } from 'react-bootstrap'
import Portada from './Media/portada3.png'
import Circuit from './Media/circuito1.png'
import Circuit2 from './Media/circuito2.png'
import Circuit3 from './Media/circuito3.png'
import Asfalto from './Media/asfalto.jpg'
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <div className='homeDesing'>
    <div className='start'>
       <img className='firstImg' src={Portada} alt="" />
    </div>
    <div className='box'>
       {/* <img className='asfalto' src={Asfalto} alt="" /> */}
    </div>
    <div className='carousel'>
    <CarouselItem>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Circuit}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Circuit2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Circuit3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselItem>
    </div> 
    </div>
  )
}
