import { parseEther } from 'viem';

export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS as `0x${string}`;

export const CONTRACT_ABI = [
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'purchaseTokens',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tokenPrice',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const;

export const calculateTokenPrice = (amount: number) => {
  // Price is in BNB, 1 BNB = 10000 tokens
  return parseEther((amount * 0.0001).toString());
};