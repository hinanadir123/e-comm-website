import Image from "next/image";
import React from "react";
import Hero from "./components/hero";
import Catagory from "./components/catagory";
import Music from "@/app/music"
import Selling from "./components/selling";
import Card1 from "./components/card1";
import Toppicks from "./components/toppicks";
import Asguard from "./components/Asguard";
import Insta from "./components/insta";
import Blog from "./components/Blog";
import Shop from "./shop/page";
import Footer from "./components/Footer";
import Product from "./components/selling";







export default function Home() {
  return (
     <div>
      
      <Hero />
      <Card1 />
       <Toppicks /> 
       <Asguard />
       <Blog/>
       <Insta />
       <Footer />
       <Shop />
       <Product />
       
          

     </div>
  )
}
