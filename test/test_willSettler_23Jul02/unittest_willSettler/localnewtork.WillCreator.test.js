staging_willSettlerconst { time, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers, artifacts, deployments, hardhatArguments  } = require("hardhat");
const { JsonRpcProvider } = require("@ethersproject/providers");
//import { testdata_localchain_WillCreator } from "./testdata_localchain_WillCreator.js";
const testdata_localchain_WillCreator =
{
            "hhData" :{
                "data_0":{
                  "assetId":"ca-0",
                    "assetName":"t0",
                    "willId": 0,

                    "willStartDate": 1690606800,
                    "willMaturityDate": 1690693200,
                    "amount":'200',
                    "Benefitors": '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',

                },
                "data_1":{
                    "assetId":"ca-1",
                    "assetName":"t1",
                    "willId": 1,

                    "willStartDate": 1690606800,
                    "willMaturityDate": 1693371600,
                    "amount":'300',
                    "Benefitors": '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',

                },
                "data_2":{
                  "assetId":"ca-2",
                  "assetName":"t2",
                  "willId": 2,

                  "willStartDate": 1690606800,
                  "willMaturityDate": 1693371600,
                  "amount":'500',
                  "Benefitors": '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',

              }


            },
            "metamask" :{
                "data_0":{
                    "assetId":"ca-0",
                    "assetName":"t0",
                    "willId": 0,

                    "willStartDate": 1690606800,
                    "willMaturityDate": 1693371600,
                    "amount":'200',
                    "Benefitors": '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',


                },
                "data_1":{
                    "assetId":"ca-1",
                    "assetName":"t1",
                    "willId": 1,

                    "willStartDate": 1690606800,
                    "willMaturityDate": 1693371600,
                    "amount":'300',
                    "Benefitors": '0xf821142CC270dAb63767cFAae15dC36D1b043348',

                }

            },
};
const { d1 } = require("./testdata_localchain_WillCreator");
let debugMode = true;

printToConsole(`testData---check`)
//printToConsole(`testData---check`,d1)


//import  testData  from "./MockData_willSettler";
// const  testData = require("./MockData_willSettler");



