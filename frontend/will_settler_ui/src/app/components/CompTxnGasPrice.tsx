import React from 'react'
import { getGasPrice } from '@wagmi/core'
import { config } from '../../wagmi'
import { Text } from '@mantine/core'

const CompTxnGasPrice = async() => {
    const gasPrice = await getGasPrice(config).toString()
    return (
    <div>CompTxnGasPrice
        <Text id='gasPrice'>Gas Price:{gasPrice} 'wei'</Text>
    </div>
  )
}

export default CompTxnGasPrice