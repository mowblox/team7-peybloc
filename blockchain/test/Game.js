const { expect } = require("chai");
const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

const gameCardDetails = {
    'name': 'Defi Astronault',
    'image': 'https://i.pinimg.com/474x/b6/f9/b9/b6f9b9743a4041a1037e6d1d5cd0eb6c.jpg',
    'strength': 20
}

describe("Game", () => {
    const deployGameFixture = async () => {

        const [owner, otherAccount] = await ethers.getSigners();
        const GameContract = await ethers.getContractFactory("Game");
        const game = await GameContract.deploy();

        // console.log(`Contract deployed to`, game.address);

        const mintedAsset = game.mintAsset(owner, gameCardDetails);
        return {game, mintedAsset, owner};
    }


    describe("Deployment", () => {
        it("Should be able to deploy the contract and mint an nft", async () => {
            const { game, mintedAsset, owner } = await loadFixture(deployGameFixture);

            expect(await game.mintAsset(owner, gameCardDetails))
            .to
            .equal(mintedAsset);
        })
    })
})
