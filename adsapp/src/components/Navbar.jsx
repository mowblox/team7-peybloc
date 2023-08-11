import React, { useEffect, useState } from 'react';
import { Button } from './Buttons';
import { BsPerson } from 'react-icons/bs';
import { useMetaMask } from 'metamask-react';

const truncateAddress = (address) => {
    if (!address) return "No Account";
    const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
    );
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
    };
    
    export const toHex = (num) => {
    const val = Number(num);
    return "0x" + val.toString(16);
};


const Navbar = ({onClickConnect}) => {
    const { connect, status, account } = useMetaMask();
    const [accountAddress, setAccountAddress] = useState('');

    useEffect(() => {
        if (status == 'connected') {
            setAccountAddress(account)
        }
    }, [status])

    return (
        <div className='sticky top-0 w-[100%] max-w-[1100px] mx-auto pt-8 flex justify-between items-center bg-[#2B2B2B]'>
            <div className='flex'>
            <img src={require('../assets/nav/Storefront.png')} alt="" className='object-contain cursor-pointer' />
            <span className='ml-4 text-2xl text-white'>Game Card Marketplace</span>
            </div>
            <div className='max-w-[200px]'>
                <Button onClick={connect} placeholder={accountAddress !== '' ? `${truncateAddress(accountAddress)}` : 'Connect Wallet'} icon={<BsPerson />}/>
            </div>
        </div>
    )
}

export default Navbar;