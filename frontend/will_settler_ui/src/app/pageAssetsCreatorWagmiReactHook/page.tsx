 
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

// import { Hex, parseAbi, parseEther } from 'viem'
// import {
//   BaseError,
//   useAccount,
//   useAccountEffect,
//   useBalance,
//   useBlockNumber,
//   useChainId,
//   useConnect,
//   useConnections,
//   useConnectorClient,
//   useDisconnect,
//   useEnsName,
//   useReadContract,
//   useReadContracts,
//   useSendTransaction,
//   useSignMessage,
//   useSwitchAccount,
//   useSwitchChain,
//   useWaitForTransactionReceipt,
//   useWriteContract,
// } from 'wagmi'
// import { optimism } from 'wagmi/chains'

const pageAssetsCreatorWagmiReactHook = ({Component, pageProps}: AppProps) => {

  return (
    <div>
        <h1>Step 1: Create Asset</h1>
        {/* <BlockNumber /> */}
  
          <CompCreateAssetsFormUsingReactHooksWagmi2></CompCreateAssetsFormUsingReactHooksWagmi2>  
          

    </div>
  )
}
// function Connect() {
//   const chainId = useChainId()
//   const { connectors, connect, status, error } = useConnect()

//   return (
//     <div>
//       <h2>Connect</h2>
//       {connectors.map((connector) => (
//         <button
//           key={connector.uid}
//           onClick={() => connect({ connector, chainId })}
//           type="button"
//         >
//           {connector.name}
//         </button>
//       ))}
//       <div>{status}</div>
//       <div>{error?.message}</div>
//     </div>
//   )
// }

// function SwitchAccount() {
//   const account = useAccount()
//   const { connectors, switchAccount } = useSwitchAccount()

//   return (
//     <div>
//       <h2>Switch Account</h2>

//       {connectors.map((connector) => (
//         <button
//           disabled={account.connector?.uid === connector.uid}
//           key={connector.uid}
//           onClick={() => switchAccount({ connector })}
//           type="button"
//         >
//           {connector.name}
//         </button>
//       ))}
//     </div>
//   )
// }

// function SwitchChain() {
//   const chainId = useChainId()
//   const { chains, switchChain, error } = useSwitchChain()

//   return (
//     <div>
//       <h2>Switch Chain</h2>

//       {chains.map((chain) => (
//         <button
//           disabled={chainId === chain.id}
//           key={chain.id}
//           onClick={() => switchChain({ chainId: chain.id })}
//           type="button"
//         >
//           {chain.name}
//         </button>
//       ))}

//       {error?.message}
//     </div>
//   )
// }

// function BlockNumber() {
//   const { data: default_ } = useBlockNumber({ watch: true })
//   const { data: account_ } = useBlockNumber({
//     watch: true,
//   })
//   const { data: optimism_ } = useBlockNumber({
//     chainId: optimism.id,
//     watch: true,
//   })

//   return (
//     <div>
//       <h2>Block Number</h2>

//       <div>Block Number (Default Chain): {default_?.toString()}</div>
//       <div>Block Number (Account Chain): {account_?.toString()}</div>
//       <div>Block Number (Optimism): {optimism_?.toString()}</div>
//     </div>
//   )
// }
export default pageAssetsCreatorWagmiReactHook