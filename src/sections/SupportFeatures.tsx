import React from 'react';
import { Gift, MessageCircle, Target, Mail, Layout, Users, Sparkles, CheckCircle } from 'lucide-react';
import { SupportCard } from '../components/SupportCard';

export function SupportFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 rounded-full text-blue-300 mb-8 mx-auto block">
            <Gift className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Total Value: $37,000+</span>
          </div>
          <h2 className="text-5xl font-bold mb-16 text-center">Comprehensive Support System</h2>
          
          {/* Success Stats */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-white mb-2">150+ Successful Launches</div>
                  <p className="text-gray-400">Students who've successfully launched on Amazon in the past 2 years</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-white mb-2">67% Six-Figure Success</div>
                  <p className="text-gray-400">Two-thirds of our students achieve $100,000+ annual revenue</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-white mb-2">100% ROI Achievement</div>
                  <p className="text-gray-400">Every student has recovered their investment costs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SupportCard 
              icon={<MessageCircle />}
              title="Weekly Group Coaching"
              description="24 weeks of intensive group coaching sessions with maximum 6 students"
              value="$12,000 Value"
            />
            <SupportCard 
              icon={<Target />}
              title="One-on-One Strategy Calls"
              description="7 private coaching sessions to address your specific challenges"
              value="$7,000 Value"
            />
            <SupportCard 
              icon={<Mail />}
              title="Unlimited Email Support"
              description="Direct access to our expert team throughout your journey"
              value="$3,000 Value"
            />
            <SupportCard 
              icon={<Layout />}
              title="Professional Listing Creation"
              description="Custom-built, optimized Amazon listing by our expert team"
              value="$2,500 Value"
            />
            <SupportCard 
              icon={<Users />}
              title="Manufacturer Network"
              description="Access to pre-vetted suppliers and negotiation support"
              value="$5,000 Value"
            />
            <SupportCard 
              icon={<Sparkles />}
              title="Lifetime Success Support"
              description="Ongoing guidance until you achieve your Amazon success"
              value="$7,500 Value"
            />
          </div>
        </div>
      </div>
    </section>
  );
}