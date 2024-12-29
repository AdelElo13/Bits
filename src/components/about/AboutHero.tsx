import React from 'react';
import { Coins } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <Coins className="w-16 h-16 text-yellow-400" />
      </div>
      <h1 className="text-5xl font-bold mb-6">About bit$</h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Pioneering the future of digital currency with innovative blockchain technology
        and a commitment to accessibility, security, and scalability.
      </p>
    </div>
  );
}