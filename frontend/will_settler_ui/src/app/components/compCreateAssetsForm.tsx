'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';


import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';
import { prepareWriteContract } from '@wagmi/core'
//import {  getContract,  useContractWrite, usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";


import { useState } from 'react';
import { useAccount, useContractEvent } from 'wagmi'
import CompWagmiTestProvider from './CompWagmiTestProvider';
import { WagmiConfigProvider } from './WagmiConfigProvider';
import { getContract, writeContract } from 'wagmi/actions';
import { Account } from 'viem';

function CompCreateAssetsForm() {


  const { address } = useAccount()
  
  const contract = getContract({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
  })
  const [customerAccountAddress, setCustomerAccountAddress] = useState(address);
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
      eventName: 'assetCreated',
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
      console.log(window)
      if(window.ethereum)
      {
        const { ethereum } = window;
          if (ethereum && ethereum.isMetaMask) {
            alert('Ethereum successfully detected!');
            // Access the decentralized web!
          } else {
            alert('Please install MetaMask!');
          }
      }
      
      let acct:Account = 0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a;

      console.log(`connected Address '${customerAccountAddress}`)
      
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

      console.log(hash)
    }

  function CreateAssetSubmit() {
    // const { data, write , error, isError } = useContractWrite(PrepareCOntractWrite());
    // const returnFromUseWaitTxn = useWaitForTransaction({
    //   hash: data?.hash,
    // });


    console.log('---createAsset----')
  // console.log(isConnected)
    
    //console.log(data)
    console.log('--------')

  }
 
  


  return (
    <div>
   
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


        <Button type="submit" mt="md" onClick = {WithoutHookPrepareCOntractWrite}>
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
    </div>
  );
}

export default CompCreateAssetsForm;