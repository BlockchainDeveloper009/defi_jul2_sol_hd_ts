'use client'
import React from 'react'
import CreateWillsForm from '../components/compCreateWillsForm'
// import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
// import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
import { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'


import { InjectedConnector } from 'wagmi/connectors/injected';
import { polygonMumbai } from 'viem/chains';
import { publicProvider } from 'wagmi/providers/public';
import ComProfile from '../components/CompProfile';


const WillsCreator = ( {Component, pageProps}: AppProps) => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      // mainnet,
      // polygon,
      polygonMumbai,
      // goerli,


    ],
    [publicProvider()]
)

  const wagmiConfig = createConfig({
    autoConnect: true,
    publicClient,
    connectors: [
        new InjectedConnector({
            chains,  //injecting the chains you would like the wallet to connect
            options: {
                name: 'Injected',  
                shimDisconnect: true,
            }
        })
    ],
    webSocketPublicClient,
})

  return (
    <div>
      {/* <WagmiConfigProvider>
          <Component {...pageProps} />
          {/* <CompWagmiTestProvider/> */}
         
      {/* </WagmiConfigProvider> */}
      
      <WagmiConfig config = {wagmiConfig}>  
          <ComProfile></ComProfile>
          <CreateWillsForm></CreateWillsForm>
        </WagmiConfig>
    </div>
  )
}

export default WillsCreator