const { time, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("WillsCreateorFactory_hardhat_localhost",  function () {

    async function deployOneYearLockFixture() {
        let assetContractAddr='';
        let assetContractINfo='';
        let willlContractAddr='';
        let willlContractInfo='';

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
        '0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf',
        '0x9d4454B023096f34B160D6B654540c56A1F81688']

        // Contracts are deployed using the first signer/account by default
         const [owner, acct1, moderator,otherAccount] = await ethers.getSigners();
    
        // const Lock = await ethers.getContractFactory("Lock");
        // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
        const AssetCreatorFactory_multiTokenInstance = await hre.ethers.getContractAt('AssetCreatorFactory_multiToken',
        contractAddress[0]);

        const willsCreatorFactory_multiTokenInstance = await hre.ethers.getContractAt(contracts[1],
        contractAddress[1]);

        return { AssetCreatorFactory_multiTokenInstance, 
          willsCreatorFactory_multiTokenInstance,
           contracts, unlockTime, lockedAmount, owner, otherAccount };
      }



    describe("Deployment", async function () {

        it("get_assetIds", async function () {
                console.log('get assetsIds')

                
                const { AssetCreatorFactory_multiTokenInstance, WillCreatorFactory_multiToken_AssetRemovedInstance,
                   contracts, lock, unlockTime } = await loadFixture(deployOneYearLockFixture);

                //const Lock = await ethers.getContractFactory(contracts[0]);
                //const lock = await Lock.deploy();
                   
                    console.log('printting asset contract test');
                    console.log(AssetCreatorFactory_multiTokenInstance)
                  let  assetContractInfo = await AssetCreatorFactory_multiTokenInstance.getContractInfo();
                console.log(assetContractInfo);

                let  willlContractInfo = await WillCreatorFactory_multiToken_AssetRemovedInstance.getContractInfo();
                console.log(willlContractInfo);

                    //c.a_createAssets('ca-0','0x03434343434434',0n)
                console.log(contracts);
                // expect(await lock.settleAssets(0))
                // .to.emit(lock, "willSettled")
                // .withArgs('0',testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
                // testdata_localchain_WillCreator.hhData.data_0.willEndDate,
                // testdata_localchain_WillCreator.hhData.data_0.amount);
                expect(assetContractInfo).to.equal('AssetCreatorFactory_multiToken V2:Deployed on Jan-28-2024');
                expect(willlContractInfo).to.equal('WillsCreatorFactory_multiToken_AssetHandlingRemoved V2:Deployed on Jan-28-2024')
              });

        it("Should set the right unlockTime", async function () {
          const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
    
          expect(await lock.unlockTime()).to.equal(unlockTime);
        });
    
        it("Should set the right owner", async function () {
          const { lock, owner } = await loadFixture(deployOneYearLockFixture);
    
          expect(await lock.owner()).to.equal(owner.address);
        });

    });
})