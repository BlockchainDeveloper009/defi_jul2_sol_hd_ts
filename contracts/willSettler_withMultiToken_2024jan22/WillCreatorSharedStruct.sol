// SharedStruct.sol
pragma solidity ^0.8.0;

import "./Enums.sol";

struct MyStruct {
    uint256 someField;
    // other fields...
}

    struct cryptoAssetInfo {
        
        string AssetId;
        string AssetName;
        address AssetTokenAddress;
        uint256 AssetAmount;
        bool isAvailable;
        Enums.CryptoAssetStatus assetStatus;
        address AssetCreator;
    }