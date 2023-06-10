import React, { useEffect, useState }from 'react'
import './Bookings.css'
import { useSelector } from 'react-redux'
import { userData } from '../UserSlice'
import { bringBooking } from '../../Services/Apicalls'

export const Booking = () => {

  const[bookings,setBookings]=useState([])
  const dataRdx= useSelector(userData)

  useEffect=(()=>{
    bringBooking(dataRdx.credentials)
    .then((resultado)=>{
    setBookings(resultado)
  })
  .catch((error)=>console.log(error))
  },[])


  return (
    <div className='bookingDesign'></div>

  )
}
