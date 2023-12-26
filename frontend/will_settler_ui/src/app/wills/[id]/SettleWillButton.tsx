import { Button } from '@mantine/core'
import React, { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';


const SettleWillButton = () => {
    const router = useRouter();
    const [error, setError] = useState(false);
  return (
    <div>
        <Button onClick={async() => { 
            let willId=0;
       
            try {
                await axios.delete('/api/wills/'+willId)
                router.push('/issues')
                router.refresh();
            } catch (error) {
                
            }
        }}>Settle Will</Button>
        {/* <AlertDialog.Root>

        </AlertDialog.Root> */}
    </div>
  )
}

export default SettleWillButton