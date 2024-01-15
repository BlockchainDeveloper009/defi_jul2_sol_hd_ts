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
    _assetId: string;
  }

const CompFIndStatus_Asset: React.FC<ComponentBProps> = ({ _assetId }) => {
  const [va, setVa] = useState('')
        console.log(`_assetId passed => ${_assetId}`)
        if(_assetId === null || _assetId === undefined)
        {
            return (<div><h1>Invalid asset id {_assetId} passed </h1></div>)
        }
        //
        // refer code at link https://wagmi.sh/core/api/actions/readContract
        // to use wagmi core
     const {data, isError,error,isSuccess} = useReadContract({
      address: CreateBondandAdminRole_CONTRACT_ADDRESS,
      abi: CreateBondandAdminRole_CONTRACT_ABI,
      functionName: 'getAssetStatus',
      args: [_assetId]

    })
    
    if(isSuccess){
      console.log(`data from CompFIndStatus_Asset`)
      console.log(data)
     
      return (
        <div><h2>CompFIndStatus_Asset {data.toString()}</h2></div>
      )
    } 
    if(error){
      return (
        <div><h2>Find Status Error: {error?.message}</h2></div>
      )
    }
    return <div>Loading...</div>;
  
}

export default CompFIndStatus_Asset