import Layout from '../components/Layout'
import '../styles/globals.css'
import { useEffect } from "react";
import { useStore } from "../utils/store";
import { getWalletInfo } from "../utils";

function MyApp({ Component, pageProps }) {
  const { setWalletAddress, setBalance, setNetwork } = useStore(state => ({
    
    setWalletAddress: state.setWalletAddress,
    setBalance: state.setBalance,
    setNetwork: state.setNetwork,
  }));


  const connectWallet = () => {
    if (window.ethereum) {
        window.ethereum.request({ method: `eth_requestAccounts` })
        .then((res) => {
          if(res[0]) {
            setWalletAddress(res[0]);
            getWalletInfo(res[0], { setBalance, setNetwork });
            console.log(res[0])
          }
        })
      }
  }
  useEffect(() => {
    connectWallet();
  
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
