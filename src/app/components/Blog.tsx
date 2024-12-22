import React from 'react';

// Reusable ProductCard Component
const ProductCard = ({ imageSrc, altText, title, price }: any) => (
  <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
    <img
      src={imageSrc}
      alt={altText}
      className="w-40 h-40 object-cover mb-4 rounded"
    />
    <h3 className="text-lg font-semibold text-center">{title}</h3>
    <p className="text-gray-600 mt-2 underline text-xl">Read More</p>
    <div className='flex justify-around w-[300px]'>
      <p>min</p>
      <p>date</p>
    </div>
  </div>
);

export default function Blog() {
  // Product data array for better scalability
  const products = [
    {
      imageSrc: "images/pic2.png",
      altText: "Trenton Modular Sofa",
      title: "Trenton Modular Sofa_3",
      price: "Rs. 25,000.00",
    },
    {
      imageSrc: "images/pic3.png",
      altText: "Granite Dining Table",
      title: "Granite Dining Table with Dining Chair",
      price: "Rs. 25,000.00",
    },
    {
      imageSrc: "images/pic4.png",
      altText: "Outdoor Bar Table and Stool",
      title: "Outdoor Bar Table and Stool",
      price: "Rs. 25,000.00",
    }
  ];

  return (
    <div className="flex items-center justify-center w-full bg-slate-100 py-10">
      <div className="max-w-7xl p-6 text-black rounded-lg shadow-md bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">Top Picks For You</h1>
          <p className="text-gray-600 mb-8">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              altText={product.altText}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
