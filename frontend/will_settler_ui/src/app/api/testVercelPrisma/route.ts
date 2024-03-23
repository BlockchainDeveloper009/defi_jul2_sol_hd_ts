import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';


let prisma = new PrismaClient();
// export async function GET(request:NextRequest){
//         console.log(`in ReadContractInfo_API`)
//         const contractInfo = await ReadContractInfo();
//         console.log(`readContractInfo Api - ${contractInfo}`)
//         if(contractInfo)
//         {
//             return NextResponse.json(contractInfo);
//         } else{
//             return NextResponse.json({nodata:"no data found"});
//         }
        

// }

// export async function GET(request:NextRequest){
//     console.log(`in ReadContractInfo_API`)

//     const newUser = await prisma.user.create({
//         data: {
//           name: 'Elliott',
//           email: 'xelliottx@example-user.com',
//         },
//       });
     
//       const users = await prisma.user.findMany();

//     if(users)
//     {
//         return NextResponse.json(users);
//     } else{
//         return NextResponse.json({nodata:"no data found"});
//     }
    

// }
export async function GET(request:NextRequest){

        return NextResponse.json("iNVOKED VERCEL PRISMA POST");
    

}

export async function POST(request:NextRequest){

        console.log(`in ReadContractInfo_API`)

    const newUser = await prisma.user.create({
        data: {
          name: 'Elliott',
          email: 'xelliottx@example-user.com',
        },
      });
     
      const users = await prisma.user.findMany();

    if(users)
    {
        return NextResponse.json(users);
    } else{
        return NextResponse.json({nodata:"no data found"});
    }


}