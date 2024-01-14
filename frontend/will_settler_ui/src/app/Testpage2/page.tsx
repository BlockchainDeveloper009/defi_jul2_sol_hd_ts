'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

import GlobalProfile from '../components/GlobalProfile';
function Testpage2() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  




  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

       
      </div>

      
    </>
  )
}

export default Testpage2
