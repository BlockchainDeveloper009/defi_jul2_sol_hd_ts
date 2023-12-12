import React, { createContext, useContext, useState } from 'react';

import { useAccount, useContractEvent, useContractRead, 
    useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import { configureChains, mainnet, } from '@wagmi/core'
import { getContract } from 'wagmi/actions'
import { InjectedConnector } from 'wagmi/connectors/injected'
import {   WagmiConfig  } from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { polygon, polygonMumbai, hardhat, localhost , goerli} from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';


import { Config,createConfig } from 'wagmi';



interface WagmiConfigProviderProps {
  children: React.ReactNode;
}
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
      polygon,
      polygonMumbai,
      goerli,


    ],
    [publicProvider()]
)

const wagmiSetUpConfig = createConfig({
    autoConnect: true,
    publicClient,
    connectors: [
        new InjectedConnector({
            chains,
            options: {
                name: 'Injected',
                shimDisconnect: true,
            }
        })
    ],
    webSocketPublicClient,
})
interface IWagmiDetails {
    appconfig: typeof wagmiSetUpConfig,
    account: String
}
const WagmiConfigContext = createContext< IWagmiDetails | undefined>(undefined);

interface WagmiConfigProviderProps {
  children: React.ReactNode;
}

export const WagmiConfigProvider: React.FC<WagmiConfigProviderProps> = ({ children }) => {
  const [wagmiConfig, setWagmiConfig] = useState<IWagmiDetails>({ 
    appconfig: wagmiSetUpConfig,
     account: '0xtest-----fineSamba'
   });

  return (
    <WagmiConfigContext.Provider value={wagmiConfig}>
      {children}
    </WagmiConfigContext.Provider>
  );
};

export const useWagmiConfig = (): IWagmiDetails => {
  const context = useContext(WagmiConfigContext);
  if (!context) {
    throw new Error('useWagmiConfig must be used within a WagmiConfigProvider');
  }
  return context;
};
