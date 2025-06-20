
import { DollarSign, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-pulse">
          <DollarSign size={120} className="text-blue-500" />
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-1000">
          <CreditCard size={100} className="text-green-500" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-pulse delay-500">
          <DollarSign size={80} className="text-blue-400" />
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse delay-700">
          <CreditCard size={90} className="text-green-400" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          test name
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Revolutionizing payments by eliminating the credit card fee monopoly. 
          Save money on every transaction while helping small businesses thrive.
        </p>
        
        <div className="mt-8 animate-fade-in delay-400">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-8 py-4 text-lg">
            Interested? Join our waitlist
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 animate-fade-in delay-500">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <DollarSign size={48} className="text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Lower Prices</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <CreditCard size={48} className="text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Reduced Fees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
