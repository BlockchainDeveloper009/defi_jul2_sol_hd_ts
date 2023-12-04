"use client"
import React from 'react'
import SignUp from '../ProjectTemplate/TemplateProjectComponents/SignUp'
import ManageAssetsTable from '../components/compManageAssetsTable'

const ProjectName = 'Manage Your Assets on this page'
const ProjectIndex_template = () => {
  return (
    <div>
        <title>`${ProjectName}`</title>
        <header>`${ProjectName}`</header>
        <ManageAssetsTable></ManageAssetsTable>
    </div>
  )
}

export default ProjectIndex_template