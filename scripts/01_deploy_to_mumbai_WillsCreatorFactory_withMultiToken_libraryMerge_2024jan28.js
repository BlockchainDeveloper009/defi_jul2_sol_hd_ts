const {ethers} = require("hardhat");
const { HardhatConfig, HardhatUserConfig } = require("hardhat/types");

const { extendConfig, extendEnvironment } = require("hardhat/config");

async function main(hre) {
 //"Wrapped Will Ether", "WWETH"

  //const lockedAmount = ethers.utils.parseEther("1");
  //const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  // const lock = await Lock.deploy(arg1,arg2);

  // await lock.deployed();

   // deploy the contract
//   const deployedVerifyContract = await Lock.deploy();
   
   //await Lock.deploy(arg1,arg2);
   //AssetCreatorFactory_multiToken

  const owner='0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'
  const benefitor='0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1'
  const moderator='0xccA0b47ab3fe942E5B5DC499762202c3222FF067'
  const dependent_additional_ContractName1 ="AssetCreatorFactory_multiToken";
  const main_ContractName ="WillsCreatorFactory_multiToken_AssetHandlingRemoved";
  const libraryName = "Enums";//"WillCreatorLib";

  const mainContract = await  hre.ethers.getContractFactory(main_ContractName);
  const name = "Wrapped Will Ether";
  const symbol = "WCETH";
console.log('before deploying contract')

   let enumsLibrary1;
   
   try {
    console.log(`step1: trying to enums library`)
    enumsLibrary1 = await hre.ethers.deployContract(libraryName);
    await enumsLibrary1.waitForDeployment();
    console.log(`after deployment of enums`);
    console.log(enumsLibrary1.target)
    
   } catch (error) {
    console.log(`error while deploying enums => ${error}`)
   }
  //  let sharedStruct;
  //  try {
  //   console.log(`step2: trying to WillCreatorSharedStruct library`)
  //   sharedStruct = await hre.ethers.deployContract("WillCreatorSharedStruct");
  //   console.log(`address - ${sharedStruct}`)
  //  } catch (error) {
  //   console.log(`error while deploying sharedStruct => ${error}`)
  //  }



   //const AdditionalContract1 = await hre.ethers.getContractFactory(dependent_additional_ContractName1);
   let additionalContract1;
    try {
      console.log(`step2: trying to additional contract - enumAddress`)
      console.log(enumsLibrary1.target)
      
   additionalContract1
    =await hre.ethers.getContractFactory(dependent_additional_ContractName1,{
        libraries:{
          Enums: enumsLibrary1.target,
          
        },
      },
      [moderator]);
      await additionalContract1.waitForDeployment();
      console.log(`assetContract -> ${additionalContract1.target}`)
      
    } catch (error) {
      console.error(`error while deploying ${dependent_additional_ContractName1} => ${error}`)
    }
  // try {
  //   //AssetCreatorFactory_multiToken
  //   const lockedAmount = hre.ethers.parseEther("0.0001");
  //   console.log(`step4: trying to deploy Main Contract -- ${additionalContract1.address}`)
  //   const deployedVerifyContract 
  //   = await hre.ethers.deployContract(main_ContractName, 
  //     {
  //       libraries:{
  //         Library1: enumsLibrary1.address,
          
  //       },
  //     },
  //   [additionalContract1.address, name,symbol,'0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a']
  // );
 
  // await deployedVerifyContract.waitForDeployment();
 
  //   //await deployedVerifyContract.deployed();
  
  //   // print the address of the deployed contract
  //   console.log("Verify Contract Address:", deployedVerifyContract.target);
  
  //   console.log("Sleeping.....");
  //   // Wait for etherscan to notice that the contract has been deployed
  //   await sleep(10000);
  
  //   try {
  //         // Verify the contract after deploying
  //         await hre.run("verify:verify", {
  //           address: deployedVerifyContract.target,
  //           constructorArguments: [additionalContract1.address,name,symbol,'0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'],
  //         });
  //         console.log(`Contract deployed & Verified ${deployedVerifyContract.target}`);
 
  //   } catch (error) {
  //     console.log("Verification failed")
  //     console.log(error)
  //   }
    

  // } catch (error) {
  //   console.log('deployment failed')
  //  console.log(error) 
  // }
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