// SPDX-License-Identifier: MIT
// Library contract
pragma solidity ^0.8.0;

library MyLibrary {
    function libraryFunction() public pure {
        // Library function logic
    }
}

// Parent A contract


contract ParentA {
    using MyLibrary for uint256;

    function parentAFunction() external {
        uint256 x = 123;
        //x.libraryFunction();
    }
}

// Parent B contract inheriting ParentA
contract ParentB is ParentA {
    function parentBFunction() external {
        // Additional functionality in ParentB
         uint256 y = 123;
        //abiy.libraryFunction();
    }
}