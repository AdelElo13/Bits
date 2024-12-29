import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function ReferralProgram() {
  const referralCode = 'BITS123';

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
  };

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Referral Program</h2>
        <Share2 className="w-5 h-5 text-yellow-400" />
      </div>
      
      <p className="text-gray-300 mb-6">
        Earn 250 bit$ for each friend who joins using your referral code!
      </p>

      <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between mb-6">
        <code className="text-yellow-400 font-mono text-lg">{referralCode}</code>
        <Button onClick={copyReferralCode} variant="outline" className="text-sm">
          Copy Code
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-2xl font-bold text-yellow-400">3</p>
          <p className="text-sm text-gray-400">Referrals</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-2xl font-bold text-yellow-400">750</p>
          <p className="text-sm text-gray-400">Tokens Earned</p>
        </div>
      </div>
    </div>
  );
}