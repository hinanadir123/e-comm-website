import Image from "next/image";
import React from "react";
import Hero from "./components/hero";
import Card1 from "./components/card1";
import Toppicks from "./components/toppicks";
import Asguard from "./components/Asguard";
import Insta from "./components/insta";
import Blog from "./components/Blog";








export default function Home() {
  return (
    <div>

      <Hero />
      <Card1 />
      <Toppicks />
      <Asguard />
      <Blog />
      <Insta />
         
      



    </div>
  )
}
