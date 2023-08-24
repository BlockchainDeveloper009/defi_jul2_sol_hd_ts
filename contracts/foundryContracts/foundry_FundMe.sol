pragma solidity ^0.8.18;

contract FundMe {
    uint256 public minimumUsd = 5;
    uint256 public  oneEthValue = 1e18;
    function fund() public payable{

        require( msg.value > 1e18, "dint send 1 eth");

    }
}