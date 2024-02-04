// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";
import "./AssetCreatorFactory_multiToken.sol";
import "./WillsCreatorFactory_multiToken_AssetHandlingRemoved.sol";

contract WillCreatorFactory_multiToken_AssetRemoved_test {
    struct testData {
        string _assetId;
        uint256 willStartDate;
        uint256 willMaturityDate;
        address Benefitors;
    }

    AssetCreatorFactory_multiToken public AssetCreatorFactoryInstance;
    WillsCreatorFactory_multiToken_AssetHandlingRemoved public WillsCreatorFactory_multiToken_AssetHandlingRemovedInstance;
    address TokenAddress = 0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1;
    address moderatorAddr = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address benefitorAddr = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    address assetCreator_owner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address assetCreatorFactory_multiToken_Addr = 0x663F3ad617193148711d28f5334eE4Ed07016602;
    address payable WillsCreatorFactory_multiToken_AssetHandlingRemoved_Addr = payable(0x0124189Fc71496f8660dB5189F296055ED757632);

    mapping(string => testData) public testMappingData;

    constructor() {
        AssetCreatorFactoryInstance = AssetCreatorFactory_multiToken(assetCreatorFactory_multiToken_Addr);
        WillsCreatorFactory_multiToken_AssetHandlingRemovedInstance = WillsCreatorFactory_multiToken_AssetHandlingRemoved(WillsCreatorFactory_multiToken_AssetHandlingRemoved_Addr);
        testMappingData["test1"] = testData("ca-0", 123456, 123456, payable(benefitorAddr));
        testMappingData["test2"] = testData("ca-1", 123456, 123456, payable(benefitorAddr));
    }

    function CreateAssets_Wills_0() external {
        AssetCreatorFactoryInstance.a_createAssets("ass0", TokenAddress, 1000);
        WillsCreatorFactory_multiToken_AssetHandlingRemovedInstance.a_createCryptoVault(
            testMappingData["test1"]._assetId,
            testMappingData["test1"].willStartDate,
            testMappingData["test1"].willMaturityDate,
            payable(testMappingData["test1"].Benefitors)
        );
    }

    function CreateAssets_Wills_1() external {
        AssetCreatorFactoryInstance.a_createAssets("ass1", TokenAddress, 2000);
        WillsCreatorFactory_multiToken_AssetHandlingRemovedInstance.a_createCryptoVault(
            testMappingData["test2"]._assetId,
            testMappingData["test2"].willStartDate,
            testMappingData["test2"].willMaturityDate,
            payable(testMappingData["test2"].Benefitors)
        );
    }

    function CreateAssets_Wills_2() external {
        AssetCreatorFactoryInstance.a_createAssets("ass2", TokenAddress, 3000);
    }
}
