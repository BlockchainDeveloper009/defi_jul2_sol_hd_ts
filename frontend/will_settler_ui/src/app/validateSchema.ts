import { any, z } from 'zod';

export const createAssetSchema = z.object({
  asset_Id: z.string().min(1, "Asset id is required").max(255),
  asset_Name: z.string().min(1, "Asset Name is required").max(255),
  asset_Amount: z.string().min(1,"Asset Amount is required")
});

export const createWillsSchema = z.object({
  will_Id: z.number().min(1, "will id is required").max(255),
  will_StartDate: z.number().min(1, "Will StartDate is required"),
  will_EndDate: z.number().min(1,"Will EndDate is required"),
  will_Owner: z.string().min(1,"Will will_Owner  is required"),
  will_Manager: z.string().min(1," will_Manager  is required"),
  will_Status: z.number().min(1,"will_Status  is required"),
  will_asset_Id: z.string().min(1,"will_asset_Id  is required"),
  will_asset_Amount: z.number().min(1,"will_asset_Amount Amount is required"),
  will_Benefitors: z.string().min(1,"will_Benefitors  is required")
});

export const AssetCCY = z.object({
  asset_ccy_Symbol: z.string().min(1, "Asset CCY is required").max(255),
  asset_ccy_Name: z.string().min(1, "Asset CCY Name is required").max(255),
  asset_ccy_Decimals: z.string().min(1,"Asset CCY Decimal is required")
 
});