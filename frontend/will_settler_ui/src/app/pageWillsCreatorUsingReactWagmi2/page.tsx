'use client'
import React from 'react'
//import CompCreateWillsFormUsingWagmiReact from '../components/CompCreateWillsFormUsingWagmiReact'
import CompCreateWillsFormusingReactHooksWagmi2 from '../components/CompCreateWillsFormusingReactHooksWagmi2';


import { AppProps } from 'next/app'



const pageHeader = `pageWillsCreatorUsingReactWagmi2`
const pageWillsCreatorUsingReactWagmi2 
        = ( {Component, pageProps}: AppProps) => 
      {
            return (
              <div>
                {/* <WagmiConfigProvider>
                    <Component {...pageProps} />
                    {/* <CompWagmiTestProvider/> */}
                  
                {/* </WagmiConfigProvider> */}
                { pageHeader }
                
                
                    {/* <CompCreateWillsFormUsingWagmiReact/> */}
                    <CompCreateWillsFormusingReactHooksWagmi2></CompCreateWillsFormusingReactHooksWagmi2>
                
              </div>
            );
        }

export default pageWillsCreatorUsingReactWagmi2