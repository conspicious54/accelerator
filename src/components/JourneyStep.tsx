import React from 'react';
import { CheckCircle } from 'lucide-react';

interface JourneyStepProps {
  icon: React.ReactNode;
  month: string;
  title: string;
  description: string;
  highlights: string[];
}

export function JourneyStep({ icon, month, title, description, highlights }: JourneyStepProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
      <div className="relative bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1">
        <div className="flex gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8 text-blue-400' })}
          </div>
          <div className="flex-1">
            <div className="text-blue-400 font-semibold mb-2">{month}</div>
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{description}</p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}