import React from 'react'
//commenting below code as its a static load & causes 
// components in page to load with slight delays

//import WillForm from '../_components/WillForm'
import dynamic from "next/dynamic"

const WillForm = dynamic(
    () => import('@/app/wills/_components/WillForm'),
    {
        ssr: false,
        loading: () => <p>Loading...</p>
    }
)
const NewWillPage = () => {
  return (
    <div>
        <WillForm></WillForm>
    </div>
  )
}

export default NewWillPage