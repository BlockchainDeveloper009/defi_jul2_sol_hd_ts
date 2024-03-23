"use client"
import React from 'react'
import { Box, Title, Text, Flex, Image, TypographyStylesProvider, Textarea } from '@mantine/core'

const pageHowToUseGuide = () => {
  return (
    <div>
        
        <title>Guide on How to Use</title>
        <a href='./TemplateProjectComponents/ProjectTemplateSignUp'>Sign Up here</a>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          
        />
        <TypographyStylesProvider  >
        <Box>
          <Title order={1}> Why & What </Title>
         <Text truncate="end">
    <ul>
      <p>
      Will creator Application is for Crypto Tokens & Assets.


      </p>
      <Textarea>
      The "Will creator" app lets someone, like "A," set up an agreement. 
      This agreement ensures that when their will ends, money from their belongings goes 
      straight into someone else's account without needing anyone to manually do it.
       It makes sure their wishes are carried out smoothly, making things easier for managing their estate.
      </Textarea>
     
    </ul>
          
         </Text>
        </Box>
        <Flex direction="column">
        <Title order={1}> Who can use?</Title>
          <Text truncate="end">
              <p><ul>
              
              
              <li>1. Folks who own crypto tokens and want them to go to their beneficiaries without any hassle.</li>
              <li>2. Individuals who want to set up automatic payments to their beneficiaries regularly.</li>
              <li>3. People living in uncertain situations, like those working on oil rigs far out at sea or military veterans.</li>

             
            
              </ul>
              
              
              
              </p>
          </Text>

        <Title order={1}> How to use</Title>
        <ul>
    <li>Step 1: Initiate Asset Creation (requires confirmation via MetaMask). Once confirmed, the contract will create the asset and provide you with an asset ID [ca-0].</li>
    <li>Step 2: Utilize the asset generated in Step 1 (asset ID: [ca-0]). This action will result in obtaining a will ID.</li>
    <li>Step 3: Navigate to the homepage and select the [Wills Manager] tab to view the wills created by the user.</li>

    <li>
        a. Cancellation -
        <p>You have the option to cancel the will before its maturity date. If cancelled, the funds held in the asset will be refunded to the owner of the will.</p>
    </li>
    <li>
        b. Manual Settlement -
        <p>By opting for manual settlement, the funds allocated within the will are immediately transferred to the beneficiary's address.</p>
    </li>
    <li>
        c. Editing -
        <p></p>
    </li>
</ul>

   
        
        </Flex>
        </TypographyStylesProvider>
    </div>
    
  )
}

export default pageHowToUseGuide