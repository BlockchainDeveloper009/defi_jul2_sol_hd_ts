require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // mumbai: {
    //   url: POLY_ALCHEMY_API_KEY_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    // goerli: {
    //   url: GOERLI_ALCHEMY_API_KEY_URL,
    //   accounts: [learnweb3_pk],
    // },
    localhost: {
      chainId: 31337,
      url: 'http://127.0.0.1:8545/',
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],

    },
  },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: POLYGONSCAN_KEY,
  //   },
  // },
  gasReporter: {
    currency: 'GBP',
    gasPrice: 50
  },
  paths: {
    sources: "./contracts/willSettler_23Jul02", // Path to your contract source files
    artifacts: "./artifacts/contracts/willSettler_23Jul02", // Path to your contract artifact files
    cache: "./cache", // Path to your cache directory (optional)
    tests: "./test", // Path to your test files (optional)
  },
};
