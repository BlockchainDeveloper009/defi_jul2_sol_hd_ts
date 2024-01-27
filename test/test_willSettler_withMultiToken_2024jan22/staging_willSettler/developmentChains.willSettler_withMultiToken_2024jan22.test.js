const { assert, expect } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
//const { developmentChains } = require("../../helper-hardhat-config")
//.\artifacts\contracts\src\erc20WWeth\WWethcreateWillsERC20
const contracts = ["WillsCreateorFactory","C:\\source\\repos\\solidity_dev\\defi_jul2_sol_hd_ts\\artifacts\\contracts\\willSettler_23Jul02\\WillsCreateorFactory"];

describe("Will Creator Staging Tests", function () {

        let raffle, raffleEntranceFee, deployer

          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])

              raffle = await ethers.getContract(contracts[0], deployer)
              raffleEntranceFee = await raffle.getEntranceFee()
          })

         describe("fulfillRandomWords", function () {

        });
});