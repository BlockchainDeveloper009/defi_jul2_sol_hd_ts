require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

let metamask_dets = {
  "laptop_new_hp_i5": {
    "wallet": "metamask",
    "browser":"chrome",
    "Account1": 
    {
        "pub": "0x1d4F7bac4eAa3Cc5513B7A539330b53AE94A858a",
        "pk":"859d1c39730867ff539b0d5223ee4801a8ead5640383fab058c3db29971385b8",
        
        "balance":{
          "network":{
            "matic": 1.7653
          }
        }
    }

  }
}
let POLYGONSCAN_KEY = 'SYVW8NJ3EX2PTXBNY6QDVH8NQKE7RV38AT';//process.env.POLYGONSCAN_KEY;
//let mumbai_metamask_PRIVATE_KEY = "859d1c39730867ff539b0d5223ee4801a8ead5640383fab058c3db29971385b8";//"0xe62c67b5957d55905f510f374e16465d480287b5f87364f7f30330699e927648";
let mumbai_metamask_PRIVATE_KEY 
= metamask_dets.laptop_new_hp_i5.Account1.pk

let POLY_ALCHEMY_API_KEY_URL='https://polygon-mumbai.g.alchemy.com/v2/3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ'//process.env.POLY_ALCHEMY_API_KEY_URL;
let GOERLI_ALCHEMY_API_KEY_URL = 'https://eth-goerli.g.alchemy.com/v2/FV2iJUUiDrWhIRvvrDLwfmWoNOxFcx6X'
//let mumbai_metamask_PRIVATE_KEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    mumbai: {
      url: POLY_ALCHEMY_API_KEY_URL,
      accounts: [mumbai_metamask_PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_ALCHEMY_API_KEY_URL,
      accounts: [mumbai_metamask_PRIVATE_KEY],
    },
    // },HTTP://127.0.0.1:7545
    ganache: {
      url: "http://127.0.0.1:7545/",
      accounts: [
        `0xf2c76c298a83490694106be5f0b730a7dc982ee4e0b68c9706c4717efa6e6c20`,
      ],
    },
    localhost: {
      chainId: 31337,
      url: 'http://127.0.0.1:8545/',
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],

    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
  gasReporter: {
    currency: 'GBP',
    gasPrice: 50
  },
    etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
  paths: {
    sources: "./contracts/willSettler_23Jul02", // Path to your contract source files
    // artifacts: "./artifacts/contracts/willSettler_23Jul02/contracts/willSettler_23Jul02", // Path to your contract artifact files
    // cache: "./cache", // Path to your cache directory (optional)
    // tests: "./test", // Path to your test files (optional)
  },
};
