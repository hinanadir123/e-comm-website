import Image from "next/image";
import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";

const products = [
  {
    title: "Gucci Duffled Bag",
    Price: "$960",
    OldPrice: "$1160",
    image: "/bag.png",
    Rating: "4",
    Reviews: "65",
  },

  {
    title: "Gucci Duffled Bag",
    Price: "$960",
    OldPrice: "$1160",
    image: "/bag.png",
    Rating: "4",
    Reviews: "65",
  },
  {
    title: "RGB Liquid CPU Cooler",
    Price: "$160",
    OldPrice: "$360",
    image: "/bag.png",
    Rating: "4",
    Reviews: "65",
  },
  {
    title: "small Book Shelf",
    Price: "$360",
    OldPrice: "Null",
    image: "/bag.png",
    Rating: "5",
    Reviews: "65",
  },
];
const productsbox = ({ products }: { products: any }) => (
  <div>
    <div className="group shadow-md bg-neutral-100 w-[220px] h-[180px] lex justify-center items-center relative cursor-pointer ">
      <Image
        src={products.image}
        width={150}
        height={100}
        alt={products.title}
      />
      <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
        <FaEye className="text-2xl text-black rounded-full p-1 bg-white" />
        <FaRegHeart className="bg-white" />
      </div>
      <button className="w-ull absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        Add To Cart
      </button>
    </div>
    <h1 className="font-bold font-sans pt-2">{products.title}</h1>
    <div className="flex items-center space-x-2 ">
        <span className="text-red-500 font-bold ">{products.price}</span>
        {products.oldprice &&  (
            <span className="text-grey-400 font-bold line-through">{products.oldprice}</span>
        )}
    </div>
    <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
        {[...Array(5)].map((_, index)=>
        index < products.rating ? (
            <FaStar  key = { index} />
        ) :(
            <FaStar key = {index} />
        )
        )}
        <span className="text-grey-400 text:sm ml-1">{products.Reviews}</span>

    </div>
  </div>
);


const Products = () => {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                <div className="w-[80px]">
                    <div className="flex">
                        <h3 className="text-black-500 font-bold border-red-400 flex">Top Pics For You</h3>
                        <div className="flex justify-between">
                            <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products;