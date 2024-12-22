import React from 'react'

export default function toppicks() {
  return (
    <div>
 
<div className="w-full sm:h-[600px] lg:h-[400px] flex justify-center items-center bg-gray-50">
  <div className="sm:w-full lg:w-[80%] flex sm:flex-col lg:flex-row sm:justify-center gap-y-3 sm:items-center lg:justify-evenly gap-x-4 px-4">
    {/* Text Section */}
    <div className="text-center lg:text-left ">
      <h1 className="text-4xl font-semibold text-center mb-3">Top Picks For You</h1>
      <h3 className="text-gray-600 text-center mt-1 mb-3">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </h3>
   

    {/* Product Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-0">
      {/* Product Card 1 */}
      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic2.png"
          alt="Sofa"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Trenton Modular Sofa_3</h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>

      {/* Product Card 2 */}
      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
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

      {/* Product Card 3 */}
      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic4.png"
          alt="Outdoor Bar"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Outdoor Bar Table and Stool</h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>

      {/* Product Card 4 */}
      <div className="flex flex-col items-center border rounded-md shadow-md p-4 bg-white">
        <img
          src="images/pic5.png"
          alt="Teak Mirror"
          className="w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Plain Console with Teak Mirror</h3>
        <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
      </div>
    </div>
  </div>
</div>

</div>
</div>
  )
}



























// import React from 'react'

// export default function toppicks() {
//   return (
//     <div className='w-full sm:h-[600px] lg:h-[400px] flex justify-center items-center'>
//         <div className='sm:w-full lg:w-[80%] sm:justify-center gap-y-3 sm:items-center flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4'>
//         <div className="text-center lg:text-left">
//       <h1 className="text-4xl font-semibold mb-3">Top Picks For You</h1>
//       <h3 className="text-gray-600">
//         Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
//       </h3>
//     </div>
            
//             {/* box1 */}
//             <div>
//                 <img src="images/pic2.png" alt="sofa" />
//             </div>
//         </div>
      
//     </div>
//   )
// }
