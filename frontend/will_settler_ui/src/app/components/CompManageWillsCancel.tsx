///import { useRouter, NextRouter } from 'next/router';
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter as navUseRouter} from 'next/navigation';
import React, { useState } from 'react'
import { watchContractEvent } from '@wagmi/core'
import {
  
  WillsCreator_CONTRACT_ADDRESS,
  WillsCreator_CONTRACT_ADDRESS_ABI,
} from "../SrcConstants_Wills";
import { Button } from "@mantine/core";

import { useAccount, useContractRead, useWriteContract } from "wagmi";
import { config } from '@/wagmi'

import { abiwillCreator } from './abiwillCreator';
import { abiwill } from "./abiwill";
import CompManageWillsTableRouter from "./CompManageWillsTableRouter";


function GetWillStatus(willId:any):string {
  const { data:functionData,status} = useContractRead({
    address: WillsCreator_CONTRACT_ADDRESS,
    abi: WillsCreator_CONTRACT_ADDRESS_ABI,
    functionName: 'getWillStatus',
     args: [willId]    
  })
  return functionData as string;

} 
function CompManageWillsCancel() {
  const { address, connector, isConnected } = useAccount()
  const router = navUseRouter();
  
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [Hash, setHash] = useState('')
  const [CompWillId, setCompWillId] = useState();

  const [TransactionError, setTransactionError] = useState('')

  const { writeContract } = useWriteContract()


  const unwatch_assets = watchContractEvent(config, {
    address: WillsCreator_CONTRACT_ADDRESS, //'0x7a92beDE8B87dD09C8dB1C979647f599f5AeBb14',
    abi:WillsCreator_CONTRACT_ADDRESS_ABI,
    eventName: 'willCancelled',
    onLogs(logs) {
      console.log('will cancelled!', logs)
      console.log('listening to event willCancelled')
      // console.log(logs[0].args.willId)
      // console.log(logs[0].args.willOwner)
      // console.log(logs[0].args.willMaturityDate)
      // console.log(logs[0].args.AssetAmount)
    },
    onError(error) { 
      console.log('Error', error) 
    } 
  })

      // const { willId } = router. as { willId?: string}
      function  CancelWill(){
        let _willId = -1;
        _willId = Number(searchParams.get("willId"));
        let willId = BigInt(_willId);
        if(willId){
          console.log(`Will Id passed -- ${willId}`)
        }else{
          return (<div>Will id is absent</div>)
        }
        
        try {
          const result  = writeContract({
            abi:abiwillCreator,
            address: WillsCreator_CONTRACT_ADDRESS,
           
            functionName: 'cancelWill',
            args: [BigInt(willId)]
            // chainId: 80001
            
            
          });

          console.log(`result of contractprepare=> %% ${result} %%`)
       //   const { hash } = await writeContract(request)
         // console.log(`txn Hash`)
          //console.log(hash)
          // if(hash)
          // {
          //   setHash(hash);
          // }
        } catch (error) {
          console.log(`error during Prepare or Write Contract`);
                  console.log(error)
                  
        }finally{
          setIsSubmitting(false);
        }

          return (
          <div>
              {TransactionError && <div>prepareError - {TransactionError}</div>}
              

              {Hash && <div>contractWriteError - {Hash}</div>}

          </div>)
      }
 
     
let willStatus = GetWillStatus(searchParams.get("willId"));
  return (
    <div>
      <h1>Manage will Cancel</h1>
      <h1>{searchParams.get("willId")}</h1>
      
      <CompManageWillsTableRouter/>
      {/* <p>Hello will id, {willId || 'Invalid WIll Id'}</p> */}
      <h2>`will Status '{willStatus}'`</h2>
         


          <Button onClick={()=>
          
          writeContract({
            abi:WillsCreator_CONTRACT_ADDRESS_ABI,
            address: WillsCreator_CONTRACT_ADDRESS,
            //WillsCreator_CONTRACT_ADDRESS_ABI
            functionName: 'cancelWill',
            args: [BigInt(0),BigInt(0)]
            // chainId: 80001
            
            
          })
          } >Direct write Cancel will</Button>


          

          
    </div>
  )
}

export default CompManageWillsCancel


