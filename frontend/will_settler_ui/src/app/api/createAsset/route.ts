
import { NextApiRequest, NextApiResponse } from 'next'
import { Assets, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { createAssetSchema } from './validateSchema';
//import { parseBody } from 'next/dist/server/api-utils'
const prisma = new PrismaClient();

//npm i classname | to manage className for us
//npm i zod
//helps to  interact with data validation library like zod
//npm i @hookform/resolvers@3.3.1

export async function POST(req:NextRequest, res:NextResponse) {
  console.log(`api --> '${req.method}'`)
  const body = await req.json();
  const validation = createAssetSchema.safeParse(body);
  console.log(body.asset_Id)

    if (req.method === 'POST') {
      console.log(`POST method is called`)

      if(!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400})
      }


        // For POST requests, you can access data from req.body
        
        if(!body.asset_Id) return NextResponse.json({"message": "Asset id required"})
        if(!body.asset_Name) return NextResponse.json({"message": "asset_Name required"})
        if(!body.asset_Amount) return NextResponse.json({"message": "asset_Amount required"})

        console.log(`createAssetApi - POST  - incomingParams`)
        console.log(`'${body.asset_Id}'-'${body.asset_Name}'-'${body.asset_Amount}'`)
        try {
          // Perform database create operation with the received data
          const createdData = await prisma.assets.create({
            data: {
                asset_Id: body.asset_Id,
                asset_Amount: body.asset_Amount,
                asset_Category: 1,
                asset_isAvailable : 1,
                asset_Name: body.asset_Name,
                asset_Status: 1
            },
          });
          console.log(`createdData response from create Assets`)
          console.log(createdData)
          return NextResponse.json(createdData, { status: 201})
          //res.status(201).json(createdData);
        } catch (error) {
          console.error('Error creating data:', error);
          return NextResponse.json({ error: 'internal server error'})
          //res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        // Handle other HTTP methods (e.g., GET, PUT, DELETE)
       // res.status(405).json({ error: 'Method Not Allowed' });
       return NextResponse.json({ error: 'method not allowed'})
      }
}
