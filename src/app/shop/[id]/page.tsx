import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Product() {
  return (
    <div className="flex items-center justify-around bg-yellow-100 rounded-lg p-6 px-10">
            {/* image */}
          <div className="ml-5">
            <img src="images/pic1.png" alt="iphone" />
          </div>
          <div className="text-black font-semibold flex flex-col justify-center space-y-5 sm:w-[180px] md:w-[200px] lg:w-[200px]">
            {/* heading */}
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Rocket
              <br />
              Single Seater

            </h1>
            <Link href="#Products"
               className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
               >

                Shop Now
                <FaArrowRight />
            </Link>
          </div>
         
        </div>
  )
}
