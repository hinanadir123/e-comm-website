import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import pic1 from "images/pic1.jpg"

export default function hero() {
   return (
  //   
        <div className="flex items-center bg-yellow-100 rounded-lg p-6 px-10">
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
          {/* image */}
          <div className="ml-5">
            <img src="images/pic1.png" alt="iphone" />
          </div>
        </div>
   
  );
}
