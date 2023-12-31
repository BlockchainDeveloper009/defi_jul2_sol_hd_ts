//isWillCreationSuccess

import { BigNumberish } from 'ethers';

export interface IWillInfo {
    willId: number,
    assetId:string,
    willStartDate: number,
    willEndDate: number,
    willOwner: number,
    willManager:number,
    Benefitors: number,
    willStatus: number
    assetAmount: BigNumberish
    
   }

   export interface IUseWillsInfo{
    willId:BigNumberish,
    assetId:string,
    s_baseStatus: string,
    willStartDate: BigNumberish,
    willMaturityDate:BigNumberish,
    Benefitors: number,
    willOwner: string, //BigInteger
    willManager: string, //BigInteger
    
    
  }