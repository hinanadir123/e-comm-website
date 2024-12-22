import Description from "@/app/components/Description";
import Relatedproduct from "@/app/components/relatedproduct";
import Sofri from "@/app/components/sofri";
import Image from "next/image";




export default function ProductPage() {
  return (
    <div>

    <div className=" w-full  ">
      <div className=" w-full text-left flex justify-center items-center ">
        <div className="w-32 h-32 mb-32 flex flex-col">
          <img src="/images/c2.png" alt="sofaa" />
          <img src="images/c3.png" alt="chair" />
          <img src="images/pic2.png" alt="outdoor" />
          <img src="images/t4.png" alt="" />
        </div >
        <div className="bg-yellow-100 mt-4 mb-4 rounded-sm">
          <img src={"/images/pic7.png"}
            className="w-[400px] h-[400px]"
            alt={"sofa"}></img>
        </div>
        <div className="space-x-1 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">Aaasgaard Sofa</h1>
          <p className="text-xl text-gray-600">Rs. 250,000.00</p>
          <p className="mt-2 text-gray-500 inline-block">
            This is a high-quality sofa perfect for your home. Stylish and comfortable!
          </p>
          <button className="mt-4 px-2 py-2 bg-blue-500 text-white rounded">
            Add To Cart
          </button>
        </div>
      </div>
      </div>

      <div className="mt-5 space-y-8">
      <Description />
      <Sofri />
      <Relatedproduct />
      </div>

    </div>


  );
}






