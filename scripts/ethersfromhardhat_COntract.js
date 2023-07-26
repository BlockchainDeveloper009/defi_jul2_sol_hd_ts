const { ethers } = require("hardhat");
//did not work --last-1
async function ethersfromhardhat_COntract() {
  // Compile the contract
  const Contract = await ethers.getContractFactory("WillsCreateorFactory");

  // Deploy the contract
  const contract = await Contract.deploy("wet", "weth");

  // Estimate gas for the deployment
  const deploymentEstimate = await contract.estimateGas();
  console.log("Gas estimate:", deploymentEstimate.toString());

  // Deploy the contract
  await contract.deployed();
  console.log("Contract deployed at:", contract.address);
}

ethersfromhardhat_COntract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
