// //import { IconSun, IconMoonStars } from '@tabler/icons';

// import { Box, Button, Code, TextInput } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { useEffect, useState } from 'react';


// import { useAccount} from 'wagmi';
// import {
//   CreateBondandAdminRole_CONTRACT_ABI,
//   CreateBondandAdminRole_CONTRACT_ADDRESS,
// } from "../srcConstants";

// import { IAssets } from '../models/IAssets';

// import { z } from 'zod';
// import { createWillsSchema } from '../validateSchema';
// import Axios from 'axios'
// type Will_info = z.infer<typeof createWillsSchema >;

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
  
//   return retData 

// }
// function ConvertDateToUnixTimeStamp(incomingDate:string):number{
//   return Math.floor(new Date(incomingDate).getTime() / 1000 );
// }
// function parseErrorMessage(errorMessage:string) {
//   try {
//     return JSON.parse(errorMessage);
//   } catch (error) {
//     console.error('Error parsing error message:', error);
//     return {};
//   }
// }
// /**
//  * 
//  * @returns return component using wagmiReact
//  */
// function __CompCreateWillsFormUsingWagmiReact() {
  
  
//   const { address, connector, isConnected } = useAccount()
//   console.log(`address -> '${address}'`)
//   const [assetId, setAssetId] = useState<string|null>(null);
  
//   const [ isWillCreationSuccess, setisWillCreationSuccess] = useState<boolean>(false)
//   const [ willCreationPrepareError, setWillCreationPrepareError] = useState<Error | null | undefined>();
//   const [ willWriteError, setWillWriteError ] = useState<Error | null | undefined>()
//   const [ willStartDate, setWillStartDate] = useState(0);
//   const [ willEndDate, setWillEndDate] = useState(0);
//   const [ benefitorAddr, setbenefitorAddr] = useState('');
//   const [ will_owner, setwill_owner] = useState('');
//   const [ will_Status, setwill_Status] = useState(0);
//   const [ will_asset_Id, setwill_asset_Id] = useState('');
//   const [ will_asset_Amount, setwill_asset_Amount] = useState(0);
//   const [ will_Manager, setwill_Manager] = useState('');


//   const [createWillFlag, setCreateWillFlag] = useState(false);
//   const [submittedValues, setSubmittedValues] = useState('');

//   const [willIdCreated_byContract, setWillIdCreated_byContract] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [apiToUpdate_WillsTableError, setApiToUpdate_WillsTableError] = useState('')


  
//     useContractEvent({
//       address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//       abi: CreateBondandAdminRole_CONTRACT_ABI,
//       eventName: 'willCreated',
//       listener(log) {
//         console.log(`listening to WillCreated event`)
//         console.log(log)
//         console.log(log[0].args.cryptoWillId)
//         setWillIdCreated_byContract(log[0].args.cryptoWillId)
//       },
//     })
//     // useEffect(() => {
//     //   if(willIdCreated_byContract){
//     //   // cannot make inline function as async when used with useEffect hook
//     //   //therefore created separate async function below
//     //   async function callCreateApi(){
//     //     let data:Will_info = { 
//     //       will_Id: Number(willIdCreated_byContract) , 
//     //       will_StartDate: willStartDate,
//     //       will_EndDate: willEndDate,
//     //       will_Benefitors: benefitorAddr,
//     //       will_Owner: will_owner,
//     //       will_Status: will_Status,
//     //       will_asset_Id: will_asset_Id,
//     //       will_asset_Amount: will_asset_Amount,
//     //       will_Manager: will_Manager
//     //     }
//     //     try {
//     //       console.log(`in CallingApi CreateWill...`)
//     //       await Axios.post('/api/createWill', data)
  
//     //     } catch (error) {
//     //       console.log(``)
//     //       console.log(error)
//     //       setApiToUpdate_WillsTableError(error.toString())
//     //     }
//     //   }
//     //   //callCreateApi();
//     // }
//     //   // invoke to make api call
      
//     // },[willIdCreated_byContract]);
//   const form = useForm({
//     initialValues: {
//       willStartDate: '',
//       willEndDate: '',
//       Benefitor: '0x',
//       willOwner: '0x',
//       willStatus: 1,
//       AssetId: 'ca-0',
//       AssetAmount: 1,
//       willManager: '0x'
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
//       willOwner: `${values.willOwner}`,
//       willStatus: `${values.willStatus}`,
//       AssetAmount: `${values.AssetAmount}`,
//       willManager: `${values.willManager}`
//     }),
//   });
//   // const { data:Result, error:Error ,isError:boolean, status}
//   //  = useContractRead({
//   //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//   //   abi: CreateBondandAdminRole_CONTRACT_ABI,
//   //   functionName: 'checkAssetisAvailable',
//   //   args: [assetId],
//   // })

//   const { 
//     config,
//     error: prepareError,
//     isError: isPrepareError } = usePrepareContractWrite({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'a_createCryptoVault',
//     args: [assetId, willStartDate,willEndDate,benefitorAddr],
//     enabled: Boolean(assetId),
//   })
//       // if(isPrepareError){
//       //   console.log(`usePrepareContractWrite - error`)
//       //  // setWillCreationPrepareError(prepareError)
//       //   console.log(prepareError)
//       //   console.log(`usePrepareContractWrite - isError`)
//       //   console.log(isPrepareError)

//       // }

//    setWillWriteError(prepareError)

//   const CreateWill 
//   = async ()=> 
//   {
    
