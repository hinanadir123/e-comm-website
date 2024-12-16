import Image from "next/image";



export default function ProductPage() {
    return (
        <div className="bg-pink-200 text-left p-4 ">
      
        <img src={"/images/pic7.png"}
        className="w-{200px} height-{200px}" alt={"sofa"}></img>
        <h1 className="text-4xl font-bold mb-4">Aaasgaard Sofa</h1>
        <p className="text-xl text-gray-600">Rs. 250,000.00</p>
        <p className="mt-2 text-gray-500">
          This is a high-quality sofa perfect for your home. Stylish and comfortable!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Add To Cart
        </button>
      </div>
      
    );
  }
  