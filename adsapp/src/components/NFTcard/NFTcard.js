import React from 'react';
import ABI from "../../abi.json";
import { useMetaMask } from 'metamask-react';
import { ethers } from "ethers"

const NFTCard = ({ image, name, price, artist }) => {

    const ADDRESS = "0x11ED7657C78A91D3E234238cf88a713f1E7E9D4b"


    const { ethereum } = useMetaMask();

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.getSigner();
    const gameContract = new ethers.Contract(ADDRESS, ABI, signer);


    async function handleBuy(e) {
        e.preventDefault()
        // Get Access To Browser Provider via MetaMask
        const provider = new ethers.BrowserProvider(ethereum);
        // Get Access To Signer i.e Selected Metamask Account
        const signer = await provider.getSigner();
        // Make Smart Contract Method/Function Call
        gameContract.connect(signer).buyAsset(price, artist);
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center flex-1 h-469 w-570 rounded-20 bg-gray-800">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-296 rounded-t-20 object-cover"
                />
                <div className="flex flex-col items-start gap-25 p-20 p-x-30 p-b-25 self-stretch">
                    <div className="flex flex-col items-start gap-8 pr-0 flex-1">
                        <h2>{name}</h2>
                        <span>Price: {price}</span>

                    </div>
                    <button onClick={handleBuy} className="flex items-center justify-center gap-12 w-94 h-50 p-x-30 rounded-full bg-purple-600 -top-2024 -left-302 px-4 py-2 ml-auto">Buy</button>
                    <div className="flex flex-col items-start gap-5 self-stretch">
                        <span>{artist}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
