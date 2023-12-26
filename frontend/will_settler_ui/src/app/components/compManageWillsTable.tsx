import { Table } from '@mantine/core';
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


function ManageWillsTable() {
  
 // const router = useNavigate();
 //const router = routUseRouter();
 const router = navUseRouter();
 

  const { address, connector, isConnected } = useAccount()
  const [assetId, setAssetId] = useState('')
  const [willId, setWillId] = useState('')
  let { asId } = useParams();
  // const navigate = useNavigate();
  const handleProceed = (willsId:string) => {
    // console.log(id, "home");
    setWillId(willsId)
    console.log('---handleProceed---')
    console.log(willsId)
    console.log('----------')
    router.push(`/pageWillsManagerDetails?willId=${willsId}`)
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
              <td ><a href="" target="_blank">{element.assetId}</a></td>
              <td><button onClick={()=>handleProceed(element.willId.toString())}>edit</button></td>
              <td>{element.s_baseStatus}</td>
              <td>{element.willMaturityDate.toString()}</td>
              <td>{element.willStartDate.toString()}</td>
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