import React, { ReactNode} from 'react'
import { Text } from '@mantine/core'
interface Props {
    children: ReactNode
}
const compErrorMessage = ( {children}: Props) => {
    if(!children) return null;
  return (
    <Text color="red" ><p>{children}</p></Text>
  )
}

export default compErrorMessage