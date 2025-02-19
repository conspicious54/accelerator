import React from 'react';
import { BookOpen, Users, Calendar, MessageCircle, FileCheck } from 'lucide-react';
import { BenefitItem } from '../components/BenefitItem';

export function PassionProductFormula() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 rounded-full text-blue-300 mb-4">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Foundation Program</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Passion Product Formula</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive step-by-step system for launching on Amazon, perfect for self-starters who want flexibility in their learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Program Features</h3>
              <div className="space-y-6">
                <BenefitItem
                  icon={<FileCheck className="w-6 h-6 text-blue-400" />}
                  title="Step-by-Step Lessons"
                  description="Comprehensive video tutorials and worksheets"
                />
                <BenefitItem
                  icon={<Calendar className="w-6 h-6 text-blue-400" />}
                  title="Structured Action Items"
                  description="Clear tasks to guide your progress"
                />
                <BenefitItem
                  icon={<MessageCircle className="w-6 h-6 text-blue-400" />}
                  title="Weekly Q&A Calls"
                  description="Get your questions answered by our experts"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Upgrade to Accelerator?</h3>
              <div className="space-y-6">
                <BenefitItem
                  icon={<Users className="w-6 h-6 text-purple-400" />}
                  title="Small Group Format"
                  description="Maximum 6 students per group for personalized attention"
                />
                <BenefitItem
                  icon={<Calendar className="w-6 h-6 text-purple-400" />}
                  title="6 Months of Coaching"
                  description="Weekly sessions with our certified coach"
                />
                <BenefitItem
                  icon={<MessageCircle className="w-6 h-6 text-purple-400" />}
                  title="One-on-One Support"
                  description="7 private coaching calls throughout the program"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}