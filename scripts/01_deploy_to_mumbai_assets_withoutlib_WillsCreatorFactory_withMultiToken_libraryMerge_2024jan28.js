const {ethers, network} = require("hardhat");
const { HardhatConfig, HardhatUserConfig } = require("hardhat/types");

const { extendConfig, extendEnvironment, network1 } = require("hardhat/config");
const { verify_contract } = require("./helper_to_deploy");



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
  let assetContractAddr = '0x0DaFC14Af4E71716971E04444fe858d9fC413dc3' //0x8961F79e089093d3875D54987dC51C5a52aaC480
  const wethCCYAddr = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
  const owner='0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a'
  const benefitor='0x817D30CdBAbe38DC3328C8248cF7c12A1B8009a1'
  
  const moderator='0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
  const moderator2=0x70997970C51812dc3A010C7d01b50e0d17dc79C8 //0xccA0b47ab3fe942E5B5DC499762202c3222FF067
  const dependent_additional_ContractName1 ="AssetCreatorFactory_multiToken";
  const main_ContractName ="WillsCreatorFactory_multiToken_AssetHandlingRemoved";
  const libraryName = "Enums";//"WillCreatorLib";

  
console.log('before deploying contract')
console.log(`testData---chec-->${network.config.chainId}----${network.name}`) 

 const libAddr = '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82';



   //const AdditionalContract1 = await hre.ethers.getContractFactory(dependent_additional_ContractName1);
   let additionalContract1;
    try {
  //     console.log(`step2: trying to - enumAddress`)
  //     console.log(libAddr)
      
  //  additionalContract1
  //   =await hre.ethers.getContractFactory(dependent_additional_ContractName1);
  //   console.log('eeee')
  //   let d = additionalContract1.deploy.ConstructorFragment
  //   console.log(d)
    
  //   console.log(additionalContract1.ConstructorFragment)
  //   console.log(`--------------0`)
    
    
    
  //     const middleware = await additionalContract1.deploy(moderator); //moderator
      
  //     console.log(`--------------1`)  
  //     //await middleware.deployed();
  //     //console.log(await middleware.deployTransaction.wait()) 
  //     assetContractAddr=middleware.target
  //     console.log(`assetContract -> ${middleware.target}`)
  //     console.log(`assetContractAddr -> ${assetContractAddr}`)
      
  //     console.log(await middleware.getContractInfo())

      // console.log(`--------------2-deploy`)
      // console.log(await middleware.getNextAssetId()) 
      // console.log(`--------------3`)
      // console.log(await middleware.a_createAssets('fisrt','0x01','4000')) 
      // console.log(`--------------4`)
      // console.log(await middleware.s_moder()) 
      // console.log(`--------------5`)
      // console.log(await middleware.getNextAssetId()) 
      // console.log(`--------------6`)
      // console.log(await middleware.getNextAssetId()) 
      
      console.log(`--------------3`)
      //console.log(tx)

      /**
       * 
       * 
       * 
       */


      try {
        console.log(`step3: trying to ${main_ContractName} - `)
        const mainContract = await  hre.ethers.getContractFactory(main_ContractName);
        const name = "Wrapped Will Ether";
        const symbol = "WCETH";
        
         console.log('gggg')
      
      console.log(`---------assetContractAddr-----${assetContractAddr}`)
      
        const finalContract = await mainContract.deploy(assetContractAddr,name,symbol,moderator); //moderator
        
        console.log(`--------------1`)  
        
        //constructor(address _AssetCreatorFactoryAddress, string memory name, string memory symbol, address mod) WWethBase20_multiToken(name, symbol) {
        //await finalContract.deployed();
        //console.log(await middleware.deployTransaction.wait()) 
        
        console.log(`${main_ContractName} -> ${finalContract.target}`)
        
        await sleep(10000);

        if(network.config.chainId= 80001){
          console.log(`chain id is '${network.config.chainId}'`)
          await sleep(10000);
          await verify_contract(finalContract.target, [assetContractAddr,name,symbol,moderator],network.config.chainId);
        }

        await validateContractMethod_onhardhat_Localhost(finalContract);

        


        
        console.log(`--------------3`)
        //console.log(tx)

      } catch (error) {
        console.error(`error while deploying ${main_ContractName} => ${error}`)
      }


      
    } catch (error) {
      console.error(`error while deploying ${dependent_additional_ContractName1} => ${error}`)
    }


 
}
async function validateContractMethod_onhardhat_Localhost(finalContract) {
  if (net.config.chainid === 31337) {

    console.log(`--------------2-deploy`);
    console.log(await finalContract.getContractInfo());
    //.getNextWillId()) 
    console.log(`--------------3`);
    //    console.log(await finalContract.a_createAssets('fisrt','0x01','4000')) 
    console.log(`--------------4`);
    console.log(await finalContract.getMyWills());
    console.log(`--------------5`);
    console.log(await finalContract.c_getContractBalance());
    console.log(`--------------6`);

    /** a_createCryptoVault(
      string memory _assetId,
      uint256 willStartDate,
      uint256 willMaturityDate,
      address payable Benefitors */
    console.log(await finalContract.a_createCryptoVault());

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