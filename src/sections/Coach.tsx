import React from 'react';
import { Award, Users, BarChart } from 'lucide-react';

export function Coach() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform -rotate-3 opacity-50" />
            <img 
              src="https://pbs.twimg.com/profile_images/1539874657674747905/wOoxDOsz_400x400.jpg"
              alt="Nichole Alden"
              className="relative rounded-2xl shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-300 border-4 border-gray-800"
            />
          </div>
          <div className="md:w-1/2">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 rounded-full text-blue-300 mb-4 border border-blue-500/20">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Your Expert Coach</span>
              </div>
              <h2 className="text-5xl font-bold mb-8">
                Meet{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nichole
                </span>
              </h2>
              <div className="space-y-8 text-gray-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/20 backdrop-blur-sm">
                    <BarChart className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">7-Figure Amazon Success Story</h3>
                    <p className="text-lg">Started alongside Travis in 2016, building her premium bedding sheets business into a 7-figure success story on Amazon</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Proven Mentor</h3>
                    <p className="text-lg">Helped hundreds of students successfully launch on Amazon using today's most effective strategies</p>
                  </div>
                </div>
                <a 
                  href="https://www.linkedin.com/in/nicholealden/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-200 text-lg shadow-lg shadow-purple-500/25"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}