import HeadInfo from "../components/HeadInfo"
import styled from "@emotion/styled"
import { useState } from "react";
import { CgArrowsExchangeAltV } from 'react-icons/Cg'
const ContainerWrap = styled.main`
     max-width: 640px;
     width: 100%;
     display: flex;
     flex-direction: column;
        align-items: center;

    `;

const Controller = styled.div`
    width: 80px;
    text-align: center;
    `
const ControllerButton = styled.div`
    cursor: pointer;
    border-radius: 100px;
    padding: 10px;
    margin: 40px 0;
    background: linear-gradient(245.22deg, rgb(218, 46, 29), rgb(243, 106, 255), rgb(57, 208, 216)) 0% center / 400% 100%;
    &:hover {
        background: #228be6
      }
      &:active {
        background: #228be6
      }
    `
   
    
const SwapContainerWrap = styled.div`
    width: 100%;
    height: 420px;
    border-radius: 1.25rem;
    background: linear-gradient(140.14deg, rgba(243, 0, 0, 0.25) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, rgb(24, 19, 77) 0%, rgb(27, 22, 89) 100%);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `
const ConnectButton = styled.button`
    width: 90%;
    height: 70px;
    font-size: 20px;
    margin: 10px 0;
    border: 1px solid grey;
    border-radius: 15px;
    background: #D01F36;

    `

const SwapContainer = styled.div`
    width: 90%;
    height: 380px;
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    background: inherit;
    border-radius: 15px;
    `


const Container = styled.div`
      width: 100%;
      height:100px;
      margin: 10px 0;
      padding: 30px;
      display: flex;
      justify-content: space-around;
      border-radius: 15px;
    `
const Input = styled.input`
      height: 2.4rem;
      transition: opacity 0.2s
      font-weight: 500;
      font-size: 28px;
      
      border: none;
      flex: 1 1 auto;
    
    `

const CoinButton = styled.button`
    width: inherit;
    height: 2.4rem;
    font-size: 24px;
    font-weight: 500;
    border-radius: 30px;
    vertical-align: middle;
    `



export default function Swap() {


    return (
        <ContainerWrap>
            <HeadInfo title="Swap - Heavy Kite"/>

            <Controller>
                <ControllerButton>
                    Swap
                </ControllerButton>
            </Controller>

            <SwapContainerWrap>
                <SwapContainer>
                    <Container
                    style={{ marginBottom: "35px"}}>
                        <Input 
                            inputMode="decimal"
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            minLength="1"
                            maxLength="79"
                            spellCheck="false"
                            placeholder="0.0"
                            />
                        <CoinButton>ETH</CoinButton>
                    </Container>
                    <div style={{
                        width: "100%",
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "center",
                        background: "none",
                        borderRadius: "9999",
                    }}>
                        <CgArrowsExchangeAltV size="36"
                            style={{
                                background:"none",
                                border: "1px solid white",
                                borderRadius: "9999px"
                                }}/>
                    </div>
                    <Container
                        style={{ marginTop: "30px"}}>
                    <Input 
                            inputMode="decimal"
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            minLength="1"
                            maxLength="79"
                            spellCheck="false"
                            placeholder="0.0"
                            />
                        <CoinButton>ETH</CoinButton>
                    </Container>
               
    
                </SwapContainer>
                <ConnectButton>Connect Wallet </ConnectButton>
            </SwapContainerWrap>

        </ContainerWrap>
    )
}