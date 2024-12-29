import { configureChains, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Missing VITE_WALLET_CONNECT_PROJECT_ID environment variable');
}

const { chains, publicClient } = configureChains(
  [bsc], // Only BSC chain for Moonshot
  [w3mProvider({ projectId })]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);