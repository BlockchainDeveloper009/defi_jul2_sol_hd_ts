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

const pageHeader = `pageWillsCreatorUsingWagmiReact`
const WillsCreator = ( {Component, pageProps}: AppProps) => {
 
  return (
    <div>
      {/* <WagmiConfigProvider>
          <Component {...pageProps} />
          {/* <CompWagmiTestProvider/> */}
         
      {/* </WagmiConfigProvider> */}
      { pageHeader }
      
          
          <CreateWillsForm></CreateWillsForm>
        
    </div>
  )
}

export default WillsCreator;