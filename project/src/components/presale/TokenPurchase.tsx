import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContractWrite, useWaitForTransaction, useAccount } from 'wagmi';
import { Button } from '../ui/Button';
import { CONTRACT_ADDRESS, CONTRACT_ABI, calculateTokenPrice } from '../../lib/web3/contracts';

export function TokenPurchase() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [amount, setAmount] = useState(1000);
  const [error, setError] = useState<string | null>(null);

  const { write, data } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'purchaseTokens',
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      setTimeout(() => navigate('/dashboard'), 1500);
    },
  });

  const handlePurchase = async () => {
    if (!address) {
      setError('Please connect your wallet first');
      return;
    }

    try {
      setError(null);
      const value = calculateTokenPrice(amount);
      write?.({
        args: [BigInt(amount)],
        value
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-4">Purchase Tokens</h3>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500 p-4 rounded-lg text-red-500 mb-4">
          {error}
        </div>
      )}

      {isSuccess && (
        <div className="bg-green-500/10 border border-green-500 p-4 rounded-lg text-green-500 mb-4">
          Successfully purchased {amount} tokens! Redirecting to dashboard...
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Amount of Tokens
        </label>
        <input
          type="number"
          min="1000"
          step="1000"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          disabled={isLoading}
        />
        <p className="text-sm text-gray-400 mt-2">
          Cost: {(amount * 0.0001).toFixed(4)} BNB
        </p>
      </div>

      <Button
        onClick={handlePurchase}
        disabled={isLoading || !address}
        className="w-full"
      >
        {isLoading ? 'Processing...' : 'Purchase Tokens'}
      </Button>
    </div>
  );
}