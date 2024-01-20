import React from 'react'
import { getBalance } from '@wagmi/core'
import { config } from '@/wagmi'
import { getAccount } from '@wagmi/core'
import { Text } from '@mantine/core'

function CompAdminActions(){
    let contractAddr = ''
    
    let custAcct1 = `0x${'1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'}`
let custAcct2 = `0x${'817D30CdBAbe38DC3328C8248cF7c12A1B8009a1'}`
let custAcct3 = `0x${'ccA0b47ab3fe942E5B5DC499762202c3222FF067'}`
    const connectedAcct = getAccount(config)
    console.log(`connected account`)
    console.log(connectedAcct)
    let customerAcct1Balance:any ;
    let customerAcct2Balance:any ;
    let customerAcct3Balance:any ;

    const t1 = getBalance(config, {
        address: '0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a',
      }).then((value)=>{
        console.log(`getbalance acct1:`)
        console.log(value)
        console.log(`decimals:${value.decimals} | 
        formatted: ${value.formatted} |
        symbol: ${value.symbol} |
        value: ${value.value}`)
    
    })
      console.log(t1);

    const t2 = getBalance(config, {
        address: '0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1',
      }).then((value)=>{
        console.log(`getbalance acct2:`)
        console.log(value)
        console.log(`decimals:${value.decimals} | 
        formatted: ${value.formatted} |
        symbol: ${value.symbol} |
        value: ${value.value}`)
    
    })

      console.log(t2);
      
      const t3 = getBalance(config, {
        address: '0xccA0b47ab3fe942E5B5DC499762202c3222FF067',
      }).then((value)=>{
        console.log(`getbalance acct3:`)
        console.log(value)
        console.log(`decimals:${value.decimals} | 
        formatted: ${value.formatted} |
        symbol: ${value.symbol} |
        value: ${value.value}`)
    
    })
        .catch(error=>window.alert(`t3 bl error -- ${error}`))
      console.log(t3);
      
  return (
    <div>
        <h2>compAdminActions</h2>
        
        <Text id='connectedAcct' aria-label='connected Acct'>{`${connectedAcct.address}`}</Text>
        <h2>cust balance</h2>
        <Text id='custBalance' aria-label='cust balance'>{customerAcct1Balance}</Text>
    </div>
  )
}

export default CompAdminActions;