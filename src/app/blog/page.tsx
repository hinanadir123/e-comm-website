import Image from "next/image";
import Blog2 from "../components/blog2";
import Delievery from "../components/Delievery";

export default function blogbanne() {
  return (
    <div>
    <div
      className="relative bg-cover bg-center h-64 opacity-50"
      style={{ backgroundImage: "url('/images/bgg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-sm mt-2">Home &gt; Blog</p>
        </div>
      </div>
      </div>
      <Blog2 />
      <Delievery />
    </div>
  );
}
