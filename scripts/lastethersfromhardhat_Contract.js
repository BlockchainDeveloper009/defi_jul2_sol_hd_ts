const { ethers } = require("hardhat");

async function lastethersfromhardhat_Contract() {
  // Compile the contract
  const Contract = await ethers.getContractFactory("WillsCreateorFactory");

  // Deploy the contract
  const contract = await Contract.deploy("wet", "weth");

  // Get the gas estimate from the provider
  const deploymentEstimate = await ethers.provider.estimateGas(contract.deployTransaction);
  console.log("Gas estimate:", deploymentEstimate.toString());

  // Wait for the contract to be mined and deployed
  await contract.deployTransaction.wait();

  console.log("Contract deployed at:", contract.address);
}

lastethersfromhardhat_Contract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
