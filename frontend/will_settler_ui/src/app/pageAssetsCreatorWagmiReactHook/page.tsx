 
'use client'


//  import CompCreateAssetsForm from '../components/CompCreateAssetsForm'

// import { QueryClientProvider, queryClient } from '../components/queryClient'
// import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
//  import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
 import { createConfig, Config } from 'wagmi'
//  import { chains, publicClient, webSocketPublicClient } from '../components/wrapperForWagmi';

import { AppProps } from 'next/app'
import CompCreateAssetsFormUsingReactHooksWagmi2 from '../components/CompCreateAssetsFormUsingReactHooksWagmi2';



import ComProfile from '../components/CompProfile';
import CompSelectAssets from '../components/CompSelectAssets';


const pageAssetsCreatorWagmiReactHook = ({Component, pageProps}: AppProps) => {

  return (
    <div>
        <h1>Step 1: Create Asset</h1>

        {/* <WagmiConfig config = {wagmiConfig}>   */}
          {/* <ComProfile></ComProfile> */}
          <CompCreateAssetsFormUsingReactHooksWagmi2></CompCreateAssetsFormUsingReactHooksWagmi2>  
          
        {/* </WagmiConfig> */}
        
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

export default pageAssetsCreatorWagmiReactHook