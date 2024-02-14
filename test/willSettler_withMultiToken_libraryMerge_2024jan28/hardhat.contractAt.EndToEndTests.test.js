
const { time, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { WECTH_TOKEN_ADDRESS, WILLCREATORFACTORY_ADDRESS, ASSETCONTRACT_ADDRESS } = require('./testConfig');
const eth = (amount) => ethers.utils.parseEther(String(amount));
async function getTransactionsInBlock(blockNumber) {
  // Connect to the local Hardhat node
  //const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const provider = hre.ethers.provider;
  // Get the block information
  const block = await provider.getBlockWithTransactions(blockNumber);

  // Return transactions
  return block.transactions;
}
const emittedEvents = [];
const saveEvents = async (tx) => {
    const receipt = await tx.wait()
    receipt.events.forEach(ev => {
        if (ev.event) {
            emittedEvents.push({
                name: ev.event,
                args: ev.args
            });
        }
    });
    console.log(`emittedEvents: `, emittedEvents);
}
describe("WillsCreateorFactory_hardhat_localhost",  function () {

    async function deployOneYearLockFixture() {
        let assetContractAddr='';
        let assetContractINfo='';
        let willlContractAddr='';
        let willlContractInfo='';
        console.log('addr')
        console.log(`${WECTH_TOKEN_ADDRESS}`)
        let wethCCYAddr= WECTH_TOKEN_ADDRESS;
        const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        const ONE_GWEI = 1_000_000_000;
    
        const lockedAmount = ONE_GWEI;
        const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
        const path = "C:\\source\\repos\\solidity_dev\\defi_WillCreator_WagmiReactHooksBr\\defi_jul2_sol_hd_ts\\artifacts\\contracts\\willSettler_withMultiToken_libraryMerge_2024jan28\\";
        

        const contractIndex=0;
        const contracts = 
        [
        "AssetCreatorFactory_multiToken",
        `WillsCreatorFactory_multiToken_AssetHandlingRemoved`];
        
      const contractAddress = [
        ASSETCONTRACT_ADDRESS,
        WILLCREATORFACTORY_ADDRESS]

        // Contracts are deployed using the first signer/account by default
         const [owner, acct1, moderator,otherAccount] = await ethers.getSigners();
    
        // const Lock = await ethers.getContractFactory("Lock");
        // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
        const AssetCreatorFactory_multiTokenInstance 
        = await hre.ethers.getContractAt('AssetCreatorFactory_multiToken',
        contractAddress[0]);

        const willsCreatorFactory_multiTokenInstance 
        = await hre.ethers.getContractAt(contracts[1],
        contractAddress[1]);

        return { AssetCreatorFactory_multiTokenInstance, 
          willsCreatorFactory_multiTokenInstance,
           contracts, unlockTime, wethCCYAddr, lockedAmount, owner, otherAccount };
    }


    describe("read blocks in transaction", async function(){
      async function get_eth_getBlockByNumber(blockNumber){
        const t = hre.ethers.provider.eth_getBlockByNumber(blockNumber);
        console.log(t);
      }
      async function getTransactionsInBlock4(blockNumber) {
        // Connect to the local Hardhat node
        //const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
        const provider = hre.ethers.provider;
        let bl;
        const latestBlock = provider.getBlock(blockNumber).then((d)=>{
          console.log(`--getTransactionsInBlock4---STARTING-----getBlock success`)
          bl = d.transactions
          console.log(d.transactions)
          console.log(`end of transactions...`)
        }).catch((error)=>{
           console.error("latest block error",error)
          })

        console.log(`getTransactionsInBlock4---latestBlock - `); 
        console.log(latestBlock)
        console.log(`--getTransactionsInBlock4--ends HERE------`)
        //console.log(latestBlock.transactions);
        // Get the block information
       // const block = await provider.getBlockWithTransactions(blockNumber);
      
        // Return transactions
        //return block.transactions;
        return bl;
      }

      it("reads block - #4", async function () {
        const { AssetCreatorFactory_multiTokenInstance, wethCCYAddr,otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        // Usage
          const blockNumber = 5; // Replace with the block number you want to inspect
          console.log(`starting to read - ${blockNumber}`)
          let t = getTransactionsInBlock4(blockNumber);
          t.then((v)=> { console.log('L:103 in promise then clause') 
          console.log(v)
          console.log(`L:185 v ends here`)
        }).catch((er)=> {console.log(`error ${er}`)})

          console.log('=-------------after t, print t----------------')
          console.log(t);
          console.log(`t ends--------------------------------------`)

          await getTransactionsInBlock4(blockNumber)
            .then(transactions => {
              console.log('txn 4 read success')
              console.log('Transactions in block', blockNumber, ':', transactions);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      });
    });
    describe.only("End-to-End_CREATE SINGLE TXN", async function(){
        let assetIDcreated='N'
        it("create asset1", async function () {
          let txn = [
            {"assetId":"ca-3", "assetAmt":2_000_000_000n},
            {"assetId":"ca-3", "assetAmt":2_000_000_000n}
          ]
          const { AssetCreatorFactory_multiTokenInstance, wethCCYAddr,otherAccount } 
          = await loadFixture(deployOneYearLockFixture);
          // let txn0 
          // = await AssetCreatorFactory_multiTokenInstance
          // .a_createAssets(txn.assetId,wethCCYAddr,txn.assetAmt);
          // // Usage
          // //console.log(`'''print txn response --${txn0}`)
          // console.log(`txn0.blockNumber=${txn0.blockNumber}`)
          // console.log(`txn0.blockHash=${txn0.blockHash}`)
          // console.log(`txn0.hash=${txn0.hash}`)

          await expect(
            AssetCreatorFactory_multiTokenInstance
            .a_createAssets(txn.assetId,wethCCYAddr,assetAmt))
            .to.emit(AssetCreatorFactory_multiTokenInstance, 'assetCreated')
            .withArgs(txn.assetId, txn.assetId, txn.assetAmt); 
          
          await expect(
            AssetCreatorFactory_multiTokenInstance
            .a_createAssets(txn.assetId,wethCCYAddr,assetAmt))
            .to.emit(AssetCreatorFactory_multiTokenInstance, 'assetCreated')
            .withArgs(txn.assetId, txn.assetId, txn.assetAmt); //

          //listen for event
          saveEvents(txn0);
          emittedEvents.forEach(event => {

            console.log(`event name => ${event.name}`)
            // if (event.name === 'moneyAdded') {
            //     transactionHistory += `Deposited: $${parseFloat(fromEth(event.args.amount))} \n`;
            //     userBalance += parseFloat(fromEth(event.args.amount));
            // } else if (event.name === 'moneyWithdrawn') {
            //     transactionHistory += `Withdrew: $${parseFloat(fromEth(event.args.amount))} \n`;
            //     userBalance -= parseFloat(fromEth(event.args.amount));
            // }
        });
            const blockNumber = 4; // Replace with the block number you want to inspect
            // await getTransactionsInBlock(blockNumber)
            //   .then(transactions => {
            //     console.log('Transactions in block', blockNumber, ':', transactions);
            //   })
            //   .catch(error => {
            //     console.error('Error:', error);
            //   });
        });

        it("query Block", async function(){

        });
        it("check asset details ca-1", async function () {
          const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
          
          let status = await AssetCreatorFactory_multiTokenInstance.getAssetStatus('ca-1');
     
    
          expect(status).to.equal('Created');
        });
        it("Create Will using asset created in previous step", async function () {
          const { WillCreatorFactory_multiToken_AssetRemovedInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
          let status;
          if(assetIDcreated!='N'){
            status 
            = await WillCreatorFactory_multiToken_AssetRemovedInstance
            .a_createCryptoVault('ca-1');
            
           
      
            expect(status).to.equal('Created');
          }else{
            console.log(`Asset not Created`)
          }

          saveEvents(status);
          emittedEvents.forEach(event => {

            console.log(`event name => ${event.name}`)

          });
         
        });
    
      });
      

});



