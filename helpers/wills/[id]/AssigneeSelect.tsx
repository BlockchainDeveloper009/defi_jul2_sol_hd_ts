import React from 'react'
import PropTypes from 'prop-types'
import { SelectPopover } from '@mantine/core/lib/Select/SelectPopover/SelectPopover'
import { Select } from '@mantine/core'

const AssigneeSelect = () => {
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

AssigneeSelect.propTypes = {}

export default AssigneeSelect