//https://ethereum.stackexchange.com/questions/52913/how-can-i-get-the-data-returned-from-solidity-function-from-transaction-id-in-we
function printToConsole(header,str)
{ if(debugMode)
  {
    console.log(`------${header}--------`)
    console.log(str);
    console.log(`======${header}=END=======`)
  }

}
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
describe.only("WillsCreateorFactory_localhost", async function () {

  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let deployedContractAddr;
    async function deployOneYearLockFixture() {
      const arg1 = "Wrapped Will Ether";
      const arg2 = "WWETH";

      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
      const contracts = ["WillsCreateorFactory","C:\\source\\repos\\solidity_dev\\defi_jul2_sol_hd_ts\\artifacts\\contracts\\willSettler_23Jul02\\WillsCreateorFactory"];
      const contractName = contracts[0]; // Replace with your contract name

      const Lock = await ethers.getContractFactory(contracts[0]);
      const lock = await Lock.deploy(arg1,arg2);

        // Estimate the gas for deployment
  // const gasEstimate = await contract.estimateGas();

  // console.log("Gas Estimate for contract Deployment:", gasEstimate.toString());

const contractArtifact = await artifacts.readArtifact(contractName);
const contractAbi = contractArtifact.abi;

const contract1Address = lock.target;
      //other way2: to fetch contract address
      //// Get the deployed contract address
//const contract2Address = hardhatArguments.networks[hardhatArguments.network.name].address;
console.log(`contract1Address= '${contract1Address}'`)
//console.log(`contract2Address= '${contract2Address}'`)
      console.log('Lock-----bytecode' )
     // lock.deploymentTransaction.
      //console.log(lock)
      console.log(`--------------------`)
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
      return { lock, owner, contractAbi, contract1Address, otherAccount };
    }
    describe.only("check_state_of_chain",  function () {
      it("get_assetIds", async function () {
         const { lock, owner,unlockTime } = await loadFixture(deployOneYearLockFixture);
         //.catch((error)=> {
        //   console.error(error);
        //   process.exit(1);
        // });
        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);
        //  await lock.init();

      const assstStatus_0 = await lock.getAllAsset();
      printToConsole('assstStatus_0 ==> status')
      printToConsole(assstStatus_0);


      const t  = await lock.getUserCreatedBonds(owner.address);
      printToConsole(`tampa --> '${t}'`)
      printToConsole(t);


  });
      it("check_assets", async function () {
            const { lock, owner,unlockTime } = await loadFixture(deployOneYearLockFixture);
            // const contractAddress = deployedContractAddr;
            // printToConsole(`contractADdr: ${contractAddress}`)
            // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);
            //  await lock.init();

          const assstStatus_0 = await lock.getAssetStatus('ca-0');
          printToConsole('assstStatus_0 ==> status')
          printToConsole(assstStatus_0);


          const t  = await lock.getUserCreatedBonds(owner.address);
          printToConsole(`t --> '${t}'`)
          printToConsole(t);


      });
    });

//     it("check_ContractStartDate", async function () {
//       const { lock, owner,unlockTime } = await loadFixture(deployOneYearLockFixture);
//       // const contractAddress = deployedContractAddr;
//       // printToConsole(`contractADdr: ${contractAddress}`)
//       // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);
//       //  await lock.init();
//       let date = (new Date()).getDate();
//       let birthDateInUnixTimestamp = date / 1000;
//       printToConsole(`birthDateInUnixTimestamp ==> ${birthDateInUnixTimestamp}`)
//      // await BirthDate.methods.set(birthDateInUnixTimestamp).send(opts);
//      let dummy = await lock.setContractBirthDate(birthDateInUnixTimestamp);

//     const verify_contractBirthDate = await lock.getContractBirthDate();

//     printToConsole('verify_contractBirthDate ==> status')
//     printToConsole(verify_contractBirthDate);


//     //Web.js ==> To get date from smart-contract with web3.js:

//     // let birthDateInUnixTimestamp_2 = await BirthDate.methods.get().call();
//     // let date_2 = new Date(birthDateInUnixTimestamp * 1000);


//      let birthDateInUnixTimestamp_2 = await lock.getContractBirthDate();
//      let date_2 = new Date(birthDateInUnixTimestamp_2 * 1000);
//      printToConsole('birthDateInUnixTimestamp_2 ==> status')
//      printToConsole(birthDateInUnixTimestamp_2);
// });



    describe.only("create_assets_wills",  function () {
let _lock;
      before(async function () {
        const { lock } = await loadFixture(deployOneYearLockFixture);

        _lock = lock;
      });

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
          captureWarnings();

          it("test1", async function () {

            // const contractAddress = deployedContractAddr;
            // printToConsole(`contractADdr: ${contractAddress}`)
            // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

          //  await lock.init();

          let beforeCreatingAsset = await _lock.getAllAsset();
          if(IsAssetAlreadyCreated(beforeCreatingAsset, 'ca-0')){
            console.warn(`asset already exists ; 'ca-0'`);

            // //stop the test
            // throw new Error(`asset already exists ; 'ca-0'`);
          }
          if(IsAssetAlreadyCreated(beforeCreatingAsset, 'ca-1')){

            console.warn(`asset already exists ; 'ca-1'`);
          }
          if(IsAssetAlreadyCreated(beforeCreatingAsset, 'ca-2')){

            console.warn(`asset already exists ; 'ca-2'`);
          }

            //expect(await lock.checkAssetisAvailable('ca-0')).to.equal(false);

          });

          // it("create assets ", async function (lock) {

          //   await lock.init();

          // });

          it("#0. ca-0 asset Creation", async function () {



            let amt1 = 1 * 10 * 18;

            printToConsole("#1. assetCreation","expected to emit events");

            console.log(`testdata_localchain_WillCreator.hhData.data_0.assetId = '${testdata_localchain_WillCreator.hhData.data_0.assetId}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_0.assetName = '${testdata_localchain_WillCreator.hhData.data_0.assetName}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_0.amount = '${testdata_localchain_WillCreator.hhData.data_0.amount}'`);
            let beforeCreatingAsset = await _lock.getAllAsset();
            if(IsAssetAlreadyCreated(beforeCreatingAsset, testdata_localchain_WillCreator.hhData.data_0.assetId)){

              //stop the test
              throw new Error(`asset already exists ; '${testdata_localchain_WillCreator.hhData.data_0.assetId}'`);
            }
            let currentAsstId = await _lock.getNextAssetId();
           console.log(`currentAsstId = '${currentAsstId}'`)
            expect(currentAsstId).to.equal(0);

            await expect(
                await _lock.a_createAssets(testdata_localchain_WillCreator.hhData.data_0.assetName,
                  testdata_localchain_WillCreator.hhData.data_0.amount)

              ).to.emit(_lock, "assetCreated")
              .withArgs(
                testdata_localchain_WillCreator.hhData.data_0.assetId,
                testdata_localchain_WillCreator.hhData.data_0.assetName,
              testdata_localchain_WillCreator.hhData.data_0.amount);

                                                                                          //  const {tx, hash, value} = await _lock.a_createAssets("t0", amt1);

                                                                                          //  printToConsole(hash);
                                                                                          //  console.log(value.toString());
                                                                                          //  printToConsole(value);

                                                                                          // // Get the transaction receipt
                                                                                          // const receipt = await ethers.provider.getTransactionReceipt(hash);

                                                                                          //  printToConsole(receipt);


            // check asset available for will to use
          const result = await _lock.checkAssetisAvailable('ca-0');
          printToConsole(result);
            expect(result).to.equal(true);

          });

          it("#3. 'ca-1' asset creation", async function () {


            let amt2 = 2 * 10 * 18;
            const eventName='assetCreated'

            console.log(`testdata_localchain_WillCreator.hhData.data_1.assetId = '${testdata_localchain_WillCreator.hhData.data_1.assetId}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_1.assetName = '${testdata_localchain_WillCreator.hhData.data_1.assetName}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_1.amount = '${testdata_localchain_WillCreator.hhData.data_1.amount}'`);

            let currentAsstId = await _lock.getNextAssetId();
            console.log(`currentAsstId = '${currentAsstId}'`)
            expect(currentAsstId).to.equal(1);

            let beforeCreatingAsset = await _lock.getAllAsset();
            if(IsAssetAlreadyCreated(beforeCreatingAsset, testdata_localchain_WillCreator.hhData.data_1.assetId)){

              //stop the test
              throw new Error(`asset already exists ; '${testdata_localchain_WillCreator.hhData.data_1.assetId}'`);
            }else{

            }

            const estimate  = await _lock.a_createAssets(testdata_localchain_WillCreator.hhData.data_1.assetName,
              testdata_localchain_WillCreator.hhData.data_1.amount);
              console.log(`---`);
              console.log(estimate)
              console.log("Gas Estimate:", estimate.toString());

              await expect(
                estimate

              ).to.emit(_lock, "assetCreated")
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

            printToConsole(`does 'ca-1' exist? -->
            '${testdata_localchain_WillCreator.hhData.data_1.assetId}'`);
let result = await _lock.checkAssetisAvailable
(testdata_localchain_WillCreator.hhData.data_1.assetId);
printToConsole('ca-1',result);
            expect(result).to.equal(true);
          });

          it(`#4. CreateAsset - '${testdata_localchain_WillCreator.hhData.data_2.assetId}'!`, async function () {

            let amt3 = 3 * 10 * 18;

            let currentAsstId = await _lock.getNextAssetId();
            console.log(`currentAsstId = '${currentAsstId}'`)
            expect(currentAsstId).to.equal(2);

            //returns all Assets
            let beforeCreatingAsset = await _lock.getAllAsset();
            if(IsAssetAlreadyCreated(beforeCreatingAsset, testdata_localchain_WillCreator.hhData.data_2.assetId)){

              //stop the test
              throw new Error(`asset already exists ; '${testdata_localchain_WillCreator.hhData.data_2.assetId}'`);
            }


            await expect(
              await _lock.a_createAssets(testdata_localchain_WillCreator.hhData.data_2.assetName,
                testdata_localchain_WillCreator.hhData.data_2.amount)

            ).to.emit(_lock, "assetCreated")
            .withArgs(testdata_localchain_WillCreator.hhData.data_2.assetId,
              testdata_localchain_WillCreator.hhData.data_2.assetName,
              testdata_localchain_WillCreator.hhData.data_2.amount); // We accept any value as `when` arg

              let result = await _lock.checkAssetisAvailable
              (testdata_localchain_WillCreator.hhData.data_2.assetId);
              printToConsole('ca-2',result);

            expect(result).to.equal(true);
          });




          it("#5. create_test_a_createCryptoVault_0", async function () {



            console.log(`testdata_localchain_WillCreator.hhData.data_0.assetId = '${testdata_localchain_WillCreator.hhData.data_0.assetId}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_0.willStartDate = '${testdata_localchain_WillCreator.hhData.data_0.willStartDate}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_0.willMaturityDate = '${testdata_localchain_WillCreator.hhData.data_0.willMaturityDate}'`);
            console.log(`testdata_localchain_WillCreator.hhData.data_0.Benefitors = '${testdata_localchain_WillCreator.hhData.data_0.Benefitors}'`);
            const ONE_GWEI = 1_000_000_000;//ethers.utils.parseEther("1");
            // var k = await _lock.a_createCryptoVault(
            //   testdata_localchain_WillCreator.hhData.data_0.assetId,
            //   testdata_localchain_WillCreator.hhData.data_0.willStartDate,
            //   testdata_localchain_WillCreator.hhData.data_0.willEndDate,
            //   testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
            //   { value: ONE_GWEI }
            // );
            // k.wait();
            // console.log(`k--val`);
            // console.log(k)
            //expect(k).to.be.an.instanceOf(Promise);
            await expect(
              await _lock.a_createCryptoVault(
                testdata_localchain_WillCreator.hhData.data_0.assetId,
                testdata_localchain_WillCreator.hhData.data_0.willStartDate,
                testdata_localchain_WillCreator.hhData.data_0.willMaturityDate,
                testdata_localchain_WillCreator.hhData.data_0.Benefitors,
                { value: ONE_GWEI }
              )

            ).to.emit(_lock, "willCreated")
            .withArgs( testdata_localchain_WillCreator.hhData.data_0.assetId,
            testdata_localchain_WillCreator.hhData.data_0.willStartDate,
            testdata_localchain_WillCreator.hhData.data_0.willMaturityDate,
            0); // We accept any value as `when` arg


          });

          it("#6. recreate_test_a_createCryptoVault_0", async function () {



            await expect(_lock.a_createCryptoVault(
              testdata_localchain_WillCreator.hhData.data_0.assetId,
              testdata_localchain_WillCreator.hhData.data_0.willStartDate,
              testdata_localchain_WillCreator.hhData.data_0.willMaturityDate,
              testdata_localchain_WillCreator.hhData.data_0.Benefitors

            )).to.be.revertedWith("Asset is not in Created Status ");

          });
          it("#7. create_txn#1   _expectEvent", async function () {


            await expect(
              await _lock.a_createCryptoVault(
                testdata_localchain_WillCreator.hhData.data_1.assetId,
                testdata_localchain_WillCreator.hhData.data_1.willStartDate,
                testdata_localchain_WillCreator.hhData.data_1.willMaturityDate,
                testdata_localchain_WillCreator.hhData.data_1.Benefitors

              )

            ).to.emit(_lock, "willCreated")
            .withArgs( testdata_localchain_WillCreator.hhData.data_1.assetId,
            testdata_localchain_WillCreator.hhData.data_1.willStartDate,
            testdata_localchain_WillCreator.hhData.data_1.willMaturityDate,
            1); // We accept any value as `when` arg

          });



    });



    describe("post_of_create_wills", function(){
      let _lock;
      let owner;
      let contractAbi;
      let contract1Address ;
      let contractName;
      before(async function () {
        //const provider = ethers.provider;
        // contractAbi is passed from fixture, its already tested            console.log(contractAbi)
          //      const contract = new ethers.Contract(contract1Address, contractAbi, provider);

        contract1Address = '0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f';
        contractName = "WillsCreateorFactory";
        //const contractArtifact = await artifacts.readArtifact(contractName);
        contractAbi = [
          {
            "inputs": [],
            "name": "willCreatorFactory__NotEnoughETHEntered",
            "type": "error"
          },
          {
            "inputs": [],
            "name": "willCreatorFactory__UpkeepNotNeeded",
            "type": "error"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "Deposit",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "LogDepositReceived",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "Withdraw",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "assetId",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "assetName",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetAmount",
                "type": "uint256"
              }
            ],
            "name": "assetCreated",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "willofPropertyName",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "willStartDate",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "willMaturityDate",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "cryptoWillId",
                "type": "uint256"
              }
            ],
            "name": "willCreated",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "cryptoWillId",
                "type": "uint256"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "benefitor",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "willMaturityDate",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "willAmount",
                "type": "uint256"
              }
            ],
            "name": "willSettled",
            "type": "event"
          },
          {
            "stateMutability": "payable",
            "type": "fallback"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "assetName",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "assetAmount",
                "type": "uint256"
              }
            ],
            "name": "a_createAssets",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_assetId",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "willStartDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "willMaturityDate",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "Benefitors",
                "type": "address"
              }
            ],
            "name": "a_createCryptoVault",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "a_init_Assets",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "addADMINrole",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "adminrole",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "b_createTxn_Metamask",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "b_createTxn_one",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "b_createTxn_zero",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "c_getContractBalance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_assetId",
                "type": "string"
              }
            ],
            "name": "checkAssetisAvailable",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "checkIfAddminRoleIsPresent",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "locId",
                "type": "string"
              }
            ],
            "name": "check_position_s_arr_cryptoAssetIds",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "locId",
                "type": "string"
              }
            ],
            "name": "check_position_s_arr_cryptoAssetIds_expensive",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "name": "cryptoAssets",
            "outputs": [
              {
                "internalType": "string",
                "name": "AssetId",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "Name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isAvailable",
                "type": "bool"
              },
              {
                "internalType": "enum WWethBase20.cryptoAssetStatus",
                "name": "assetStatus",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "depositWithCharges",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "matDate",
                "type": "uint256"
              }
            ],
            "name": "generateHash",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getAllAsset",
            "outputs": [
              {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getAllBonds",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "willId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "assetId",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "willStartDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "willMaturityDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "willOwner",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "willManager",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "Benefitors",
                    "type": "address"
                  },
                  {
                    "internalType": "enum WWethBase20.baseStatus",
                    "name": "s_baseStatus",
                    "type": "uint8"
                  }
                ],
                "internalType": "struct WWethBase20.willlInfo[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_assetId",
                "type": "string"
              }
            ],
            "name": "getAssetStatus",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getContractBirthDate",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "_birthdate",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getEntranceFee",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getMaturityDates",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getNextAssetId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getNextWillId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "getUserCreatedBonds",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "willId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "assetId",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "willStartDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "willMaturityDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "willOwner",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "willManager",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "Benefitors",
                    "type": "address"
                  },
                  {
                    "internalType": "enum WWethBase20.baseStatus",
                    "name": "s_baseStatus",
                    "type": "uint8"
                  }
                ],
                "internalType": "struct WWethBase20.willlInfo[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "willId",
                "type": "uint256"
              }
            ],
            "name": "getWillStatus",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "s_Contract_birthdate",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "s_MaturityDates",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "s_MaturityDates_keys",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "s_assetsCurrentId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "s_currentBondId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "s_willlInfo",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "willId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "assetId",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "willStartDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "willMaturityDate",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "willOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "willManager",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "Benefitors",
                "type": "address"
              },
              {
                "internalType": "enum WWethBase20.baseStatus",
                "name": "s_baseStatus",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_birthdate",
                "type": "uint256"
              }
            ],
            "name": "setContractBirthDate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "willId",
                "type": "uint256"
              }
            ],
            "name": "settleAssets",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "withDraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "stateMutability": "payable",
            "type": "receive"
          }
        ] //contractArtifact.contractAbi;
        console.log(`in before contract just to print contractAbi`)

        _lock = new ethers.Contract(contract1Address,contractAbi, ethers.provider )
        owner = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
      });



      it("#8. verify Next Ids after 2 asset, 2 will ", async function () {
        console.log(`calling to get Nextasset id`)

        let nextAssetid = await _lock.getNextAssetId()
        console.log(`calling to get NextWill id`)
        let nextWillid = await _lock.getNextWillId()

        expect(nextAssetid).to.equal(2);

        expect(nextWillid).to.equal(2);


      });
      it("#9. get all Assets", async function () {


        let allAssets = await _lock.getAllAsset();
        expect(allAssets.length).to.be(2);

          //printToConsole(await lock.getAllBonds());
      });
      it("#9. get all Wills", async function () {


        let allWills = await _lock.getAllBonds();
        expect(allWills.length).to.be(2);

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

        //const userCreatedBonds  = await lock.getUserCreatedBonds(owner.address);
        const t  = await _lock.getUserCreatedBonds(owner.address);

        let contractInstance_Addr_july9_355 = '0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f'
        let contractAbi_july9_355 = '0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f'
        printToConsole(`t --> '${t}'`)

      });

      it("getTransactionCount for an User", async function () {


        const userCreatedBonds  = await _lock.getUserCreatedBonds(owner.address);
        console.log('----');
    //    console.log(web3.eth.getTransactionCount);
        console.log('----');

      });

      it("#10.getContractBalance", async function () {


        //const contractBalance  = await lock.getBalance(lock.target);
        const contractBalance  = await this._runnablelock.c_getContractBalance();
        console.log('----');
        printToConsole('getContractBalance',contractBalance)

        console.log('----');

      });


      it("queryEvents", async function () {




        const provider = ethers.provider;
// contractAbi is passed from fixture, its already tested            console.log(contractAbi)
        const contract = new ethers.Contract(contract1Address, contractAbi, provider);

        // Retrieve the event logs matching the specified filter options
        const filter = contract.filters.MyEvent();
        const logs = await contract.queryFilter(filter);

        // Process the logs to extract the relevant information
        for (const log of logs) {
          console.log(log.args);
        }

        console.log(`contract1Address= '${contract1Address}'`)
      });

      it("print all Txns in this run", async function () {

        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

      //  await lock.init();
      console.log(`contract1Address= '${contract1Address}'`)
      const provider = new JsonRpcProvider("http://127.0.0.1:8545/"); // Use the default provider
      const blockNumber = await provider.getBlockNumber();
      for (let i = 0; i <= blockNumber; i++) {
        const block = await provider.getBlock(i);
        const transactions = block.transactions;

        for (const txHash of transactions) {
          const transaction = await provider.getTransaction(txHash);
          console.log("Transaction details:", transaction);
        }
      }


      });

    });

    describe("settle_Cancel_Mature_Txns_assets",  async function () {
      const { lock, unlockTime , contract1Address} = await loadFixture(deployOneYearLockFixture);

      it("Manuallysettle_Txn_#0", async function () {

        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

      //  await lock.init();
      console.log(`contract1Address= '${contract1Address}'`)
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




      it("Cancell_Txn__#1", async function () {

        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

      //  await lock.init();
      console.log(`contract1Address= '${contract1Address}'`)
      const willStatus_0 = await lock.getWillStatus(1);
      printToConsole('will_0 ==> status')
      printToConsole(willStatus_0);

      expect(willStatus_0).to.equal('Assigned');

      expect(await lock.settleAssets(0))
            .to.emit(lock, "willSettled")
            .withArgs('0',testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
            testdata_localchain_WillCreator.hhData.data_0.willEndDate,
            testdata_localchain_WillCreator.hhData.data_0.amount);
      });


      it("Mature_Txn_mimic_chainlink__#2", async function () {

        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

      //  await lock.init();
      console.log(`contract1Address= '${contract1Address}'`)
      const willStatus_0 = await lock.getWillStatus(2);
      printToConsole('will_0 ==> status')
      printToConsole(willStatus_0);

      expect(willStatus_0).to.equal('Assigned');

      expect(await lock.settleAssets(0))
            .to.emit(lock, "willSettled")
            .withArgs('0',testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
            testdata_localchain_WillCreator.hhData.data_0.willEndDate,
            testdata_localchain_WillCreator.hhData.data_0.amount);
      });


      it("Automaticsettle_Txn_#3_onLocal_hardhatChain", async function () {

        // const contractAddress = deployedContractAddr;
        // printToConsole(`contractADdr: ${contractAddress}`)
        // const myContract = await hre.ethers.getContractAt("WWethcreateWillsERC20", contractAddress);

      //  await lock.init();
      console.log(`contract1Address= '${contract1Address}'`)
      const willStatus_0 = await lock.getWillStatus(0);
      printToConsole('will_0 ==> status')
      printToConsole(willStatus_0);
      
      //increase time on hardhat chain to test our application
      await network.provider.send("evm_increaseTime", [interval.toNumber() + 1])
      
      //mine a empty block to confirm above increaseTime
      await network.provider.send("evm_mine",[])
      
      //another way to mine vm chain
      //await network.provider.request({method: "evm_mine", params: []})

      expect(willStatus_0).to.equal('Assigned');

      expect(await lock.settleAssets(0))
            .to.emit(lock, "willSettled")
            .withArgs('0',testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
            testdata_localchain_WillCreator.hhData.data_0.willEndDate,
            testdata_localchain_WillCreator.hhData.data_0.amount);
      });



    });



});


function IsAssetAlreadyCreated(beforeCreatingAsset, assetId){

  let i=0;
  for(; i<beforeCreatingAsset.length; i++)
  {
      if(beforeCreatingAsset[i] === assetId)
      {
        //stop the test
        return true;
      }
  }
  return false;
}

function captureWarnings() {
  let capturedWarnings = [];

  const originalWarn = console.warn;
  console.warn = function (...args) {
    capturedWarnings.push(args);
    originalWarn.apply(console, args);
  };

  afterEach(function () {
    if (capturedWarnings.length > 0) {
      console.log('Captured Warnings:', capturedWarnings);
    }
    capturedWarnings = [];
  });
}

//module.exports = testdata_localchain_WillCreator;

//160
// 4 x 8  x 22 inch


//25 x 2 = 50








// 1.6 x 8 

