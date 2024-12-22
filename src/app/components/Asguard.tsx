import React from 'react'

export default function Asguard() {
  return (
    <div className="flex items-center justify-around bg-yellow-100 rounded-lg p-6 px-10">
      {/* image */}
      <div className="ml-5">
        <img src="images/pic7.png" alt="asguard soa"
          className='w-[360px] h-[360px]
      inline-block left-4 '/>
      </div>
      <div className="text-black object-none object-left font-semibold flex flex-col justify-center space-y-5 sm:w-[180px] md:w-[200px] lg:w-[200px]">
        <div className=''>
          {/* heading */}
          <p className="text-xs flex">
            New Arriavals</p>

          <h1 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl flex font-bold leading leading-snug">Asguard Sofa</h1>

        </div>
        {/* <Link href="#Products"
         className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
         >

          Shop Now
          
      </Link> */}
      </div>

    </div>
  )
}
