import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

class nameMapping{
        englishName:string;
        TamilName_2020:string;
        vatelluthuName: string;



        constructor(n:string,m:string,s:string){
                this.englishName = n;
                this.TamilName_2020 = m;
                this.vatelluthuName =s
                
        }
}
const harish = new nameMapping('HARISH','ஹரிஷ்','𑀳𑀭𑀺𑀱𑁆');
const nethran = new nameMapping('nethran',' நேத்திரன்','𑀦𑁂𑀢𑁆𑀢𑀺𑀭𑀷𑁆');
const aarthi = new nameMapping('aarthi','ஆர்த்தி','𑀆𑀭𑁆𑀢𑁆𑀢𑀺');

let prisma = new PrismaClient();
export async function GET(request:NextRequest){
        const asstCCY = await prisma.assets.findMany()
        /**
         * 
         * 
Tamil-Brahmi is an ancient script used for writing the Tamil language. It is one of the earliest scripts used in the Indian subcontinent. The script has evolved over time, and the early Tamil-Brahmi script had characters representing different sounds in the Tamil language.

Here are some examples of Tamil-Brahmi letters:

அ (A) - Represents the short vowel "a."
ஆ (AA) - Represents the long vowel "aa."
இ (I) - Represents the short vowel "i."
ஈ (II) - Represents the long vowel "ii."
உ (U) - Represents the short vowel "u."
ஊ (UU) - Represents the long vowel "uu."
எ (E) - Represents the short vowel "e."
ஏ (EE) - Represents the long vowel "ee."
ஐ (AI) - Represents the diphthong "ai."
ஒ (O) - Represents the short vowel "o."
ஓ (OO) - Represents the long vowel "oo."
ஔ (AU) - Represents the diphthong "au."
         */
        return NextResponse.json(["","BTC"]);

}