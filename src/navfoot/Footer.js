import React from 'react'

export default function Footer() {
  return (
    <div className='md:flex flex-none'>
        <div><img alt='reslogo' className='md:w-20 w-20 h-16 mx-auto md:mx-0 my-4 md:my-0  md:h-20' src='https://www.pngall.com/wp-content/uploads/8/Burger-Restaurant-PNG-Free-Image.png'/></div>
        <div className='my-auto md:pl-6 pl-2'>
            <p>Help Us to make Snackbae better! Share your feedbacks and request features that fits best for your Business</p>
            <button className='text-blue-700 hover:underline'>Give Feedback</button>
        </div>
    </div>
  )
}
