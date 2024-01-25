// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BalanceChecker {
    // Function to get the balance of an address by asset
    function getBalanceByAsset(address wallet, address asset) public view returns (uint256) {
        return IERC20(asset).balanceOf(wallet);
    }

    // Function to print the balance of an address by asset
    function printBalanceByAsset(address wallet, address asset) external view returns (uint256) {
        uint256 balance = getBalanceByAsset(wallet, asset);
        // You can replace the following line with your specific logic to handle the balance
        // For example, you might want to emit an event, return the balance, or perform some other action.
        // For now, we'll just return the balance.
        return balance;
    }
}
