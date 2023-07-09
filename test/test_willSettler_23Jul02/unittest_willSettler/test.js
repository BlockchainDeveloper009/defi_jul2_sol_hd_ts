const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  const { ethers } = require("hardhat");

  const { JsonRpcProvider } = require("@ethersproject/providers");

  describe("Lock", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    // async function deployOneYearLockFixture() {
    //   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    //   const ONE_GWEI = 1_000_000_000;
  
    //   const lockedAmount = ONE_GWEI;
    //   const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
  
    //   // Contracts are deployed using the first signer/account by default
    //   const [owner, otherAccount] = await ethers.getSigners();
  
    //   const Lock = await ethers.getContractFactory("Lock");
    //   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  
    //   return { lock, unlockTime, lockedAmount, owner, otherAccount };
    // }
  
    describe("Deployment", async function () {
 

      it("test block#3", async function () {
        // const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
  
        // expect(await lock.unlockTime()).to.equal(unlockTime);
        const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
        const blockNumber = await provider.getBlockNumber();
        const block = await provider.getBlock(blockNumber);
        console.log('test block#3')
        const transactions = block.transactions;
        transactions.forEach((txHash) => {
            console.log("Transaction Hash:", txHash);
          });

      });
  
     
    });
  

  });
  