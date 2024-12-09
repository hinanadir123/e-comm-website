import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera,FaHeadphones,  } from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";

export default function catagory() {
  return (
    <div className="w-full flex justify-center mt-10 mb-1 ">
      <div className="sm:w-full md:w-[80%] pb-10">
        <div className="flex flex-col sm:pl[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-1-8 border-red-500 pl-3 ml-1">
           {" "}
            Catagories
          </h3>
          <div className="flex">
            <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
              {" "}
              Browse By Feature
            </h1>
          </div>
        </div>
        {/* catagories */}
        <div className="flex sm:flex-col md:flex-row  sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-3">
            {/* box1 */}
            <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px]  flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            < CiMobile4 className="text-3xl font-semibold "/>
                <p className="font-semibold">Phones</p>

            </div>
            <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px]  flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <HiMiniComputerDesktop className="text-3xl font-semibold "/>
                <p className="font-semibold">Computer</p>

            </div>
            <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px]  flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <BsSmartwatch  className="text-3xl font-semibold "/>
                <p className="font-semibold">Smart watch</p>

            </div>
               <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px]  flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            < FaCamera className="text-3xl font-semibold "/>
                <p className="font-semibold">Camera</p>

            </div>
            <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px]  flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            < FaHeadphones className="text-3xl font-semibold "/>
                <p className="font-semibold">Head Phones</p>

            </div>
          
            <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px]  flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <  SiFacebookgaming  className="text-3xl font-semibold "/>
                <p className="font-semibold">Gaming</p>

            </div>

        </div>
      </div>
    </div>
  );
}
