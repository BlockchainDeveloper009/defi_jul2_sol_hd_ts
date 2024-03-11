// MultiSigWallet.sol

pragma solidity ^0.8.0;

contract MultiSigWallet {
    address[] public owners;
    uint256 public requiredSignatures;

    constructor(address[] memory _owners, uint256 _requiredSignatures) {
        require(_owners.length > 0, "At least one owner required");
        require(_requiredSignatures > 0 && _requiredSignatures <= _owners.length, "Invalid required signatures");
        
        owners = _owners;
        requiredSignatures = _requiredSignatures;
    }

    function executeTransaction(address to, uint256 value, bytes memory data) public {
        // Validate that the transaction has enough signatures
        require(msg.sender == address(this), "Only the contract can execute transactions");
        require(isValidSignature(msg.sender), "Transaction requires more signatures");

        // Execute the transaction
        (bool success, ) = to.call{value: value}(data);
        require(success, "Transaction execution failed");
    }

    function isValidSignature(address signer) private view returns (bool) {
        uint256 signatureCount;
        for (uint256 i = 0; i < owners.length; i++) {
            if (owners[i] == signer) {
                signatureCount++;
            }
        }
        return signatureCount >= requiredSignatures;
    }
}
