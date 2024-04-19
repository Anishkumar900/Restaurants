import React, { useEffect } from 'react'
import ChangeFrom from './ChangeFrom'
import Footer from '../navfoot/Footer'
import { useNavigate } from "react-router-dom";

export default function Setting() {
    const navigate = useNavigate();
    

    const BusinessInfo=()=>{
        // document.getElementById('BusinessInfo').style.backgroundColor='blue'
        
        // document.getElementById('BusinessInfo').style.color='white'
        // document.getElementById('PayoutDetails').style.backgroundColor='white'
        // document.getElementById('PayoutDetails').style.color='black'
    }
    const PayoutDetails=()=>{
        navigate("/setting/payout")
        // document.getElementById('PayoutDetails').style.backgroundColor='blue'
        
        // document.getElementById('PayoutDetails').style.color='white'
        // document.getElementById('BusinessInfo').style.backgroundColor='white'
        // document.getElementById('BusinessInfo').style.color='black'
    }

    const Change=()=>{
        document.getElementById('Change').style.backgroundColor='blue'
        document.getElementById('Change').style.color='white'
        document.getElementById('Delete').style.backgroundColor='white'
        document.getElementById('Delete').style.color='black'
        }

    const Delete=()=>{
        document.getElementById('Delete').style.backgroundColor='blue'
        document.getElementById('Delete').style.color='white'
        document.getElementById('Change').style.backgroundColor='white'
        document.getElementById('Change').style.color='black'

    }
    useEffect(()=>{
        document.getElementById('Change').style.backgroundColor='blue'
        document.getElementById('Change').style.color='white'
        document.getElementById('BusinessInfo').style.backgroundColor='blue'
        
        document.getElementById('BusinessInfo').style.color='white'

    })
  return (
    <div className='md:mt-8 mt-0 w-full'>
        <div className=' bg-yellow-300 p-5 md:pt-8 pt-2 shadow-lg md:pl-20 pi-6'>
            <p className='text-2xl font-bold'>Setting</p>
            <p>Manage your account setting</p>
        </div>
        <div className=' bg-blue-50 pb-4'>
            <div className='bg-white mx-4 '>
            <div className='flex gap-10 p-6  '>
                <button id='BusinessInfo' className=' border-black border p-2 rounded-lg ' onClick={BusinessInfo}>Business Info</button>
                <button id='PayoutDetails' className=' border-black border p-2 rounded-lg ' onClick={PayoutDetails}>Payout Details</button>
            </div>
            <p className=' border'></p>
            <div>
                <p className=' px-8 py-4 font-sans font-semibold text-lg'>Brand Logo</p>
                <div className='flex px-9 gap-8'>
                    <img alt='logo' className='w-20 h-16 rounded-lg' src='https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-1/333223448_922023752164322_7671878336685189137_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YyUhToABA7sAb5eHg2B&_nc_ht=scontent.fccu4-3.fna&oh=00_AfD98WNbt4hF3CqH__XS-x7b-WAckwUa7-W0c24hNOFKEw&oe=6626FC2D'></img>
                    <button id="Change" className=' w-24 rounded-lg h-10 my-auto border-black border ' onClick={Change}>Change</button>
                    <button id="Delete" className=' w-24 rounded-lg h-10 my-auto border-black border' onClick={Delete}>Delete</button>
                </div>
                <div>
                    <ChangeFrom/>
                </div>
            </div>
            </div>
            <div className='mx-4  border-gray-400 rounded-md p-5 border-2'>
            <Footer/>
            </div>
            
        </div>
    </div>
  )
}
