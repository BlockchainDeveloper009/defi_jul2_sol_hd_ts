let { PrismaClient } = require('@prisma/client')
//import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
 
export default async function prismaExample() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Elliott',
      email: 'xelliottx@example-user.com',
    },
  });
 
  const users = await prisma.user.findMany();
  console.log(`---`)
  console.log(users)
  console.log(`---`)

}