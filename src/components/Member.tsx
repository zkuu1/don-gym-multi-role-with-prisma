const MemberCard = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Member Section */}
          <div className="lg:w-2/3 p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900">MEMBER</h1>
              <p className="text-gray-600 mt-2">Exclusive membership benefits</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className="flex-1 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Registration Fee</h3>
                <p className="text-3xl font-bold text-gray-900">Rp.80.000</p>
                <p className="text-sm text-gray-600 mt-2">One-time payment</p>
              </div>
              
              <div className="flex-1 bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Per Visit</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-400 line-through mr-2 text-lg">Rp.14.000</span>
                  <span className="text-3xl font-bold text-green-600">Rp.7.000</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">After 50% discount</p>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <p className="text-center text-yellow-800 font-medium">
                For 3 years to get <span className="font-extrabold">50% discount</span> per visit
              </p>
            </div>
            
            <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1">
              Register Now
            </button>
          </div>
          
          {/* Terms & Conditions Section */}
          <div className="lg:w-1/3 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Terms & Conditions</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 fill-current text-green-500 mt-0.5" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                </div>
                <p className="text-gray-700 ml-3">Membership is valid for 3 years from registration date</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 fill-current text-green-500 mt-0.5" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                </div>
                <p className="text-gray-700 ml-3">50% discount applies to standard visit rates only</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 fill-current text-green-500 mt-0.5" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                </div>
                <p className="text-gray-700 ml-3">Non-transferable and non-refundable</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 fill-current text-green-500 mt-0.5" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                </div>
                <p className="text-gray-700 ml-3">Present membership card at each visit</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                For complete terms, visit our website or contact customer service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;