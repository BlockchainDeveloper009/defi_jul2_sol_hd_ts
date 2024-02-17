"use client"
import React from 'react'

import CompManageWillsEdit from '../components/CompManageWillsEdit'
import { createConfig } from 'wagmi'

import { polygonMumbai } from 'viem/chains'

import ComProfile from '../components/CompProfile'
import CompManageWillsCancel from '../components/CompManageWillsCancel'



const pageWillsManagerDetails = () => {

   return (
    <div>
        
          
            
              {/* <CompManageWillsEdit></CompManageWillsEdit> */}
              <CompManageWillsCancel></CompManageWillsCancel>
        
 
    </div>
  )
}

export default pageWillsManagerDetails