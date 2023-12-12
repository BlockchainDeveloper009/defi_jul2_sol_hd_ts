'use cilent';
import { useAccount, useContractEvent, useContractRead, 
    useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import { configureChains, mainnet, } from '@wagmi/core'
import { getContract } from 'wagmi/actions'
import { InjectedConnector } from 'wagmi/connectors/injected'
import {   WagmiConfig  } from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { polygon, polygonMumbai, hardhat, localhost , goerli} from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
// import {
//     getDefaultWallets,
//     RainbowKitProvider,
//   } from '@rainbow-me/rainbowkit';  

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      // mainnet,
      // polygon,
      polygonMumbai,
      // goerli,


    ],
    [publicProvider()]
)

// const { connectors } = getDefaultWallets({
//     appName: 'test',
//     // projectId: 'b67c616c2f896b215dff2499d07587ed',
//     chains,
// })
  


export { chains, publicClient, webSocketPublicClient }
export {  configureChains, mainnet , publicProvider } 
export { polygon, polygonMumbai, hardhat, localhost, goerli }
export {  getContract, useContractEvent, useContractRead,
     useContractWrite, usePrepareContractWrite, useWaitForTransaction } 