import React from "react";
import Hero from "../components/hero";
import { BsFilterSquare } from "react-icons/bs";
import { FaAlignLeft } from "react-icons/fa";
import { PiChatCircleDotsFill } from "react-icons/pi";
import "./shop.css";
export default function Shop() {
  const shopCards = [
    {
      id: 1,
      title: "Trenton Modular Sofa_3",
      price: 25000.0,
      image: "images/c1.png",
    },
    {
      id: 2,
      title: "Granite Dinning Table With Dinning Chair",
      price: 25000.0,
      image: "images/pic12.png",
    },
    {
      id: 1,
      title: "Outdoor Bar table and Stool",
      price: 25000.0,
      image: "images/pic5.png",
    },
    {
      id: 1,
      title: "Plian console with Teak mirror",
      price: 25000.0,
      image: "images/pic6.png",
    },
    {
      id: 5,
      title: "Grain Coffee Table",
      price: 25000.0,
      image: "images/t1.png",
    },
    {
      id: 6,
      title: "Cant Coffee Table",
      price: 25000.0,
      image: "images/t2.png",
    },
    {
      id: 7,
      title: "Round Coffee Table_color",
      price: 25000.0,
      image: "images/t3.png",
    },
    {
      id: 8,
      title: "Reclaimed teak coffee table",
      price: 25000.0,
      image: "images/t4.png",
    },
    {
      id: 9,
      title: "plain console",
      price: 25000.0,
      image: "images/t5.png",
    },
    {
      id: 10,
      title: "Reclaimed teak side table",
      price: 25000.0,
      image: "images/t6.png",
    },
    {
      id: 11,
      title: "SGP 0825",
      price: 25000.0,
      image: "images/c3.png",
    },
    {
      id: 12,
      title: "Bela Chainr and Table",
      price: 25000.0,
      image: "images/pc12.png",
    },
    {
      id: 13,
      title: "Granite square table",
      price: 25000.0,
      image: "images/pc13.png",
    },
    {
      id: 14,
      title: "Asguard Sofa",
      price: 25000.0,
      image: "images/c3.png",
    },
    {
      id: 15,
      title: "Maya Sofa Three Seater",
      price: 25000.0,
      image: "images/pc15.png",
    },
    {
      id: 16,
      title: "Outdoor Sofa Set",
      price: 114000.0,
      image: "images/pc16.png",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[400px] shopBackground">
        <h1 className="font-bold text-5xl text-black">Shop</h1>
        <div className="flex justify-evenly items-center">
          <p>Home</p>
          <p>shop</p>
        </div>
      </div>
      <div className=" h-16 flex justify-evenly items-center bg-[#FAF4F4] mt-4">
        <div className="flex justify-center items-center space-x-3">
          <BsFilterSquare className="flex justify-around items-center " />
          <h3>Filters</h3>
          <FaAlignLeft />
          <PiChatCircleDotsFill />
        </div>
        <div>
          <h3>Showing 16 of 32 results</h3>
        </div>
        <div className="flex justify-center items-center ml-3">
          <h2>Show</h2>
          <button className="bg-white text black px-5">16</button>
        </div>
        <div>Short By</div>
        <button className="bg-white px-5 mr-4">Default</button>
      </div>
      <div className="w-full  flex justify-center items-center bg-gray-50 py-12">
        <div className="sm:w-full lg:w-[80%] flex sm:flex-col lg:flex-row sm:justify-center gap-y-3 sm:items-center lg:justify-evenly gap-x-4 px-4">
          {/* <div className='w-full h-20 bg-red-200'>k
    <header className='w-full flex justify-center items-center'>
      <p>Filter</p>
      <div>
      <h1>Showing 16 of 32 results</h1>
      </div>
      <div>
        <h3>Show</h3>
        <button>16</button>
        </div>
        <h3>Result</h3>
        <button>32</button>
        </header>
   
    
    </div> */}

          {/* Product Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-0">
            {/* Product Card 1 */}
            {shopCards &&
              shopCards.map((card) => (
                <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
                  <img
                    src={card.image}
                    alt="Sofa"
                    className="w-40 h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-gray-600 mt-2">Rs. {card.price}</p>
                </div>
              ))}

            {/* <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic3.png"
          alt="Dining Set"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">
          Granite Dining Table with Dining Chair
        </h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>

      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic4.png"
          alt="Outdoor Bar"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Outdoor Bar Table and Stool</h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>

      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic5.png"
          alt="Teak Mirror"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Plain Console with Teak Mirror</h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>

      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic5.png"
          alt="Teak Mirror"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Plain Console with Teak Mirror</h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-[320px] flex justify-around items-center bg-[#FAF4F4]">
        <div className="font-bold flex flex-col text-3xl">
          <h1>Free Delievry</h1>
          <p className="text-sm font-normal mt-3">
            For all orders 50$ condivct have problem
          </p>
        </div>
        <div className="font-bold flex flex-col text-3xl">
          <h1>90 Days Return</h1>
          <p className="text-sm font-normal mt-3">
          If goods have problems, consectetur adipim scing elit
          </p>
        </div>
        <div className="font-bold flex flex-col text-3xl">
          <h1>Secure Payment</h1>
          <p className="text-sm font-normal mt-3">
          100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
