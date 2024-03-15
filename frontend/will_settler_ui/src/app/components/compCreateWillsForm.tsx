// import { ActionIcon, Loader, Select, useMantineColorScheme } from '@mantine/core';
// //import { IconSun, IconMoonStars } from '@tabler/icons';

// import { useEffect, useState } from 'react';
// import { useForm } from '@mantine/form';
// import { TextInput, Button, Box, Code } from '@mantine/core';

// import { http,
//   Address,
//   Hash,
//   TransactionReceipt,
//   createPublicClient,
//   createWalletClient,
//   custom,
//   stringify, } from 'viem'


// import { useAccount } from 'wagmi'
// import {
 
//   CreateBondandAdminRole_CONTRACT_ABI,
//   CreateBondandAdminRole_CONTRACT_ADDRESS,
// } from "../srcConstants";
// //import { contractConfig } from "../Config";
// import { IAssets } from '../models/IAssets';
// import { prepareWriteContract, writeContract } from 'wagmi/actions';

// import React from 'react'




// function  GetAssetsByUsers(addr:any):IAssets[] {
  
//   if(addr == null){
//     console.log("address is null");
//   }
//   const { data:functionData,status} = useContractRead({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'getUserCreatedBonds',
//     args: [addr]
    
//   })
//   const { address } = useAccount()
  
//   console.log('---getUserCreatedBonds-----')
//   console.log(address)
//   console.log('--expect use address')
//   console.log('expect function data')
//   console.log(functionData)
//   console.log('---------')
  
//   const today = new Date();
//   const todayDateFmt =  today.getMonth() + '-' + today.getDate() + '-' +  today.getFullYear();
  
//   let retData = functionData as Array<IAssets>;
//   console.log('decode values')
//   // console.log(retData[0].assetName)
//   return retData ;

// }
// function ConvertDateToUnixTimeStamp(incomingDate:string):number{
//   return Math.floor(new Date(incomingDate).getTime() / 1000 );
// }
// /**
//  * 
//  * @returns component built using WagmiCore<vanilla JS>
//  */
// function CreateWillsForm() {

  
//   const { address, connector, isConnected } = useAccount()
//   console.log(`address -> '${address}'`)
//   const [assetId, setAssetId] = useState<string|null>(null);
  
//   const { isWillCreationSuccess, setisWillCreationSuccess} = useState<boolean>()
//   const { hash, setHash} = useState<Hash>()
//   const { receipt, setReceipt } = useState<TransactionReceipt>()
//   const [willStartDate, setWillStartDate] = useState('');
//   const [willEndDate, setWillEndDate] = useState('');
//   const [benefitorAddr, setbenefitorAddr] = useState('');

//   const [createWillFlag, setCreateWillFlag] = useState(false);
//   const [submittedValues, setSubmittedValues] = useState('');


//   const assetIds = async () => {
//     console.log(assetIds)
//   }
//   const form = useForm({
//     initialValues: {
//       willStartDate: '',
//       willEndDate: '',
//       Benefitor: '0x',
//       AssetId: '1',
//       // AssetId: [
//       //   { name: 'Banana', available: true },
//       //   { name: 'Orange', available: false },
//       // ],
//     },

//     transformValues: (values) => ({
//       AssetId: `${values.AssetId}`,
//       willStartDate: `${values.willStartDate}`,
//       willEndDate: `${values.willEndDate}`,
//       Benefitor: `${values.Benefitor}`,
//     }),
//   });
//   const { data:Result, error:Error ,isError:boolean, status} = useContractRead({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'checkAssetisAvailable',
//     args: [assetId],
//   })

//   const CreateWill = async () => {
//     setCreateWillFlag(true);
    
//     console.log(`willStartDate-> '${willStartDate}'`)
//     console.log(`willEndDate-> '${willEndDate}'`)
//     console.log(`assetId-> '${assetId}'`)
//     console.log(`benefitorAddr-> '${benefitorAddr}'`)
//     const { 
//       request } = await prepareWriteContract({
//       address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//       abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
//       functionName: 'a_createCryptoVault',
//       args: [assetId, willStartDate,willEndDate,benefitorAddr],
//       chainId: 80001,
//       account: address
      
