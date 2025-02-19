import React from 'react';
import { Rocket, Target, Users, Layout, DollarSign, Shield } from 'lucide-react';
import { JourneyStep } from '../components/JourneyStep';

export function ProgramJourney() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      
      {/* Value Proposition Banner */}
      <div className="container mx-auto px-4 mb-16 relative">
        <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-1">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 border-r border-gray-700 pr-8">
                <Shield className="w-12 h-12 text-green-400" />
                <div>
                  <div className="text-2xl font-bold text-white">Proven Process</div>
                  <p className="text-gray-400">150+ successful launches</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:border-r border-gray-700 md:pr-8">
                <DollarSign className="w-12 h-12 text-green-400" />
                <div>
                  <div className="text-2xl font-bold text-white">Guaranteed ROI</div>
                  <p className="text-gray-400">$10,000 minimum first year</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="w-12 h-12 text-green-400" />
                <div>
                  <div className="text-2xl font-bold text-white">Limited Spots</div>
                  <p className="text-gray-400">Only 6 students per group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="inline-flex items-center px-6 py-3 bg-purple-500/10 rounded-full text-purple-300 mb-8 border border-purple-500/20 mx-auto block">
          <Rocket className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Your Path to Success</span>
        </div>
        <h2 className="text-5xl font-bold mb-8 text-center">
          The Journey to{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Amazon Success
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-20">
          Our proven 6-month roadmap takes you from complete beginner to successful Amazon seller, with expert guidance every step of the way.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
            
            <div className="space-y-20">
              {/* Month 1: Product Research */}
              <div className="relative group">
                <JourneyStep 
                  icon={<Target />}
                  month="Month 1: Foundation"
                  title="Product Research & Validation ($5,000 Value)"
                  description="Master our proven formula for identifying winning products. This critical phase includes our proprietary research methodology and dedicated support to ensure your success."
                  highlights={[
                    "Proven $100k product research formula",
                    "Market gap analysis training",
                    "1-on-1 product validation call",
                    "Profit margin calculator access"
                  ]}
                />
                <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium hidden md:block">
                  Average Savings: $5,000+
                </div>
              </div>

              {/* Months 2-3: Manufacturer */}
              <div className="relative group">
                <JourneyStep 
                  icon={<Users />}
                  month="Months 2-3: Sourcing"
                  title="Manufacturer Selection & Negotiation ($7,500 Value)"
                  description="Get exclusive access to our trusted manufacturer network and expert negotiation support. We'll help you secure the best possible deals and save thousands on production costs."
                  highlights={[
                    "Pre-vetted manufacturer network",
                    "Cost negotiation support",
                    "Quality control guidelines",
                    "Shipping & logistics guidance"
                  ]}
                />
                <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium hidden md:block">
                  Average Savings: $3,000+
                </div>
              </div>

              {/* Months 4-5: Listing */}
              <div className="relative group">
                <JourneyStep 
                  icon={<Layout />}
                  month="Months 4-5: Launch Prep"
                  title="Listing Creation & Launch Strategy ($12,500 Value)"
                  description="Our team professionally creates your Amazon listing while preparing you for a successful launch. Includes comprehensive optimization and advertising setup."
                  highlights={[
                    "Professional listing creation",
                    "Keyword optimization strategy",
                    "High-converting copy writing",
                    "PPC campaign blueprint"
                  ]}
                />
                <div className="absolute top-4 right-4 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium hidden md:block">
                  2x Higher Launch Success
                </div>
              </div>

              {/* Month 6: Launch */}
              <div className="relative group">
                <JourneyStep 
                  icon={<Rocket />}
                  month="Month 6 & Beyond"
                  title="Launch & Scaling Support ($12,000 Value)"
                  description="Execute your launch with our proven strategies. Receive ongoing support until you achieve success, even beyond the 6-month program period."
                  highlights={[
                    "Proven launch strategy",
                    "Review acquisition system",
                    "Inventory optimization",
                    "Scaling blueprint access"
                  ]}
                />
                <div className="absolute top-4 right-4 bg-pink-500/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium hidden md:block">
                  Unlimited Support
                </div>
              </div>
            </div>
          </div>

          {/* Total Value Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl">
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <div className="text-2xl text-gray-300 mb-2">Total Journey Value:</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                $37,000+
              </div>
              <p className="text-gray-400 mt-4">
                Your investment is just a fraction of the total value you'll receive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}