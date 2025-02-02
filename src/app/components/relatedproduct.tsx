import React from "react";
import Image from "next/image";

export default function toppicks() {
  return (
  <div>
    <div className="border shadow-md w-full h-auto">
      <h1 className="text-center text-2xl font-bold">Related Products</h1>
   
    <div className="flex flex-row mt-4 mb-4 justify-evenly item-center ">
       {/* Product Card 2 */}
       <div className="flex flex-col items-center rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic6.png"
          alt="Dining Set"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">
          Wood Stool Bench With Mirror
        </h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>
    
    
       {/* Product Card 2 */}
       <div className="flex flex-col items-center rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic7.png"
          alt="Dining Set"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">
          Black Sofa MultiUse
        </h3>
        <p className="text-gray-600 mt-2">Rs. 325,000.00</p>
      </div>
    
    
       {/* Product Card 2 */}
       <div className="flex flex-col items-center rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic5.png"
          alt="Dining Set"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">
          White Foamic Chairs With Dining Table
        </h3>
        <p className="text-gray-600 mt-2">Rs. 765,000.00</p>
      </div>
    
    
       {/* Product Card 2 */}
       <div className="flex flex-col items-center rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic4.png"
          alt="Dining Set"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">
          Granite Dining Table with Dining Chair
        </h3>
        <p className="text-gray-600 mt-2">Rs. 455,000.00</p>
      </div>
    </div>
    </div>
  </div>
  );
}
