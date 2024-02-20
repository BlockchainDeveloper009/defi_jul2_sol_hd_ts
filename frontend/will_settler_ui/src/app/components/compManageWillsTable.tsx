import { Box, Table } from '@mantine/core';
import { BigNumberish } from 'ethers';



import {
  
  WillsCreator_CONTRACT_ADDRESS,
  WillsCreator_CONTRACT_ADDRESS_ABI,
} from "../SrcConstants_Wills";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { useRouter as navUseRouter} from 'next/navigation';
import { useRouter as routUseRouter} from 'next/router';
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons';
import CSVDownloadButton from './CSVDownloadButton';
import { IUseWillsInfo } from '../models/IWillInfo';
import { abiwillCreator } from './abiwillCreator';
import { readContract } from '@wagmi/core';
import { config } from '@/wagmi';

enum baseWillStatus {
  Created, //0
  Started, //1
  Matured, //2
  ManuallySettled, //3
  Cancelled //4
}

function GetWillsByUsers(stttt:any) {
  console.log(`willCreator_contractor_Address: '${WillsCreator_CONTRACT_ADDRESS}'`);
  console.log(`incoming value: ${stttt}`)
  const result = useReadContract({
    address: WillsCreator_CONTRACT_ADDRESS,
    abi: abiwillCreator,
    functionName: 'getUserCreatedBonds',
    args: [stttt]
    
  })
  
  
  console.log('---getWillsByUsers-----')
  console.log(result.data)
  console.log(result.isLoading)
  console.log(result.data)
  console.log(result.error)

  console.log('---------------')
  let retData:IUseWillsInfo[];
  //retData = result as Array<IUseWillsInfo>;
  //console.log(retData)
  return result 

}

/*
 * converts time stamp to formatted data
 * @returns 
 *   - Loads list of wills owned by user
 *   - Wills Edit  - pageWillsManagerEdit
 *   - Wills Cancel
 *   - Wills Settle
*/

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
function convertUnixTimestampToDateString(unixTimestamp: any): import("react").ReactNode {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  console.log(`unixTimestamp=> ${unixTimestamp}`)
  let t = date.toLocaleDateString(undefined, options);
  console.log(`convertedTime -> ${t}`)
  return t;
  //throw new Error('Function not implemented.');
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
  async function getWillStat(_willId:string){
    // const {data, isError,error,isSuccess} = useReadContract({
    //   address: WillsCreator_CONTRACT_ADDRESS,
    //   abi: WillsCreator_CONTRACT_ADDRESS_ABI,
    //   functionName: 'getWillStatus',
    //   args: [_willId]

    //   })
    //   return data;
    const result = await readContract(config, {
      abi: WillsCreator_CONTRACT_ADDRESS_ABI,
      address: WillsCreator_CONTRACT_ADDRESS,
      functionName: 'getWillStatus',
      args:[_willId]
    })
    console.log(`====in getwill Stat====`)
    console.log(result)
    console.log(`====in getwill ends====`)
    return result;
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
    
    let d:any = GetWillsByUsers('0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1')
    console.log(`wills read---------`)
    console.log(d.data.length)
    console.log(d.length)
    console.log(d.data)
    console.log(d)
    let stat:{ [key: string]: string }={
      "0":"Started"
    }; 
    for(let i=0;i<d.data.length;i++){
      console.log(`in for loop`)
      console.log((d.data[i].willId).toString())
      let r = (d.data[i].willId).toString();
      let s1 =  getWillStat(r).then(s=> 
                {
                  console.log(`-stat then-`)
                  console.log(s)
                  stat["h"]= s.toString();     

                    console.log(`=stat ends=`)
              })
              .catch(er => {
                console.log(`==error in catch of promise in for loop==`)
                console.log(er)
                console.log(`====`)
              });
      
    //  stat[r] = getWillStat(d.data[i].willId)
    }// for loop ends here
    console.log(`171::all will status`)
    console.log(stat)
    console.log(`----------`)
    if(d.data.length>=0)
    {
      
          
          const trows = d.data.map((element:any) => (
            
            <tr key={element.willId}>
              
              <td ><a href="" target="_blank">{element.willId.toString()}</a></td>
              <td >{element.assetId}</td>
              <td >{element.will_status}</td>
              
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
              
              
              <td >{convertUnixTimestampToDateString(element.willStartDate.toString())}</td>
              {/* <td onClick={()=>convertUnixTimestampToDateString(element.willMaturityDate.toString())}>{element.willMaturityDate.toString()}</td> */}
              <td >{convertUnixTimestampToDateString(element.willMaturityDate.toString())}</td>
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
                    <th>will_status</th>
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
                {trows && <CSVDownloadButton data={d} filename="my_data" />}
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



