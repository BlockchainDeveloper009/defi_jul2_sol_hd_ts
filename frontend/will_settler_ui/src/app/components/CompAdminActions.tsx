import React, { useState } from 'react'
import { getBalance } from '@wagmi/core'
import { config } from '@/wagmi'
import { getAccount } from '@wagmi/core'
import { Text } from '@mantine/core'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
function CompAdminActions(){
    let contractAddr = CreateBondandAdminRole_CONTRACT_ADDRESS
    
    let custAcct1 = `0x${'1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'}`
let custAcct2 = `0x${'817D30CdBAbe38DC3328C8248cF7c12A1B8009a1'}`
let custAcct3 = `0x${'ccA0b47ab3fe942E5B5DC499762202c3222FF067'}`
    const connectedAcct = getAccount(config)
    console.log(`connected account`)
    console.log(connectedAcct)

    const [customerAcct1Balance,setcustomerAcct1Balance] = useState(0) ;
    const [customerAcct2Balance,setcustomerAcct2Balance] = useState(0) ;
    const [customerAcct3Balance,setcustomerAcct3Balance] = useState(0) ;
    const [contractAcct1Balance,setcontractAcct1Balance] = useState('') ;

    const t1 = getBalance(config, {
        address: '0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a',
      }).then((value)=>{
        console.log(`getbalance acct1:`)
        console.log(0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a)
        
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
        console.log('0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1')
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
        console.log('0xccA0b47ab3fe942E5B5DC499762202c3222FF067')
        console.log(`decimals:${value.decimals} | 
        formatted: ${value.formatted} |
        symbol: ${value.symbol} |
        value: ${value.value}`)
    
    })
        .catch(error=>window.alert(`t3 bl error -- ${error}`))
      console.log(t3);
      
      console.log(`contractaddr ${contractAddr}`)

      const t4 = getBalance(config, {
        address: '0x6635BaCd122cfc8e8D726633f224746Bd2578872',
      }).then((value)=>{
        console.log(`getbalance of contract:`)
        console.log('0x6635BaCd122cfc8e8D726633f224746Bd2578872')
        setcontractAcct1Balance(value.formatted);
        console.log(`decimals:${value.decimals} | 
        formatted: ${value.formatted} |
        symbol: ${value.symbol} |
        value: ${value.value}`)
    
    })
        .catch(error=>window.alert(`t3 bl error -- ${error}`))
      console.log(t4);
  return (
    <div>
        <h2>compAdminActions</h2>
        
        <Text id='connectedAcct' aria-label='connected Acct'>{`${connectedAcct.address}`}</Text>
        <h2>Contract balance</h2>
        <Text id='custBalance' aria-label='cust balance'>mat- {contractAcct1Balance} -ic</Text>
    </div>
  )
}

export default CompAdminActions;