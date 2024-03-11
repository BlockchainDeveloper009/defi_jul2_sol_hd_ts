// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing ERC20 token implementation from OpenZeppelin library
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Importing Ownable contract from OpenZeppelin library for access control
import "@openzeppelin/contracts/access/Ownable.sol";

// Contract definition inheriting from ERC20 token implementation and Ownable contract
contract MyToken is ERC20, Ownable {
    uint256 private _cap; // Private variable to store token cap

    // Event to track token cap increase
    event CapIncreased(uint256 newCap);

    // Constructor to initialize the token with name, symbol, initial supply, and cap
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint256 cap
    ) ERC20(name, symbol) {
        // Minting initial supply to contract deployer
        _mint(msg.sender, initialSupply);
        // Setting the token cap
        _cap = cap;
    }

    // Function to increase the token cap, accessible only by the contract owner
    function increaseCap(uint256 newCap) public onlyOwner {
        // Require the new cap to be greater than the current cap
        require(newCap > _cap, "New cap must be greater than current cap");
        // Update the token cap
        _cap = newCap;
        // Emitting an event to track the cap increase
        emit CapIncreased(newCap);
    }

    // Function to mint new tokens, accessible only by the contract owner
    function mint(address account, uint256 amount) public onlyOwner {
        // Require the total supply plus the minted amount to be within the cap
        require(totalSupply() + amount <= _cap, "Exceeds cap");
        // Minting tokens to the specified account
        _mint(account, amount);
    }

    // Overrides transfer function to include additional security checks
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override {
        // Require sender and recipient addresses to be non-zero
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        // Require the amount to be greater than 0
        require(amount > 0, "Amount must be greater than 0");
        // Call hook function before transferring tokens
        _beforeTokenTransfer(sender, recipient, amount);
        // Call ERC20 transfer function
        super._transfer(sender, recipient, amount);
    }

    // Hook function to include additional security checks before token transfer
    function _beforeTokenTransfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual {
        // Additional security checks can be added here
        // For example, checking for blacklisted addresses or implementing transfer restrictions
    }
}
