/// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HelloWorld {
    /// @notice Returns the string "HelloWorld"
    /// @dev This is a pure function with no state modification or input
    function hello() public pure returns (string memory) {
        return "HelloWorld";
    }
}