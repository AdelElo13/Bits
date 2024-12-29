import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MOCK_TRANSACTIONS = [
  {
    id: 1,
    type: 'purchase',
    amount: 2000,
    date: '2024-01-15T10:30:00Z',
    status: 'completed'
  },
  {
    id: 2,
    type: 'referral_bonus',
    amount: 500,
    date: '2024-01-14T15:45:00Z',
    status: 'completed'
  },
  {
    id: 3,
    type: 'purchase',
    amount: 2500,
    date: '2024-01-13T09:15:00Z',
    status: 'completed'
  }
];

export function TransactionHistory() {
  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
      <div className="space-y-4">
        {MOCK_TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${tx.type === 'purchase' ? 'bg-yellow-400/10' : 'bg-green-400/10'}`}>
                {tx.type === 'purchase' ? (
                  <ArrowUpRight className={`w-4 h-4 ${tx.type === 'purchase' ? 'text-yellow-400' : 'text-green-400'}`} />
                ) : (
                  <ArrowDownRight className={`w-4 h-4 ${tx.type === 'purchase' ? 'text-yellow-400' : 'text-green-400'}`} />
                )}
              </div>
              <div>
                <p className="font-medium">{tx.type === 'purchase' ? 'Token Purchase' : 'Referral Bonus'}</p>
                <p className="text-sm text-gray-400">{new Date(tx.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{tx.amount} bit$</p>
              <p className="text-sm text-gray-400 capitalize">{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}