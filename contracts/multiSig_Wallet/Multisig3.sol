pragma solidity ^0.8.1;

contract Multisig3 {
    address[] public signers;
    mapping(uint256 => Transaction) public transactions;
    uint256 public numTransactions;

    struct Transaction {
        address to;
        uint256 amount;
        bool executed;
        mapping(address => bool) approvals;
        uint256 approvalsCount;
    }

    event TransactionCreated(uint256 indexed id, address indexed to, uint256 amount);
    event TransactionExecuted(uint256 indexed id);

    constructor(address[] memory _signers) {
        signers = _signers;
    }

    modifier onlySigner() {
        bool isValidSigner = false;
        for (uint256 i = 0; i < signers.length; i++) {
            if (msg.sender == signers[i]) {
                isValidSigner = true;
                break;
            }
        }
        require(isValidSigner, "Not authorized");
        _;
    }

    function createTransaction(address _to, uint256 _amount) external onlySigner {
        transactions[numTransactions] = Transaction({
            to: _to,
            amount: _amount,
            executed: false,
            approvalsCount: 0
        });
        emit TransactionCreated(numTransactions, _to, _amount);
        numTransactions++;
    }

    function signTransaction(uint256 _id) external onlySigner {
        Transaction storage transaction = transactions[_id];
        require(!transaction.executed, "Transaction already executed");
        require(!transaction.approvals[msg.sender], "Already approved");
        transaction.approvals[msg.sender] = true;
        transaction.approvalsCount++;
        if (transaction.approvalsCount == signers.length) {
            executeTransaction(_id);
        }
    }

    function executeTransaction(uint256 _id) internal {
        Transaction storage transaction = transactions[_id];
        require(transaction.approvalsCount == signers.length, "Not enough approvals");
        require(!transaction.executed, "Transaction already executed");
        transaction.executed = true;
        (bool success, ) = transaction.to.call{value: transaction.amount}("");
        require(success, "Transfer failed");
        emit TransactionExecuted(_id);
    }
}
