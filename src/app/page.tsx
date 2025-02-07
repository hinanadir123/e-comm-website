"use client"

import React, { useState } from "react"
import Image from "next/image";

import Hero from "./components/hero";
import Card1 from "./components/card1";
import Toppicks from "./components/toppicks";
import Asguard from "./components/Asguard";
import Insta from "./components/insta";
import Blog from "./components/Blog";
import ProductCards from "./products/page";
import Catagory from "./components/catagory";








export default function Home() {
  return (
    <div>

      <Hero />
      <Card1 />
      <Catagory />
      <Toppicks />
      <Asguard />
      <Blog />
      <Insta />
      <ProductCards />
      
         
      



    </div>
  )
}
