import React from 'react'
import './Home.css'
import { CarouselItem, Container, Row } from 'react-bootstrap'
import Portada from '../Media/portada3.png'
import Circuit from '../Media/circuito1.png'
import Circuit2 from '../Media/circuito2.png'
import Circuit3 from '../Media/circuito3.png'
import kartEnd from '../Media/imagenFinal.png'
import kart from '../Media/kart4.jpg'
import kart2 from '../Media/KARTING3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate=useNavigate()
  return (
    <div className='homeDesing'>
    <div className='start'>
       <img className='firstImg' src={Portada} alt="" />
    </div>
    <div className='box'>
       <div type="button" className='goToRegister' onClick={()=>navigate('/register')}><h1>Sing up here !!</h1> </div>
    </div>
    <div className='routes'>
    
      <img className='images' src={kart} alt="" onClick={()=>navigate('/reviews')} />
      
      <img className='images' src={kart2} alt="" onClick={()=>navigate('/contact')}/>

    </div>
    <div className='carousel'>
    <Carousel className='carousel mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Circuit}
          alt="First slide"
        />
        <Carousel.Caption>  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Circuit2}
          alt="Second slide"
        />
        <Carousel.Caption>    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Circuit3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='break'></div> 
    <div className='endBox'>
    
      <img className='images2' src={kartEnd} alt="" onClick={()=>navigate('images')} />
    
    </div>
    <div className='endBox2'></div>
    </div>
    
  )
}
