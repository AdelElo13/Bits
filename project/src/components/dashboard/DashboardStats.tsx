import React from 'react';
import { Coins, TrendingUp, Users } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-yellow-400/10 rounded-full">
            <Coins className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Your Tokens</p>
            <h3 className="text-2xl font-bold">5,000 bit$</h3>
          </div>
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-green-400/10 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Value (USD)</p>
            <h3 className="text-2xl font-bold">$2,500</h3>
          </div>
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-400/10 rounded-full">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Referrals</p>
            <h3 className="text-2xl font-bold">3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}