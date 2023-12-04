import { Table } from '@mantine/core';
import { BigNumberish } from 'ethers';

import {  getContract, 
  useContractRead, useContractWrite,
   usePrepareContractWrite, useWaitForTransaction } from './wrapperForWagmi'

import {
  debugFlag,
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';


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
// function GetWillsByUsers(stttt:any) {
//   const { data:functionData,status} = useContractRead({
//     address: CreateBondandAdminRole_CONTRACT_ADDRESS,
//     abi: CreateBondandAdminRole_CONTRACT_ABI,
//     functionName: 'getUserCreatedBonds',
//     args: [stttt]
    
//   })
  
  
//   console.log('---getUserCreatedBonds-----')
//   console.log(functionData)
//   console.log('---------------')
//   let retData:WillsData[];
//   retData = functionData as Array<WillsData>;
//   console.log(retData)
//   return retData 

// }


function ManageWillsTable() {
  const address = '0x'
  const isConnected = 'false'
  //const { address, connector, isConnected } = useAccount()
  const [assetId, setAssetId] = useState('')
  const [willsId, setWillsId] = useState('')
  let { asId } = useParams();
  // const navigate = useNavigate();
  // const handleProceed = (assetId:string) => {
  //   // console.log(id, "home");
  //   setWillsId(assetId)
  //   console.log('---handleProceed---')
  //   console.log(assetId)
  //   console.log('----------')
  //   navigate("/WillsFormEdit",  
  //   {
  //     state: {
  //       userId: assetId,
  //     }
  //   }
  //   );
  // };

  try {

    console.log(`addresss -----> ${address}`)
    let d:any = [] ; //GetWillsByUsers(address)
    if(isConnected && d.length>=0)
    {
          //   console.log(d[0].willId);
            
          // const trows = d.map((element) => (
          //   <tr key={element.assetId}>
              
          //     <td ><a href="" target="_blank">{element.willId.toString()}</a></td>
          //     <td ><a href="" target="_blank">{element.assetId}</a></td>
          //     <td>{element.s_baseStatus}</td>
          //     <td>{element.willMaturityDate.toString()}</td>
          //     <td>{element.willStartDate.toString()}</td>
          //     <td>{element.Benefitors}</td>
          //     <td><button onClick={()=>handleProceed(element.willId.toString())}></button></td>
          //     {/* <td>{element.willManager}</td>
          //     <td>{element.willOwner}</td> */}
              
          //   </tr>
          // ));
      //ManageAssetsTable
 
          return (
            <div className="App">
          
                <h2>Wills Manager by User</h2>
                ---------
                <Table  highlightOnHover withColumnBorders>
                <thead>
                    <tr>
                    <th>will_Id</th>
                    <th>status</th>
                    <th>startDate</th>
                    <th>endDate</th>
                    <th>Benefitors</th>
                    <th>manager</th>
                    {/* <th>owner</th>
                    <th>manager</th>
                    */}
                    </tr>
                </thead>
                {/* <tbody>{trows}</tbody> */}
                </Table>

               


                
            </div>
          );
    } else{
     return (
       <div className="App">
         
         
     
       </div>
     );
    }



    
  } catch (error) {
    console.log(`Ex-1: GetWillsByUsers - ${error}`)
  }
  return null;
 
    
   
}

export default ManageWillsTable;