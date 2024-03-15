// ///import { useRouter, NextRouter } from 'next/router';
// "use client";
// import { useSearchParams } from "next/navigation";
// import { useRouter as navUseRouter} from 'next/navigation';
// import React, { useState } from 'react'
// import { useAccount, useContractEvent, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
// import {
  
//   CreateBondandAdminRole_CONTRACT_ABI,
//   CreateBondandAdminRole_CONTRACT_ADDRESS,
// } from "../srcConstants";
// import { Button } from "@mantine/core";


// function GetWillStatus(willId:any):string {
//   const { data:functionData,status} = useContractRead({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'getWillStatus',
//      args: [willId]    
//   })
//   return functionData as string;

// } 
// function CompManageWillsEdit() {
//   const { address, connector, isConnected } = useAccount()
//   const router = navUseRouter();
//   const searchParams = useSearchParams();
//  // const { willId } = router. as { willId?: string}
//  function CancelWill(willId:any){

//   const { 
//     config,
//     error: prepareError,
//     isError: isPrepareError, } = usePrepareContractWrite({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'cancelWill',
//     args: [willId],
//     enabled: Boolean(willId),
//   })

// const [WillWriteError,setWillWriteError] = useState<Error>()
// const { data, write , 
//     error: useContractWriteError, 
//     isError: useContractWriteErrorFlag } = useContractWrite(config)

//     if(useContractWriteError){
//        setWillWriteError(useContractWriteError)
//     }
//     console.log(`write`)
//     console.log(write)
//     console.log(`data`)
//     console.log(data)

//     return (
//     <div>
//         {prepareError && <div>prepareError - {prepareError.message}</div>}
//         {useContractWriteError && <div>contractWriteError - {useContractWriteError.message}</div>}

//         {data && <div>contractWriteError - {data.hash}</div>}

//     </div>)
// }
//  useContractEvent({
//   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//   abi: CreateBondandAdminRole_CONTRACT_ABI,
//   eventName: 'willSettled',
//   listener(log) {
//     console.log('listening to event assetCreated')
//     console.log(log[0].args.cryptoWillId)
//     console.log(log[0].args.willMaturityDate)
//     console.log(log[0].args.benefitor)
    
//   },
// })
// let willStatus = GetWillStatus(searchParams.get("willId"));
//   return (
//     <div>
//       <h1>{searchParams.get("willInfo")}</h1>

//       {/* <p>Hello will id, {willId || 'Invalid WIll Id'}</p> */}
//       <h2>`will Status '{willStatus}'`</h2>
//           <Button onClick={CancelWill}>Cancel will</Button>
//     </div>
//   )
// }

// export default CompManageWillsEdit