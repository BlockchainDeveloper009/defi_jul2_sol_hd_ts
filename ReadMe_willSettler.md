### Contract Deployed & Verified at Testnet Mumbai

### Step1: Contract1 - Asset Creation
- [Contract1: Source](https://github.com/BlockchainDeveloper009/defi_jul2_sol_hd_ts/blob/dev_NewWagmiIplementation/contracts/willSettler_withMultiToken_libraryMerge_2024jan28/AssetCreatorFactory_multiToken.sol)
- [ Use '0x0DaFC14Af4E71716971E04444fe858d9fC413dc3' to create assets](https://mumbai.polygonscan.com/address/0x0DaFC14Af4E71716971E04444fe858d9fC413dc3#code)

#### Contract1 - Asset Creator - Contract Explanation
- Asset Creation: Enables users to create assets with customizable names, amounts, and associated token addresses.
- Access Control: Implements access control mechanisms for contract moderation and asset ownership, ensuring secure asset management.
- Event Emission: Emits events for transparent asset creation and token transfers, enhancing user experience and contract transparency.

### Step2: Contract2 - Will Creation using the asset id created in Step1
- [Contract2: Source](https://github.com/BlockchainDeveloper009/defi_jul2_sol_hd_ts/blob/dev_NewWagmiIplementation/contracts/willSettler_withMultiToken_libraryMerge_2024jan28/WillsCreatorFactory_multiToken_AssetHandlingRemoved.sol)
- [Step2: Use '0xE2004201614A5D19753bd0356f96296fF536E175' to create Wills using the asset ids created in AssetCreator contract ](https://mumbai.polygonscan.com/address/0xE2004201614A5D19753bd0356f96296fF536E175#code)

### WillSettler - Contract Explanation:

This Solidity smart contract code is a cryptoWill creator with multi-token support. The contract includes functionalities for creating assets, managing wills, settling wills manually, canceling wills, and other related operations.

Here's a brief summary of the contract's functionalities and structure:

- The contract allows users to create assets (crypto coins) and use them to create wills.
- Users can specify the start date, maturity date, and beneficiaries for each will.
- The contract supports multiple tokens for asset creation.
- There are modifiers to restrict access to certain functions based on roles like 
   contract moderator,          contract owner, and will owner.
- Events are emitted for various actions such as will creation, settlement, maturity, cancellation, and more.
- Admin roles can be assigned to specific addresses.
- The contract includes error handling and assertions for validation purposes.
- Some functions and modifiers are commented out, indicating that they may be part of future enhancements     or  optimizations.
- Gas optimization techniques such as reducing storage usage and minimizing loop iterations are applied.
- Overall, the contract provides a comprehensive framework for managing crypto assets and executing wills in a decentralized manner.

```
Note: Some features  for eg. automatic settlement of Wills on maturity date are still under development/improvement or may be under Research to have gas optimized design

```

### Tradeoffs:
- On-Chain vs. Off-Chain Logic:   Performing all logic on-chain increases decentralization but can be costly in terms of gas fees and computation. Off-loading certain tasks to off-chain systems can reduce costs but may sacrifice decentralization and trustlessness.

- Storage Costs: Storing data on the Ethereum blockchain incurs costs. Optimizing storage usage by minimizing redundant or unnecessary data can reduce costs but may require more complex logic off-chain to manage state. 

- Gas Costs: Ethereum smart contracts execute operations via transactions, which require gas fees. The more complex the contract and the operations within it, the higher the gas costs. Tradeoffs often involve optimizing the contract to minimize gas consumption while still achieving the desired functionality.


### improvements: if i rewrite, the contract from scratch, I would like to follow below items.

- Upgradeability: The contract appears to have a fixed implementation, which means it lacks upgradeability. Adding upgradeability would require additional complexity and potentially introduce security risks if not implemented carefully. The tradeoff is between the immutability of the contract and the ability to upgrade and fix issues post-deployment.

- Gas Optimization: Review the contract code to identify areas where gas costs can be reduced, after implementing each feature. This could involve optimizing loops, minimizing storage reads and writes, and using more efficient data structures.

- Reduce complexity by refactoring certains functions to be converted as library functions or another contract(like how a different contract is used to create Assets)

- Plan for future enhancements and scalability improvements. for eg. Introduce ZK Rollup to do computation of settlement of contracts at one go.

- Initiate documentation earlier, even before writing smartcontract, write Behavior Driven Development approach for testing.

- Will use Foundry, as it has in built fuzz testing and other cool stuffs.


