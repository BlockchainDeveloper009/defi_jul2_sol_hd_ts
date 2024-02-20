import { Button, Flex, Title } from '@mantine/core'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Router } from 'react-router-dom'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'


const CompProfile = () => {
    const router = useRouter()
    const { address } = useAccount()
     const account = useAccount()
    const { disconnect } = useDisconnect()
    const { connectors, connect, status, error } = useConnect()
   // const { disconnect } = useDisconnect()
   const { data: ensName } = useEnsName({
    address: account.address,
  })
  function NavigateToHomePage(){
    router.push("/");
  }
  if(address){
    return (
        <div className='text-center'>
            <p>Connected to {address} </p>
            <h2>Account</h2>

      <div>
        account: {account.address} {ensName}
        <br />
        chainId: {account.chainId}
        <br />
        status: {account.status}
      </div>

            {/* <Button onClick={disconnect}>Disconnect</Button> */}
                {account.status !== 'disconnected' && (
                  
            <button type="button" onClick={() => disconnect()}>
              Disconnect
            </button>
          )}
        </div>
      )
  }

  // if(isLoading){
  //   return (
  //       <div>
  //           <p>Connecting...</p>
  //       </div>
  //   )
  // }

  return (
    <div>
       <Flex 
        rowGap={2} 
        direction={"row"} 
        justify="flex-start"
          align="flex-start"
          gap="md"
          >
          
         <Title order={2}>
         
      
          <button onClick={NavigateToHomePage}>Prof_Home</button>
         </Title>

          {/* <li><Link href="/"><Title order={2}>Logo</Title></Link></li>
            <li><Link href="/"><Title order={2}>Dashboard</Title></Link></li>   */}
       </Flex>
       <Flex 
          rowGap={2} 
          direction={"row"} 
          justify="flex-end"
            align="flex-end"
            gap="md"
            >
          
        
          
          {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </Button>
        ))}

          {/* <li><Link href="/"><Title order={2}>Logo</Title></Link></li>
            <li><Link href="/"><Title order={2}>Dashboard</Title></Link></li>   */}
       </Flex>
    </div>
  )
}

export default CompProfile