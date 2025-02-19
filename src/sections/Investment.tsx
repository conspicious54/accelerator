import React from 'react';
import { Shield, TrendingUp, DollarSign, Award, RefreshCw } from 'lucide-react';

interface InvestmentProps {
  basePrice: number;
  courseCredit: number;
  setCourseCredit: (value: number) => void;
  referralDiscount: number;
  setReferralDiscount: (value: number) => void;
  finalPrice: number;
  paymentOption: 'full' | '3months' | '6months';
  setPaymentOption: (option: 'full' | '3months' | '6months') => void;
}

export function Investment({ 
  basePrice, 
  courseCredit, 
  setCourseCredit, 
  referralDiscount, 
  setReferralDiscount, 
  finalPrice,
  paymentOption,
  setPaymentOption
}: InvestmentProps) {
  const getMonthlyPayment = () => {
    switch (paymentOption) {
      case '3months':
        return (finalPrice / 3).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      case '6months':
        return (finalPrice / 6).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      default:
        return null;
    }
  };

  const getFinalPriceDisplay = () => {
    if (paymentOption === '3months') {
      return `$${getMonthlyPayment()}/month for 3 months`;
    }
    if (paymentOption === '6months') {
      return `$${getMonthlyPayment()}/month for 6 months`;
    }
    return `$${finalPrice.toLocaleString()}`;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-pink-500/10 rounded-full text-pink-300 mb-8 mx-auto block">
            <Shield className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Risk-Free Investment</span>
          </div>
          <h2 className="text-5xl font-bold mb-20 text-center">Investment & Guarantee</h2>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <p className="text-gray-400">Successful Students<br />in 2 Years</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl text-center">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">$100k+</div>
              <p className="text-gray-400">Annual Revenue for<br />67% of Students</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl text-center">
              <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400">Investment<br />Recovery Rate</p>
            </div>
          </div>
          
          {/* Price Calculator */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-12 mb-16 border border-gray-700">
            <div className="text-center mb-8">
              <div className="text-2xl text-gray-300 mb-4">Total Program Value: $37,000+</div>
              <div className="text-lg text-gray-400">Your Investment:</div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
              <div>
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  ${basePrice.toLocaleString()}
                </div>
                <p className="text-xl text-gray-400">Program Investment</p>
              </div>
              <div className="space-y-6 w-full md:w-2/3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Course Credit</label>
                  <input
                    type="number"
                    value={courseCredit}
                    onChange={(e) => setCourseCredit(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter course credit amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Referral Discount</label>
                  <input
                    type="number"
                    value={referralDiscount}
                    onChange={(e) => setReferralDiscount(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter referral discount amount"
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col items-center">
                <span className="text-xl text-gray-300 mb-4">Final Investment:</span>
                <span className="text-5xl font-bold text-white text-center">{getFinalPriceDisplay()}</span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
            <div className="bg-gray-900 rounded-2xl p-12">
              <div className="flex items-center justify-center mb-8">
                <Shield className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-center">Our $10,000 Guarantee</h3>
              <p className="text-xl text-center text-gray-300 leading-relaxed mb-6">
                Follow our proven process, and if you don't make at least $10,000 in your first year, we'll pay you $10,000
              </p>
              <div className="text-center text-gray-400">
                Based on our track record: 150+ successful students, 67% reaching six figures, and 100% investment recovery rate
              </div>
            </div>
          </div>

          {/* Payment Option Buttons (Small and Discreet) */}
          <div className="mt-8 flex justify-center gap-4 text-sm">
            <button
              onClick={() => setPaymentOption('3months')}
              className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-400 hover:bg-gray-700/50 transition-colors"
            >
              3 Monthly Payments
            </button>
            <button
              onClick={() => setPaymentOption('6months')}
              className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-400 hover:bg-gray-700/50 transition-colors"
            >
              6 Monthly Payments
            </button>
            {paymentOption !== 'full' && (
              <button
                onClick={() => setPaymentOption('full')}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800/50 rounded-lg text-gray-400 hover:bg-gray-700/50 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}