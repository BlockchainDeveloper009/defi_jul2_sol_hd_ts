'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';


import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import {  getContract,  useContractWrite, usePrepareContractWrite, useWaitForTransaction, WagmiConfig } from './wrapperForWagmi'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import { wagmiConfig } from './wrapperForWagmi';

import { useState } from 'react';
import { useContractEvent } from 'wagmi'

function CreateAssetsForm() {

  const contract = getContract({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
  })

  const [submittedValues, setSubmittedValues] = useState('');
  const [assetName, setAssetName] = useState('');
  const [Amt, setAmount] = useState(0);

  const form = useForm({
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
  function AssetCreationEvent() {
    useContractEvent({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      eventName: 'willCreated',
      //listener(node, label, owner) {
        listener(log) {
        //console.log(node, label, owner)
        console.log(log)
      },
    })
  }
  function WillCreationEvent() {
    useContractEvent({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      eventName: 'willCreated',
      listener(log) {
        // console.log(log.willofPropertyName, log.willStartDate, log.willMaturityDate,log.cryptoWillId)
        console.log(log)
      },
    })
  }
  function WillSettlementEvent() {
    // useContractEvent({
    //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    //   abi: CreateBondandAdminRole_CONTRACT_ABI,
    //   eventName: 'willSettled',
    //   listener(cryptoWillId, benefitor, willMaturityDate, willAmount) {
    //     console.log(cryptoWillId, benefitor, willMaturityDate, willAmount)
    //   },
    // })

    
  }
  
  
  // const { 
  //   config,
  //   error: prepareError,
  //   isError: isPrepareError, } = usePrepareContractWrite({
  //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
  //   abi: CreateBondandAdminRole_CONTRACT_ABI,
  //   functionName: 'createAsset',
  //   args: [assetName, parseInt(Amt.toString())],
  //   enabled: Boolean(Amt),
  // })
  // const { data, write , error, isError } = useContractWrite(config)
  // const { isLoading, isSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // })
  // console.log('---createAsset----')
  // console.log(isConnected)
  //   console.log(address)
  // console.log(data)
  // console.log('--------')
  return (

    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {

          setSubmittedValues(JSON.stringify(values, null, 2))
          setAssetName(values.AssetName)
          setAmount(values.Amount)
          // write?.();
          
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


        <Button type="submit" mt="md">
          Submit to create Asset
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

      {/* {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )} */}
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}


    </Box>
   
  );
}

export default CreateAssetsForm;