import React from 'react';
import { useAccount } from 'wagmi';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { CountdownTimer } from '../components/presale/CountdownTimer';
import { PresaleStats } from '../components/presale/PresaleStats';
import { WalletConnect } from '../components/auth/WalletConnect';
import { TokenPurchase } from '../components/presale/TokenPurchase';

export function Presale() {
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Join the bit$ Presale</h1>
            <p className="text-xl text-gray-300">
              Connect your wallet to participate in the future of digital currency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <CountdownTimer />
            <PresaleStats />
          </div>

          <div className="max-w-md mx-auto">
            {isConnected ? (
              <TokenPurchase userId={address!} />
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Connect Wallet to Participate</h2>
                <WalletConnect />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}