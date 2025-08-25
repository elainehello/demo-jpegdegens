// Import Hardhat Ethers plugin to enable ethers.js in Hardhat environment
import "@nomiclabs/hardhat-ethers";
// Import ethers object from Hardhat for contract deployment and interaction
import { ethers } from "hardhat";
// Import Chai expect for assertions in tests
import { expect } from "chai";

// Example test suite for the HelloWorld contract
describe("hello world", function() {
    // Test case to check if the contract says "HelloWorld"
    it("should say hi", async function() {

        const HelloWorld = ethers.getContractFactory("HelloWorld");
    });
});