

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { createWillsSchema } from '../../validateSchema';
import { WillsCreator_CONTRACT_ADDRESS, WillsCreator_CONTRACT_ADDRESS_ABI } from '@/app/SrcConstants_Wills'
import { AlchemyProvider, ethers } from 'ethers';

import FileHelper from '../../../../FileHelper';
import JsonHelper from '@/app/utils/JsonHelper';
import Data from '@/app/utils/JsonHelper';
import TimeHelper from '@/app/utils/TimeHelper';



//const prisma = new PrismaClient();

let folderLocation = 'src/app/utils/WillsTransactionTable/';

export async function POST(req:NextRequest, res:NextResponse) {
  // console.log(`api --> '${req.method}'`)
  // const body = await req.json();
  // const validation = createWillsSchema.safeParse(body);
  // console.log(body.will_Id)

  //   if (req.method === 'POST') {
  //     console.log(`POST method is called`)

  //     if(!validation.success) {
  //       return NextResponse.json(validation.error.errors, { status: 400})
  //     }
  //       console.log(`createWillsApi - POST  - incomingParams`)
  //       console.log(`'${body.will_Id}'-'${body.will_StartDate}'-'${body.will_EndDate}'`)
  //       try {
  //         // Perform database create operation with the received data
  //         const createdData = await prisma.will_info.create({
  //           data: {
  //               will_Id: body.will_Id,
  //               will_StartDate: body.will_StartDate,
  //               will_EndDate: body.will_EndDate,
  //               will_Owner: body.will_Owner,
  //               will_Manager: body.will_Manager,
  //               will_Status: body.will_Status,
  //               will_asset_Id: body.will_asset_Id,
  //               will_asset_Amount: body.will_asset_Amount,
  //               will_Benefitors: body.will_Benefitors
  //               /**  "will_Id": "4",
  // "will_StartDate": "20230504",
  // "will_EndDate" : "20230504",
  // "will_Benefitors" : "0x1",
  // "will_Owner": "0x1",
  // "will_Status": "created",
  // "will_asset_Id": "test0",
  // "will_asset_Amount": "5",
  // "will_Manager": "0x1"
  //  */
  //           },
  //         });

  //         /**will_Id Int @id
  //   will_StartDate Int
  //   will_EndDate Int
  //   will_Owner String
  //   will_Manager String
  //   will_Benefitors String
  //   will_Status Int
  //   will_asset_Id String
  //   will_asset_Amount Float */
  //         console.log(`createdData response from create Assets`)
  //         console.log(createdData)
  //         return NextResponse.json(createdData, { status: 201})
          
  //       } catch (ierror) {
  //         console.error('Error creating data:', ierror);
  //         return NextResponse.json({ error: `unable to create a record in database - '${ierror}'`}, { status : 500})
          
  //       }
  //     } else {
  //       // Handle other HTTP methods (e.g., GET, PUT, DELETE)
  //      // res.status(405).json({ error: 'Method Not Allowed' });
  //      return NextResponse.json({ error: 'method not allowed'})
  //     }
}

export async function GET() {
  // Infura endpoint for the Polygon Mumbai testnet
  // Connect to mainnet (homestead)
  let apiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ'
//let provider = new AlchemyProvider();

// Connect to the goerli testnet
// (see EtherscanProvider above for other network examples)
//provider = new AlchemyProvider("goerli");

// Connect to mainnet with an API key (these are equivalent)
let provider = new AlchemyProvider("maticmum", apiKey);
//provider = new AlchemyProvider("homestead", apiKey);

// Connect to the Alchemy WebSocket endpoints with a WebSocketProvider
//provider = AlchemyProvider.getWebSocketProvider()
  
  
  
  
  //('https://polygon-mumbai.g.alchemy.com/v2/3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ');
    //'https://polygon-mumbai.infura.io/v3/YOUR_INFURA_PROJECT_ID');

  // ABI and contract address of the smart contract
  const abi = WillsCreator_CONTRACT_ADDRESS_ABI // Your contract ABI
  const contractAddress = WillsCreator_CONTRACT_ADDRESS; // Your contract address

  // Connect to the contract
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Subscribe to the event
  contract.on('willCreated', (data:any) => {
      console.log('Received event:', data);
      // Process the event data here
  });

  console.log('Listening for events...');
}
export async function PUT(req:NextRequest, res:NextResponse) {
  console.log(`api --> '${req.method}'`)
  const body = await req.json();
  if (req.method === 'PUT') {
    console.log(`PUT method is called`)
    console.log(body.will_tx.assetCurrency)

    let filePath2;

    if(body.will_tx.willCreatorAddr === null || undefined){
      filePath2 = `${folderLocation}${'wills_miscellaneous'}.json`
      }else{
        console.log(`--body.will_tx---${body.will_tx}--`)
        console.log(body.will_tx)
        console.log(`----`)
        console.log(body.will_tx.walletAddr)
        console.log(`----`)
        filePath2 = `${folderLocation}${body.will_tx.walletAddr}.json`
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

  } else {
    return NextResponse.json({ error: 'method not allowed'})
  }

 




  

}


