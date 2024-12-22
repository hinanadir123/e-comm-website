// components/InstagramSection.js
export default function InstagramSection() {
    return (
      <div className="flex items-center justify-center bg-gray-100">
        <div className="max-w-lg p-6 text-black rounded-lg shadow-md text-center">
          <h2 className="text-5xl font-bold  mb-2">Our Instagram</h2>
          <p className="text-gray-600 mb-4">Follow our store on Instagram</p>
          <button className="px-4 py-2 bg-slate-200 shadow-md text-black font-semibold rounded hover:bg-yellow-600">
            Follow Us
          </button>
        </div>
      </div>
    );
  }
  