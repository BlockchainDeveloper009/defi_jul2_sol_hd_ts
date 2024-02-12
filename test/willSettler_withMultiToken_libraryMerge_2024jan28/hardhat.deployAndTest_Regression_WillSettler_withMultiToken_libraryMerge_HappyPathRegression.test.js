const { time, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers,network, getNamedAccounts } = require("hardhat");
//import { testdata_localchain_WillCreator } from "./testdata_localchain_WillCreator.js";

//const { d1 } = require("./testdata_localchain_WillCreator");
let debugMode = true;

printToConsole(`testData---chec-->${network.config.chainId}----${network.name}`) 
//printToConsole(`testData---check`,d1)
//console.log(d1)

//import  testData  from "./MockData_willSettler";
// const  testData = require("./MockData_willSettler");



//https://ethereum.stackexchange.com/questions/52913/how-can-i-get-the-data-returned-from-solidity-function-from-transaction-id-in-we
// function printToConsole(header,str)
// { if(debugMode)
//   {
//     console.log(`------${header}--------`)
//     console.log(str);
//     console.log(`======${header}=END=======`)
//   }
  
// }
function printToConsole(str)
{ if(debugMode)
  {
    console.log('--------------')
    console.log(str);
    console.log('==============')
  }

  
}
const meta_benefitorAddr = 0xf821142CC270dAb63767cFAae15dC36D1b043348;
const meta_txnAsst = "ca-3";
const hardhat_BenefitorAddr="0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2";
      



