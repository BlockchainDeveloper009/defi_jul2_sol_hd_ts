// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WCETH_Token is ERC20{ //WWeth20 {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol){
        _mint(msg.sender, initialSupply);
    }


}