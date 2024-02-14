// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "./Enums.sol";
    struct cryptoAssetInfo {
        string AssetId;
        string AssetName;
        address AssetTokenAddress;
        uint256 AssetAmount;
        bool isAvailable;
        Enums.CryptoAssetStatus assetStatus;
        address AssetCreator;
    }