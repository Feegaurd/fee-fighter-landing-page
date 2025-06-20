
import { Phone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Simple. Fast. Secure.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Getting started is easy. Download our app and start saving on every transaction.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Download the app</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Scan the QR code at checkout</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Save 2% instantly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 h-96 w-56 flex flex-col items-center justify-center">
                  <Phone size={80} className="text-blue-500 mb-6" />
                  <h4 className="text-xl font-bold text-gray-800 mb-4">test name App</h4>
                  
                  {/* QR Code placeholder */}
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 ${
                            Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 text-center">
                    Scan to pay and save 2%
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-bold animate-pulse">
                2% OFF
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-bold animate-pulse delay-500">
                Instant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
