"use client"
import React from 'react'
import SignUp from '../ProjectTemplate/TemplateProjectComponents/SignUp'
import ManageAssetsTable from '../components/compManageAssetsTable'



import { polygonMumbai } from 'viem/chains';

import ComProfile from '../components/CompProfile';

import {  useAccount } from 'wagmi'

import Link from 'next/link';

const ProjectName = 'Manage Your Assets on this page'
const ProjectIndex_template = () => {
 




  return (
    <div>
        <title>`${ProjectName}`</title>
        <header>`${ProjectName}`</header>
        <Link href="/">Home</Link>
        <ManageAssetsTable></ManageAssetsTable>
        
    </div>
  )
}

export default ProjectIndex_template