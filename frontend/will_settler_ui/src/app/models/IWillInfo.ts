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