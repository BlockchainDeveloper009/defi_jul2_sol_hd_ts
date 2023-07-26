const { ethers, upgrades } = require("hardhat");

async function deployContract_hardhat() {
  // Compile the contract
  const Contract = await ethers.getContractFactory("WillsCreateorFactory");
  const args = ["wet","weth"];
  const args1 = 'wet';
  const args2 = 'weth';
  const contract = await upgrades.deployProxy(Contract,{
    initializer: "initialize",
    args: [args1,args2],
  });

  // Estimate gas for the deployment
  const deploymentEstimate = await contract.estimateGas.deployed();
  console.log("Gas estimate:", deploymentEstimate.toString());

  // Deploy the contract
  await contract.deployed();
  console.log("Contract deployed at:", contract.address);
}

deployContract_hardhat()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
