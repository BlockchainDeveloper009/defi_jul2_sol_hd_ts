///import { useRouter, NextRouter } from 'next/router';
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter as navUseRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  useAccount,
  useContractEvent,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import {
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import { Box, Button, TextInput } from "@mantine/core";
import { prepareWriteContract, writeContract } from "wagmi/actions";
import { useForm } from "@mantine/form";
import CompLoader from "./compLoader";
import { readContract } from '@wagmi/core'
let willStatus =''
//readContract 

function GetWillStatusUsingReactHook(willId:any):string {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getWillStatus',
     args: [willId]    
  })
  return functionData as string;

} 

function CompFindStatus_Assets_Wills() {
  const { address, connector, isConnected } = useAccount();
  const router = navUseRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [CompWillId, setCompWillId] = useState<string | null>('');
  const [CompWillStatus, setCompWillStatus] = useState<string | null>('');
  const [TransactionError, setTransactionError] = useState("");

  const handlegetwillStatus = () => {
    setIsSubmitting(true)
   // setCompWillStatus(GetWillStatus(CompWillId));
  }
  async function GetWillStatusUsingCoreWagmi(){
    console.log(`Receiving-willid`)
  
    console.log(CompWillId)
    const data = await readContract({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      functionName: 'getWillStatus',
      args: [CompWillId]
    })
    console.log(`data from CoreWagmi`)
    console.log(data)
    // setCompWillStatus(data);
  }

  useEffect(() => {
      //track changes of will id
      console.log(`trackChanges of willId`)
      console.log(`will id - ${CompWillId}- `);
  },[CompWillId])
  const form = useForm({
    initialValues: {
      WillId: "0",
    },

    transformValues: (values) => ({
      WillId: `${values.WillId}`,
    }),
  });


  


  return (
    <div>
      <h1>Get Status for Wills</h1>


      {/* <p>Hello will id, {willId || 'Invalid WIll Id'}</p> */}
      <Box sx={{ maxWidth: 400 }} mx="auto">
        <form
          onSubmit={form.onSubmit((values) => {
             console.log('setting willid')
             console.log(values.WillId)
             setCompWillId(values.WillId);
          })}
        >
          <TextInput
            label="Will Id"
            placeholder="Will Id"
            {...form.getInputProps("WillId")}
          />
          {/**disabled={isSubmitting}  */}
          <Button type="submit" mt="md"  onClick = {GetWillStatusUsingCoreWagmi}>
            Find
           {/* Find WillStatus {isSubmitting && <CompLoader/>} */}
        </Button>
        </form>

      </Box>
      
      <h2>`will Status = {CompWillStatus} --`</h2>
    </div>
  );
}

export default CompFindStatus_Assets_Wills;