//     });

//     const { hash } = await writeContract(request)
//     console.log(`hash-->`)
//     setHash(hash)
//     console.log(hash)

    
//   }
//   useEffect(() => 
//   { ;
//         (async () => {
//           if(hash){
//             const receipt = await publicClient.waitForTransactionReceipt(
//               { hash })
//               setReceipt(receipt)
//           }

//         }
//         )
//   })
//   // this below code cannot work, because hook should be rendered always in same order, 
//   //since condition is used, we cannot use this flow
//   // if(createWillFlag){
//   //   const { 
//   //     config,
//   //     error: prepareError,
//   //     isError: isPrepareError, } = usePrepareContractWrite({
//   //     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//   //     abi: CreateBondandAdminRole_CONTRACT_ABI,
//   //     functionName: 'a_createCryptoVault',
//   //     args: [assetId, willStartDate,willEndDate,benefitorAddr],
//   //     enabled: Boolean(assetId),
//   //   })
//   //   const { data, write , error, isError } = useContractWrite(config)
//   //   const { isLoading, isSuccess } = useWaitForTransaction({
//   //     hash: data?.hash,
//   //   })
//   // }
//   let assets:IAssets[] = GetAssetsByUsers(address)
//   if(assets?.length>=0 ){
//     console.log('assets')
//    console.log(assets)
//   } else { 
//    // assets.push({ assetId: 'ca-0', assetName: 'testData'})
//   }

  
//   const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
//   return (
//     <Box sx={{ maxWidth: 400 }} mx="auto">
      
    
//         <form
//         onSubmit={form.onSubmit((values) => {
//           setSubmittedValues(JSON.stringify(values, null, 2))
//           setAssetId(values.AssetId)
          
//           setWillStartDate(ConvertDateToUnixTimeStamp(values.willStartDate).toString())
//           setWillEndDate(ConvertDateToUnixTimeStamp(values.willEndDate).toString()) //values.willEndDate
//           setbenefitorAddr(values.Benefitor)
//         //  write?.();

//         })}
//       >

//         <TextInput
          
//           label="AssetId"
//           placeholder="AssetId"
//           mt="md"
//           withAsterisk
//           {...form.getInputProps('AssetId')}
//           // rightSection={<Loader size="xs" />}
          
//           // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
//         //  onError=()=>{}
//         />
//         {/* <Select 
//           label="Your fav"
//           placeholder="ca-01"
//           value={assetId}
//           onChange={setAssetId}
//           data = {assets}
//           //{[{value:'testData'}]}
//           //assets.length>=0 ? assets : [{value:'testData'}]   
          
//         /> */}
       

//         <TextInput
//           label="Will Start Date"
//           placeholder="MM-DD-YYYY"
//           withAsterisk
//           {...form.getInputProps('willStartDate')}
//         />
//         <TextInput
//           label="Will End Date"
//           placeholder="MM-DD-YYYY"
//           withAsterisk
//           {...form.getInputProps('willEndDate')}
//         />
//         <TextInput
          
//           label="Benefitor"
//           placeholder="0x Address"
//           mt="md"
//           withAsterisk
//           {...form.getInputProps('Benefitor')}
//         />

//         <Button type="submit" mt="md" onClick = {CreateWill}>
//           Submit
//         </Button>
//        {isWillCreationSuccess && (
//                 <div>
//                   Successfully created Will, check here!!
//                   <div>
//                     <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Polygon Scan</a>
//                   </div>
//                   <div>
//                     <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
//                   </div>
                  
//                 </div>
//           )
//         } 
        

//       {/* { {(isPrepareError || isError) && (
//         <div>Error: {(prepareError || error)?.message}</div>
//       )}
//        */}
//       }

//       </form>
     
//       {submittedValues && <Code block>{submittedValues}</Code>}


//     </Box>
//   );

 
// }

// export default CreateWillsForm;