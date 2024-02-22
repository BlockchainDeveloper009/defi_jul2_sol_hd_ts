'use client'
import React from 'react'
//import CompCreateWillsFormUsingWagmiReact from '../components/CompCreateWillsFormUsingWagmiReact'
import CompCreateWillsForm2usingWagmiHooks from '../components/CompCreateWillsForm2usingWagmiHooks';
// import { WagmiConfigProvider } from '../components/WagmiConfigProvider'
// import CompWagmiTestProvider from '../components/CompWagmiTestProvider'
import { AppProps } from 'next/app'
import { createConfig } from 'wagmi'



import { polygonMumbai } from 'viem/chains';

import ComProfile from '../components/CompProfile';

const pageHeader = `pageWillsCreatorUsingWagmiReact>>>>>>CompCreateWillsForm2usingWagmiHooks`
const pageWillsCreatorUsingWagmiReact 
        = ( {Component, pageProps}: AppProps) => 
      {
            

            return (
              <div>
               
                  
                
                { pageHeader }
                
                    
                    {/* <CompCreateWillsFormUsingWagmiReact/> */}
                    <CompCreateWillsForm2usingWagmiHooks></CompCreateWillsForm2usingWagmiHooks>
                
              </div>
            );
        }

export default pageWillsCreatorUsingWagmiReact