// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Game is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721('Game', 'ITM') {}

    function mintAsset(address to, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;

    }

    function buyAsset(uint cardPrice, string memory tokenURI) public payable {
        address payable sender = payable(msg.sender);

        require(msg.value >= cardPrice, "Insufficient funds");
        mintAsset(sender, tokenURI);
    }

    // function mintAsset(address buyerAddress, string memory URI) {
    //     // mint new nft
    // }    

    // function buyAsset() {
	// // check buyer balance
	// // deduct amount if user has enough money
	// // send asset to buyer	
    // // Add transaction history
    // }
}