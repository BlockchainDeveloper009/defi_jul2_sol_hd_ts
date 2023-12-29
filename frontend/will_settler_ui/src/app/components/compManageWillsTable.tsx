import { Box, Table } from '@mantine/core';
import { BigNumberish } from 'ethers';

import {  getContract, 
  useContractRead, useContractWrite,
   usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'

import {
  
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter as navUseRouter} from 'next/navigation';
import { useRouter as routUseRouter} from 'next/router';
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons';

enum baseWillStatus {
  Created, //0
  Started, //1
  Matured, //2
  ManuallySettled, //3
  Cancelled //4
}
interface IWillsInfo{
  willId:BigNumberish,
  assetId:string,
  s_baseStatus: string,
  willStartDate: BigNumberish,
  willMaturityDate:BigNumberish,
  Benefitors: number,
  willOwner: string, //BigInteger
  willManager: string, //BigInteger
  
  
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


function ManageWillsTable() {
  
 // const router = useNavigate();
 //const router = routUseRouter();
 const router = navUseRouter();
 const [willInfoData, setWillInfoData] = useState(null)

  const { address, connector, isConnected } = useAccount()
  const [assetId, setAssetId] = useState('')
  const [willId, setWillId] = useState('')
  let { asId } = useParams();
  const createQueryStringToSendWillId 
  = (willId:string, value:string) => {
    const params = new URLSearchParams();
    params.set(willId, value);

    return params.toString();
  };

  const createQueryString = (willId:string, value:string) => {
    const params = new URLSearchParams();
    params.set(willId, value);

    return params.toString();
  };
//
const handleSettleProcess = (willsId:string) => {
  router.push(`/pageWillsSettle?${createQueryStringToSendWillId('willId',willsId)}`)
}
const handleCancelProcess=(willsId:string)=> {
  router.push(`/pageWillsManagerCancel?${createQueryStringToSendWillId('willId',willsId)}`)
}
  // const navigate = useNavigate();
  const handleProceed = (willInfo:string) => {
    // console.log(id, "home");
    //setWillId(willsId)
    console.log('---handleProceed---')
    console.log(willInfo)
    console.log('-----refactor below code after handling settle-----')
    router.push(`/pageWillsManagerEdit?${createQueryString('willInfo',willInfo)}`)
  // navigate("/WillsFormEdit",  
  //   {
  //     state: {
  //       userId: willsId,
  //     }
  //   }
  //   );
  // };
  }
  try {

    console.log(`addresss -----> ${address}`)
    // let d:any = [
    //   { willId: 0,
    //   assetId: 'ca-0',
    //   s_baseStatus: 'created',
    //   willStartDate: 20231201,
    //   willMaturityDate: 20231231,
    //   Benefitors: 1234567890,
    //   willOwner: '0x234243223423423',
    //   willManager: '0x9999999'
    // },
    // { willId: 1,
    //   assetId: 'ca-1',
    //   s_baseStatus: 'unsettled',
    //   willStartDate: 202310101,
    //   willMaturityDate: 20231231,
    //   Benefitors: 1234567890,
    //   willOwner: '0x234243223423423',
    //   willManager: '0x9999999'
    // }
    // ] ;
    
    let d:any = GetWillsByUsers(address)
    if(d.length>=0)
    {
            
            console.log(d[0])
          const trows = d.map((element:any) => (
            
            <tr key={element.assetId}>
              
              <td ><a href="" target="_blank">{element.willId.toString()}</a></td>
              <td >{element.assetId}</td>
              <td>{element.s_baseStatus}</td>
              <td><button onClick={()=>handleProceed(
                JSON.stringify({
                  willId: element.willId.toString(),
                  willMaturity: element.willMaturityDate.toString()
                })
                
                )}>edit</button></td>
                     <td><button 
              onClick={() => handleCancelProcess(
                  element.willId.toString())}
              >Cancel</button></td>
              <td><button 
              onClick={() => handleSettleProcess(
                  element.willId.toString())}
              >Settle</button></td>
              
              <td>{element.willStartDate.toString()}</td>
              <td>{element.willMaturityDate.toString()}</td>
              <td>{element.Benefitors}</td>
              <td>{element.willOwner}</td> 
              
              {/* <td>{element.willManager}</td>
              <td>{element.willOwner}</td> */}
              
            </tr>
          ));
      //ManageAssetsTable
 
          return (
            <div className="App">
          
                <h2>Wills Manager by User</h2>
                ---------
                <Table  highlightOnHover withColumnBorders>
                <thead>
                    <tr>
                    <th>will_Id</th>
                    <th>asset_Id</th>
                    <th>status</th>
                    <th>Edit</th>
                    <th>Cancel</th>
                    <th>Settle</th>
                    <th>startDate</th>
                    <th>endDate</th>
                    <th>Benefitors</th>
                    <th>manager</th>
                     <th>owner</th>
                    
                    
                    </tr>
                </thead>
                <tbody>{trows}</tbody>
                </Table>
                
            </div>
          );
    } else{
     return (
       <div className="App">
         
         <h1>No Wills to show</h1>
     
       </div>
     );
    }

  } catch (error) {
    console.log(`Ex-10: GetWillsByUsers - ${error}`)
  }
  return null;
 
}

export default ManageWillsTable;