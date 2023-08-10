const { ethers } = require('hardhat');

const main = async () => {
  const GameContract = await ethers.getContractFactory("Game");
  const game = await GameContract.deploy();

  console.log(`Contract deployed to`, game.target);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
