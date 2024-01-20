"use client"
import { Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import CompProfile from './components/CompProfile'

const NavBar = () => {
  return (
    <nav>
      
      <ul>
        <Flex align={'flex-start'} direction="row" gap="md">
            <li><Link href="/"><Title order={2}>Dashboard</Title></Link></li>
            <li><Link href="/pageAdminActionsUsingReactWagmi2"><Title order={2}>Admin</Title></Link></li>
            <li><Link href="/RequestFeature"><Title order={2}>Request a Feature</Title></Link></li>  
            <li><Link href="/pageHowToUseGuide"><Title order={2}>Guide</Title></Link></li>
            <CompProfile/>           
        </Flex>
        
      </ul>

    </nav>
  )
}

export default NavBar