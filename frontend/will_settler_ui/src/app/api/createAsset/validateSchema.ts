import { any, z } from 'zod';

export const createAssetSchema = z.object({
  asset_Id: z.string().min(1).max(255),
  asset_Name: z.string().min(1).max(255),
  asset_Amount: z.string().min(1)
});
