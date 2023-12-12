const {ethers} = require("hardhat");
const { HardhatConfig, HardhatUserConfig } = require("hardhat/types");

const { extendConfig, extendEnvironment } = require("hardhat/config");

async function main(hre) {
 

  //const lockedAmount = ethers.utils.parseEther("1");

  //const Lock = await ethers.getContractFactory("WillsCreatorFactory");
  //const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  //const lock = await Lock.deploy();

  const lockedAmount = hre.ethers.parseEther("0.0001");
  const name = "Wrapped Will Ether";
  const symbol = "WWETH";
  const deployedVerifyContract 
  = await hre.ethers.deployContract("WillsCreatorFactory", 
  [name,symbol,'0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a']
  //{ value: lockedAmount}
 );

 await deployedVerifyContract.waitForDeployment();
 
   // print the address of the deployed contract
   console.log("Verify Contract Address:", deployedVerifyContract.target);
 
   
   
   // Verify the contract after deploying
   await hre.run("verify:verify", {
     address: deployedVerifyContract.target,
     constructorArguments: [name, symbol,'0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'],
   });

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main(hre).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function verify (contractAddress, args) {
  console.log("verifying contract..")
  try{
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })

  } catch (e) {
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already Verified!")
    }else{
      console.log(e)
    }
  }
}