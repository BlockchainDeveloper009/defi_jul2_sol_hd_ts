"use client"
import React from 'react'
import CreateWillsForm from '../components/compCreateWillsForm'
import ManageWillsTable from '../components/compManageWillsTable'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '../components/wrapperForWagmi'


const WillsManager = () => {
  return (
    <div>
        <ManageWillsTable></ManageWillsTable>
 
    </div>
  )
}

export default WillsManager