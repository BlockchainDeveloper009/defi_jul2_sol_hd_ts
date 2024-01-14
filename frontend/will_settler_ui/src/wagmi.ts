import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygonMumbai } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
//https://polygon-mumbai.infura.io/v3/629b7fae81c040aca7f54d2e9b7d8d58

export const config = createConfig({
  chains: [polygonMumbai, mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' }),
    walletConnect({ projectId: '5cc7dcde1f07eb041df0231fadac1c4b' }), //process.env.NEXT_PUBLIC_WC_PROJECT_ID
  ],
  ssr: true,
  transports: {
    [polygonMumbai.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
