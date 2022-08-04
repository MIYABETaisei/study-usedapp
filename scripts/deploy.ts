import { ethers } from "hardhat";

async function main() {
  const infinityTower = await ethers.getContractFactory("infinityTower");
  const infinitytower = await infinityTower.deploy();

  await infinitytower.deployed();

  console.log("infinityTower with 1 ETH deployed to:", infinitytower.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
