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

This Solidity smart contract code is a cryptoWill creator with multi-token support. The contract includes functionalities for creating assets, managing wills, settling wills manually, canceling wills, and other related operations.

Here's a brief summary of the contract's functionalities and structure:

- The contract allows users to create assets (crypto coins) and use them to create wills.

- Users can specify the start date, maturity date, and beneficiaries for each will.

- The contract supports multiple tokens for asset creation.

- There are modifiers to restrict access to certain functions based on roles like contract moderator, contract owner, and will owner.

- Events are emitted for various actions such as will creation, settlement, maturity, cancellation, and more.

- Admin roles can be assigned to specific addresses.

- The contract includes error handling and assertions for validation purposes.

- Some functions and modifiers are commented out, indicating that they may be part of future enhancements or optimizations.

- Gas optimization techniques such as reducing storage usage and minimizing loop iterations are applied.

- Overall, the contract provides a comprehensive framework for managing crypto assets and executing wills in a decentralized manner.

```
Note: Some features, e.g., automatic settlement of Wills on the maturity date, are still under development/improvement or may be under research to have a gas-optimized design.


```

### Tradeoffs:
- On-Chain vs. Off-Chain Logic:   Performing all logic on-chain increases decentralization but can be costly in terms of gas fees and computation. Off-loading certain tasks to off-chain systems can reduce costs but may sacrifice decentralization and trustlessness.

- Storage Costs: Storing data on the Ethereum blockchain incurs costs. Optimizing storage usage by minimizing redundant or unnecessary data can reduce costs but may require more complex logic off-chain to manage state. 

- Gas Costs: Ethereum smart contracts execute operations via transactions, which require gas fees. The more complex the contract and the operations within it, the higher the gas costs. Tradeoffs often involve optimizing the contract to minimize gas consumption while still achieving the desired functionality.


### improvements: if i rewrite, the contract from scratch, I would like to follow below items.

- Upgradeability: Introduce upgradeability to allow for future enhancements and fixes post-deployment while considering security risks.

- Gas Optimization: Continuously review and optimize the contract code to reduce gas costs by optimizing loops, minimizing storage reads and writes, and using more efficient data structures.

- Reduce Complexity: Refactor certain functions to be converted into library functions or separate contracts to reduce complexity and improve readability.

- Plan for Future Enhancements: Plan and implement scalability improvements such as integrating ZK Rollup for computation of contract settlements and documentation earlier in the development process using Behavior-Driven Development approach for testing.

- Utilize Foundry: Utilize tools like Foundry for built-in fuzz testing and other optimizations.

