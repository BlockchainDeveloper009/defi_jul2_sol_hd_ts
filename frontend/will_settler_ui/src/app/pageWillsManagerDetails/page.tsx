"use client"
import React from 'react'

import CompManageWillsDetails from '../components/CompManageWillsDetails'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { polygonMumbai } from 'viem/chains'
import { publicProvider } from 'wagmi/providers/public'
import ComProfile from '../components/CompProfile'



const pageWillsManagerDetails = () => {

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
        
        <WagmiConfig config = {wagmiConfig}>  
              <ComProfile/>
              <CompManageWillsDetails></CompManageWillsDetails>
        </WagmiConfig>
 
    </div>
  )
}

export default pageWillsManagerDetails