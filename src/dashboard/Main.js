import React from 'react'
import Navbar from '../navfoot/Navbar'
import Setting from './Setting'
import SmNavbar from '../navfoot/SmNavbar'

export default function Main() {
  return (
    
    <div className='md:flex flex-none'>
      <div className='hidden md:block '><Navbar /></div>
      <div className='block md:hidden'><SmNavbar/></div>
      <div className="md:ml-56  pt-20 md:pt-0 "><Setting/></div>
    </div>
  )
}
