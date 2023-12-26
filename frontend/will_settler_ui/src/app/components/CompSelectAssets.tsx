import { Select } from '@mantine/core'
import React from 'react'

const CompSelectAssets = () => {
  return (
    <div>AssigneeSelect
    

    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
    </div>
  )
}

export default CompSelectAssets