import { Box, Skeleton } from '@mantine/core'
import React from 'react'

const WillFormSkeleton = () => {
  return (
    <div>
        <Box>
            <Skeleton/>
            <Skeleton height="20rem"/>

            
        </Box>
    </div>
  )
}

export default WillFormSkeleton