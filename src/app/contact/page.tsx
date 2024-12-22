import Image from "next/image";
import Touch from "../components/touch";
import Delievery from "../components/Delievery";
export default function Contact() {
  return (
    <div>
    
    <div

      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('images/bgg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-sm mt-2">Home &gt; Contact</p>
        </div>
      </div>
      </div>
      <div className="mt-8 space-y-8">
        <Touch />
        <Delievery />
      </div>
    </div>
   
  );
}
