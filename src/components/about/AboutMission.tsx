import React from 'react';
import { Shield, Globe2, Zap } from 'lucide-react';

export function AboutMission() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Mission</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
          <Shield className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Security First</h3>
          <p className="text-gray-300">
            Building the most secure cryptocurrency platform with advanced encryption
            and robust protection measures.
          </p>
        </div>
        <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
          <Globe2 className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Global Access</h3>
          <p className="text-gray-300">
            Making cryptocurrency accessible to everyone, everywhere, with a focus
            on user-friendly experiences.
          </p>
        </div>
        <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
          <Zap className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Innovation</h3>
          <p className="text-gray-300">
            Pushing the boundaries of blockchain technology to create faster,
            more efficient digital transactions.
          </p>
        </div>
      </div>
    </div>
  );
}