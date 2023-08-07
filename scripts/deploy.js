const hre = require("hardhat");

async function main() {
  // Get the Points smart contract
  const Lock = await hre.ethers.getContractFactory("WINXCLUB");

  // Deploy it
  const Lock = await Lock.deploy();
  await Lock.deployed();

  // Display the contract address
  console.log(`WINXCLUB token deployed to ${Lock.address}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

