import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import NFTcard from "./components/NFTcard/NFTcard"




function App() {




  useEffect(() => {
    // connect();
  }, [])
  return (
    <div>


      <NFTcard

        image="https://images.unsplash.com/photo-1608744221958-a842da518d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        name="My NFT"
        price={1}
        artist="John Doe"

      />
    </div>
  );
}

export default App;
