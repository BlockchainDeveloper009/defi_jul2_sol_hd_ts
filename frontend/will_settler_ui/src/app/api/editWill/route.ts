import {  createWillsSchema } from '@/app/validateSchema';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export async function PATCH (
    request: NextRequest,
    { params }: { params: {id: string}})
    {
        const body = await request.json();
        const validation = createWillsSchema.safeParse(body);

        if(!validation.success){
            //status 400 - Bad Request
            return NextResponse.json(validation.error.format(), {status: 400})
        }

        const will = await prisma.will_info.findUnique({
            where: { will_Id: parseInt(params.id)}
        })

        if(!will){
            // will not found
            return NextResponse.json({error: 'Invalid WIll id'}, { status: 404})
        }

        //if you are here, it means will is found & therefore update the WIll
        // might update Benefitor
        // should add validation to stop updating editor before 3 days.

        const updatedWill = await prisma.will_info.update(
            {
                where: { will_Id: will.will_Id},
                data: {
                    Benefitors: body.will_Benefitors,
                    will_EndDate: body.will_EndDate
                }
            }
        )

        return NextResponse.json(updatedWill);


    }

