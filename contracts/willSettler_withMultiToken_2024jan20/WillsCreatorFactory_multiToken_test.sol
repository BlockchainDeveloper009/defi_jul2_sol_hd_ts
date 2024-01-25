// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.1;

import "./WillsCreatorFactory_multiToken.sol";

contract WillsCreatorFactory_multiToken_test {
    WillsCreatorFactory_multiToken public WillsCreatorFactory_multiTokenInstance;

    constructor(address payable _contractBAddress) {
        // Deploy ContractB and store its address
        WillsCreatorFactory_multiTokenInstance = WillsCreatorFactory_multiToken(_contractBAddress);
    }

    function a_init_Assets() external virtual {
        uint256 amt1 = 1 * 10 * 18;
        uint256 amt2 = 2 * 10 * 18;
        uint256 amt3 = 3 * 10 * 18;

        WillsCreatorFactory_multiTokenInstance.a_createAssets("t1",0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0,  amt1);
        WillsCreatorFactory_multiTokenInstance.a_createAssets("t2",0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0,  amt2);
        WillsCreatorFactory_multiTokenInstance.a_createAssets( "t3",0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0,  amt3);
        uint256 amt4 = 3 * 10 * 1;

        WillsCreatorFactory_multiTokenInstance.a_createAssets("t4", 0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0, amt4);
        // createCryptoVault("ca-1", 7, 7,100,["0x17F6AD8Ef982297579C203069C1DbfFE4348c372"]);
    }

    function b_createTxn_zero() external payable virtual {
        WillsCreatorFactory_multiTokenInstance.a_createCryptoVault(
            "ca-0",
            1690606800,
            1690693200,
            payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2)
        );
    }

    function b_createTxn_one() external payable virtual {
        WillsCreatorFactory_multiTokenInstance.a_createCryptoVault(
            "ca-1",
            1690606800,
            1690866000,
            payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2)
        );
    }

    function b_createTxn_Metamask() external payable {
        WillsCreatorFactory_multiTokenInstance.a_createCryptoVault(
            "ca-3",
            1690606800,  //29-jul;
            1693371600,     //30-jul
            payable(0xf821142CC270dAb63767cFAae15dC36D1b043348)
        );
    }

    
}