import Link from 'next/link';
import styled from '@emotion/styled';
import { useStore } from "../utils/store";
import { useEffect } from "react";
import { detectNetworkChange, converAddress, getWalletInfo } from '../utils';

// max-width: calc(100vw - 80px);
const Container = styled.nav`
    width: 100%;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font: 14px/20px Helvetica;
    
    display: flex;
    z-index: 100%;
    `;

const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
   
    align-items: center;
    line-height: 50px;

    `;
const NavLi = styled.li`
    margin-right: 28px;
    height: 100%;
    padding: 4px 0;
    `;

const ChainButton = styled.button`
    font: nomal nomal 600 14px/20px Inter;
    border: 1px solid #44454B
    cursor: pointer;
    height: 36px;
    display: flex;
    padding: 8px 20px;
    background: linear-gradient(180deg, #252525 0%, #191919 100%);
    align-items: center;
    margin-right: 10px;
    border-radius: 4px;
    margin-top: 4px;
    `;

const WalletButton = styled.button`
    font: nomal nomal 600 14px/20px Inter;
    border: 0;
    cursor: pointer;
    height: 36px;
    display: flex;
    padding: 8px 20px;
    background: #D01F36;
    transition: .2s all ease-out;
    align-items: center;
    border-radius: 4px;
    margin-top: 4px;
    `;
const WalletButtonSpan = styled.span`
    display: inlin-block;
    padding: 6px 12px;
    margin-left: 14px;
    margin-right: -18px;
    border-radius: 4px;
    background: #161616;
    
    `

export default function Nav() {

    const { walletAddress, balance, network}  = useStore(state => ({
        walletAddress: state.walletAddress,
        balance: state.balance,
        network: state.network,
    }));

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
        detectNetworkChange();
    }, [network])

    return(
        <Container>
            <NavUl>
                <NavLi>
                    <Link href="/">
                        <a>
                            <img src="/images/logo_transparent2.png" height="50px"
                                style={{verticalAlign: "middle"}}
                            />
                        </a>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="/staking">
                        <a>Staking</a>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="/ICO">
                        <a>ICO</a>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="/swap">
                        <a>Swap</a>
                    </Link>
            </NavLi>
        </NavUl>
        <NavUl>
            <NavLi>
                <ChainButton>
                    {network ?
                    <img src={`/images/${network}.svg`}
                        style={{ width:"16px", height: "16px", marginRight:"6px" }}/>
                        : null
                    }
                    <span>{network}</span>
                </ChainButton>
            </NavLi>
            <NavLi>
                <WalletButton onClick={connectWallet}>
                    <span style={{background: "#D01F36" }}>{parseFloat(balance).toFixed(5)}</span>
                    <WalletButtonSpan>
                        { walletAddress ? 
                        converAddress(walletAddress) : "Connect Wallet" 
                        }
                    </WalletButtonSpan>
                </WalletButton>
            </NavLi>
           
        </NavUl>
      </Container>
    )
}