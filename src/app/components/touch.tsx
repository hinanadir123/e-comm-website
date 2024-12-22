import React from 'react'
import { FaMobile } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";



export default function touch() {
  return (
    
      <div className='flex flex-row justify-center items-center'>
        <div className='w-full mt-2 '>
          <h1 className='text-4xl font-bold text-center mt-3' >Get In Touch With Us</h1>
          <p className='text-center text-sm'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
<div  className='w-[80px] flex flex-row gap-32 justify-between items-center'>
          <div className='mt-10 text-justify'>
            <div className='flex flex-col space-y-3 ml-80 justify-center items-center'>
              <h1>Your Name</h1>
              <input type="text" placeholder='Enter your name' className='p-4 px-3 py-3 rounded-md outline' />

              <h1>E.mail Addess</h1>
              <input type="text" placeholder='Enter your email' className='p-4 px-3 py-3 rounded-md outline' />
              <h1>Subject</h1>
              <input type="text" placeholder='Optional' className='p-4 px-3 py-3 rounded-md outline' />

              <h1>Address</h1>
              <input type="text" placeholder='address' className='p-4 px-3 py-3 rounded-md outline' />

              <h1>Message</h1>
              <input type="text" placeholder='Enter Yout Feedback' className='p-4 px-3 py-3 rounded-md outline rows-4' />

              <button className='p-4 px-3 py-2 rounded-md'>Submit</button>
            </div>
          </div>
          <div className='text-top mt-1'>
            <div className='w-32 h-32'>
           < IoLocation />
              <h1 className='text-2xl font-bold mt-3 '>
                Address
              </h1>
              <span className='text-sm '>236 5th SE Avenue, New York NY10000, United States</span>
            </div>

            <div className='w-32 h-32'>
              <FaMobile />
              <h1 className='text-2xl font-bold mt-3 '>
                Mobile
              </h1>
              <span className='text-sm '>Mobile: +(84) 546-6789
                Hotline: +(84) 456-6789</span>
            </div>

            <div className='w-32 h-32'>
            <FaRegAddressCard />
              <h1 className='text-2xl font-bold mt-3 '>
                Address
              </h1>
              <span className='text-sm '>Monday-Friday: 9:00 - 22:00
                Saturday-Sunday: 9:00 - 21:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
