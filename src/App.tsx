import React, { useState } from 'react';
import { Hero } from './sections/Hero';
import { Coach } from './sections/Coach';
import { ProgramJourney } from './sections/ProgramJourney';
import { SupportFeatures } from './sections/SupportFeatures';
import { Investment } from './sections/Investment';

function App() {
  const [courseCredit, setCourseCredit] = useState(0);
  const [referralDiscount, setReferralDiscount] = useState(0);
  const [paymentOption, setPaymentOption] = useState<'full' | '3months' | '6months'>('full');
  const basePrice = 8800;

  const getFinalPrice = () => {
    const priceBeforePaymentOption = basePrice - courseCredit - referralDiscount;
    switch (paymentOption) {
      case '3months':
        return priceBeforePaymentOption - 0.03;
      case '6months':
        return priceBeforePaymentOption - 0.06;
      default:
        return priceBeforePaymentOption;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Hero />
      <Coach />
      <ProgramJourney />
      <SupportFeatures />
      <Investment 
        basePrice={basePrice}
        courseCredit={courseCredit}
        setCourseCredit={setCourseCredit}
        referralDiscount={referralDiscount}
        setReferralDiscount={setReferralDiscount}
        finalPrice={getFinalPrice()}
        paymentOption={paymentOption}
        setPaymentOption={setPaymentOption}
      />
    </div>
  );
}

export default App