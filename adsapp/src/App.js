import logo from './logo.svg';
import './App.css';
import { useMetaMask } from 'metamask-react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const Address = '';
  

  const GameContract = new ethers.Contract( Address , abi , signer );


  

  useEffect(() => {
    // connect();
  }, [])
  return (
    <div className='bg-[#2B2B2B] w-[100vw] h-[100vh]'>
      <Navbar />

      <div className='flex justify-center py-24'>
        <div className='text-white'>
          <span className='text-4xl text-[50px] max-w-[140px]'>Discover <br /> Digital Art &<br/> Collect Game Cards</span>
          <span></span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
