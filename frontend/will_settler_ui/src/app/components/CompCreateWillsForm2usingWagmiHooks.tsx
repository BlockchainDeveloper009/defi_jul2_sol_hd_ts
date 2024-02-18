


import { ActionIcon, Loader, Select, useMantineColorScheme } from '@mantine/core';
//import { IconSun, IconMoonStars } from '@tabler/icons';

import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import { useAccount, useReadContract, useWriteContract } from 'wagmi'
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

//read from asset contract
function  GetAssetsByUsers(addr:any):IAssets[] {

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

  const today = new Date();
  const todayDateFmt =  today.getMonth() + '-' + today.getDate() + '-' +  today.getFullYear();

  //let retData = result as Array<IAssets>;

  return result 

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

  const [ isWillCreationSuccess, setisWillCreationSuccess] = useState<boolean>(false)
  const [ willCreationPrepareError, setWillCreationPrepareError] = useState<Error | null | undefined>();
  const [ willWriteError, setWillWriteError ] = useState<Error | null | undefined>()
  const [willStartDate, setWillStartDate] = useState('');
  const [willEndDate, setWillEndDate] = useState('');
  const [benefitorAddr, setbenefitorAddr] = useState('');

  const [createWillFlag, setCreateWillFlag] = useState(false);
  const [submittedValues, setSubmittedValues] = useState('');
  const { writeContract} = useWriteContract();

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

const CreateWill = async () => {
  console.log(`direct create will using writeContract`)
  console.log(`willStartDate-> '${willStartDate}'`)
  console.log(`willEndDate-> '${willEndDate}'`)
  setCreateWillFlag(true);
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
  let assets:IAssets[] = GetAssetsByUsers(address)
  if(assets?.length>=0 ){
        console.log(assets)
  } else { 
   // assets.push({ assetId: 'ca-0', assetName: 'testData'})
  }


  const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
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
          data = {assets}
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

        <Button type="submit" mt="md" onClick = {CreateWill}>
          Create Will
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