 
'use client'

import { WagmiConfig } from 'wagmi'
import CreateAssetsForm from '../components/compCreateAssetsForm'
import { wagmiConfig } from '../components/wrapperForWagmi'
import { QueryClientProvider, queryClient } from '../components/queryClient'

const AssetsCreator = () => {
  return (
    <div>
        <h1>test pageAssetsCreator - AssetsCreator - CreateAssetsForm</h1>
        {/* <QueryClientProvider client={queryClient}> */}
          {/* <WagmiConfig config = {wagmiConfig}> */}
            <CreateAssetsForm></CreateAssetsForm>
          {/* </WagmiConfig> */}
        {/* </QueryClientProvider> */}
    </div>
  )
}

export default AssetsCreator