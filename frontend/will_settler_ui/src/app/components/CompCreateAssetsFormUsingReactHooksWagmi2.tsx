'use client'

import { ActionIcon, Select, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';

import axios  from 'axios'
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import { abi } from './abi'
//import {  getContract,  useContractWrite, usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";


import { use, useEffect, useState } from 'react';
import { useAccount, useWatchContractEvent } from 'wagmi'
import CompWagmiTestProvider from './CompWagmiTestProvider';
import { WagmiConfigProvider } from './WagmiConfigProvider';
import { connect } from 'wagmi/actions';
import { Account } from 'viem';
import  { PrismaClient } from '@prisma/client'
import { createAssetSchema } from '../validateSchema';
import { useRouter } from 'next/navigation';
import { ZodBigInt, any, bigint, z } from 'zod';
import  zodResolver from '@hookform/resolvers';
import  CompLoader  from './compLoader';
import CompSelectAssets from './CompSelectAssets';
import { SelectItems } from '@mantine/core/lib/Select/SelectItems/SelectItems';
import { useWriteContract } from 'wagmi'


//const prisma = new PrismaClient()
type Assets = z.infer<typeof createAssetSchema >;
interface AssetCCy {
  ccy:string,
  ccyName: string

}
function CompCreateAssetsFormUsingReactHooksWagmi2() {

  const router = useRouter();
  //const { address } = useAccount()
  const address = 0xccA0b47ab3fe942E5B5DC499762202c3222FF067
  
  // const contract = getContract({
  //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
  //   abi: CreateBondandAdminRole_CONTRACT_ABI,
  // })
  const [customerAccountAddress, setCustomerAccountAddress] = useState(address);
  const [submittedValues, setSubmittedValues] = useState('');
  const [assetCCY, setAssetCCY] = useState<string | null>('');
  const [assetName, setAssetName] = useState('');
  const [eventAssetName, setEventAssetName] = useState('');
  const [eventAssetAmt, setEventAssetAmt] = useState('');
  
  const [assetAmountForm, setAssetAmountForm] = useState<any>();
  const [assetIdCreated, setAssetIdCreated] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiToUpdateDBError, setApiToUpdateDbError] = useState('')
  const [transactionExecutionError, settransactionExecutionError] = useState('')
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const { writeContract } = useWriteContract()
  const [abiFromMongoDb,setabiFromMongoDb] = useState();
  useEffect(()=>{
    let readContractFromMongoDb;
    if(abiFromMongoDb==null){
      readContractFromMongoDb = async()=>{
        const { data } = await axios.get('/api/getContractInfo');
        console.log(`abi from db -> ${data} `)
        console.log(data)
        
      }
     readContractFromMongoDb();
    }
  },[abiFromMongoDb])
  const handleButtonClick = () => {
    // Do something with the selected option
    console.log('Selected option:', selectedOption);
  };
  //change this later
  const ccyOptions = [
    { label: 'ETH CCY', value: 'ETH' },
    { label: 'BTC CCY', value: 'BTC' },
    { label: 'AVAX CCY', value: 'AVAX' },
  ];
  const [ccy, setCCY] = useState<AssetCCy[]>([]);
  /**
  event willSettled(
    uint indexed cryptoWillId,
    address indexed benefitor,
    uint256 willMaturityDate,
    uint256 willAmount
);
  */
 //https://wagmi.sh/react/api/hooks/useWatchContractEvent
useWatchContractEvent ({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    eventName: 'assetCreated',
    onLogs(logs) {
      console.log('New logs!', logs)
      console.log('listening to event assetCreated')
      console.log(logs[0].args.assetId)
      console.log(logs[0].args.assetName)
      console.log(logs[0].args.assetAmount)
      setEventAssetName(logs[0].args.assetName)
      setEventAssetAmt(logs[0].args.assetAmount)
      setAssetIdCreated(logs[0].args.assetId)  
    }
    // listener(log) {
    //   console.log('listening to event assetCreated')
    //   console.log(log[0].args.assetId)
    //   console.log(log[0].args.assetName)
    //   console.log(log[0].args.assetAmount)
    //   setEventAssetName(log[0].args.assetName)
    //   setEventAssetAmt(log[0].args.assetAmount)
    //   setAssetIdCreated(log[0].args.assetId)  
    // },
  })
  useEffect(() => {
    const fetchCCY = async() => {
      const { data } = await axios.get<AssetCCy[]>('/api/assetCCY');
      setCCY(data);
    }
    try {
      fetchCCY();
    } catch (error) {
      console.log(`log to console ${error}`)
    }

  })
  useEffect(() => {
    // cannot make inline function as async when used with useEffect hook
    //therefore created separate async function below
    async function callCreateApi(){
      let data:Assets = { 
        asset_Id: assetIdCreated , 
        asset_Name:assetName,
        asset_Amount: (assetAmountForm!== undefined) ? assetAmountForm : "0"
        }
      try {
        console.log('create API call')
        await axios.post('/api/createAsset', data)

      } catch (error) {
        console.log(``)
        console.log(error)
        setApiToUpdateDbError(error)
      }
    }
    
  })

  const form  = useForm({
    initialValues: {
      assetName: '',
      Amount: '0',
      assetCCY: ''
      
    },

    transformValues: (values) => ({
      AssetName: `${values.assetName}`,
      Amount: Number(values.Amount) || 0,
      Addr: CreateBondandAdminRole_CONTRACT_ADDRESS,
      assetCCY: assetCCY
           
      
    }),
  });

  console.log(`Accessing contract: '${CreateBondandAdminRole_CONTRACT_ADDRESS}' `)
  
    function HookDirectUseWrite(){

      console.log(`I am connected to account '${address}'`)
      return { 
        abi,
        address: CreateBondandAdminRole_CONTRACT_ADDRESS,
        functionName: 'a_createAssets',
        args: [
          assetName, 
          (assetAmountForm!== undefined) ? parseInt(assetAmountForm.toString()) : 0
        ],
     };
    }

let dd:any = z.bigint();


  return (
    <div>
    <p>CompCreateAssetsFormUsingReactHooks</p>
    
    { address && 
        <Box sx={{ maxWidth: 400 }} mx="auto">
        <form
          onSubmit=
          {
            form.onSubmit((values) => 
                    {
  
                            setSubmittedValues(JSON.stringify(values, null, 2))
                            setAssetName(values.AssetName)
                            setAssetAmountForm(values.Amount)
                    
                    }
            )
          } 
        >
          <TextInput
            label="Asset name"
            placeholder="Asset name"
            {...form.getInputProps('assetName')}
          />
         <Select 
              label="in built Select Asset Currency"
              placeholder="Pick value"
             data={ccyOptions} 
             value={assetCCY} 
             onChange={setAssetCCY}
             searchable
             //nothingFoundMessage="Nothing found..."
             />
  
          <TextInput
            type="number"
            label="Amount"
            placeholder="Amt"
            mt="md"
            {...form.getInputProps('Amount')}
          />
  


          <Button type="submit" mt="md" disabled={isSubmitting}  onClick = {
            ()=> writeContract
            ({
              abi,
              address: CreateBondandAdminRole_CONTRACT_ADDRESS,
              functionName: 'a_createAssets',
              args: [
                assetName, dd.parse(BigInt(assetAmountForm))
              ],

             })
          }>
            useHook submit 
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
  
        {transactionExecutionError && <div><p>TransactionExecutionError: {transactionExecutionError}</p></div>}
        {apiToUpdateDBError && <div><p>ApiError: {apiToUpdateDBError}</p></div>}
        </form>
        
        {submittedValues && <Code block>{submittedValues}</Code>}
  
  
      </Box>
      }

    </div>
  );
} 

export default CompCreateAssetsFormUsingReactHooksWagmi2;