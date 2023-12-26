import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
let prisma = new PrismaClient();
export async function GET(request:NextRequest){
        const asstCCY = await prisma.assets.findMany()
        return NextResponse.json(["ETH","BTC"]);

}