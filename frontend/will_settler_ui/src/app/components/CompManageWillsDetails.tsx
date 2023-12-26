import { useRouter, NextRouter } from 'next/router';
import { useRouter as navUseRouter} from 'next/navigation';
import React from 'react'

const CompManageWillsDetails = () => {
  const router = useRouter();
  const { willId } = router.query as { willId?: string}
  return (
    <div>
      <h1>Details page</h1>
      <p>Hello will id, {willId || 'Invalid WIll Id'}</p>
    </div>
  )
}

export default CompManageWillsDetails