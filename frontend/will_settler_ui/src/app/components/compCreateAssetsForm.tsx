'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';

import { Axios } from 'axios'
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';
import { prepareWriteContract } from '@wagmi/core'
//import {  getContract,  useContractWrite, usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";


import { use, useEffect, useState } from 'react';
import { useAccount, useContractEvent } from 'wagmi'
import CompWagmiTestProvider from './CompWagmiTestProvider';
import { WagmiConfigProvider } from './WagmiConfigProvider';
import { getContract, writeContract } from 'wagmi/actions';
import { Account } from 'viem';
import  { PrismaClient } from '@prisma/client'
import { createAssetSchema } from '../validateSchema';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers';
import  CompLoader  from './compLoader';

const prisma = new PrismaClient()
type Assets = z.infer<typeof createAssetSchema >;
function CompCreateAssetsForm() {

  const router = useRouter();
  const { address } = useAccount()
  
  const contract = getContract({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
  })
  const [customerAccountAddress, setCustomerAccountAddress] = useState(address);
  const [submittedValues, setSubmittedValues] = useState('');
  const [assetName, setAssetName] = useState('');
  const [Amt, setAmount] = useState(0);
  const [assetIdCreated, setAssetIdCreated] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiToUpdateDBError, setApiToUpdateDbError] = useState()
  useContractEvent({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    eventName: 'assetCreated',
    listener(log) {
      console.log('listening to event assetCreated')
      console.log(log[0].args.assetId)
      setAssetIdCreated(log[0].args.assetId)  
    },
  })
  useEffect(() => {
    // cannot make inline function as async when used with useEffect hook
    //therefore created separate async function below
    async function callCreateApi(){
      let data:Assets = { 
        asset_Id: assetIdCreated , 
        asset_Name:assetName,
        asset_Amount: Amt.toString()
        }
      try {
        await Axios.post('/api/createAsset', data)

      } catch (error) {
        console.log(``)
        console.log(error)
        setApiToUpdateDbError(error)
      }
    }
    
  })

  const form  = useForm({
    initialValues: {
      assetName: 'asset1',
      Amount: '0',
      a: '-1',
      a1: '-2'
    },

    transformValues: (values) => ({
      AssetName: `${values.assetName}`,
      Amount: Number(values.Amount) || 0,
      Addr: CreateBondandAdminRole_CONTRACT_ADDRESS,
      a: assetName,
      a1: Amt
      
      
    }),
  });


  function WillSettlementEvent() {
    useContractEvent({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      eventName: 'willSettled',
      listener(log) {
        //console.log(cryptoWillId, benefitor, willMaturityDate, willAmount)
      },
    })

    
  }
  
  let CreateBondandAdminRole_CONTRACT_ADDRESSk:any = '0x9bB29A4336A891501595B2CA3ae22FF54652d78C'
  console.log(CreateBondandAdminRole_CONTRACT_ADDRESS)
// function PrepareCOntractWrite() {

//   const { 
//     config,
//     error: prepareError,
//     isError: isPrepareError, } = prepareWriteContract({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESSk,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
//     functionName: 'createAsset',
//     args: [assetName, parseInt(Amt.toString())],
//     enabled: Boolean(Amt),
//   });
  
//   return config;


// }


    async function WithoutHookPrepareCOntractWrite() {
      console.log(`I am connected to account '${address}'`)
      
      console.log(`connected Address '${customerAccountAddress}`)
      //set IsSubmitting to true, will help spinner to load
      setIsSubmitting(true);
      const { 
        request,result } = await prepareWriteContract({
        address: CreateBondandAdminRole_CONTRACT_ADDRESSk,
        abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
        functionName: 'a_createAssets',
        args: [assetName, parseInt(Amt.toString())],
        chainId: 80001,
        account: customerAccountAddress
        
      });
      
      console.log(`result of contractprepare`)
      console.log(result)

      const { hash } = await writeContract(request)
      console.log(`txn Hash`)
      console.log(hash)
      setIsSubmitting(false);
        // load the list of all assets created by this user
      //  router.push('/pageAssetsManager')
    }

  return (
    <div>
   
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {

          setSubmittedValues(JSON.stringify(values, null, 2))
          setAssetName(values.AssetName)
          setAmount(values.Amount)
          
          
        })}
      >
        <TextInput
          label="Asset name"
          placeholder="Asset name"
          {...form.getInputProps('assetName')}
        />
       
        <TextInput
          type="number"
          label="Amount"
          placeholder="Amt"
          mt="md"
          {...form.getInputProps('Amount')}
        />


        <Button type="submit" mt="md" disabled={isSubmitting}  onClick = {WithoutHookPrepareCOntractWrite}>
          Submit to create Asset {isSubmitting && <CompLoader/>}
        </Button>
        
        {/* {isSuccess && (
        <div>
          Successfully created Asset, check here!!
          <div>
            <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Polygon Scan</a>
          </div>
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
          
        </div>
      )} */}

      {assetIdCreated && <p>Successfully created - {assetIdCreated}</p>}
      {/* {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )} */}


      </form>

      {apiToUpdateDBError && <div><p>{apiToUpdateDBError}</p></div>}
      {submittedValues && <Code block>{submittedValues}</Code>}


    </Box>
    </div>
  );
}

export default CompCreateAssetsForm;