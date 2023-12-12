import { Table } from '@mantine/core';
import { BigNumberish } from 'ethers';
import { useState } from 'react';
import {  useContractRead } from './wrapperForWagmi'

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";

import { BrowserRouter, Routes, useNavigate, useParams } from "react-router-dom";
import { formatEther } from 'viem'
import CompWagmiTestProvider from './CompWagmiTestProvider';
import { useAccount } from 'wagmi';

interface IAssets {
  assetId:string,
  
  assetName: string,
  asset_amount: BigInt,
  asset_Category:BigNumberish,
  isAvailable: number,
  assetStatus:number,
  
 }
function GetAssetStaus(assetId:string) {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getAssetStatus',
    args: [assetId]
    
  })
  return functionData;
}
function  GetAssetsByUsers():IAssets[] {
  
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getAllAsset',
    args: []
    
  })
  const { address } = useAccount()
  
  console.log('---getUserCreatedBonds-----')
  console.log(address)
  console.log('--expect use address')
  console.log('expect function data')
  console.log(functionData)
  console.log('---------')
  
  let retData = functionData as Array<IAssets>;
  console.log('decode values')
  console.log(retData[0].assetName)
  return retData 

}


function ManageAssetsTable() {
  
  const [assetId, setAssetId] = useState('')
  const [willsId, setWillsId] = useState()
  const { isConnected } = useAccount()
  let { asId } = useParams();
  // const navigate = useNavigate();
  const handleProceed = (assetId:string) => {
    // console.log(id, "home");
    setAssetId(assetId)
    console.log('---handleProceed---')
    console.log(assetId)
    console.log('----------')
    // navigate("/WillsFormEdit",  
    // {
    //   state: {
    //     userId: assetId,
    //   }
    // }
    // );
  };

  try {

//[{ assetId:'0',assetName='test0' },{ assetId:'1',assetName='test1' }]
    let d :IAssets[] =  GetAssetsByUsers() //[ { willId: '0'}, {willId: '1'}] 
    if(d.length>=0)
    {
      console.log('values')
            console.log(d[0].assetId);
            console.log(d)
          const trows = d.map((element) => (
            <tr key={element.assetId}>
              
              {/* <td ><a href="" target="_blank">{element.assetId}</a></td> */}
              let assId = element.assetId.tostring();
              <td>{element.assetId}</td>
              <td>{GetAssetStaus(asId)}</td>
       
              <td><button onClick={()=>handleProceed(element.assetId)}></button></td>
              {/* <td>{element.willManager}</td>
              <td>{element.willOwner}</td> */}
              
            </tr>
          ));
              
          console.log(trows)
 
          return (
            <div className="App">
          
            
                ---------
                <Table  highlightOnHover withColumnBorders>
                      <thead>
                          <tr>
                            <th>assetId</th>
                            <th>assetName</th>
                          </tr>
                      </thead>
                      {/* <BrowserRouter> 
                        <Routes>
                          
                        </Routes>
                      </BrowserRouter> */}
                      <tbody>{trows}</tbody>
                </Table>
            </div>
          );
    } else{
     return (
       <div className="App">
         
         <h1>No Assets found</h1>
     
       </div>
     );
    }
    // return (
    //   <div className="App">
    //     <CompWagmiTestProvider/>
      
    //       ---------
    //       <Table  highlightOnHover withColumnBorders>
    //           <thead>
    //               <tr>
    //               <th>assetId</th>
    //               <th>status</th>
    //               <th>startDate</th>
    //               <th>endDate</th>
    //               <th>Benefitors</th>
    //               <th>manager</th>
    //               {/* <th>owner</th>
    //               <th>manager</th>
    //               */}
    //               </tr>
    //           </thead>
         
    //       </Table>

    //   </div>
    // );


    
  } catch (error) {
    console.log(`ER-1: GetAssetsByUsers page`)
    console.log(`${error}`)
  }
  return null;
 
   
}

export default ManageAssetsTable;