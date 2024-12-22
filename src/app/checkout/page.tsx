import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Billing from "../components/billing";
import Subtotal from "../components/subtotal";
import Delievery from "../components/Delievery";
import Carttotal from "../components/carttotal";
import Touch from "../components/touch";

export default function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  w-full h-[400px] checkoutbackground">
        <h1 className="text-center text-4xl"> Check Out</h1>
        <div className="flex flex-row space-x-3 mt-4">
          {" "}
          <h3 className="font-semibold">HOME</h3> 
          <IoIosArrowForward />
          <span>checkout</span>{" "}
        </div>
      </div>
      <Billing />
      <Subtotal />
      <Delievery />
      <Carttotal />
      <Touch />
    </div>
  );
}
