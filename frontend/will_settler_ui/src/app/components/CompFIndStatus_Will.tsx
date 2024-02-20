import React, { useEffect, useState } from 'react'
import {
    useAccount,
    useReadContract,
  } from "wagmi";
  import {
    WillsCreator_CONTRACT_ADDRESS_ABI,
    WillsCreator_CONTRACT_ADDRESS,
  } from "../SrcConstants_Wills";
  interface ComponentBProps {
    _willId: string;
  }

const CompFIndStatus_Will: React.FC<ComponentBProps> = 
({ _willId }) => {
          const [will_status, setWill_Status] = useState<any>()
          const [will_id, setWill_id] = useState('');

          useEffect(()=> {
            setWill_id(_willId);
          },[will_id])
          console.log(`_will_Id passed => ${_willId}`)
          if(_willId === null || _willId === undefined)
          {
              return (<div><h1>Invalid will id {_willId} passed </h1></div>)
          }
          //
          // refer code at link https://wagmi.sh/core/api/actions/readContract
          // to use wagmi core
        const {data, isError,error,isSuccess} = useReadContract({
        address: WillsCreator_CONTRACT_ADDRESS,
        abi: WillsCreator_CONTRACT_ADDRESS_ABI,
        functionName: 'getWillStatus',
        args: [_willId]

        })
    console.log(`-willstatus-${_willId}-`)
    console.log(data)
    let t = data;
    console.log(`---------`)
    if(isSuccess){
      console.log(`call success: data from CompFIndStatus_will`)
      useEffect(()=>{
        setWill_Status(t);
        
      },[will_status])
      
      return (
        <div><h2>WillStatus -{will_status}-</h2></div>
      )
    } 
    if(error){
      return (
        <div><h2>Find Status Error: {error?.message}</h2></div>
      )
    }
    return <div>Loading...</div>;
  
}

export default CompFIndStatus_Will