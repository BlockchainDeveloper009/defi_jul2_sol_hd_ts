
import { NextApiRequest, NextApiResponse } from 'next'
import { Assets, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { createAssetSchema } from '../../validateSchema';
//import fs from 'fs';
import FileHelper from '../../../../FileHelper';
import JsonHelper from '@/app/utils/JsonHelper';
import Data from '@/app/utils/JsonHelper';
import TimeHelper from '@/app/utils/TimeHelper';

const prisma = new PrismaClient();

class asset {
  

  public "asset_Id": string;
  public "asset_Name": string;
  public "asset_Amount": Number;
}




let filePath = 'src/app/utils/example.json';
let folderLocation = 'src/app/utils/AssetsTransactionTable/';

export async function GET(req:NextRequest, res:NextResponse) { 
    
  if (req.method === 'GET') {
   try {
    console.log(`GET method is called`)
    console.log(`api --> '${req.method}'`)
    

    let jsonArray: Data[] = [];
    // const body = await req.json();
  let body =  await FileHelper.readFIle(folderLocation)

    console.log(`--body---`)
    console.log(body)
    console.log(`-----`)

    let createdData = body; //JsonHelper.parseJson<asset>(body)
    console.log(`--createdData---`)
    console.log(createdData)
    console.log(`-----`)
    return NextResponse.json(createdData, { status: 201})
   } catch (error) {
    console.error('Error creating data:', error);
    return NextResponse.json({ error: 'internal server error'})
   }

}else {
    // Handle other HTTP methods (e.g., GET, PUT, DELETE)
   // res.status(405).json({ error: 'Method Not Allowed' });
   return NextResponse.json({ error: 'method not allowed'})
}


  return NextResponse.json('GET is not allowed for this endpoint', { status: 400})

}

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
          // const createdData = await prisma.assets.create({
          //   // data: {
          //   //     asset_Id: body.asset_Id,
          //   //     asset_Amount: body.asset_Amount,
          //   //     asset_Category: 1,
          //   //     asset_isAvailable : 1,
          //   //     asset_Name: body.asset_Name,
          //   //     asset_Status: 1
          //   // },
          // });
          // console.log(`createdData response from create Assets`)

          // console.log(createdData)
          // return NextResponse.json(createdData, { status: 201})
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

export async function PUT(req:NextRequest, res:NextResponse) {
  console.log(`api --> '${req.method}'`)
  const body = await req.json();
  

  if (req.method === 'PUT') {
        console.log(`PUT method is called`)
        //let createdData = JsonHelper.stringifyJson(body)
      // removed parsing, because direct body works as is
        // const newData: Data = JsonHelper.parseJson<Data>(body)
      console.log(`----body---`)

      console.log(body.asset_tx.assetCurrency) 
      console.log(body.asset_tx.walletAddr)
      console.log(`---ends---`)
      let filePath2;
      
      if(body.asset_tx.assetCreatorAddr === null || undefined){
          filePath2 = `${folderLocation}${'miscellaneous'}.json`
      }else{
        filePath2 = `${folderLocation}${body.asset_tx.walletAddr}.json`
      }
      console.log(`filepath formed: '${filePath2}'`)
      const api_entry_timestamp = TimeHelper.getTimeStampISOString();
      const dataWithTimestamp = { ...body, api_entry_timestamp };

        try { 

        
          await JsonHelper.appendToJsonArrayFile(filePath2, dataWithTimestamp);
          return NextResponse.json(body, { status: 201})
          } catch (error) {
                    console.error('Error creating data:', error);
                    return NextResponse.json({ error: 'internal server error'})
                    //res.status(500).json({ error: 'Internal Server Error' });
          }
    
  }  else {
        // Handle other HTTP methods (e.g., GET, PUT, DELETE)
       // res.status(405).json({ error: 'Method Not Allowed' });
       return NextResponse.json({ error: 'method not allowed'})
  }
}
