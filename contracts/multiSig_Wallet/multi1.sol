pragma solidity ^0.8.0;

contract MultisigWallet {
    address[] public owners;
    mapping(address => bool) public isOwner;
    uint public numConfirmationsRequired;

    struct Transaction {
        address to;
        uint value;
        bytes data;
        bool executed;
        mapping(address => bool) isConfirmed;
        uint numConfirmations;
    }

    Transaction[] public transactions;

    constructor(address[] memory _owners, uint _numConfirmationsRequired) {
        require(_owners.length > 0, "Owners required");
        require(_numConfirmationsRequired > 0 && _numConfirmationsRequired <= _owners.length, "Invalid number of confirmations required");

        for (uint i = 0; i < _owners.length; i++) {
            address owner = _owners[i];
            require(owner != address(0), "Invalid owner");
            require(!isOwner[owner], "Owner not unique");

            isOwner[owner] = true;
            owners.push(owner);
        }

        numConfirmationsRequired = _numConfirmationsRequired;
    }

    function submitTransaction(address _to, uint _value, bytes memory _data) public {
        require(isOwner[msg.sender], "Not an owner");

        transactions.push(Transaction({
            to: _to,
            value: _value,
            data: _data,
            executed: false,
            numConfirmations: 0
        }));
    }

    function confirmTransaction(uint _txIndex) public {
        require(isOwner[msg.sender], "Not an owner");
        require(transactions[_txIndex].to != address(0), "Transaction does not exist");
        require(!transactions[_txIndex].isConfirmed[msg.sender], "Transaction already confirmed");

        transactions[_txIndex].isConfirmed[msg.sender] = true;
        transactions[_txIndex].numConfirmations++;

        if (transactions[_txIndex].numConfirmations >= numConfirmationsRequired) {
            executeTransaction(_txIndex);
        }
    }

    function executeTransaction(uint _txIndex) public {
        require(!transactions[_txIndex].executed, "Transaction already executed");

        Transaction storage transaction = transactions[_txIndex];
        require(transaction.numConfirmations >= numConfirmationsRequired, "Insufficient confirmations");

        transaction.executed = true;
        (bool success, ) = transaction.to.call{value: transaction.value}(transaction.data);
        require(success, "Transaction execution failed");
    }
}
