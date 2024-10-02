const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/PelToken.sol/PelToken.json");

const contractAddress = "0xc";
const contractABI = contractJSON.abi;
const walletAddress = "0xw";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  console.log(
    `${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
