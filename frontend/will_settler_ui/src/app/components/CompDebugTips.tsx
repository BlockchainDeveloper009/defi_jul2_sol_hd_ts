import React from 'react'

const CompDebugTips = () => {

    if(window.ethereum)
    {
      const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {
          alert('Ethereum successfully detected!');
          // Access the decentralized web!
        } else {
          alert('Please install MetaMask!');
        }
    }
    
  return (
    <div>CompDebugTips</div>
  )
}

export default CompDebugTips