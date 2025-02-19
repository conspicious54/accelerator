import React from 'react';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

export function SupportCard({ icon, title, description, value }: SupportCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
      <div className="relative bg-gray-800/80 backdrop-blur-lg border border-gray-700 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-blue-400' })}
        </div>
        <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{value}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}