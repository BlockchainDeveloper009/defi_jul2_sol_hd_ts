import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { ReadContractInfo } from '../../data_mongoose/ReadContractInfo.js'; 

let prisma = new PrismaClient();
export async function GET(request:NextRequest){
        console.log(`in ReadContractInfo_API`)
        const contractInfo = await ReadContractInfo();
        console.log(`readContractInfo Api - ${contractInfo}`)
        if(contractInfo)
        {
            return NextResponse.json(contractInfo);
        } else{
            return NextResponse.json({nodata:"no data found"});
        }
        

}