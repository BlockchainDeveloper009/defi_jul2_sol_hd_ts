


import { ActionIcon, Loader, Select, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';

import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';
import { ZodBigInt, any, bigint, z } from 'zod';
import { http,
  Address,
  Hash,
  TransactionReceipt,
  createPublicClient,
  createWalletClient,
  custom,
  stringify, } from 'viem'


import { useAccount, useContractRead, useReadContract, useSimulateContract, useWriteContract, useWatchContractEvent  } from 'wagmi'
import {

  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import { config } from "../../wagmi";
import { IAssets } from '../models/IAssets';

import { abi } from './abi.2024jan21.Bak';
import Link from 'next/link';
const src_contract_addr = '0x6635BaCd122cfc8e8D726633f224746Bd2578872'
function  GetAssetsByUsers(addr:any):IAssets[] {

  if(addr == null){
    console.log("address is null");
  }
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getUserCreatedBonds',
    args: [addr]

  })
  const { address } = useAccount()

  console.log('---getUserCreatedBonds-----')
  console.log(address)
  console.log('--expect use address')
  console.log('expect function data')
  console.log(functionData)
  console.log('---------')

  const today = new Date();
  const todayDateFmt =  today.getMonth() + '-' + today.getDate() + '-' +  today.getFullYear();

  let retData = functionData as Array<IAssets>;

  return retData 

}
function ConvertDateToUnixTimeStamp(incomingDate:string):number{
  return Math.floor(new Date(incomingDate).getTime() / 1000 );
}
function parseErrorMessage(errorMessage:string) {
  try {
    return JSON.parse(errorMessage);
  } catch (error) {
    console.error('Error parsing error message:', error);
    return {};
  }
}
/**
 * 
 * @returns return component using ReactWagmi2.0
 */
