"use client"
import React from 'react'
import SignUp from '../ProjectTemplate/TemplateProjectComponents/SignUp'
import ManageAssetsTable from '../components/compManageAssetsTable'

import CompCreateAssetsForm from '../components/CompCreateAssetsForm';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { polygonMumbai } from 'viem/chains';
import { publicProvider } from 'wagmi/providers/public';
import ComProfile from '../components/CompProfile';

import { WagmiConfig, configureChains, useAccount } from 'wagmi'
import { createConfig, Config } from 'wagmi'

const ProjectName = 'Manage Your Assets on this page'
const ProjectIndex_template = () => {
 
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
        <title>`${ProjectName}`</title>
        <header>`${ProjectName}`</header>
        
        <WagmiConfig config = {wagmiConfig}>  
          <ComProfile/>
          
          <ManageAssetsTable></ManageAssetsTable>
        </WagmiConfig>
    </div>
  )
}

export default ProjectIndex_template