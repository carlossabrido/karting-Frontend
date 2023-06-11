import React from 'react'
import './NewBooking.css'
import cirtuito1 from "../Media/circuito1.png"
import cirtuito2 from "../Media/circuito2.png"
import cirtuito3 from "../Media/circuito3.png"

export const NewBooking = () => {
  return (
    <div className='bookingDesign'>
        <div className='pictures'>
            <div className='pic'>
                <img src={cirtuito1} alt="imagen1" />
            </div>
            <div className='pic'>
                <img src={cirtuito2} alt="imagen2" />
            </div>
            <div className='pic'>
                <img src={cirtuito3} alt="imagen3" /></div>
        </div>
    </div>
  )
}

