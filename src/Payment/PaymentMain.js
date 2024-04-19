import React from 'react';
import Navbar from '../navfoot/Navbar';
import SmNavbar from '../navfoot/SmNavbar';
import PaymentSetting from './PaymentSetting';


export default function PaymentMain() {
  return (
    <div className='md:flex flex-none'>
      <div className='hidden md:block '><Navbar /></div>
      <div className='block md:hidden'><SmNavbar/></div>
      <div className="md:ml-56 w-full pt-20 md:pt-0"><PaymentSetting/></div>
    </div>
  )
}
