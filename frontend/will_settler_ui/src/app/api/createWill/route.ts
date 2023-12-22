

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { createWillsSchema } from '../../validateSchema';

const prisma = new PrismaClient();



export async function POST(req:NextRequest, res:NextResponse) {
  console.log(`api --> '${req.method}'`)
  const body = await req.json();
  const validation = createWillsSchema.safeParse(body);
  console.log(body.will_Id)

    if (req.method === 'POST') {
      console.log(`POST method is called`)

      if(!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400})
      }
        console.log(`createWillsApi - POST  - incomingParams`)
        console.log(`'${body.will_Id}'-'${body.will_StartDate}'-'${body.will_EndDate}'`)
        try {
          // Perform database create operation with the received data
          const createdData = await prisma.will_info.create({
            data: {
                will_Id: body.will_Id,
                will_StartDate: body.will_StartDate,
                will_EndDate: body.will_EndDate,
                will_Owner: body.will_Owner,
                will_Manager: body.will_Manager,
                will_Status: body.will_Status,
                will_asset_Id: body.will_asset_Id,
                will_asset_Amount: body.will_asset_Amount,
                will_Benefitors: body.will_Benefitors
                /**  "will_Id": "4",
  "will_StartDate": "20230504",
  "will_EndDate" : "20230504",
  "will_Benefitors" : "0x1",
  "will_Owner": "0x1",
  "will_Status": "created",
  "will_asset_Id": "test0",
  "will_asset_Amount": "5",
  "will_Manager": "0x1"
   */
            },
          });

          /**will_Id Int @id
    will_StartDate Int
    will_EndDate Int
    will_Owner String
    will_Manager String
    will_Benefitors String
    will_Status Int
    will_asset_Id String
    will_asset_Amount Float */
          console.log(`createdData response from create Assets`)
          console.log(createdData)
          return NextResponse.json(createdData, { status: 201})
          
        } catch (ierror) {
          console.error('Error creating data:', ierror);
          return NextResponse.json({ error: `unable to create a record in database - '${ierror}'`}, { status : 500})
          
        }
      } else {
        // Handle other HTTP methods (e.g., GET, PUT, DELETE)
       // res.status(405).json({ error: 'Method Not Allowed' });
       return NextResponse.json({ error: 'method not allowed'})
      }
}
