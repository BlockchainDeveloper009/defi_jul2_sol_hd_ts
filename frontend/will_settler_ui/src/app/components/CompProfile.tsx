import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Profile = () => {

    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { connect, isLoading } = useConnect({
        connector: new InjectedConnector(),
    })
  if(address){
    return (
        <div className='text-center'>
            <p>Connected to {address} </p>
            <button onClick={disconnect}>Disconnect</button>
        </div>
      )
  }

  if(isLoading){
    return (
        <div>
            <p>Connecting...</p>
        </div>
    )
  }

  return (
    <div>
        <button onClick={() => connect()}>Connect Wallet</button>
    </div>
  )
}

export default Profile