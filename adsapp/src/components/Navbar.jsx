import React from 'react';
import { Button } from './Buttons';


const Navbar = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto pt-8 flex justify-between items-center'>
            <img src={require('../assets/logo.png')} alt="" className='object-contain cursor-pointer' />
            <div className='max-w-[200px]'>
                <Button placeholder={`Connect Wallet`}/>
            </div>
        </div>
    )
}

export default Navbar;