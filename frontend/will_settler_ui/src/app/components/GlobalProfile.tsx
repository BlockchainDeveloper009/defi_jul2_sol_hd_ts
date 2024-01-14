'use client'
import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@mantine/core'
const GlobalProfile = () => {
    const account = useAccount()
    const disconnect = useDisconnect()
  return (
    <div>
<h1>profile component</h1>
{account.status === 'connected' && (
          <button type="button" onClick={() => disconnect}>
            Global wallet profile Disconnect
          </button>
        )}
    </div>
  )
}

export default GlobalProfile