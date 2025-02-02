"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  projectId: "2vhir9dz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Configure the image URL builder
const builder = imageUrlBuilder(sanity);
const urlFor = (source: any) => builder.image(source);

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  image: any; // Keep this as `any` to match Sanity's response structure
  category: string;
}

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          name,
          image,
          price,
          description,
          discountPercentage,
          category,
        }
      `;
      const data = await sanity.fetch(query);
      console.log("data: ", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4 text-2xl font-bold">
        Products From API's Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <Image
              src={
                urlFor(product.image).url() || "/placeholder.png"
              }
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-slate-800 mb-4 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-slate-600 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-green-600 text-sm">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <span
                  className="text-xs bg-slate-400 text-black rounded-full px-3 py-1"
                >
                  {product.category}
                </span>
              </div>
              <button
                className="mt-auto w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-red-800 mb-4">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="text-sm text-blue-900 font-medium">{item.name}</p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Image
                  src={urlFor(item.image).url() || "/placeholder.png"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart is Empty. Add Products to see them here.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
