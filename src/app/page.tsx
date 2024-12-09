import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Catagory from "./components/catagory";
import Music from "@/app/music"
import Selling from "./components/selling";
import Card1 from "./components/card1";



export default function Home() {
  return (
     <div>
      <Navbar />
      <Hero />
      <Card1 />
      <Selling />
     
      <Catagory />
      
      <Music />
     </div>
  )
}
