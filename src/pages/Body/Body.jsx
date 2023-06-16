import React from 'react'
import "./Body.css"
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import {Login} from '../Login/Login'
import { Register } from '../Register/Register'
import { Profile } from '../Profile/Profile'
import { Booking } from '../Bookings/Bookings'
import { NewBooking } from '../NewBooking/NewBooking'
import { Contact } from '../Contact/Contact'
import { Opinions } from '../Opinions/Opinions'
import { CreateAdmin } from '../CreateAdmin/CreateAdmin'
import { AdminProfiles } from '../AdminProfiles/AdminProfiles.jsx'





export const Body = () => {
  return (
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/adminProfiles' element={<AdminProfiles/>}/>
        <Route path='/bookings' element={<Booking/>} />  
        <Route path='/newBooking' element={<NewBooking/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/reviews' element={<Opinions/>}/> 
        <Route path='/createAdmin' element={<CreateAdmin/>}/> 
    </Routes>
  )
}


