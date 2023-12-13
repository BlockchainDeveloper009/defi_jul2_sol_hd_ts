import { BigNumberish } from 'ethers';

export interface IAssets {
    assetId:string,
    
    assetName: string,
    asset_amount: BigInt,
    asset_Category:BigNumberish,
    isAvailable: number,
    assetStatus:number,
    
   }