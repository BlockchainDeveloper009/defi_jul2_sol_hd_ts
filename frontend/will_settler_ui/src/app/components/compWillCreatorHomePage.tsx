import { WagmiConfig , createConfig, useAccount, useConnect, useEnsName } from 'wagmi'

import { Button } from '@mantine/core'
import Profile from './CompProfile'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'

import CreateAssetsForm from './CompCreateAssetsForm'
import { configureChains, polygon, goerli, polygonMumbai, localhost, publicProvider } from './wrapperForWagmi'
//import { logWarn } from './logger'
const yourAlchemyApiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ';
//const { provider, webSocketProvider }
const { publicClient, webSocketPublicClient } = configureChains(
  [polygon, goerli, polygonMumbai, localhost],
  [
    // priority =0, first rpc provider will be tried, after stallTimeout, will move to next RPC provider
    alchemyProvider({ apiKey: yourAlchemyApiKey }), 

    infuraProvider({ apiKey: 'yourInfuraApiKey' }),
    publicProvider()],
)
 
const config = createConfig({
    publicClient,
    webSocketPublicClient,
  
})

function WagmiWillsForm() {
  const { address, connector, isConnected } = useAccount()
 
    return (
      <WagmiConfig config={config}>
       
        -------------------
        <Profile/>
        <div>wills home page</div>
        
        ------------------
       </WagmiConfig>


    );
  }
  
  export default WagmiWillsForm;
  