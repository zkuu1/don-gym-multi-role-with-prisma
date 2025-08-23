const WheyProducts = () => {
  // Product data - in a real app this would come from props or API
  const products = [
    { id: 1, name: "WHEY PROTEIN", price: "Rp.12.000", unit: "per scope" },
    { id: 2, name: "WHEY PROTEIN", price: "Rp.12.000", unit: "per scope" },
    { id: 3, name: "WHEY PROTEIN", price: "Rp.12.000", unit: "per scope" },
    { id: 4, name: "WHEY PROTEIN", price: "Rp.12.000", unit: "per scope" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">SUPLEMEN & WHEY</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Premium quality whey protein supplements to support your fitness goals and recovery.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{product.name}</h3>
                
                <div className="mt-auto">
                  <div className="text-center mb-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  </div>
                  
                  <p className="text-gray-600 text-center text-sm">{product.unit}</p>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-800 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Whey Protein?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">High Quality</h3>
              <p className="text-gray-300 text-sm">Premium ingredients for maximum results</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300 text-sm">Receive your order within 24 hours</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300 text-sm">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheyProducts;