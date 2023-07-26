//const { ethers } = require("ethers");
const { ethers, network } = require("hardhat");

async function updated_estimateGas() {
  let args1 = 'wet';
  let args2 = 'weth';

  const Contract = await ethers.getContractFactory("WillsCreateorFactory");
  console.log('before deploy')
  const contract = await Contract.deploy(args1, args2); //args1, args2
  console.log(contract)
  console.log('after deploy')

  // Wait for the contract to be mined
  await contract.deployed();
  console.log('after deployed')

  // Estimate gas cost
  const deploymentEstimate = await contract.estimateGas();
  console.log('after estimateGas')
  console.log("Gas estimate:", deploymentEstimate.toString());
}

updated_estimateGas()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
