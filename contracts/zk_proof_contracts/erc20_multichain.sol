// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Interface for ERC20 token functions
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

// Importing Ownable contract from OpenZeppelin library for access control
import "@openzeppelin/contracts/access/Ownable.sol";

// Import the zk-rollup contract
import "./ZkRollup.sol"; // Make sure to provide the correct path to the zk-rollup contract

// Contract definition inheriting from Ownable contract
contract MyToken is Ownable {
    string public name; // Token name
    string public symbol; // Token symbol
    uint8 public decimals = 18; // Token decimals
    uint256 private _totalSupply; // Total token supply
    mapping(address => uint256) private _balances; // Balances mapping
    mapping(address => mapping(address => uint256)) private _allowances; // Allowances mapping

    // Address of the zk-rollup contract
    address public zkRollupContract;

    // Event to track token transfers
    event Transfer(address indexed from, address indexed to, uint256 value);
    // Event to track approved allowances
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // Constructor to initialize the token with name, symbol, and initial supply
    constructor(
        string memory _name,
        string memory _symbol,
        uint256 initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        _mint(msg.sender, initialSupply * 10 ** uint256(decimals));
    }

    // Function to get the total token supply
    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    // Function to get the balance of an address
    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    // Function to transfer tokens to a recipient
    function transfer(address recipient, uint256 amount) external returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    // Function to approve spending of tokens by a spender
    function approve(address spender, uint256 amount) external returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    // Function to get the allowance approved for spending by a spender
    function allowance(address owner, address spender) external view returns (uint256) {
        return _allowances[owner][spender];
    }

    // Function to transfer tokens from sender to recipient using allowance
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, msg.sender, _allowances[sender][msg.sender] - amount);
        return true;
    }

    // Internal function to perform token transfer
    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), "Transfer from the zero address");
        require(recipient != address(0), "Transfer to the zero address");
        require(amount <= _balances[sender], "Insufficient balance");
        
        _balances[sender] -= amount;
        _balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }

    // Internal function to approve spending of tokens
    function _approve(address owner, address spender, uint256 amount) internal {
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    // Internal function to mint new tokens
    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "Mint to the zero address");
        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    // Function to burn tokens
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    // Internal function to burn tokens
    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "Burn from the zero address");
        require(amount <= _balances[account], "Burn amount exceeds balance");
        
        _balances[account] -= amount;
        _totalSupply -= amount;
        emit Transfer(account, address(0), amount);
    }

    // Function to set the zk-rollup contract address
    function setZkRollupContract(address _zkRollupContract) external onlyOwner {
        zkRollupContract = _zkRollupContract;
    }

    // Function to deposit tokens into zk-rollup
    function depositToRollup(uint256 amount) external {
        require(zkRollupContract != address(0), "Zk-rollup contract address not set");
        IERC20(address(this)).transfer(zkRollupContract, amount);
        emit Deposit(msg.sender, amount);
    }

    // Function to withdraw tokens from zk-rollup
