const { ethers, network } = require("hardhat");

async function estimateGas() {
    let args1 = 'wet';
    let args2 = 'weth';

  const Contract = await ethers.getContractFactory("WillsCreateorFactory");
  console.log('before deploy')
  const contract = await Contract.deploy(args1, args2); //args1, args2
  console.log(contract)
  console.log('after deploy')
  
 // await contract.deployed();
 console.log("Sleeping.....");
 // Wait for etherscan to notice that the contract has been deployed
 //await sleep(10000);
  console.log('after deployed')
  const deploymentEstimate = await ethers.provider.estimateGas(contract.deployTransaction);
  console.log('after estimateGas')
  console.log("Gas estimate:", deploymentEstimate.toString());
  
//   const deploymentReceipt = await contract.deployTransaction.wait();
//   const gasUsed = deploymentReceipt.gasUsed;
//   console.log("Gas used:", gasUsed.toString());

//   const gasEstimate = await contract.estimateGas.deploy();
//   console.log("Gas estimate:", gasEstimate.toString());
}

estimateGas()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
