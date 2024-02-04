const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("Sample one test", function () {

    describe("Deployment", function () {
        it("Should set the right unlockTime", async function () {
          const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
    
          expect(await lock.unlockTime()).to.equal(unlockTime);
        });
    
        it("Should set the right owner", async function () {
          const { lock, owner } = await loadFixture(deployOneYearLockFixture);
    
          expect(await lock.owner()).to.equal(owner.address);
        });

    });


    });