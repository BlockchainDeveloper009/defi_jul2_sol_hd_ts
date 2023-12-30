"use client"
import React from 'react'
import { Box, Title, Text, Flex, Image, TypographyStylesProvider } from '@mantine/core'

const pageHowToUseGuide = () => {
  return (
    <div>
        
        <title>Project Templatee page for pge1</title>
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
              Using WIll creator Application, person "A" would be able setup a 
                contract which will liquidate money into Benefitor account automatically
                on Will end date.
          
         </Text>
        </Box>
        <Flex direction="column">
        <Title order={1}> Who can use?</Title>
          <Text truncate="end">
              <p>
              1. People who owns Crypto tokens & would like to pass it on
                  to benefitors automatically
              2. People who wants to credit their benefitors on a recurring basis
              3. 
              </p>
          </Text>

        <Title order={1}> How to use</Title>
        <ul>
          <li>Step1: Create Asset(requires metamask confirmation), 
            after you confirm, contract will create asset & give you asset id [ca-0]</li>
          <li>Step2:  Use the asset created in step1(assetd_Id:[ca-0],
            this will give you will_id </li>
          <li>Step3: From home page, click [Wills Manager] tab, to look the wills created by the user</li>

          <li>a. Cancellation - <p>You can cancel the will before the Maturity date,
            the amount in the asset will be refunded back to Will owner.</p>
          </li>
          <li>b. Manually Settle - <p>when you manually settle, the funds in the will be immediately
            liquidated to Benefitor address</p></li>
          <li>c. Edit - <p></p></li>
          <li></li>
          <li></li>
        </ul>
        
        </Flex>
        </TypographyStylesProvider>
    </div>
    
  )
}

export default pageHowToUseGuide