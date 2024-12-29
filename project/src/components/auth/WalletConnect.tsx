import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '../ui/Button';
import { Wallet } from 'lucide-react';

interface WalletConnectProps {
  onSuccess?: () => void;
}

export function WalletConnect({ onSuccess }: WalletConnectProps) {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    if (isConnected) {
      disconnect();
    } else {
      const connector = connectors[0]; // Use the first available connector
      if (connector) {
        connect({ connector });
        onSuccess?.();
      }
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500 p-4 rounded-lg text-red-500">
          {error.message}
        </div>
      )}

      <Button
        onClick={handleConnect}
        className="w-full flex items-center justify-center space-x-2"
        disabled={isLoading}
      >
        <Wallet className="w-5 h-5" />
        <span>
          {isLoading ? 'Connecting...' : 
           isConnected ? `Disconnect ${address?.slice(0, 6)}...${address?.slice(-4)}` : 
           'Connect Wallet'}
        </span>
      </Button>
    </div>
  );
}