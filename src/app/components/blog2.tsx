import React from "react";

export default function blogg() {
  return (
    <div className="w-full flex flex-col ">
      <div className="w-[440px] h-[440px] shadow-sm flex flex-col justify-around items-center px-5 ">
        <img
          src="images/b1.jfif"
          alt="laptop"
          className="w-60 h-60 ml-6 mt-6"
        />

        <div className="flex space-x-4 text-slate-400">
          <span>Admin</span>
          <span>14 oct 2025</span>
          <span>Wood</span>
        </div>

        <div className="w-96 h-96 shadow-md">
          <h1 className="text-3xl font-bold text-balance">
            Going All With Melannial Design
          </h1>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempora
            quas ipsam odio laboriosam doloremque dolorem veniam distinctio quia
            atque! Voluptatibus impedit illum minima exercitationem, quod cum
            dolor possimus aspernatur.
          </p>
        </div>
      </div>
      {/* second div */}
      <div className="w-[440px] h-[440px] shadow-sm mr-3 flex flex-col justify-center items-center px-5 ">
        <img
          src="images/b2.jfif"
          alt="laptop"
          className="w-60 h-60 ml-6 mt-6"
        />

        <div className="flex space-x-4 text-slate-400">
          <span>Admin</span>
          <span>14 oct 2025</span>
          <span>Wood</span>
        </div>

        <div className="w-320px h-60 shadow-md">
          <h1 className="text-3xl font-bold text-balance">
            Expoling New Ways Of Decorating
          </h1>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempora
            quas ipsam odio laboriosam doloremque dolorem veniam distinctio quia
            atque! Voluptatibus impedit illum minima exercitationem, quod cum
            dolor possimus aspernatur.
          </p>
        </div>
      </div>
      {/* third div */}
      <div className="w[440px] h-[540px] shadow-sm flex flex-col justify-around items-center px-5 ">
        <img src="images/b3.jfif" alt="lp" className="w-60 h-60 ml-6 mt-6" />

        <div className="flex space-x-4 text-slate-400">
          <span>Admin</span>
          <span>14 oct 2025</span>
          <span>Wood</span>
        </div>

        <div className="w-96 h-60 shadow-md">
          <h1 className="text-3xl font-bold text-balance">
            Hand Made Piece That Took To Make Time
          </h1>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempora
            quas ipsam odio laboriosam doloremque dolorem veniam distinctio quia
            atque! Voluptatibus impedit illum minima exercitationem, quod cum
            dolor possimus aspernatur.
          </p>
        </div>
        <div className="flex flex-col">
        <input type="text" className="px-4  outline rounded-md " />
        <h1 className="font-bold text-2xl text-center">Catagoies</h1>

        <div className="flex flex-col space-y-3">
        <span className="text-slate-400">Crafts</span>
        <span className="text-slate-400">Handmade</span>
        <span className="text-slate-400">Design</span>
        <span className="text-slate-400">Wood</span>
        <span className="text-slate-400">Interior</span>
      </div>
      </div>

      <div>
        <h1>Recent Posts</h1>
        
      </div>
      </div>
      
    </div>
  );
}
