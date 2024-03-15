import { Table } from '@mantine/core';
import { BigNumberish } from 'ethers';
import { useState } from 'react';


import {
 
  Assets_CONTRACT_ADDRESS_ABI,
  Assets_CONTRACT_ADDRESS,
} from "../SrcConstants_Assets";

import { BrowserRouter, Routes, useNavigate, useParams } from "react-router-dom";
import { formatEther } from 'viem'

import { useAccount, useReadContract } from 'wagmi';
import { IAssets } from '../models/IAssets';
import { errAssetByUsers } from '../Errors';
import { AnyAaaaRecord } from 'dns';

interface IAss {
  AssetAmount:string,
  AssetCreator:string,
  AssetId: string,
  AssetName: string,
  assetStatus: number,
  isAvailable: boolean
}
function GetAssetStaus(assetId:string) {
  console.log(`contractAddr= '${Assets_CONTRACT_ADDRESS}'`);
  const { data:functionData,status} = useReadContract({
    address: Assets_CONTRACT_ADDRESS,
    abi: Assets_CONTRACT_ADDRESS_ABI,
    functionName: 'getAssetStatus',
    args: [assetId]
    
  })
  return functionData as string;
}
function  GetAssetsByUsers(customerAddr:any):IAss[] {
  
  console.log(`contractAddr= '${Assets_CONTRACT_ADDRESS}'`);
  console.log(`---getAssets by----- ${customerAddr}`);
  

  const { data:functionData,status} = useReadContract({
    address: Assets_CONTRACT_ADDRESS,
    abi: Assets_CONTRACT_ADDRESS_ABI,
    functionName: 'getUserCreatedAssets',
    args: [customerAddr]
    
  })
  
  
 
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
    console.log(`customer address -> ${address}`)

//[{ assetId:'0',assetName='test0' },{ assetId:'1',assetName='test1' }]
    let d:any =  GetAssetsByUsers(address) //[ { willId: '0'}, {willId: '1'}] 
    
    if(d.length>=0)
    {
      console.log('values')
            
            console.log(d)
            
          const trows = d.map((element:any) => (
     
            <tr key={element.AssetId}>
              
              {/* <td ><a href="" target="_blank">{element.assetId}</a></td> */}
              <td>{element.AssetId}</td>
              <td>{element.AssetName}</td>
              {/* <td>{GetAssetStaus(element.assid)}</td> */}
              <td>{element.AssetTokenAddress}</td>
              <td>{element.assetStatus}</td>
              <td>{element.isAvailable}</td> 

       
              <td><button onClick={()=>handleProceed(element.assid)}>handleAssetBttn</button></td>
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
                            <th>AssetTokenAddr</th>
                            <th>Asset_Amount</th>
                            <th>IsAvailable_flg</th>
                            <th>asset_handler</th>
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