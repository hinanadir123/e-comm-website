import React from "react";
import Image from "next/image";
import Loginregiter from "../components/loginregister";
import Delievery from "../components/Delievery";

export default function page() {
  return (
    <div>
    
    <div

      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('images/bgg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">My Account</h1>
          <p className="text-sm mt-2">Home &gt; Account</p>
        </div>
      </div>
      </div>
<Loginregiter />
<Delievery />
           </div>
    
  );
}
