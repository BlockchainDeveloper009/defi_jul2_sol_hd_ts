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
import { IAssets } from '../models/IAssets';
import { errAssetByUsers } from '../Errors';
import { AnyAaaaRecord } from 'dns';

interface IAss {
  assid:string
}
function GetAssetStaus(assetId:string) {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getAssetStatus',
    args: [assetId]
    
  })
  return functionData as string;
}
function  GetAssetsByUsers(customerAddr:any):IAss[] {
  
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getUserCreatedAssets',
    args: [customerAddr]
    
  })
  
  
  console.log('---getUserCreatedBonds-----')
  console.log(customerAddr)
  console.log('--expect use address')
  console.log('expect function data')
  console.log(functionData)
  console.log('---------')
  
  let retData = functionData as Array<IAss>;
  console.log('decode values')
  console.log(retData)
  return retData 

}
/**next/link should be able to cover most of your routing needs, but you can also do client-side navigations without it, take a look at the documentation for next/router.

The following example shows how to do basic page navigations with useRouter: */

function ManageAssetsTable() {
  
  const [assetId, setAssetId] = useState('')
  const [willsId, setWillsId] = useState()
  const { address,isConnected } = useAccount()
  let { asId } = useParams();
 
  const handleProceed = (assetId:string) => {
  
    setAssetId(assetId)
    console.log('---handleProceed---')
    console.log(assetId)
    console.log('----------')

  };

  try {

//[{ assetId:'0',assetName='test0' },{ assetId:'1',assetName='test1' }]
    let d:any =  GetAssetsByUsers(address) //[ { willId: '0'}, {willId: '1'}] 
    if(d.length>=0)
    {
      console.log('values')
            
            console.log(d)
            
          const trows = d.map((element:any) => (
     
            <tr key={element.assid}>
              
              {/* <td ><a href="" target="_blank">{element.assetId}</a></td> */}
              
              <td>{element}</td>
              {/* <td>{GetAssetStaus(element.assid)}</td> */}
       
              <td><button onClick={()=>handleProceed(element.assid)}></button></td>
              {/* <td>{element.willManager}</td>
              <td>{element.willOwner}</td> */}
              
            </tr>
          ));
              
          console.log(trows)
 
          return (
            <div className="App">
                
            {!address && <div><p>Account not connected</p></div>}


                <Table  highlightOnHover withColumnBorders>
                      <thead>
                          <tr>
                            <th>assetId</th>
                            <th>assetName</th>
                          </tr>
                      </thead>

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
    

    
  } catch (error) {
    console.log(errAssetByUsers)
    console.log(`${error}`)
  }
  return null;
 
   
}

export default ManageAssetsTable;