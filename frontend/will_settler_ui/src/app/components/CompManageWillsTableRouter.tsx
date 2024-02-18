import React from 'react'
import { useRouter as navUseRouter} from 'next/navigation';
import { Button } from '@mantine/core';

const CompManageWillsTableRouter = () => {
    const router = navUseRouter();
    
    const bttnHandler_GoBackToWillManager = ()=> {
        router.push(`/pageWillsManager`);
      }

  return (
    <div>
        <Button onClick={bttnHandler_GoBackToWillManager} >go Back to Will Manager Page</Button>
    </div>
  )
}

export default CompManageWillsTableRouter