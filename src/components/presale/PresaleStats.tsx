import React from 'react';
import { Users, Wallet } from 'lucide-react';
import { usePresaleStats } from '../../hooks/usePresaleStats';

export function PresaleStats() {
  const { stats, loading } = usePresaleStats();

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (loading) {
    return <div>Loading stats...</div>;
  }

  if (!stats) {
    return null;
  }

  const tokensRemaining = stats.total_tokens - stats.tokens_sold;

  return (
    <>
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm text-center">
        <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Participants</h3>
        <p className="text-3xl font-bold text-yellow-400">
          {formatNumber(stats.participants)}
        </p>
      </div>
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm text-center">
        <Wallet className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Tokens Remaining</h3>
        <p className="text-3xl font-bold text-yellow-400">
          {formatNumber(tokensRemaining)}
        </p>
      </div>
    </>
  );
}