import React from 'react'
import { Will_info } from '@prisma/client'
import { createWillsSchema } from '@/app/validateSchema'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

type WillFormData = z.infer<typeof createWillsSchema>
interface Props{
    //'?' will make this param as optional as it is needed only in Edit page.
    // on new will page, id will generated automatically
    will?: Will_info
}
//refer IssueForm 
const WillForm = ({ will } : { will?: Will_info}) => {
    const router = useRouter();
  return (
    <div>WillForm</div>
  )
}

export default WillForm