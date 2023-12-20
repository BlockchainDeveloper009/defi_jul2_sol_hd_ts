
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req:NextApiRequest, res:NextApiResponse) {
  console.log(`api --> '${req.method}'`)
    if (req.method === 'POST') {
        // For POST requests, you can access data from req.body
        const { assetId, assetName, assetAmount } = req.body;
    
        try {
          // Perform database create operation with the received data
          const createdData = await prisma.assets.create({
            data: {
                asset_Id: assetId,
                asset_Amount: assetAmount,
                asset_Category: 1,
                asset_isAvailable : 1,
                asset_Name: assetName,
                asset_Status: 1
            },
          });
          NextResponse.json(createdData)
          //res.status(201).json(createdData);
        } catch (error) {
          console.error('Error creating data:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        // Handle other HTTP methods (e.g., GET, PUT, DELETE)
        res.status(405).json({ error: 'Method Not Allowed' });
      }
}
