import React from 'react'
import WillForm from '../../_components/WillForm'
import { Prisma, PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string}
}
const prisma = new PrismaClient();
const EditWillsPage = async ({params}: Props) => {
      const will = await prisma.will_info.findUnique({
        where: {will_Id: parseInt(params.id)}
      })

      if(!will){
          notFound();
      }
  return (
    <div>
      <WillForm will = {will}>

      </WillForm>
    </div>
  )
}

export default EditWillsPage