import React from "react";
import Image from "next/image";
import pic3 from "images/pic3.jpg"

export default function music() {
  return (
    <main className="w-full flex justify-center items-center mt-10 mb-1">


    <div className="sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:h-auto md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
      <div className="sm:w-full md:w-[50%] p-4">
        <h3 className="text-green-500 font-bold">Catagories</h3>
        <h1 className="text-white font-bold sm:text-md md:text-3xl lg-text-5xl pt-4">
          Enhance Your <br />
          Music Experience
        </h1>
        {/* timer */}
        <div className="flex flex-wrap sm:justify-start pt-5 pb-4 gap-4">
          <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
            <span className="font-bold text-lg">23</span>
            <span className="sm:text-xs md:text-sm">Hours</span>
          </div>

          <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
            <span className="font-bold text-lg">5</span>
            <span className="sm:text-xs md:text-sm">Days</span>
          </div>

          <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
            <span className="font-bold text-lg">59</span>
            <span className="sm:text-xs md:text-sm">Minutes</span>
          </div>
          <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
            <span className="font-bold text-lg">35</span>
            <span className="sm:text-xs md:text-sm">Seconds</span>
          </div>
        </div>

        <button className="bg-green-500 hover:bg-green-800 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3">
          BUY NOW!
        </button>
        </div>
        {/* image */}
        <div className="sm-w-full md:w-[40% pl-6 justify-center items-center">
            <img src="../pic3.jpg" alt="image music" 
            className="w-full h-full shadow-md"/>
        </div>
      </div>
      </main>
    
  );
}
