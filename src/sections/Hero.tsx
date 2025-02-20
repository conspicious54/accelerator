import React from 'react';
import { Users, Calendar, TrendingUp, Target, Zap, BookOpen } from 'lucide-react';
import { ValueCard } from '../components/ValueCard';

export function Hero() {
  return (
    <header className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Program Introduction */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 rounded-full text-blue-300 mb-4">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Premium Accelerator Program</span>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Your Fast-Track to<br />Amazon Success
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our most hands-on program for serious entrepreneurs ready to launch on Amazon. Limited to 6 students per group for maximum support and success.
            </p>
          </div>

          {/* Program Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-px rounded-full">
              <div className="bg-gray-900 px-6 py-2 rounded-full flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Maximum 6 Students Per Group</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-px rounded-full">
              <div className="bg-gray-900 px-6 py-2 rounded-full flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">6 Months Expert Coaching</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-px rounded-full">
              <div className="bg-gray-900 px-6 py-2 rounded-full flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-medium">67% Reach Six Figures</span>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-1 mb-12">
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur-sm"></div>
                  <div className="relative bg-gray-800 rounded-xl p-6 text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">150+</div>
                    <p className="text-gray-300">Successful Students<br />in 2 Years</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 blur-sm"></div>
                  <div className="relative bg-gray-800 rounded-xl p-6 text-center">
                    <div className="text-5xl font-bold text-purple-400 mb-2">67%</div>
                    <p className="text-gray-300">Making $100,000+<br />Annually</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl opacity-20 blur-sm"></div>
                  <div className="relative bg-gray-800 rounded-xl p-6 text-center">
                    <div className="text-5xl font-bold text-pink-400 mb-2">100%</div>
                    <p className="text-gray-300">Investment<br />Recovery Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                <ValueCard 
                  icon={<Target />}
                  title="Expert Coaching"
                  value="$15,000 Value"
                  description="24 weeks of intensive group sessions"
                />
              </div>
            </div>
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                <ValueCard 
                  icon={<Users />}
                  title="1-on-1 Support"
                  value="$12,000 Value"
                  description="7 private strategy sessions"
                />
              </div>
            </div>
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                <ValueCard 
                  icon={<Zap />}
                  title="Success Resources"
                  value="$10,000 Value"
                  description="Listing creation & supplier network"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}