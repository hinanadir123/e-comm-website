// pages/cart.js
export default function Cart() {
    return (
      <div className="p-10 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="text-left px-4 py-2">Product</th>
                  <th className="text-left px-4 py-2">Price</th>
                  <th className="text-left px-4 py-2">Quantity</th>
                  <th className="text-left px-4 py-2">Subtotal</th>
                  <th className="text-left px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-4 flex items-center">
                    <img
                      src="images/pic16.png"
                      alt="Asgaard sofa"
                      className="w-16 h-16 rounded bg-yellow-100 mr-4"
                    />
                    <span>Asgaard sofa</span>
                  </td>
                  <td className="px-4 py-4">Rs. 250,000.00</td>
                  <td className="px-4 py-4">
                    <input
                      type="number"
                      min="1"
                      value="1"
                      className="w-12 text-center border rounded"
                    />
                  </td>
                  <td className="px-4 py-4">Rs. 250,000.00</td>
                  <td className="px-4 py-4">
                    <button className="text-red-500 hover:text-red-700">
                      🗑️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* Cart Totals */}
          <div className="bg-yellow-50 p-14 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4 font-bold text-lg">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
            <button className="w-full bg-yellow-400 text-white py-2 rounded-lg shadow hover:bg-yellow-500">
              Check Out
            </button>
          </div>
        </div>
      </div>
    );
  }
  