import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import  { useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { GrDocumentSound } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function SmNavbar() {

  const [show,setshow]=useState(false);

  const Dashboard=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "lightblue";
    document.getElementById("Menu").style.backgroundColor = "white";
    document.getElementById("Payments").style.backgroundColor = "white";
    document.getElementById("Offers&Events").style.backgroundColor = "white";
    document.getElementById("Customers").style.backgroundColor = "white";
    document.getElementById("Settings").style.backgroundColor = "white";
    document.getElementById("Logout").style.backgroundColor = "white";
    
}
const Menu=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "white";
    document.getElementById("Menu").style.backgroundColor = "lightblue";
    document.getElementById("Payments").style.backgroundColor = "white";
    document.getElementById("Offers&Events").style.backgroundColor = "white";
    document.getElementById("Customers").style.backgroundColor = "white";
    document.getElementById("Settings").style.backgroundColor = "white";
    document.getElementById("Logout").style.backgroundColor = "white";
    
}
const Payments=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "white";
    document.getElementById("Menu").style.backgroundColor = "white";
    document.getElementById("Payments").style.backgroundColor = "lightblue";
    document.getElementById("Offers&Events").style.backgroundColor = "white";
    document.getElementById("Customers").style.backgroundColor = "white";
    document.getElementById("Settings").style.backgroundColor = "white";
    document.getElementById("Logout").style.backgroundColor = "white";
    
}
const Offers=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "white";
    document.getElementById("Menu").style.backgroundColor = "white";
    document.getElementById("Payments").style.backgroundColor = "white";
    document.getElementById("Offers&Events").style.backgroundColor = "lightblue";
    document.getElementById("Customers").style.backgroundColor = "white";
    document.getElementById("Settings").style.backgroundColor = "white";
    document.getElementById("Logout").style.backgroundColor = "white";
    
}
const Customers=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "white";
    document.getElementById("Menu").style.backgroundColor = "white";
    document.getElementById("Payments").style.backgroundColor = "white";
    document.getElementById("Offers&Events").style.backgroundColor = "white";
    document.getElementById("Customers").style.backgroundColor = "lightblue";
    document.getElementById("Settings").style.backgroundColor = "white";
    document.getElementById("Logout").style.backgroundColor = "white";
    
}
const Settings=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "white";
    document.getElementById("Menu").style.backgroundColor = "white";
    document.getElementById("Payments").style.backgroundColor = "white";
    document.getElementById("Offers&Events").style.backgroundColor = "white";
    document.getElementById("Customers").style.backgroundColor = "white";
    document.getElementById("Settings").style.backgroundColor = "lightblue";
    document.getElementById("Logout").style.backgroundColor = "white";
    
}
const Logout=()=>{
    document.getElementById("Dashboard").style.backgroundColor = "white";
    document.getElementById("Menu").style.backgroundColor = "white";
    document.getElementById("Payments").style.backgroundColor = "white";
    document.getElementById("Offers&Events").style.backgroundColor = "white";
    document.getElementById("Customers").style.backgroundColor = "white";
    document.getElementById("Settings").style.backgroundColor = "white";
    document.getElementById("Logout").style.backgroundColor = "lightblue";
    
}

useEffect(()=>{
    document.getElementById("Settings").style.backgroundColor = "lightblue";
})

const BarCall=()=>{
  setshow(!show)
    
}


  return (
    <>
    <div className='w-full fixed ' >
        <div className='pl-8 p-4  bg-white'>{
          show?<RxCross2 size={36} onClick={BarCall} />:<TiThMenu size={36} onClick={BarCall}/>
        }
        {/* <TiThMenu size={36} onClick={BarCall}/>
        <RxCross2 size={36} onClick={BarCall} /> */}
        </div>


      {/* <div className='pl-6 py-10 bg-slate-200'> */}
      { show &&
      <div className='pl-6 py-10 bg-slate-200'>

<nav className=' w-full  overscroll-auto shadow-gray-200 border-r-2 h-full' >


<ul className='gap-3'>
    <li id="Dashboard" className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg' onClick={Dashboard}>
        <RxDashboard size={28} />
        <button className=' font-medium'>Dashboard</button>
    </li>
    <li id="Menu" onClick={Menu} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
        <BsMenuButtonWide size={28}/>
        <button className=' font-medium'>Menu</button>
    </li>
    <li id="Payments" onClick={Payments} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
        <MdOutlinePayment size={28}/>
        <button className=' font-medium'>Payments</button>
    </li>
    <li id="Offers&Events" onClick={Offers} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
        
        <GrDocumentSound size={28}/>
        <button className=' font-medium'>Offers & Events</button>
    </li>
    <li id="Customers" onClick={Customers} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
        <GoPeople size={28}/>
        <button className=' font-medium'>Customers</button>
    </li>
</ul>


<ul className=''>
    <li id="Settings" onClick={Settings} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
        <IoSettingsOutline size={28}/>
        <button className=' font-medium'>Settings</button>

    </li>
    <li id="Logout" onClick={Logout} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
        <IoIosLogOut size={28}/>
        <button className=' font-medium'>Logout</button>
    </li>
</ul>



</nav>
</div>
      }
      {/* </div> */}


    </div>
    </>
  )
}
