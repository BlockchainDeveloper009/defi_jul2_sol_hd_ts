 
'use client'

import { WagmiConfig, configureChains } from 'wagmi'
//  import CompCreateAssetsForm from '../components/CompCreateAssetsForm'

// import { QueryClientProvider, queryClient } from '../components/queryClient'
// import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
//  import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
 import { createConfig, Config } from 'wagmi'
//  import { chains, publicClient, webSocketPublicClient } from '../components/wrapperForWagmi';

import { AppProps } from 'next/app'
import CompCreateAssetsForm from '../components/compCreateAssetsForm';


import ComProfile from '../components/CompProfile';
import CompSelectAssets from '../components/CompSelectAssets';


const pageAssetsCreator = ({Component, pageProps}: AppProps) => {

  
  return (
    <div>
        <h1>Step 1: Create Asset</h1>

        
          {/* <ComProfile></ComProfile> */}
          <CompCreateAssetsForm></CompCreateAssetsForm>  
          
        
        
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