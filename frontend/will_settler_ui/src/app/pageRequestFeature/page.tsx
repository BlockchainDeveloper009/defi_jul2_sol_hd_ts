"use client"
import React from 'react'
import SignUp from '../ProjectTemplate/TemplateProjectComponents/SignUp'





import ComProfile from '../components/CompProfile';


import { createConfig, Config } from 'wagmi'
import Link from 'next/link';

const ProjectName = 'Request a Feature'
const ProjectIndex_template = () => {
 

  return (
    <div>
        <title>`${ProjectName}`</title>
        <header>`${ProjectName}`</header>
        <Link href="/">Home</Link>
       
    </div>
  )
}

export default ProjectIndex_template