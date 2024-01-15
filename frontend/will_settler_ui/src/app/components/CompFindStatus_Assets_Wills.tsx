///import { useRouter, NextRouter } from 'next/router';
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter as navUseRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  useAccount,
  useReadContract,
} from "wagmi";
import {
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import { Box, Button, Flex, Header, TextInput } from "@mantine/core";

import { useForm } from "@mantine/form";
import CompLoader from "./compLoader";
import CompFIndStatus_Asset from "./CompFIndStatus_Asset";

let willStatus =''
//readContract 

// async function GetWillStatusUsingReactHook(willId:any):string {
//   const { data:functionData,status} = await useReadContract({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'getWillStatus',
//      args: [willId]    
//   })
//   return functionData as string;

// } 

const CompFindStatus_Assets_Wills: React.FC = ()=> {
  const { address, connector, isConnected } = useAccount();
  const router = navUseRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [CompWillId, setCompWillId] = useState<string | null>('');
  const [CompAssetId, setCompAssetId] = useState('');
  const [CompAssetStatus, setCompAssetStatus] = useState<string | null>('');
  const [CompWillStatus, setCompWillStatus] = useState<string | null>('');
  const [TransactionError, setTransactionError] = useState("");

  const handlegetwillStatus = () => {
    setIsSubmitting(true)
   // setCompWillStatus(GetWillStatus(CompWillId));
  }
  
  const [assetStatusButtonClicked, setassetStatusButtonClicked] = useState<boolean>(false);
  const [willStatusButtonClicked, setwillStatusButtonClicked] = useState<boolean>(false);




  async function GetAssetStatusUsingCoreWagmi(){
    console.log(`Receiving-Asset`)
  setassetStatusButtonClicked(true);
    console.log(CompAssetId)
    // const data = await useReadContract({
    //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    //   abi: CreateBondandAdminRole_CONTRACT_ABI,
    //   functionName: 'getAssetStatus',
    //   args: [CompAssetId]
    // })
    // console.log(`data from CoreWagmi`)
    // console.log(data)
     //setCompAssetStatus(data);
  }

  async function GetWillStatusUsingCoreWagmi(){
    console.log(`Receiving-willid`)
  
    console.log(CompWillId)
    const result = await useReadContract({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      functionName: 'getWillStatus',
      args: [CompWillId]
    })
    console.log(`data from CoreWagmi`)
  //  console.log(data)
    // setCompWillStatus(data);
  }

  useEffect(() => {
      //track changes of will id
      console.log(`trackChanges of willId`)
      console.log(`will id - ${CompWillId}- `);
  },[CompWillId])

  useEffect(() => {
    //track changes of will id
    //setCompAssetId(value)
    console.log(`trackChanges of CompAssetId`)
    //setCompAssetId();
    console.log(`CompAssetId id - ${CompAssetId}- `);
},[CompAssetId])
useEffect(() => {
  //track changes of will id
  console.log(`trackChanges of CompAssetStatus`)
  console.log(`CompAssetStatus  - ${CompAssetStatus}- `);
},[CompAssetStatus])
useEffect(() => {
  //track changes of will id
  console.log(`trackChanges of CompWillStatus`)
  console.log(`CompWillStatus  - ${CompWillStatus}- `);
},[CompWillStatus])

  const form = useForm({
    initialValues: {
      WillId: "0",
      AssetId: "0",
    },

    transformValues: (values) => ({
      WillId: `${values.WillId}`,
      AssetId: `${values.AssetId}`,

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
             setCompAssetId(values.AssetId)
          })}
        >
          <TextInput
            label="Will Id"
            placeholder="Will Id"
            {...form.getInputProps("WillId")}
          />
          {/**disabled={isSubmitting}  */}
          <Button type="submit" mt="md"  onClick = {GetWillStatusUsingCoreWagmi}>
            Find Will
           {/* Find WillStatus {isSubmitting && <CompLoader/>} */}
        </Button>
        <h1>Get Status for Asset</h1>
        <TextInput
            label="Asset Id"
            placeholder="Asset Id"
            {...form.getInputProps("AssetId")}
          />
             <Button type="submit" mt="md"  onClick = {GetAssetStatusUsingCoreWagmi}>
                Find Asset
              {/* Find WillStatus {isSubmitting && <CompLoader/>} */}
              </Button>
        </form>

      </Box>
      
      <h2>`will Status = {CompWillStatus} --`</h2>
      <h2>`Asset Status = {CompAssetStatus} --`</h2>

      
      <Box>
          <Flex gap={2}>
          { assetStatusButtonClicked && <CompFIndStatus_Asset _assetId={CompAssetId}/>}
          <Header height={3}>Asset Status Legions</Header>
              <ul>
                <li></li>
                <li>Created</li>
                <li>Assigned</li>
                <li></li>
                <li></li>
              </ul>
          </Flex>
          <Flex>
          <Header height={3}>Will Status Legions</Header>
            <ul>
              
              <li>Created</li>
              <li>Matured</li>
              <li>ManualySettled</li>
              <li>Cancelled</li>
            </ul>
          </Flex>
      </Box>  
      
    </div>
  );
}

export default CompFindStatus_Assets_Wills;