//         console.log(`willStartDate-> '${willStartDate}'`)
//         console.log(`willEndDate-> '${willEndDate}'`)
//         console.log(`assetId-> '${assetId}'`)
//         console.log(`benefitorAddr-> '${benefitorAddr}'`)
//     // const { 
//     //   request } = await prepareWriteContract({
//     //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     //   abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
//     //   functionName: 'a_createCryptoVault',
//     //   args: [assetId, willStartDate,willEndDate,benefitorAddr],
//     //   chainId: 80001,
//     //   account: address
//     // });
//     // const { hash } = await writeContract(request)
//     // console.log(`hash-->`)
//     // setHash(hash)
//     // console.log(hash)    
  
//       // useEffect(() => 
//       // { ;
//       //       (async () => {
//       //         if(hash){
//       //           const receipt = await publicClient.waitForTransactionReceipt(
//       //             { hash })
//       //             setReceipt(receipt)
//       //         }
//       //       }
//       //       )
//       // })
  
  
//       console.log('will creation----')
//       setIsSubmitting(true);
//         // useEffect(() => {
//         //   console.log(`useEffect for prepareError`)
//         //   if(prepareError){
//         //     setWillWriteError(prepareError)
//         //   }

//         // },[prepareError])
//       console.log(`prepareError--error`)
//       console.log(prepareError)

//       const { data, write , 
//         error: contractWriteError, 
//         isError: contractWriteErrorFlag } 
//         = useContractWrite(config);
//             console.log(`write--error`)
//             console.log(contractWriteError)
//           console.log(data)
//           if(contractWriteError){
//             setWillWriteError(contractWriteError)
//           }
//       // useEffect(() => {

        
//       //   if(contractWriteError){
//       //     setWillWriteError(contractWriteError)
//       //   }

//       // },[contractWriteError])
//       // if(isError){
//       //   console.log(`useContractWrite - error`)
//       // //  setWillWriteError(error)
//       //   console.log(error)
//       //   console.log(typeof(error))
      
//       //   console.log(`useContractWrite - isError`)
//       //   console.log(isError)

//       // }
//     const { isLoading, isSuccess } = useWaitForTransaction({
//       hash: data?.hash,
//     })
//     console.log(`data-hash`)
//     console.log(data?.hash)
//     console.log(isSuccess)
//     //setisWillCreationSuccess(isSuccess)
//     let assets:IAssets[] = GetAssetsByUsers(address)
//     if(assets?.length>=0 ){
//       console.log('assets')
//     console.log(assets)
//     } else { 
//     // assets.push({ assetId: 'ca-0', assetName: 'testData'})
//     }
//     setIsSubmitting(false);
//   }

//   const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
//     return (
//           <Box sx={{ maxWidth: 400 }} mx="auto">
            
          
//               <form
//               onSubmit={form.onSubmit((values) => {
//                 setSubmittedValues(JSON.stringify(values, null, 2))
//                 setAssetId(values.AssetId)
                
//                 setWillStartDate(ConvertDateToUnixTimeStamp(values.willStartDate))
//                 setWillEndDate(ConvertDateToUnixTimeStamp(values.willEndDate)) //values.willEndDate 
//                 setbenefitorAddr(values.Benefitor)

//                 //current user address
//                 setwill_owner(values.willOwner)
//                 //status set by contract
//                 setwill_Status(Number(values.willStatus)) 
//                 // should auto populate from asset id
              
//                 setwill_asset_Amount(Number(values.AssetAmount))
//                 // should auto populate by contract
//                 setwill_Manager(values.willManager)

                
//               //  write?.();

//               })}
//             >

//               <TextInput
                
//                 label="AssetId"
//                 placeholder="AssetId"
//                 mt="md"
//                 withAsterisk
//                 {...form.getInputProps('AssetId')}
//                 // rightSection={<Loader size="xs" />}
                
//                 // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
//               //  onError=()=>{}
//               />
//               {/* <Select 
//                 label="Your fav"
//                 placeholder="ca-01"
//                 value={assetId}
//                 onChange={setAssetId}
//                 data = {assets}
//                 //{[{value:'testData'}]}
//                 //assets.length>=0 ? assets : [{value:'testData'}]   
                
//               /> */}
            

//               <TextInput
//                 label="Will Start Date"
//                 placeholder="MM-DD-YYYY"
//                 withAsterisk
//                 {...form.getInputProps('willStartDate')}
//               />
//               <TextInput
//                 label="Will End Date"
//                 placeholder="MM-DD-YYYY"
//                 withAsterisk
//                 {...form.getInputProps('willEndDate')}
//               />
//               <TextInput
                
//                 label="Benefitor"
//                 placeholder="0x Address"
//                 mt="md"
//                 withAsterisk
//                 {...form.getInputProps('Benefitor')}
//               />

//               <Button type="submit" mt="md" disabled={isSubmitting} 
//               onClick = {CreateWill}>
//                 Submit
//               </Button>
//             {/* {isSuccess && (
//                       <div>
//                         Successfully created Will, check here!!
//                         <div>
//                           <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Polygon Scan</a>
//                         </div>
//                         <div>
//                           <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
//                         </div>
                        
//                       </div>
//                 )
//               }  */}

              

//               {willCreationPrepareError && (
//                 <div>
//                   {parseErrorMessage(willCreationPrepareError.message)?.reason &&
//                   ( <p>Reason: {parseErrorMessage(willCreationPrepareError.message).reason}</p>)}
//                   Error while contract write: {willCreationPrepareError.message}
//                 </div>
//               )}

//               {willWriteError && (
//                 <div>Error while contract write: {willWriteError.message}</div>
//               )}
              

//             {/* { {(isPrepareError || isError) && (
//               <div>Error: {(prepareError || error)?.message}</div>
//             )}
//             */}
//             </form>
//             {willIdCreated_byContract && <p>will id created - {willIdCreated_byContract}</p>}
//             {submittedValues && <Code block>{submittedValues}</Code>}

//           </Box>
//          );
      
  
// }

// export default __CompCreateWillsFormUsingWagmiReact;