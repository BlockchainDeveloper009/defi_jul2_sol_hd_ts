import { Table } from '@mantine/core';
import { BigNumberish } from 'ethers';

import {  getContract, 
  useContractRead, useContractWrite,
   usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'

import {
  
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";

import { Button } from '@mantine/core';
import { useState } from 'react';
import { useAccount, useContractEvent } from 'wagmi';
import { useRouter as navUseRouter} from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useNavigate, useParams } from "react-router-dom";
import { prepareWriteContract, writeContract } from 'wagmi/actions';

interface IWillsInfo{
  willId:BigNumberish,
  assetId:string,
  s_baseStatus: string,
  willStartDate: BigNumberish,
  willMaturityDate:BigNumberish,
  Benefitors: number,
  willOwner:BigInteger,
  willManager:BigInteger,
  
  
}
function GetWillsByUsers(stttt:any) {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getUserCreatedBonds',
    args: [stttt]
    
  })
  
  
  console.log('---getUserCreatedBonds-----')
  console.log(functionData)
  console.log('---------------')
  let retData:IWillsInfo[];
  retData = functionData as Array<IWillsInfo>;
  console.log(retData)
  return retData 

}

function GetWilStatus(willId:any) {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getWillStatus',
    args: [willId]
    
  })
  
  console.log('---getUserCreatedBonds-----')
  console.log(functionData)
  console.log('---------------')
  let retData:any;
  retData = functionData;
  
  return retData 

}

function CompManageWillsSettle() {
  
 // const router = useNavigate();
 //const router = routUseRouter();
 const router = navUseRouter();
 const searchParams = useSearchParams();

 const [willInfoData, setWillInfoData] = useState(null)

  const { address, connector, isConnected } = useAccount()
  const [assetId, setAssetId] = useState('')
  const [willId, setWillId] = useState('')
  /**
  event willSettled(
    uint indexed cryptoWillId,
    address indexed benefitor,
    uint256 willMaturityDate,
    uint256 willAmount
);
  */
useContractEvent({
  address: CreateBondandAdminRole_CONTRACT_ADDRESS,
  abi: CreateBondandAdminRole_CONTRACT_ABI,
  eventName: 'willSettled',
  listener(log) {
    console.log('listening to event assetCreated')
    console.log(log[0].args.cryptoWillId)
    console.log(log[0].args.willMaturityDate)
    console.log(log[0].args.benefitor)
    
  },
})

  const contract = getContract({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
  })


  // const navigate = useNavigate();
  const handleSettleNotification = async () => {
    
    let willsId:(string|null)= searchParams.get("willId");
   // setWillId(willsId)
    console.log('---handleProceed---')

    console.log(`before Manual settle=> ${address}`)

    try {
      
    } catch (error) {
      
    }
    try {
      const { 
        request,result } = await prepareWriteContract({
        address: CreateBondandAdminRole_CONTRACT_ADDRESS,
        abi: CreateBondandAdminRole_CONTRACT_ABI,//CreateBondandAdminRole_CONTRACT_ABI
        functionName: 'manuallySettleWill',
        args: [willId],
        chainId: 80001,
        account: address
        
      });
      
      console.log(`result of contractprepare=> %% ${result} %%`)
      const { hash } = await writeContract(request)
      console.log(`txn Hash`)
      console.log(hash)
      
    } catch (error) {
      console.log(`error during Prepare or Settle Contract`);
            console.log(error)
    }
    console.log(willsId)
    console.log('----------')
   // router.push(`/pageWillsManagerDetails?${createQueryString('willsId',will)}`)
  // navigate("/WillsFormEdit",  
  //   {
  //     state: {
  //       userId: willsId,
  //     }
  //   }
  //   );
  // };
  }

  // main function start
  try {

    console.log(`addresss -----> ${address}`)
    let willStatus = GetWilStatus(searchParams.get("willId"));
    return (
      <div className="App">
    
          <h2>Wills Manual Settle by User</h2>
          {!address && <div>Account Not connected</div>}

          <h1>id ...{searchParams.get("willId")}...</h1>
          <h2>will Status {willStatus}</h2>
          {willStatus=='Started' && <Button onClick={handleSettleNotification}>Settle will</Button>}
 
          
      </div>
    );

  } catch (error) {
    console.log(`Ex-10: GetWillsByUsers - ${error}`)
  }
  return null;
 
}

export default CompManageWillsSettle;