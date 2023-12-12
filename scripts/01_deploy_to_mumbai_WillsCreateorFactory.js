const {ethers} = require("hardhat");
const { HardhatConfig, HardhatUserConfig } = require("hardhat/types");

const { extendConfig, extendEnvironment } = require("hardhat/config");

async function main(hre) {
 //"Wrapped Will Ether", "WWETH"

  //const lockedAmount = ethers.utils.parseEther("1");

  const Lock = await ethers.getContractFactory("WillsCreatorFactory");
  const name = "Wrapped Will Ether";
  const symbol = "WCETH";
  //const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  // const lock = await Lock.deploy(arg1,arg2);

  // await lock.deployed();

   // deploy the contract
//   const deployedVerifyContract = await Lock.deploy();
   
   //await Lock.deploy(arg1,arg2);
  try {
    
    const lockedAmount = hre.ethers.parseEther("0.0001");
    const deployedVerifyContract 
    = await hre.ethers.deployContract("WillsCreatorFactory", 
    [name,symbol,'0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a']
  );
 
  await deployedVerifyContract.waitForDeployment();
 
    //await deployedVerifyContract.deployed();
  
    // print the address of the deployed contract
    console.log("Verify Contract Address:", deployedVerifyContract.target);
  
    console.log("Sleeping.....");
    // Wait for etherscan to notice that the contract has been deployed
    await sleep(10000);
  
    try {
          // Verify the contract after deploying
          await hre.run("verify:verify", {
            address: deployedVerifyContract.target,
            constructorArguments: [name,symbol,'0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'],
          });
          console.log(`Contract deployed & Verified ${deployedVerifyContract.target}`);
 
    } catch (error) {
      console.log("Verification failed")
      console.log(error)
    }
    

  } catch (error) {
    console.log('deployment failed')
   console.log(error) 
  }
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