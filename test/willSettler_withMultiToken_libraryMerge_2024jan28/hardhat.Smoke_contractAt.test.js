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
        let wethCCYAddr= '0x9a676e781a523b5d0c0e43731313a708cb607508';
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
        WILLCREATORFACTORY_ADDRESS,
      ]

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
           contracts, unlockTime, wethCCYAddr, lockedAmount, owner, otherAccount };
      }



    describe("Deployment", async function () {

        it("get_ContractInfo_ForBothContracts", async function () {
                console.log('get assetsIds')

                
                const { AssetCreatorFactory_multiTokenInstance, WillCreatorFactory_multiToken_AssetRemovedInstance,
                   contracts, lock, wethCCYAddr, unlockTime } = await loadFixture(deployOneYearLockFixture);

                //const Lock = await ethers.getContractFactory(contracts[0]);
                //const lock = await Lock.deploy();
                   
                    console.log('printting asset contract test');
                    console.log(AssetCreatorFactory_multiTokenInstance)
                  let  assetContractInfo = await AssetCreatorFactory_multiTokenInstance.getContractInfo();
                console.log(assetContractInfo);

                let  willlContractInfo 
                = await WillCreatorFactory_multiToken_AssetRemovedInstance.getContractInfo();
                console.log(willlContractInfo);

                    
                console.log(contracts);
                // expect(await lock.settleAssets(0))
                // .to.emit(lock, "willSettled")
                // .withArgs('0',testdata_localchain_WillCreator.hhData.data_0.hardhat_BenefitorAddr,
                // testdata_localchain_WillCreator.hhData.data_0.willEndDate,
                // testdata_localchain_WillCreator.hhData.data_0.amount);
                expect(assetContractInfo).to.equal('AssetCreatorFactory_multiToken V2:Deployed on Jan-28-2024');
                expect(willlContractInfo).to.equal('WillsCreatorFactory_multiToken_AssetHandlingRemoved V2:Deployed on Jan-28-2024')
              });

        it("create asset0", async function () {
          const { AssetCreatorFactory_multiTokenInstance, otherAccount } 
          = await loadFixture(deployOneYearLockFixture);
          let txn0 = await AssetCreatorFactory_multiTokenInstance.a_createAssets('ca-0',wethCCYAddr,1_000_000_000n);
        });
    
        it("create asset1", async function () {
          const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
          let txn0 = await AssetCreatorFactory_multiTokenInstance.a_createAssets('ca-1',wethCCYAddr,1_000_000_000n);
          
        });

        it("check statis asset0", async function () {
          const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
          
          let status = await AssetCreatorFactory_multiTokenInstance.getAssetStatus('ca-0');

    
          expect(status).to.equal('Created');
        });
        //checkAssetisAvailable
        it("check statis asset1", async function () {
          const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
          
          let status = await AssetCreatorFactory_multiTokenInstance.getAssetStatus('ca-1');
          
    
          expect(status).to.equal('Created');
        });


      

    });

   
    describe.only("CHECK STATUS OF CA-1", async function(){

      it("check asset details ca-1", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getAssetStatus('ca-1');
        
  
        expect(status).to.equal('Created');
      });
      it("getNextAssetId ", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getNextAssetId();
        
        let expectedValue= 2
        expect(status).to.equal(expectedValue);
      });

    });

    describe("read wills from chain", async function(){
      it("getMyWills", async function () {
        const { willsCreatorFactory_multiTokenInstance, therAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .getMyWills();
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("getMyAssets", async function () {
        const { willsCreatorFactory_multiTokenInstance, therAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .getMyAssets();
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });
    });
    describe("read Asset info from chain", async function(){

      it("check asset details ca-0", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getAssetStatus('ca-0');
        
  
        expect(status).to.equal('Created');
      });

      it("getAssetAmount ca-0", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getAssetAmount('ca-0');
        
  
        expect(status).to.equal('10000n');
      });

      it("getAllAssetIds", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getAllAssetIds();
        
        let expectedAssets= ['ca-0','ca-1']
        expect(status).to.equal(expectedAssets);
      });
      
      it("getUserCreatedAssets for owner", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getUserCreatedAssets('0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a');
        
        let expectedAssets= ['ca-0','ca-1']
        expect(status).to.equal(expectedAssets);
      });


      it("getNextAssetId ", async function () {
        const { AssetCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await AssetCreatorFactory_multiTokenInstance.getNextAssetId();
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("getnextWill_d_wills ", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status = await willsCreatorFactory_multiTokenInstance.getNextWillId();
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("create will_0 ", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .a_createCryptoVault('ca-0','12345678','12345678',otherAccount);
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("create will_1 ", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .a_createCryptoVault('ca-1','12345678','12345678',otherAccount);
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("getUserCreatedBonds for owner", async function () {
        const { willsCreatorFactory_multiTokenInstance,owner } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .getUserCreatedBonds(owner);
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("create CancelWill_0", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .a_createCryptoVault('ca-0','12345678','12345678',otherAccount);
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      
      it("mainTenance_getAllBonds", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .mainTenance_getAllBonds();
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("getUserCreatedBonds for otherAccount", async function () {
        const { willsCreatorFactory_multiTokenInstance, therAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .getUserCreatedBonds(otherAccount);
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

    



      it("manuallySettleWill", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .manuallySettleWill(0,0);

        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("cancelWill", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let cancelEvent 
        = await willsCreatorFactory_multiTokenInstance
        .cancelWill(0,0);

        let status 
        = await willsCreatorFactory_multiTokenInstance
        .getWillStatus(0);
        
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });

      it("get Will Info- should return start,mat date,", async function () {
        const { willsCreatorFactory_multiTokenInstance, otherAccount } = await loadFixture(deployOneYearLockFixture);
        
        let status 
        = await willsCreatorFactory_multiTokenInstance
        .getWillInfo(0);
        
        
        let expectedValue= 3
        expect(status).to.equal(expectedValue);
      });


    })
})