//hh test --grep "picks a winner"
//hardhat run test --grep "picks a winner"
describe("WillsCreateorFactory_hardhat_localhost", async function () {
  
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let deployedContractAddr;
    async function deployOneYearLockFixture() {
      let wecth_ccy_addr='';
      let assetContractAddr='';
      let assetContractINfo='';
      let willlContractAddr='';
      let willlContractInfo='';
      // Contracts are deployed using the first signer/account by default
      const [owner, acct1, moderator] = await ethers.getSigners();
      const contractIndex=0;
      const path = '"C:\\source\\repos\\solidity_dev\\defi_WillCreator_WagmiReactHooksBr\\defi_jul2_sol_hd_ts\\artifacts\\contracts\\willSettler_23Jul02\\';
      const contracts = ["AssetCreatorFactory_multiToken",
      "WillsCreatorFactory_multiToken_AssetHandlingRemoved"];
     
      console.log(`-------------------------------step1: trying to 'WCETH_Token' `)
      const wethCCYAddr = await ethers.getContractFactory("WCETH_Token");
        const wethCCYAddrMiddleware = await wethCCYAddr.deploy("wecth_token","wecth_token",1000000000n);
        wecth_ccy_addr = wethCCYAddrMiddleware.target;
        console.log(`wethCCYAddr -> ${wecth_ccy_addr}`);
      const main_ContractName = contracts[1]
      console.log(`-------------------------------step2: trying to 'AssetCreatorFactory_multiToken' - `)
      const additionalContract1 = await ethers.getContractFactory('AssetCreatorFactory_multiToken');
      const middleware = await additionalContract1.deploy(moderator);
      console.log(`assetContract -> ${middleware.target}`)
      assetContractAddr = middleware.target;
      assetContractINfo=await middleware.getContractInfo();
      console.log(`exporting assetAdddr= ${assetContractAddr }`)
      console.log(assetContractINfo)
     // lock.deploymentTransaction.
      //console.log(lock)
      console.log(`--------------------`)

      try {
                console.log(`-------------------------------step3: trying to ${main_ContractName} - `)
                const mainContract = await  hre.ethers.getContractFactory(main_ContractName);
                const name = "Wrapped Will Ether";
                const symbol = "WCETH";
                
                console.log('gggg')
                console.log(`---------assetContractAddr-----0${assetContractAddr}`)
                const finalContract = await mainContract.deploy(assetContractAddr,name,symbol,moderator); //moderator
                
                console.log(`--------------1`)  
                
                //constructor(address _AssetCreatorFactoryAddress, string memory name, string memory symbol, address mod) WWethBase20_multiToken(name, symbol) {
                //await finalContract.deployed();
                //console.log(await middleware.deployTransaction.wait()) 
                willlContractAddr = finalContract.target;
                console.log(`-------------------------------${main_ContractName} -> ${willlContractAddr}`)
                console.log(`--------------contract deploy test\\\\\-deploy`)
                willlContractInfo = await finalContract.getContractInfo();
                console.log(willlContractInfo);
                  //.getNextWillId()) 
                console.log(`--------------3`)
            //    console.log(await finalContract.a_createAssets('fisrt','0x01','4000')) 
                console.log(`--------------4`)
                console.log(await finalContract.getMyWills()) 
                console.log(`--------------5`)
                console.log(await finalContract.c_getContractBalance()) 
                console.log(`--------------6`)

                /** a_createCryptoVault(
                  string memory _assetId,
                  uint256 willStartDate,
                  uint256 willMaturityDate,
                  address payable Benefitors */

                console.log(await finalContract.a_createCryptoVault()) 
                console.log(`--------------3`)
                
        
      } catch (error) {
        console.error(`error while deploying ${main_ContractName} => ${error}`)
      }

      // console.log('deployTransaction<hash,type,accessList,blockHash,blockNumber,transactionIndex, from, gasPrice, gasLimit, to, value, nonce, data>')
      
      console.log('lock-----abi, signer, provider, callstatic, estimageGas, populateTransaction, filters, Approval, runningEvents, address')
      console.log('deployTransaction<hash,type,accessList,blockHash,blockNumber,transactionIndex, from, gasPrice, gasLimit, to, value, nonce, data, r,s,v,chainId>')
      // deployedContractAddr = lock.deployTransaction.creates;
      // console.log(`contract address: ${deployedContractAddr}`);
      // const initresult = await lock.init();
      
      // printToConsole(initresult.data);
      // const allSS = await lock.getAllAsset();
      // printToConsole(allSS.data);
      //console.log();
      const lock = middleware;
      return { middleware, lock, finalContract, owner, wecth_ccy_addr, otherAccount,assetContractINfo,willlContractInfo };
    }
    describe.only("check_state_of_chain",  async function () { 
      
      it("crear & get_assetIds", async function () {
        const { middleware, lock, owner,unlockTime } = await loadFixture(deployOneYearLockFixture);
        console.log('create asset - ca-1');
        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);
        //  await lock.init();
        let txn0 = await lock.a_createAssets('ca-1',wethCCYAddr,1_000_000_000n);
        // Usage
        //console.log(`'''print txn response --${txn0}`)
        console.log(`txn0.blockNumber=${txn0.blockNumber}`)
        console.log(`txn0.blockHash=${txn0.blockHash}`)
        console.log(`txn0.hash=${txn0.hash}`)
        console.log('create asset');
        await expect(
          lock
          .a_createAssets('ca-2',wethCCYAddr,2_000_000_000n))
          .to.emit(lock, 'assetCreated')
          .withArgs('ca-1', 'ca-1', 2_000_000_000n); //

        //listen for event
        saveEvents(txn0);
        emittedEvents.forEach(event => {

          console.log(`event name => ${event.name}`)});

      const assstStatus_0 = await lock.getAllAsset();
      printToConsole('assstStatus_0 ==> status')
      printToConsole(assstStatus_0);


      const t  = await lock.getUserCreatedBonds(owner.address);
      printToConsole(`tampa --> '${t}'`)
      printToConsole(t);

           
  });
      it("check_assetsContractInfo", async function () {
            const { lock, owner,unlockTime,assetContractINfo } = await loadFixture(deployOneYearLockFixture);
            // const contractAddress = deployedContractAddr;
            // printToConsole(`contractADdr: ${contractAddress}`)
            // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);
            //  await lock.init();

            expect(assetContractINfo).to.equal('AssetCreatorFactory_multiToken V2:Deployed on Jan-28-2024');


          const assstStatus_0 = await lock.getAssetStatus('ca-0');
          printToConsole('assstStatus_0 ==> status')
          printToConsole(assstStatus_0);


          const t  = await lock.getUserCreatedBonds(owner.address);
          printToConsole(`t --> '${t}'`)
          printToConsole(t);

               
      });
    });

    it("check_ContractStartDate", async function () {
      const { lock, owner,unlockTime } = await loadFixture(deployOneYearLockFixture);
      // const contractAddress = deployedContractAddr;
      // printToConsole(`contractADdr: ${contractAddress}`)
      // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);
      //  await lock.init();
      let date = (new Date()).getDate();
      let birthDateInUnixTimestamp = date / 1000;
      printToConsole(`birthDateInUnixTimestamp ==> ${birthDateInUnixTimestamp}`)  
     // await BirthDate.methods.set(birthDateInUnixTimestamp).send(opts);
     let dummy = await lock.setContractBirthDate(birthDateInUnixTimestamp);
    
    const verify_contractBirthDate = await lock.getContractBirthDate();

    printToConsole('verify_contractBirthDate ==> status')
    printToConsole(verify_contractBirthDate);


    //Web.js ==> To get date from smart-contract with web3.js:

    // let birthDateInUnixTimestamp_2 = await BirthDate.methods.get().call();
    // let date_2 = new Date(birthDateInUnixTimestamp * 1000);
         
    
     let birthDateInUnixTimestamp_2 = await lock.getContractBirthDate();
     let date_2 = new Date(birthDateInUnixTimestamp_2 * 1000);
     printToConsole('birthDateInUnixTimestamp_2 ==> status')
     printToConsole(birthDateInUnixTimestamp_2);
});


    describe("settle_assets",  function () { 
      it("settle_ca-0", async function () {
        const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

      //  await lock.init();

      const willStatus_0 = await lock.getWillStatus(0);
      printToConsole('will_0 ==> status')
        printToConsole(willStatus_0);
      expect(willStatus_0).to.equal('Assigned');

      expect(await lock.settleAssets(0))
            .to.emit(lock, "willSettled")
            .withArgs('0',testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
            testdata_localchain_WillCreator.hhData.data_0.willEndDate,
            testdata_localchain_WillCreator.hhData.data_0.amount);
      });
    });
    describe("create_assets",  function () {

          // it("print vars", async function () {
          //   const { lock, unlockTime, lockedAmount,  owner, otherAccount, thirdAcct } = await loadFixture(
          //     deployOneYearLockFixture
          //   );
            
   
          //   const startDatestr = new Date('YYYY-MM-DD');
          //   const startDatestr_timestampInSeconds = Math.floor(startDatestr.getTime() / 1000);

          //   const dateStr = '2023-12-27';

          //   const date = new Date(dateStr);

          //   // // 👇️ timestamp in milliseconds
          //   // const timestampInMs = date.getTime();

          //   // 👇️ timestamp in seconds (Unix timestamp)
          //   const timestampInSeconds = Math.floor(date.getTime() / 1000);
          //   console.log(timestampInSeconds);
          //   const ONE_GWEI = 1_000_000_000;
          //   //web3.eth.abi.decodeParameters(typesArray, hexString)
          //    //  await lock.addADMINrole(); 
          //   await lock.addADMINrole({value:lockedAmount});
          //   let allAssets = await lock.getAllAsset();
            
          //   printToConsole('....allAssets before change.......')
          //   printToConsole(allAssets)
            
          //   await lock.init();
          //   let allAssets2 = await lock.getAllAsset();
          //   printToConsole(`allAssets2 after-- ${allAssets2}`)
          //   printToConsole('---')
          //   printToConsole(allAssets2)
            
          //             // const event = String.toString(await lock.a_createCryptoVault(
          //             //   "ca-0",
          //             //   startDatestr_timestampInSeconds,
          //             //   timestampInSeconds,
          //             //   "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"));
          //             //   printToConsole("event expected");
          //             //   printToConsole(event)
          //             // await time.increaseTo(unlockTime);

          //             // await expect(lock.withdraw())
          //             //   .to.emit(lock, "Withdrawal")
          //             //   .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
          // });
          
          it("test1", async function () {
            const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
            // const contractAddress = deployedContractAddr;
            // printToConsole(`contractADdr: ${contractAddress}`)
            // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

          //  await lock.init();
            expect(await lock.checkAssetisAvailable('ca-0')).to.equal(false);
            
          });

          // it("create assets ", async function (lock) {
            
          //   await lock.init();
            
          // });
      
          it("does 'ca-0' exist?", async function () {
            

            const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
            let amt1 = 1 * 10 * 18;

            await expect(
                await lock.createAsset(testdata_localchain_WillCreator.hhData.data_0.assetName, 
                  testdata_localchain_WillCreator.hhData.data_0.amount)
                
              ).to.emit(lock, "assetCreated")
              .withArgs(
                testdata_localchain_WillCreator.hhData.data_0.assetId,
                testdata_localchain_WillCreator.hhData.data_0.assetName,
              testdata_localchain_WillCreator.hhData.data_0.amount);  

            //  const {tx, hash, value} = await lock.createAsset("t0", amt1);

            //  printToConsole(hash);
            //  console.log(value.toString());
            //  printToConsole(value);

            // // Get the transaction receipt
            // const receipt = await ethers.provider.getTransactionReceipt(hash);

            //  printToConsole(receipt);
             
            
            
          const result = await lock.checkAssetisAvailable('ca-0');    
          printToConsole(result);
            expect(result).to.equal(true);
            
          });
      
          it("does 'ca-1' exist?", async function () {
            
            const { lock } = await loadFixture(deployOneYearLockFixture);
            let amt2 = 2 * 10 * 18;
            const eventName='assetCreated'
            
            
              await expect(
                await lock.createAsset(testdata_localchain_WillCreator.hhData.data_1.assetName, 
                  testdata_localchain_WillCreator.hhData.data_1.amount)
                
              ).to.emit(lock, "assetCreated")
              .withArgs(
                testdata_localchain_WillCreator.hhData.data_1.assetId,
                testdata_localchain_WillCreator.hhData.data_1.assetName,
              testdata_localchain_WillCreator.hhData.data_1.amount);
            
         
/* code to be removed
//             // Get the transaction receipt
//             const receipt = await ethers.provider.getTransactionReceipt(hash);
// console.log(receipt)
             // Find the emitted event within the transaction logs
//     const yourEvent = receipt.logs[0].event;
// printToConsole(`ourEvent --> '${yourEvent}'`)
    // Assert the emitted event
    // expect(yourEvent).to.equal(eventName);
*/
        // ethers without hardhat name    
            // lock.events[eventName]((error,event) => {
            //   if(error){
            //     console.error('Error:', error);
            //   } else {
            //     console.log('Event emitted:',event.returnValues);
            //     //Process the emitted event here
            //   }
              
            // })
            printToConsole(`does 'ca-1' exist? --> ${asstId} `);

            expect(await lock.checkAssetisAvailable(testdata_localchain_WillCreator.hhData.data_1.assetId)).to.equal(true);
          });
          it("does 'ca-2' exist?", async function () {
            const { lock } = await loadFixture(deployOneYearLockFixture);
            let amt3 = 3 * 10 * 18;
            

            
            await expect(
              await lock.createAsset(testdata_localchain_WillCreator.hhData.data_2.assetName, 
                testdata_localchain_WillCreator.hhData.data_2.amount)
              
            ).to.emit(lock, "assetCreated")
            .withArgs(testdata_localchain_WillCreator.hhData.data_2.assetId,
              testdata_localchain_WillCreator.hhData.data_2.assetName,
              testdata_localchain_WillCreator.hhData.data_2.amount); // We accept any value as `when` arg
            
           // expect(await lock.checkAssetisAvailable('ca-0')).to.equal(true);
          }); 

      


          it("create_test_a_createCryptoVault_0", async function () {
            const { lock } = await loadFixture(deployOneYearLockFixture);

            let amt1 = 1 * 10 * 18;
            var k = await lock.a_createCryptoVault(
              testdata_localchain_WillCreator.hhData.data_0.assetId,
              testdata_localchain_WillCreator.hhData.data_0.willStartDate,
              testdata_localchain_WillCreator.hhData.data_0.willEndDate,
              testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr
            );
            await expect(
              
              k
            ).to.emit(lock, "willCreated")
            .withArgs('ca-0', testdata_localchain_WillCreator.hhData.data_0.willStartDate, willEndDate,0); // We accept any value as `when` arg
            
           
          });

          it("recreate_test_a_createCryptoVault_0", async function () {
            
            const { lock } = await loadFixture(deployOneYearLockFixture);
            await lock.a_createCryptoVault(
              testdata_localchain_WillCreator.hhData.data_0.assetId,
              testdata_localchain_WillCreator.hhData.data_0.willStartDate,
              testdata_localchain_WillCreator.hhData.data_0.willEndDate,
              testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr
              
            );
          }); 
          it("a_createCryptoVault1_expectEvent", async function () {
            
            const { lock } = await loadFixture(deployOneYearLockFixture);
            await lock.a_createCryptoVault(
              testdata_localchain_WillCreator.hhData.data_1.assetId,
              testdata_localchain_WillCreator.hhData.data_1.willStartDate,
              testdata_localchain_WillCreator.hhData.data_1.willEndDate,
              testdata_localchain_WillCreator.hhData.data_1.hardhat_BenefitorAddr,
              
              
            );
          }); 
          it("get all Wills", async function () {
            
            const { lock } = await loadFixture(deployOneYearLockFixture);
            let userCreatedBonds = await lock.getUserCreatedBonds();
            
              //printToConsole(await lock.getAllBonds());
          });
          it("getUserCreatedBonds ", async function () {
            // debond
            // Debond-Token
            // Debond-Governace
            // Debond-Bank
            // Debond-oracle
            // Debond-bank
            // Debond-Exchange
            // 
            const { lock,owner } = await loadFixture(deployOneYearLockFixture);
            //const userCreatedBonds  = await lock.getUserCreatedBonds(owner.address);
            const t  = await lock.getUserCreatedBonds(owner.address);
   
            printToConsole(`t --> '${t}'`)
    
          }); 

          it("getTransactionCount", async function () {
            // debond
            // Debond-Token
            // Debond-Governace
            // Debond-Bank
            // Debond-oracle
            // Debond-bank
            // Debond-Exchange
            // 
            const { lock,owner } = await loadFixture(deployOneYearLockFixture);
            const userCreatedBonds  = await lock.getUserCreatedBonds(owner.address);
            console.log('----');
        //    console.log(web3.eth.getTransactionCount);
            console.log('----');

          }); 
    
    });


    

});

