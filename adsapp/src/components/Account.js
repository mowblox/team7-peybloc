import React from "react";
import NFTCard from "./Card";
import { Button } from "./Buttons";
import nftsdata from './data.json';


const Account = ({ address}) => {
    return (
        <div className={`w-full h-full bg-gray-100`}>
            <div className="w-full bg-purple-400 h-[90px] flex justify-center">
                <div className="h-[100px] w-[100px] absolute top-12">
                    <img src={`https://i.pinimg.com/474x/ca/76/8f/ca768f3206a618e10ffbc6797127a280.jpg`} className='w-full h-full object-cover rounded-[100%]' alt="" />
                </div>
            </div>

            <div className='h-full pt-6 grid grid-cols-4 mx-auto w-[1200px] overflow-scroll'> 
            {nftsdata.nfts.slice(6).map((nft) => {
                return (
                <div className='my-4'
                >
                    <NFTCard props={nft}/>
                </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Account;