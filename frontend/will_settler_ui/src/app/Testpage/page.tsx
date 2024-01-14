'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import  
ComProfile  from '../components/CompProfile';
import { Button } from '@mantine/core';
function Testpage() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  




  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {/* <ComProfile/> */}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </Button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default Testpage
