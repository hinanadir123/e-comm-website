'use client'
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

export default function Toppicks() {
  const [data, setData] = useState([]);

  const query = `*[_type == "product"]{
    id,
    name,
    "imageUrl": imagePath,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`;

  const fetchProducts = async () => {
    const res = await client.fetch(query);
    console.log('res: ', res);
    setData(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-10">
      {/* Text Section */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Top Picks For You</h1>
        <h3 className="text-gray-600 text-sm md:text-base">
          Find a bright idea to suit your taste with our great selection of products.
        </h3>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data &&
            data.slice(0, 4)?.map((product: any) => (
              <div
                key={product.id}
                className="flex flex-col items-center border rounded-lg shadow-lg p-4 bg-white">
                <img
                  src={product.imageUrl ? product.imageUrl : ""}
                  alt={product.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-base sm:text-lg font-semibold text-center">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">Rs. {product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-green-500 text-sm mt-1">
                    Discount: {product.discountPercentage}%
                  </p>
                )}
                <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
                  {product.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
