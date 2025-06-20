
import { CreditCard, DollarSign } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-gray-100 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            The Credit Card Fee Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Major credit card companies exploit their market dominance, forcing small businesses into unfair fee structures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-full p-3">
                  <CreditCard className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Monopoly Abuse</h3>
                  <p className="text-gray-600">Credit card companies leverage their market position to impose excessive fees on businesses with little room for negotiation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <DollarSign className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Small Business Burden</h3>
                  <p className="text-gray-600">Small businesses often pay 2.5-3.5% in processing fees, eating into already thin profit margins and forcing higher prices.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-center mb-6 text-gray-800">Traditional Fee Structure</h4>
              
              {/* Visa/Mastercard logos representation */}
              <div className="flex justify-center space-x-8 mb-8">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                  VISA
                </div>
                <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                  MASTERCARD
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Processing Fee</span>
                  <span className="text-red-600 font-bold">2.9%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Transaction Fee</span>
                  <span className="text-red-600 font-bold">$0.30</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-100 rounded-lg border-2 border-red-300">
                  <span className="font-bold">Total Cost</span>
                  <span className="text-red-700 font-bold text-xl">3.2%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
