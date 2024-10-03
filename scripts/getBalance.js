const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/PelToken.sol/PelToken.json");

const contractAddress = "0x92Ba00415f0a5e42Cb3CAD1A6659C10c781194a3";
const contractABI = contractJSON.abi;
const walletAddress = "0x124510F86a91d24e7bd93849B4Ad08b4cA408874";

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
