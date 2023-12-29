///import { useRouter, NextRouter } from 'next/router';
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter as navUseRouter} from 'next/navigation';
import React, { useState } from 'react'
import { useAccount, useContractEvent, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import {
  
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import { Button } from "@mantine/core";
import { prepareWriteContract, writeContract } from "wagmi/actions";


function GetWillStatus(willId:any):string {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
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

  
  useContractEvent({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    eventName: 'willCancelled',
    listener(log) {
      console.log('listening to event assetCreated')
      console.log(log[0].args.willId)
      console.log(log[0].args.willOwner)
      console.log(log[0].args.willMaturityDate)
      console.log(log[0].args.AssetAmount)
      
    },
  })

      // const { willId } = router. as { willId?: string}
      async function  CancelWill(){
        let willId = searchParams.get("willId")
        if(willId){
          console.log(`Will Id passed -- ${willId}`)
        }else{
          return (<div>Will id is absent</div>)
        }
        try {
          const { 
            request,result } = await prepareWriteContract({
            address: CreateBondandAdminRole_CONTRACT_ADDRESS,
            abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
            functionName: 'cancelWill',
            args: [willId],
            chainId: 80001
            
            
          });

          console.log(`result of contractprepare=> %% ${result} %%`)
          const { hash } = await writeContract(request)
          console.log(`txn Hash`)
          console.log(hash)
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
      

      {/* <p>Hello will id, {willId || 'Invalid WIll Id'}</p> */}
      <h2>`will Status '{willStatus}'`</h2>
          <Button onClick={CancelWill} >Cancel will</Button>

          
    </div>
  )
}

export default CompManageWillsCancel


