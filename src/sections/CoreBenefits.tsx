import React from 'react';
import { Users, Calendar, Target, Mail, Layout } from 'lucide-react';
import { BenefitItem } from '../components/BenefitItem';

export function CoreBenefits() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-3xl font-bold mb-6 text-white">Exclusive Small Group Format</h3>
              <ul className="space-y-6">
                <BenefitItem
                  icon={<Users className="w-6 h-6 text-blue-400" />}
                  title="Maximum 6 Students Per Group"
                  description="Get the personal attention you need to succeed"
                />
                <BenefitItem
                  icon={<Calendar className="w-6 h-6 text-blue-400" />}
                  title="Weekly Group Coaching Calls"
                  description="Stay on track with regular expert guidance"
                />
                <BenefitItem
                  icon={<Target className="w-6 h-6 text-blue-400" />}
                  title="7 One-on-One Strategy Sessions"
                  description="Deep-dive into your specific business needs"
                />
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-3xl font-bold mb-6 text-white">Premium Support Package</h3>
              <ul className="space-y-6">
                <BenefitItem
                  icon={<Mail className="w-6 h-6 text-purple-400" />}
                  title="Unlimited Email Support"
                  description="Get answers when you need them most"
                />
                <BenefitItem
                  icon={<Layout className="w-6 h-6 text-purple-400" />}
                  title="Professional Listing Creation"
                  description="We build your optimized Amazon presence"
                />
                <BenefitItem
                  icon={<Users className="w-6 h-6 text-purple-400" />}
                  title="Manufacturer Network Access"
                  description="Connect with pre-vetted suppliers"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}