function CompCreateWillsFormusingReactHooksWagmi2() {


  const { address, connector, isConnected } = useAccount()
  console.log(`address -> '${address}'`)
  const [assetId, setAssetId] = useState<string>('');

  const [ isWillCreationSuccess, setisWillCreationSuccess] = useState<boolean>(false)
  const [ willCreationPrepareError, setWillCreationPrepareError] = useState<Error | null | undefined>();
  const [ willWriteError, setWillWriteError ] = useState<Error | null | undefined>()
  const [willStartDate, setWillStartDate] = useState('');
  const [willEndDate, setWillEndDate] = useState('');
  const [benefitorAddr, setbenefitorAddr] = useState<`0x${string}` | undefined>();

  const [createWillFlag, setCreateWillFlag] = useState(false);
  const [submittedValues, setSubmittedValues] = useState('');


  const assetIds = async () => {
    console.log(assetIds)
  }
  const form = useForm({
    initialValues: {
      willStartDate: '',
      willEndDate: '',
      Benefitor: '0x',
      AssetId: '1',
      // AssetId: [
      //   { name: 'Banana', available: true },
      //   { name: 'Orange', available: false },
      // ],
    },

    transformValues: (values) => ({
      AssetId: `${values.AssetId}`,
      willStartDate: `${values.willStartDate}`,
      willEndDate: `${values.willEndDate}`,
      Benefitor: `${values.Benefitor}`,
    }),
  });
  const result
  = useReadContract({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'checkAssetisAvailable',
    args: [assetId],
  })

  useWatchContractEvent({
    address: '0x6635BaCd122cfc8e8D726633f224746Bd2578872',
    abi,
    eventName: 'willCreated',
    onLogs(logs) {
      console.log('New logs!', logs)
    },
  })
  // const simulateResult = useSimulateContract
  // ({
  //   abi,
  //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
  //   functionName: 'a_createCryptoVault',
  //   args: [
  //     assetId, BigInt(willStartDate),BigInt(willEndDate),'0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1'
  //   ],

  //  })
  //  console.log(`simulare`)
  /**extension of usePrepareCOntractWrite
  // if(isPrepareError){
  //   console.log(`usePrepareContractWrite - error`)
  //  // setWillCreationPrepareError(prepareError)
  //   console.log(prepareError)
  //   console.log(`usePrepareContractWrite - isError`)
  //   console.log(isPrepareError)

  // }

//   useEffect(() => {
//     if(prepareError){
//       setWillWriteError(prepareError)
//     }
//   },[prepareError])
*/
const { writeContract } = useWriteContract()

  const CreateWill = async () => {

    console.log(`willStartDate-> '${willStartDate}'`)
    console.log(`willEndDate-> '${willEndDate}'`)
    setCreateWillFlag(true);

  }

  let dd:any = z.bigint();
  const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
    <form
        onSubmit={form.onSubmit((values) => {
          setSubmittedValues(JSON.stringify(values, null, 2))
          setAssetId(values.AssetId)

          setWillStartDate(ConvertDateToUnixTimeStamp(values.willStartDate).toString())
          setWillEndDate(ConvertDateToUnixTimeStamp(values.willEndDate).toString()) //values.willEndDate
         // Example of updating the state with a new value
  const newBenefitorValue: string | undefined = values.Benefitor;

 // Check if the new value starts with '0x'
 const updatedBenefitor: `0x${string}` | undefined = newBenefitorValue.startsWith('0x')
 ? newBenefitorValue as `0x${string}`  // If it already has '0x', use it as is
 : `0x${newBenefitorValue}` as `0x${string}` | undefined;  // If not, add the '0x' prefix

         console.log(`---src contract=> ${CreateBondandAdminRole_CONTRACT_ADDRESS}`)
          
          console.log(`incoming benefitor before seeting ${updatedBenefitor}`)

          setbenefitorAddr(updatedBenefitor)
        

        })}
      >

 <TextInput
          label="AssetId"
          placeholder="AssetId"
          mt="md"
          withAsterisk
          {...form.getInputProps('AssetId')}

          // rightSection={<Loader size="xs" />}

          // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
        //  onError=()=>{}
        />
        <p>
                       {/* <Select 
                          label="Your fav"
                          placeholder="ca-01"
                          value={assetId}
                          onChange={setAssetId}
                       //   data = {assets}
                          //{[{value:'testData'}]}
                          //assets.length>=0 ? assets : [{value:'testData'}]   
                      
                        /> */}
         </p>

         <TextInput
          label="Will Start Date"
          placeholder="MM-DD-YYYY"
          withAsterisk
          {...form.getInputProps('willStartDate')}
        />
         <TextInput
          label="Will End Date"
          placeholder="MM-DD-YYYY"
          withAsterisk
          {...form.getInputProps('willEndDate')}
        />
        <TextInput
          label="Benefitor"
          placeholder="0x Address"
          mt="md"
          withAsterisk
          {...form.getInputProps('Benefitor')}
        />

         <Button type="submit" mt="md" onClick = {
              ()=>  {
                      try {
                        
                        
                                writeContract
                                ({
                                  abi,
                                  address: '0x6635BaCd122cfc8e8D726633f224746Bd2578872',//'0x6635BaCd122cfc8e8D726633f224746Bd2578872',//,CreateBondandAdminRole_CONTRACT_ADDRESS
                                  functionName: 'a_createCryptoVault',
                                  args: [assetId, BigInt(willStartDate),BigInt(willEndDate),
                                  '0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'],//benefitorAddr],//0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a
                                  value: BigInt(0),
                                  })

                            } catch (error) {
                              console.log(`error during createing will button click`)   
                              console.log(error)
                            }
                      }
          }>
           Create Will
         </Button> 



   </form>
 <Link href="/pageWillsCreatorUsingWagmiReact">use wagmi core</Link>
 {submittedValues && <Code block>{submittedValues}</Code>}
 </Box>

  );


}

export default CompCreateWillsFormusingReactHooksWagmi2;