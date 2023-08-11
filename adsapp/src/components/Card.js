import React from 'react';
import ABI from "./abi.json";
import { useMetaMask } from 'metamask-react';
import { ethers } from "ethers"
import { AiOutlineShop } from 'react-icons/ai';
import { Button } from './Buttons';

const ADDRESS = "0x11ED7657C78A91D3E234238cf88a713f1E7E9D4b"


const gameContract = new ethers.Contract(ADDRESS, ABI);

const NFTCard = ({props: { image, name, price }}) => {
    const { ethereum } = useMetaMask();

    async function handleBuy(e) {
        e.preventDefault()
        // Get Access To Browser Provider via MetaMask
        const provider = new ethers.BrowserProvider(ethereum);
        // Get Access To Signer i.e Selected Metamask Account
        const signer = await provider.getSigner();
        // Make Smart Contract Method/Function Call
        gameContract.connect(signer).buyAsset(ethers.parseEther(price.toString()), {image: image, name: name}, {value: ethers.parseEther(price.toString())});
    }
    return (
        <div className='w-[250px] mt-3 mx-3 cursor-pointer rounded-10'>
            <div className='h-[300px] w-full'>
            <img src={`${image}`} alt="" className='h-full w-full object-cover' />
            </div>
            <div className='w-full text-white py-3 px-2 w-full bg-[#3B3B3B]'>
            <span>{name}</span>

            <div className='flex text-[12px] items-center my-2'>
                <img src={require('../assets/avatar.png')} alt=""  className='mr-3'/>
                <span>{`${price} ETH`}</span>
            </div>
            <div>
                <Button placeholder={'Buy'} onClick={handleBuy} icon={<AiOutlineShop />}/>
            </div>
            </div>
        </div>
    );
};

export default NFTCard;