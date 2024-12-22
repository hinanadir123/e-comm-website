import React from 'react'

export default function Delievery() {
  return (
    <div>
       <div className="w-full h-[320px] space-x-5  flex justify-around items-center bg-[#FAF4F4] ">
        <div className="font-bold flex flex-col text-3xl">
          <h1>Free Delievry</h1>
          <p className="text-sm font-normal mt-3">
            For all orders 50$ condivct have problem
          </p>
        </div>
        <div className="font-bold flex flex-col text-3xl">
          <h1>90 Days Return</h1>
          <p className="text-sm font-normal mt-3">
          If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className="font-bold flex flex-col text-3xl">
          <h1>Secure Payment</h1>
          <p className="text-sm font-normal mt-3">
          100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  )
}
