import { Button, Flex, Title } from '@mantine/core'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Router } from 'react-router-dom'
import { useAccount, useConnect, useDisconnect } from 'wagmi'


const CompProfile = () => {
    const router = useRouter()
    const { address } = useAccount()
    const { connectors, connect, status, error } = useConnect()
   // const { disconnect } = useDisconnect()
     
  function NavigateToHomePage(){
    router.push("/");
  }
  if(address){
    return (
        <div className='text-center'>
            <p>Connected to {address} </p>
            {/* <Button onClick={disconnect}>Disconnect</Button> */}
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