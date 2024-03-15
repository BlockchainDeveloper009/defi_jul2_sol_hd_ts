


import { ActionIcon, Loader, Select, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';
import axios  from 'axios'
import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import { useAccount, useReadContract, useWriteContract,useWaitForTransactionReceipt, BaseError } from 'wagmi'
import {

  WillsCreator_CONTRACT_ADDRESS,
  WillsCreator_CONTRACT_ADDRESS_ABI,
} from "../SrcConstants_Wills";
import {

  Assets_CONTRACT_ADDRESS,
  Assets_CONTRACT_ADDRESS_ABI,
} from "../SrcConstants_Assets";

import { IAssets } from '../models/IAssets';


import { getTodaysDate,getDateAfterDays } from '../utils/dateUtils';
import { isNull } from 'util';
import TimeHelper from '../utils/TimeHelper';

interface IAssetsFromContract {
  assetId:string,
  assetName: string,
  AssetTokenAddress: BigInt,
  AssetCreator: BigInt,
  isAvailable: number,
  assetStatus:number,
  
 }

//read from asset contract
function  GetAssetsByUsers(addr:any):any {

  if(addr == null){
    console.log("address is null, HARDCODING 0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1");
    addr = '0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1';

  }
  //const { data:functionData,status} 
  const result = useReadContract({
    address: Assets_CONTRACT_ADDRESS,
    abi: Assets_CONTRACT_ADDRESS_ABI,
    functionName: 'getUserCreatedAssets',
    args: [addr]

  })
  const { address } = useAccount()

  console.log('---getUserCreatedAssetsa-----')
  console.log(address)
  console.log('--expect use address')
  console.log('expect function data')
  //console.log(functionData)
  console.log(result)
  console.log('---------')


  //let retData = result as Array<IAssets>;

  return result.data;

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
 * @returns return componeng using wagmiReact
 */
function CompCreateWillsForm2usingWagmiHooks() {


  const { address, connector, isConnected } = useAccount()
  console.log(`address -> '${address}'`)
  const [assetId, setAssetId] = useState<string|null>(null);
//
  const [ isPending, setisPending] = useState(false);
  const [ isWillCreationSuccess, setisWillCreationSuccess] = useState<boolean>(false)
  const [ willCreationPrepareError, setWillCreationPrepareError] = useState<Error | null | undefined>();
  const [ willWriteError, setWillWriteError ] = useState<Error | null | undefined>()
  const [ contractExecutionError, setContractExecutionError ] = useState()
  const [willStartDate, setWillStartDate] = useState('');
  const [willEndDate, setWillEndDate] = useState('');
  const [benefitorAddr, setbenefitorAddr] = useState('');
  const [AssetCCY, setAssetCCY] = useState<string | null>('');
  
  const [createWillFlag, setCreateWillFlag] = useState(false);
  const [submittedValues, setSubmittedValues] = useState('');
  const { data: hash, error, writeContract} = useWriteContract();

  const assetIds = async () => {
    console.log(assetIds)
  }
  const form = useForm({
    initialValues: {
      willStartDate: getTodaysDate(),
      willEndDate: getDateAfterDays(3),
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
  //const { data:Result, error:Error ,isError:boolean, status}
  // const result = useReadContract({
  //   address: WillsCreator_CONTRACT_ADDRESS,
  //   abi: WillsCreator_CONTRACT_ADDRESS_ABI,
  //   functionName: 'checkAssetisAvailable',
  //   args: [assetId],
  // })

 
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
const [assetName, setAssetName] = useState('');
const [assetAmountForm, setAssetAmountForm] = useState<any>();
  const [assetIdCreated, setAssetIdCreated] = useState('')
  const [assetCreatorAddr, setassetCreatorAddr] = useState('')
  const [apiToUpdateDBError, setApiToUpdateDbError] = useState('')
  const [transactionHash, setTransactionHash] = useState<`0x${''}`>('0x');

useEffect(() => {
  // cannot make inline function as async when used with useEffect hook
  //therefore created separate async function below
  async function callCreateApi(){

      console.log(`asset creator wallet address - '${assetCreatorAddr}'`)
      let apiData = {
        "txn_originator": address,
        "channel_id": "WebApp",
        "chain_id": "80001",
        "will_ContractAddr": WillsCreator_CONTRACT_ADDRESS,
        "will_tx": { 
          will_StartDate: form.values.willStartDate,
          will_EndDate : form.values.willEndDate,
          will_Benefitors : form.values.Benefitor,
          will_Owner: "0x1",
          will_asset_Id: assetId,
          will_asset_Amount: 5,
          will_Manager: address,

          txnId: hash,
          walletCreatorAddr: address,
          txn_orig_time:TimeHelper.getTimeStampISOString()
        }
      }
    try {


      console.log('create API call')
      await axios.put('/api/createWill', apiData)

    } catch (error) {
      console.log(`error caught: api call to createWill  ${error}`)
      
      console.log(error)
      //setApiToUpdateDbError(error.toString())
    }
  }

  if(hash){
    console.log(`callisng api to put asset details`)
    callCreateApi();
    console.log(`completed api puT call`)
    setTransactionHash('0x');
  }
  
},[transactionHash, hash])

const CreateWill = async () => {
  console.log(`direct create will using writeContract`)
  console.log(`willStartDate-> '${willStartDate}'`)
  console.log(`willEndDate-> '${willEndDate}'`)
  console.log(`assetId-> '${assetId}'`)
  
  setCreateWillFlag(true);
  
  try {
    const result  = writeContract(
      {
      address: WillsCreator_CONTRACT_ADDRESS,
      abi: WillsCreator_CONTRACT_ADDRESS_ABI,
      functionName: 'a_createCryptoVault',
      args: [assetId, willStartDate,willEndDate,benefitorAddr],
      value: BigInt(0)
      });
      console.log(`result after write`)
      console.log(result)
      console.log(`-------------`)

      const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({
        hash,
      })
  } catch (error) {
    //ContractFunctionExecutionError
    console.log(`------ContractFunctionExecutionError-------`)
    console.log(error)
    console.log(`-------------`)
   // setContractExecutionError(error.message)
    
  }

};

  const obsolete_CreateWill1 = async () => {


                    // const { 
                    //   request } = await prepareWriteContract({
                    //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
                    //   abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
                    //   functionName: 'a_createCryptoVault',
                    //   args: [assetId, willStartDate,willEndDate,benefitorAddr],
                    //   chainId: 80001,
                    //   account: address
                    // });
                    // const { hash } = await writeContract(request)
                    // console.log(`hash-->`)
                    // setHash(hash)
                    // console.log(hash)  
    //const { data, error: } = await write();  
  }
  // useEffect(() => 
  // { ;
  //       (async () => {
  //         if(hash){
  //           const receipt = await publicClient.waitForTransactionReceipt(
  //             { hash })
  //             setReceipt(receipt)
  //         }
  //       }
  //       )
  // })




  // if(isError){
  //   console.log(`useContractWrite - error`)
  // //  setWillWriteError(error)
  //   console.log(error)
  //   console.log(typeof(error))

  //   console.log(`useContractWrite - isError`)
  //   console.log(isError)

  // }

  //setisWillCreationSuccess(isSuccess)

  // Assuming transformedData is potentially undefined


// Provide a fallback array if transformedData is undefined


  let transformedData:{ value: string; label: string; }[]= [];
  
  let assets = GetAssetsByUsers(address)
  console.log(`--getassets--`)
         console.log(assets)
        console.log(assets?.length)
        console.log(`----`)
  if(assets && assets?.length> 0 ){
        console.log(`----`)
        console.log(assets)
        // Assuming IAssets has a property called 'assetId' which you want to use as the 'value'
   transformedData = assets.map((asset:any) => 

   ({
    value: asset.AssetId,
    label: `${asset.AssetName}-${asset.AssetAmount}`, // Assuming assetName should be used as the label
  })
   );

console.log(`---transformedData-----------`)
console.log(transformedData)
console.log(`---transformedData-----------`)

  } else { 
    //assets.push({ assetId: 'ca-0', assetName: 'testData'})
    // Handle the case where assets is empty or null
  transformedData = [];
  }
  const dataToUse = transformedData || [];

  const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
  console.log(`---dataToUse-----------`)
console.log(dataToUse)
console.log(`---dataToUse-----------`)
  
  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
        <form
        onSubmit={form.onSubmit((values) => {
          setSubmittedValues(JSON.stringify(values, null, 2))
          setAssetId(values.AssetId)

          setWillStartDate(ConvertDateToUnixTimeStamp(values.willStartDate).toString())
          setWillEndDate(ConvertDateToUnixTimeStamp(values.willEndDate).toString()) //values.willEndDate
          setbenefitorAddr(values.Benefitor)
        

        })}
      >


    <Select 
          label="AssetId"
          placeholder="ca-01"
          value={assetId}
          onChange={setAssetId}
          data = {dataToUse || []}
          //{[{value:'testData'}]}
          //assets.length>=0 ? assets : [{value:'testData'}]
          mt="md"
          withAsterisk   
          description="Asset id created and not used in any will"
        />

        <TextInput
          label="Will Start Date"
          placeholder="YYYY-MM-DD"
          withAsterisk
          
          description="YYYY-MM-DD"
          {...form.getInputProps('willStartDate')}
        />
        <TextInput
          label="Will End Date"
          placeholder="YYYY-MM-DD"
          withAsterisk
          description="YYYY-MM-DD - will Matures at 12 am."
          {...form.getInputProps('willEndDate')}
        />
        
        <TextInput 

          label="Benefitor"
          placeholder="0x Address"
          mt="md"
          description="Benefitor Address to which this Will settle amount"
          withAsterisk
          {...form.getInputProps('Benefitor')}
        />
        
      {/* <Select 
              label="in built Select Asset Currency"
              placeholder="Pick value"
             data={transformedData} 
             //value={assetCCY} 
             onChange={setAssetCCY}
             searchable
             //nothingFoundMessage="Nothing found..."
             /> */}
        <Button type="submit" mt="md"  disabled={isPending} onClick = {CreateWill}>
        {isPending ? 'Confirming...' : 'Create Will'} 
        </Button>
        <p>
            {/* {isSuccess && (
                        <div>
                        Successfully created Will, check here!!
                        <div>
                            <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Polygon Scan</a>
                        </div>
                        <div>
                            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                        </div>
                        
                        </div>
                )
                }  */}

                {willWriteError && (<div>Error: {contractExecutionError}</div>)}

                {hash && <div>Transaction Hash: {hash}</div>}

      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
        </p>
{willCreationPrepareError && (
          <div>
            {parseErrorMessage(willCreationPrepareError.message)?.reason &&
            ( <p>Reason: {parseErrorMessage(willCreationPrepareError.message).reason}</p>)}
            Error while contract write: {willCreationPrepareError.message}
          </div>
        )}

        {willWriteError && (
          <div>Error while contract write: {willWriteError.message}</div>
        )}

            {/* { {(isPrepareError || isError) && (
                <div>Error: {(prepareError || error)?.message}</div>
            )}
            */}
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}


    </Box>
  );


}

export default CompCreateWillsForm2usingWagmiHooks;


