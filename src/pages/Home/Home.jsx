import React from 'react'
import './Home.css'
import { Container, Row } from 'react-bootstrap'
import Portada from './Media/portada3.png'
import Parrilla from './Media/parrilla.png'
import Asfalto from './Media/asfalto.jpg'

export const Home = () => {
  return (
    <div className='homeDesing'>
    <div className='start'>
       <img className='firstImg' src={Portada} alt="" />
    </div>
    <div className='start'>
       <img className='asfalto' src={Asfalto} alt="" />
    </div>
       
    </div>
  )
}
