"use client"
import React from 'react'

import ManageWillsTable from '../components/compManageWillsTable'
import { createConfig } from 'wagmi'

import { polygonMumbai } from 'viem/chains'

import ComProfile from '../components/CompProfile'
import CompFindStatus_Assets_Wills from '../components/CompFindStatus_Assets_Wills'
import { Container } from '@mantine/core'



const WillsManager = () => {

  
  return (
    <div>
        
        
              
              <div >
                  <ManageWillsTable></ManageWillsTable>
              </div>
              <Container>
                  <CompFindStatus_Assets_Wills></CompFindStatus_Assets_Wills>
              </Container>
        
 
    </div>
  )
}

export default WillsManager