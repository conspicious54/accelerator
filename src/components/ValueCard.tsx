import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

export function ValueCard({ icon, title, value, description }: ValueCardProps) {
  return (
    <div className="relative bg-gray-800/80 backdrop-blur-lg border border-gray-700 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-blue-400' })}
      </div>
      <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{value}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}