// 'use client'
// import React from 'react'
// import CreateWillsFormUsingWagmiReact from '../components/compCreateWillsFormUsingWagmiReact'
// // import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
// // import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
// import { AppProps } from 'next/app'
// import { WagmiConfig, configureChains, createConfig } from 'wagmi'


// import { InjectedConnector } from 'wagmi/connectors/injected';
// import { polygonMumbai } from 'viem/chains';
// import { publicProvider } from 'wagmi/providers/public';
// import ComProfile from '../components/CompProfile';

// const pageHeader = `pageWillsCreatorUsingWagmiReact`
// const WillsCreatorUsingWagmiReact = ( {Component, pageProps}: AppProps) => {
//   const { chains, publicClient, webSocketPublicClient } = configureChains(
//     [
//       // mainnet,
//       // polygon,
//       polygonMumbai,
//       // goerli,


//     ],
//     [publicProvider()]
// )

//   const wagmiConfig = createConfig({
//     autoConnect: true,
//     publicClient,
//     connectors: [
//         new InjectedConnector({
//             chains,  //injecting the chains you would like the wallet to connect
//             options: {
//                 name: 'Injected',  
//                 shimDisconnect: true,
//             }
//         })
//     ],
//     webSocketPublicClient,
// })

//   return (
//     <div>
//       {/* <WagmiConfigProvider>
//           <Component {...pageProps} />
//           {/* <CompWagmiTestProvider/> */}
         
//       {/* </WagmiConfigProvider> */}
//       { pageHeader }
//       <WagmiConfig config = {wagmiConfig}>  
//           <ComProfile></ComProfile>
//           <CreateWillsFormUsingWagmiReact></CreateWillsFormUsingWagmiReact>
//         </WagmiConfig>
//     </div>
//   )
// }

// export default WillsCreatorUsingWagmiReact