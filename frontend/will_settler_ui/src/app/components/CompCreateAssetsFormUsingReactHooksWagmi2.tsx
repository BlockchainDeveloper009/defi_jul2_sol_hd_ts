'use client'

import { ActionIcon, Select, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';

import axios  from 'axios'
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';
import { watchContractEvent } from '@wagmi/core'

//import {  getContract,  useContractWrite, usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'
import {
 
  Assets_CONTRACT_ADDRESS,
  Assets_CONTRACT_ADDRESS_ABI
} from "../SrcConstants_Assets";


import { use, useEffect, useState } from 'react';
import { useAccount, useWatchContractEvent } from 'wagmi'
import CompWagmiTestProvider from './CompWagmiTestProvider';
import { WagmiConfigProvider } from './WagmiConfigProvider';
import { connect } from 'wagmi/actions';
import { Account, parseEther } from 'viem';
import  { PrismaClient } from '@prisma/client'
import { createAssetSchema } from '../validateSchema';
import { useRouter } from 'next/navigation';
import { ZodBigInt, any, bigint, z } from 'zod';
import  zodResolver from '@hookform/resolvers';
import  CompLoader  from './compLoader';
import CompSelectAssets from './CompSelectAssets';
import { SelectItems } from '@mantine/core/lib/Select/SelectItems/SelectItems';
import { useWriteContract } from 'wagmi'
import { config } from '@/wagmi'
import {abiassetsContractor} from './abiassetsContractor';
import { abi } from './abi';

//const prisma = new PrismaClient()
type Assets = z.infer<typeof createAssetSchema >;
interface AssetCCy {
  ccy:string,
  ccyName: string

}
//pageAssetsCreatorWagmiReactHook
function CompCreateAssetsFormUsingReactHooksWagmi2() {

  const router = useRouter();
  const { address } = useAccount()
//  const address = 0xccA0b47ab3fe942E5B5DC499762202c3222FF067
  
  // const contract = getContract({
  //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
  //   abi: CreateBondandAdminRole_CONTRACT_ABI,
  // })
  const [customerAccountAddress, setCustomerAccountAddress] = useState(0x0);
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

  const { data: hash, error, isPending,writeContract } = useWriteContract()
  const [abiFromMongoDb,setabiFromMongoDb] = useState();
  /** 
        useEffect(()=>{
          let readContractFromMongoDb;
          if(abiFromMongoDb==null){
            readContractFromMongoDb = async()=>{
              console.log('get contract info')
              const { data } = await axios.get
              
              ('/api/getContractInfo');
              console.log(`abi from db -> ${data} `)
              console.log(data)
              
            }
          readContractFromMongoDb();
          }
        },[abiFromMongoDb]) 
  */
  const handleButtonClick = () => {
    // Do something with the selected option
    console.log('Selected option:', selectedOption);
  };

  const unwatch = watchContractEvent(config, {
    address: '0x0DaFC14Af4E71716971E04444fe58d9fC413dc3',//'0x7a92beDE8B87dD09C8dB1C979647f599f5AeBb14',
    abi: abiassetsContractor,
    eventName: 'assetCreated',
    onLogs(logs) {
      console.log('New logs!', logs)
    },
  })
 
  
  //change this later
  const ccyOptions = [
    { label: 'MATIC CCY', value: 'MATIC' },
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
// useWatchContractEvent ({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     eventName: 'assetCreated',
//     onLogs(logs) {
//       console.log('New logs!', logs)
//       console.log('listening to event assetCreated')
//       console.log(logs[0].args.assetId)
//       console.log(logs[0].args.assetName)
//       console.log(logs[0].args.assetAmount)
//       setEventAssetName(logs[0].args.assetName)
//       setEventAssetAmt(logs[0].args.assetAmount)
//       setAssetIdCreated(logs[0].args.assetId)  
//     }
//   })
  // useEffect(() => {
  //   const fetchCCY = async() => {
  //     const { data } = await axios.get<AssetCCy[]>('/api/assetCCY');
  //     setCCY(data);
  //   }
  //   try {
  //     console.log(`trying to fetch assetCCY through api`)
  //     fetchCCY();
  //   } catch (error) {
  //     console.log(`error caught for fetch Asset CCy:  ${error}`)
  //   }

  // },[ccy])
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
        console.log(`error caught: api call to createAsset  ${error}`)
        
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
      Addr: Assets_CONTRACT_ADDRESS,
      assetCCY: assetCCY
           
      
    }),
  });

  console.log(`Accessing contract: '${Assets_CONTRACT_ADDRESS}' `)
  
    function useMethodToWriteAsset_Buttoncall(){

      try {
        console.log(`calling write contract`)
        console.log(`ASSETS CONTRACT-${Assets_CONTRACT_ADDRESS}`)
        writeContract
        ({
          abi,
          address: '0x0DaFC14Af4E71716971E04444fe858d9fC413dc3',
          functionName: 'a_createAssets',
          args: [
            assetName, `0x${'0000000000000000000000000000000000001010'}`, BigInt(10000000000000000) 
          ],
           //value: BigInt(1),//dd.parse(BigInt(assetAmountForm)) 
        })

  } catch (error) {
    console.log(`error during contract write`)
    console.log(error)
  }
      
      
    }

let dd:any = z.bigint();


  return (
    <div>
    <p>CompCreateAssetsFormUsingReactHooks_2</p>
    
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
  
  <Button type="submit" mt="md" disabled={isPending}  onClick = {useMethodToWriteAsset_Buttoncall}>
    
  {isPending ? 'Creating...' : 'USE METHOD TO CREATE ASSET'} </Button>

          <Button type="submit" mt="md" disabled={isSubmitting}  onClick = {
            ()=> {

                try {
                      console.log(`calling write contract to create assets`)
                      console.log(`CreateBondandAdminRole_CONTRACT_ADDRESS-${Assets_CONTRACT_ADDRESS}`)
                      writeContract
                      ({
                        abi,
                        address: Assets_CONTRACT_ADDRESS,
                        functionName: 'a_createAssets',
                        args: [
                          assetName, `0x${'0000000000000000000000000000000000001010'}`, BigInt(1) 
                        ],
                         //value: BigInt(1),//dd.parse(BigInt(assetAmountForm)) 
                      })

                } catch (error) {
                  console.log(`error during contract write`)
                  console.log(error)
                }

            }
          }>
            direct WRITE submit 
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
        {hash && <div>Transaction Hash: {hash}</div>}
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