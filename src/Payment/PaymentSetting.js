import React, { useEffect, useState } from 'react'
import Footer from '../navfoot/Footer';
import { useNavigate } from "react-router-dom";
import BankForm from './BankForm';
import BhimUpiFrom from './BhimUpiFrom';

export default function PaymentSetting() {
    const navigate = useNavigate();

    const [option,setoption]=useState("")
    

    const BusinessInfo=()=>{
        navigate("/")
        // document.getElementById('BusinessInfo').style.backgroundColor='blue'
        
        // document.getElementById('BusinessInfo').style.color='white'
        // document.getElementById('PayoutDetails').style.backgroundColor='white'
        // document.getElementById('PayoutDetails').style.color='black'
    }
    const PayoutDetails=()=>{
        // navigate("/setting/payout")
        // document.getElementById('PayoutDetails').style.backgroundColor='blue'
        
        // document.getElementById('PayoutDetails').style.color='white'
        // document.getElementById('BusinessInfo').style.backgroundColor='white'
        // document.getElementById('BusinessInfo').style.color='black'
    }

    const ChangeHandle=(e)=>{
        console.log(e.target.value);
        setoption(e.target.value)
    }

   
    useEffect(()=>{
       
        document.getElementById('PayoutDetails').style.backgroundColor='blue'
        
        document.getElementById('PayoutDetails').style.color='white'
        document.getElementById('BusinessInfo').style.backgroundColor='white'
        document.getElementById('BusinessInfo').style.color='black'

    })
  return (
    <div className='md:mt-8 mt-0 w-full'>
    <div className=' bg-yellow-300 p-5 md:pt-8 pt-2 shadow-lg md:pl-20 pi-6'>
        <p className='text-2xl font-bold'>Setting</p>
        <p>Manage your account setting</p>
    </div>
    <div className=' bg-blue-50 pb-4'>
        <div className='bg-white md:mx-4 mx-0 '>
        <div className='flex md:gap-10 gap-6 p-6  '>
            <button id='BusinessInfo' className=' border-black border p-2 rounded-lg ' onClick={BusinessInfo}>Business Info</button>
            <button id='PayoutDetails' className=' border-black border p-2 rounded-lg ' onClick={PayoutDetails}>Payout Details</button>
        </div>
        <p className=' border'></p>







        <div className="flex flex-col flex-grow">
        
        <div>
          <label className="inline-flex items-center px-10 mt-6">
            <input
              id='option1'
              type="radio"
              className="form-radio text-blue-500"
              name="option"
              onChange={ChangeHandle}
              value="Bank Transfer"
            />
            <span className="ml-2 font-bold">Bank Transfer</span>
          </label>
          <div>
            <BankForm option={option}/>
        </div>

        <p className=' border'></p>

          <label className="inline-flex items-center ml-4 px-6 mt-6">
            <input
              id='option2'
              type="radio"
              className="form-radio text-blue-500"
              name="option"
              value="Bhim UPI"
              onChange={ChangeHandle}
            />
            <span className="ml-2 font-bold">Bhim UPI</span>
          </label>
          
        <div>
            <BhimUpiFrom option={option}/>
        </div>
          
        </div>
      </div>









        {/* <div>
            <BankForm/>
        </div>
        <p className=' border'></p>
        <div>
            <BhimUpiFrom/>
        </div> */}
        
        </div>
        <div className='mx-4 mt-4 border-gray-400 rounded-md p-5 border-2'>
        <Footer/>
        </div>
        
    </div>
</div>
  )
}
