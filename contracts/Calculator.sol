// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Calculator {
    event ResultCalculated(string operation, uint256 result);

    function calculate(uint8 operation, uint256 a, uint256 b) public {
        // Determine the operation based on the `operation` argument
        uint256 result;
        string memory operationStr;

        if (operation == 1) {
            result = a - b;
            operationStr = "subtraction";
        } else if (operation == 2) {
            result = a * b;
            operationStr = "multiplication";
        } else if (operation == 3) {
            result = a / b;
            operationStr = "division";
        } else {
            result = a + b;
            operationStr = "addition";
        }

        // Emit the result as an event log
        emit ResultCalculated(operationStr, result);
    }
}
