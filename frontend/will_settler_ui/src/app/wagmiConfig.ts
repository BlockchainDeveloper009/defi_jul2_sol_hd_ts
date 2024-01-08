import { http, createConfig } from '@wagmi/core'
import { mainnet, polygonMumbai, sepolia } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, polygonMumbai,sepolia],
  transports: {
    [mainnet.id]: http(),
    [polygonMumbai.id]: http(),
    [sepolia.id]: http(),
  },
})