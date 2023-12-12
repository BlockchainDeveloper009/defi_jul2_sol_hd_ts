'use client'
import React from 'react'
import CreateWillsForm from '../components/compCreateWillsForm'
import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
import { AppProps } from 'next/app'

const WillsCreator = ( {Component, pageProps}: AppProps) => {
  return (
    <div>
      <WagmiConfigProvider>
          <Component {...pageProps} />
          <CompWagmiTestProvider/>
         <CreateWillsForm></CreateWillsForm>
      </WagmiConfigProvider>
        
    </div>
  )
}

export default WillsCreator