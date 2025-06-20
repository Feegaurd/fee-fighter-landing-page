
import { DollarSign, CreditCard } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
		  	Introducing FeeGuard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
		  	FeeGuard is a payment method that allows customers to buy from businesses directly through ACH. By doing so, we allow businesses to avoid fees
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <DollarSign className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Savings</h3>
                  <p className="text-gray-600 mb-4">Customers save 2% when they checkout using FeeGuard</p>
                  <div className="bg-green-100 rounded-lg p-4">
                    <span className="text-2xl font-bold text-green-700">2% OFF</span>
                    <span className="text-sm text-green-600 ml-2">Every Transaction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <CreditCard className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Business Benefits</h3>
                  <p className="text-gray-600 mb-4">Businesses pay only 0.5% fee on top of the 2% customer discount</p>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <span className="text-2xl font-bold text-blue-700">0.5%</span>
                    <span className="text-sm text-blue-600 ml-2">Processing Fee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-center mb-8 text-gray-800">Fee Comparison</h4>
            
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h5 className="font-bold text-red-700 mb-4">Traditional System</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Customer Price</span>
                    <span className="font-bold">$100.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business Receives</span>
                    <span className="font-bold text-red-600">$96.80</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Credit Card Fees</span>
                    <span className="text-red-600">-$3.20</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h5 className="font-bold text-green-700 mb-4">Our Solution</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Customer Pays</span>
                    <span className="font-bold text-green-600">$98.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business Receives</span>
                    <span className="font-bold text-green-600">$97.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Our Fee</span>
                    <span className="text-green-600">-$0.50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 text-center">
              <h5 className="text-xl font-bold text-gray-800 mb-2">Win-Win Result</h5>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-600">Customer Saves</p>
                  <p className="text-2xl font-bold text-green-600">$2.00</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Business Gains</p>
                  <p className="text-2xl font-bold text-blue-600">$0.70</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emphasis Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Customers Pay Less AND Businesses Save More
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Break free from the credit card monopoly. Our solution creates value for everyone in the transaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
