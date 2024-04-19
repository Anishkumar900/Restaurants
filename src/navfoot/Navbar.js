import React, { useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { GrDocumentSound } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

export default function Navbar() {
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
  return (
    <nav className=' fixed w-56  shadow-gray-200 border-r-2 h-full hover:overflow-y-auto' >
        <div className='p-5 py-7 px-12'>
            <img className='w-20 h-16 rou rounded-lg' alt='logo' src='https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-1/333223448_922023752164322_7671878336685189137_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YyUhToABA7sAb5eHg2B&_nc_ht=scontent.fccu4-3.fna&oh=00_AfD98WNbt4hF3CqH__XS-x7b-WAckwUa7-W0c24hNOFKEw&oe=6626FC2D'/>
        </div>
       <div className=' px-2'>
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


        <ul className='pt-20'>
            <li id="Settings" onClick={Settings} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
                <IoSettingsOutline size={28}/>
                <button className=' font-medium'>Settings</button>

            </li>
            <li id="Logout" onClick={Logout} className='flex gap-4 hover:bg-blue-100 p-3  rounded-lg'>
                <IoIosLogOut size={28}/>
                <button className=' font-medium'>Logout</button>
            </li>
        </ul>
        
       </div>

    </nav>
  )
}
