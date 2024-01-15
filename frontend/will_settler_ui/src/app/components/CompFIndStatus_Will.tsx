import React, { useState } from 'react'
import {
    useAccount,
    useReadContract,
  } from "wagmi";
  import {
    CreateBondandAdminRole_CONTRACT_ABI,
    CreateBondandAdminRole_CONTRACT_ADDRESS,
  } from "../srcConstants";
  interface ComponentBProps {
    _willId: string;
  }

const CompFIndStatus_Will: React.FC<ComponentBProps> = ({ _willId }) => {
  const [va, setVa] = useState('')
        console.log(`_will_Id passed => ${_willId}`)
        if(_willId === null || _willId === undefined)
        {
            return (<div><h1>Invalid will id {_willId} passed </h1></div>)
        }
        //
        // refer code at link https://wagmi.sh/core/api/actions/readContract
        // to use wagmi core
     const {data, isError,error,isSuccess} = useReadContract({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      functionName: 'getWillStatus',
      args: [_willId]

    })
    
    if(isSuccess){
      console.log(`call success: data from CompFIndStatus_will`)
      console.log(data)
     
      return (
        <div><h2>Success_CompFIndStatus_Will {data.toString()}</h2></div>
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