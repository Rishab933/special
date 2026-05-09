import React from 'react'
import angry from '../assets/angry.png'

const LastPage = () => {
  return (
    <div className='bg-[#ff0303c7] h-screen w-full flex flex-col items-center justify-center'>
        <img className='w-[50%] md:w-72 md:h-72' 
         src={angry} alt="" />
         <p className='text-2xl font-bold font-bubble text-white'>
            Bas hogya or kya chahiye ??
         </p>
         <p className='text-2xl font-bold font-bubble text-white'>
            Abb chal kissi de 😘😘
         </p>
    </div>
  )
}

export default LastPage
