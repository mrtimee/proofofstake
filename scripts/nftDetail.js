const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/PelToken.sol/PelToken.json");

const contractAddress = "0x92Ba00415f0a5e42Cb3CAD1A6659C10c781194a3";
const contractABI = contractJSON.abi;
const tokenId = 2;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  console.log(`NFT tokenId ${tokenId}`);
  console.log(`Prompt: ${await contract.promtDescription(tokenId)}`);
  console.log(`NFT owner: ${await contract.ownerOf(tokenId)}`);
  console.log(`URI: ${await contract.tokenURI(tokenId)}`);
  console.log(`URL: https://ipfs.io/ipfs/${await contract.tokenURI(tokenId)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
