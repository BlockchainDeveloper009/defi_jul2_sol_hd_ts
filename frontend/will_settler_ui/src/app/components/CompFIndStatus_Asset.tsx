import React, { useState } from 'react'
import {
    useAccount,
    useReadContract,
  } from "wagmi";
  import {
    Assets_CONTRACT_ADDRESS,
    Assets_CONTRACT_ADDRESS_ABI,
  } from "../SrcConstants_Assets";
  interface ComponentBProps {
    _assetId: string;
  }

const CompFIndStatus_Asset: React.FC<ComponentBProps> = 
({ _assetId }) => {
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
      address: Assets_CONTRACT_ADDRESS,
      abi: Assets_CONTRACT_ADDRESS_ABI,
      functionName: 'getAssetStatus',
      args: [_assetId]

    })
    console.log(data)
    if(isSuccess){
      console.log(`data from CompFIndStatus_Asset`)
      console.log(data)
     
      return (
        <div><h2>CompFIndStatus_Asset {data as string}</h2></div>
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