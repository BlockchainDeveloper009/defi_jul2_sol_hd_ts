const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x123456789..." // Address of the deployed contract
  const contractAbi = [...] // ABI of your contract

  const provider = ethers.provider;
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);

  // Retrieve the event logs matching the specified filter options
  const filter = contract.filters.MyEvent();
  const logs = await contract.queryFilter(filter);

  // Process the logs to extract the relevant information
  for (const log of logs) {
    console.log(log.args);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// In this example, we import the necessary libraries from Hardhat and ethers.js. We define the contract address and ABI to instantiate the contract using ethers.js.

// We then create a filter for the event we want to query using contract.filters.MyEvent(). This filter selects all logs matching the event MyEvent.

// Finally, we use contract.queryFilter() to retrieve the event logs based on the filter. The logs contain the emitted event data, which can be processed as needed.

// You can run the test script using the npx hardhat test command. Make sure to replace the contract address and ABI with your specific contract details.

// By following these steps, you can query events from the blockchain using Hardhat and ethers.js.






