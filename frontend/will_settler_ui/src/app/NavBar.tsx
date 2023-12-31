"use client"
import { Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import CompProfile from './components/CompProfile'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ComProfile from './components/CompProfile'

import { publicProvider } from 'wagmi/providers/public'
import { polygon, polygonMumbai, hardhat, localhost , goerli} from 'wagmi/chains'


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

const NavBar = () => {
  return (
    <nav>
      
      <ul>
        <Flex align={'flex-start'} direction="row" gap="md">
            <li><Link href="/"><Title order={2}>Logo</Title></Link></li>
            <li><Link href="/RequestFeature"><Title order={2}>Dashboard</Title></Link></li>  
            <li><Link href="/pageHowToUseGuide"><Title order={2}>Guide</Title></Link></li>
             <WagmiConfig config = {wagmiConfig}>  
              <ComProfile/>
               
          </WagmiConfig>

        </Flex>
        
      </ul>

    </nav>
  )
}

export default NavBar