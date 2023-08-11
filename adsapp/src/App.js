import { useMetaMask } from 'metamask-react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Button } from './components/Buttons';
import { GoRocket } from 'react-icons/go';
import { BiSolidUpArrow } from 'react-icons/bi';
import nftsdata from './components/data.json';
import NFTCard from './components/Card';
import { Route, Routes } from 'react-router-dom';
import Account from './components/Account';

function Homepage() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const [showProfile, setShowProfile] = useState(false);
  const [userNft, setUserNft] = useState([]);
  // const Address = '';
  

  // const GameContract = new ethers.Contract( Address , abi , signer );
  const [address, setAddress] = useState('');

  

  useEffect(() => {
    // connect();
  }, [])
  return (
    <div className='bg-[#2B2B2B] w-[100vw] h-[100vh] overflow-scroll'>
      <Navbar onClickConnect={(address) => {
          connect();
          setAddress(address);
      }}/>

      <div className='flex justify-center py-24'>
        <div className='text-white mx-4 '>
          <span className='text-6xl text-[50px] max-w-[140px]'>Discover <br /> Digital Art &<br/> Collect Game Cards</span>
          <span className='block mt-3 text-2xl'>
            Welcome To Our Game Card NFT Marketplace <br />That Allows You To Purchase Game Cards
          </span>

          <div className='max-w-[200px] my-5'>
            <Button icon={<GoRocket />} placeholder={'Get Started'}/>
          </div>
        </div>
        <div className='mx-6'>
          <HeroCard />
        </div>
      </div>

      <div className='py-12'>
        <CardSection />
      </div>

      <div 
      onClick={() => {
        setShowProfile(!showProfile);
      }}
      className={`${showProfile ? 'absolute top-16': 'absolute'} px-2 bg-purple-400 bottom-0 cursor-pointer right-0 bg-white w-[150px] h-[30px] flex items-center`}>
        <BiSolidUpArrow />
        <span className='mx-4'>My profile</span>
      </div>
      <div className={`${showProfile ? "block": "hidden"} h-[80vh] w-full bg-white absolute top-24`}>
        <Account address={address}/>
      </div>
    </div>
  );
}




const HeroCard = () => {
  return (
    <div className='w-[500px] max-w-[400px]'>
      <div className='w-full h-[300px]'>
        <img className="object-fit w-full h-full" src={require('./assets/heroImg.png')} alt="" />
      </div>

      <div className='w-full text-white py-3 px-2 w-full bg-[#3B3B3B]'>
        <span>Space Walking</span>

        <div className='flex text-[12px] items-center my-2'>
          <img src={require('./assets/avatar.png')} alt=""  className='mr-3'/>
          <span>Peybloc</span>
        </div>
      </div>
    </div>
  )
}


const CardSection = () => {
  return (
    <div className='h-[100vh]'>
      <span className='block mt-3 text-2xl text-white px-4'>
        Discover Our Game Cards NFTs
      </span>

      <div className='h-full pt-6 grid grid-cols-4 mx-auto w-[1200px]'> 
        {nftsdata.nfts.map((nft) => {
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

const App = () => {

  return (
    <div>
      <Homepage />
    </div>
  )
}
export default App;
 