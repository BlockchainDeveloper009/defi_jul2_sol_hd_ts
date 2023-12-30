 
'use client'

import { WagmiConfig, configureChains } from 'wagmi'
//  import CompCreateAssetsForm from '../components/CompCreateAssetsForm'

// import { QueryClientProvider, queryClient } from '../components/queryClient'
// import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
//  import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
 import { createConfig, Config } from 'wagmi'
//  import { chains, publicClient, webSocketPublicClient } from '../components/wrapperForWagmi';

import { AppProps } from 'next/app'
import CompCreateAssetsForm from '../components/CompCreateAssetsForm';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { polygonMumbai } from 'viem/chains';
import { publicProvider } from 'wagmi/providers/public';
import ComProfile from '../components/CompProfile';
import CompSelectAssets from '../components/CompSelectAssets';


const pageAssetsCreator = ({Component, pageProps}: AppProps) => {

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
        <h1>Step 1: Create Asset</h1>

        <WagmiConfig config = {wagmiConfig}>  
          {/* <ComProfile></ComProfile> */}
          <CompCreateAssetsForm></CompCreateAssetsForm>  
          
        </WagmiConfig>
        
        {/* <QueryClientProvider client={queryClient}> */}
          {/* <WagmiConfig config = {wagmiConfig}> */}
            
          {/* </WagmiConfig> */}
        {/* </QueryClientProvider> */}
        {/* <WagmiConfigProvider>
          <Component {...pageProps} />
          {/* <CompWagmiTestProvider/> */}
          
        {/* </WagmiConfigProvider> */}
    </div>
  )
}

export default pageAssetsCreator