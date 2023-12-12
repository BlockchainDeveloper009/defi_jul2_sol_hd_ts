import React from 'react';
import { useWagmiConfig } from './WagmiConfigProvider';

const CompWagmiTestProvider = () => {
  // Use the useWagmiConfig hook to get the values
  const { appconfig, account } = useWagmiConfig();

  return (
    <div>
      <p>Account: {account}</p>
      {/* Use appconfig and account values as needed */}
      {/* ... */}
    </div>
  );
};

export default CompWagmiTestProvider;