import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function navbar() {
  return (
    <header className="bg-yellow-100 h-12 shadow-sm border-b max-auto flex flex-col">
      {/* <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full"> */}
        {/* <div className="text-center flex-1">
          Summer Sale For All Swim Suits And Free Express Delievery -OFF 50%!
          <a href="#" className="underline hover-text-slate-300">
            {" "}
            SHOP NOW {" "}
          </a>
        </div> */}
        {/* <div className="flex items-center gap-[2px]">
          <div className="text-white text-sm font-normal leading-[21px]">
            English
          </div>
          <IoMdArrowDropdown className="text-whit text-3xl" />
        </div> */}
      {/* </div> */}
      <div className="flex justify-between item-center px-20 py-4">
        {/* <h1 className="text-2xl font-bold text-black px-2"> Exclusive</h1> */}
        <nav className="hidden md:flex justify-between items-center font-bold space-x-8 ">
          <a href="/" className="text-slate-600 hover:text-black underline">Home</a>
          <a href="shop" className="text-slate-600 hover:text-black ">Shop</a>
          <a href="product" className="text-slate-600 hover:text-black ">Product</a>
          <a href="contact" className="text-slate-600 hover:text-black">Contact</a>

        </nav>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-4 py-2">
            {/* <input type="text" placeholder="What are you looking for?" className="bg-slate-100 outline-none text-sm" />               */}
            <FaSearch className="hover:bg-yellow-400" />
          </div>
          <FaHeart className="hover:bg-red-500" />
          <FaCartShopping className="hover:bg-yellow-300" />

        </div>
      </div>

    </header>
  );
}
