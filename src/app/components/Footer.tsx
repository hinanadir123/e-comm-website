const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 w-full border-t">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-wrap gap-10">

          <div className="text-sm text-gray-600">
            400 University Drive Suite 200
            <br /> Coral Gables, FL 33134 USA
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="/shop" className="text-gray-600 hover:text-gray-800">Shop</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/payment-options" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
              <li><a href="/returns" className="text-gray-600 hover:text-gray-800">Returns</a></li>
              <li><a href="/privacy-policies" className="text-gray-600 hover:text-gray-800">Privacy Policies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Newsletter</h4>
            <form className="flex flex-wrap justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow sm:flex-auto px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4 sm:mb-0"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
