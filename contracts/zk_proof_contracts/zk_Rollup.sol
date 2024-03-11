pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Address.sol";

contract ZkRollup {
    using Address for address;

    // Mapping to track token balances deposited into the rollup
    mapping(address => uint256) private _balances;

    // Event to track token deposits into the rollup
    event Deposit(address indexed depositor, uint256 amount);

    // Function to deposit tokens into the rollup
    function deposit(address token, uint256 amount) external {
        require(token.isContract(), "Token must be a contract");
        require(amount > 0, "Deposit amount must be greater than 0");

        // Transfer tokens from the depositor to the rollup contract
        require(
            IERC20(token).transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );

        // Update the balance in the rollup contract
        _balances[token][msg.sender] += amount;

        // Emit an event to track the deposit
        emit Deposit(msg.sender, amount);
    }

    // Function to withdraw tokens from the rollup
    function withdraw(address token, uint256 amount) external {
        require(token.isContract(), "Token must be a contract");
        require(amount > 0, "Withdrawal amount must be greater than 0");

        // Ensure the caller has sufficient balance in the rollup contract
        require(
            _balances[token][msg.sender] >= amount,
            "Insufficient balance in rollup contract"
        );

        // Transfer tokens from the rollup contract to the depositor
        require(
            IERC20(token).transfer(msg.sender, amount),
            "Transfer failed"
        );

        // Update the balance in the rollup contract
        _balances[token][msg.sender] -= amount;
    }
}
