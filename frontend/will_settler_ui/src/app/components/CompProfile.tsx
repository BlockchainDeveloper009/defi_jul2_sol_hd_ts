import { Flex } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Router } from 'react-router-dom'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const ComProfile = () => {
    const router = useRouter()
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { connect, isLoading } = useConnect({
        connector: new InjectedConnector(),
    })
  function NavigateToHomePage(){
    router.push("/");
  }
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
       <Flex rowGap={2} >
          <div><button onClick={() => connect()}>Connect Wallet</button></div>
          {' '}
          <div><button onClick={NavigateToHomePage}>Home</button></div>
          
       </Flex>
    </div>
  )
}

export default ComProfile