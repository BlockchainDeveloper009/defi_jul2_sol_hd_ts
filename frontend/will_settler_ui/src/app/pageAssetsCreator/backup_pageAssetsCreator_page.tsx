 
'use client'

import { WagmiConfig } from 'wagmi'
 import CompCreateAssetsForm from '../components/CompCreateAssetsForm'

import { QueryClientProvider, queryClient } from '../components/queryClient'
import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
 import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
import { AppProps } from 'next/app'

const pageAssetsCreator = ({Component, pageProps}: AppProps) => {
  return (
    <div>
        <h1>test pageAssetsCreator - AssetsCreator - CreateAssetsForm</h1>
        {/* <QueryClientProvider client={queryClient}> */}
          {/* <WagmiConfig config = {wagmiConfig}> */}
            
          {/* </WagmiConfig> */}
        {/* </QueryClientProvider> */}
        {/* <WagmiConfigProvider>
          <Component {...pageProps} />
          {/* <CompWagmiTestProvider/> */}
          <CompCreateAssetsForm></CompCreateAssetsForm>
        {/* </WagmiConfigProvider> */}
    </div>
  )
}

export default pageAssetsCreator