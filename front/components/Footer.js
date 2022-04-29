import styled from "@emotion/styled"
import Link from "next/link";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
    `
const FooterTop = styled.div`
    width: 100%;
    display: grid;
    padding: 30px 20px;
    grid-template-columns: 1fr;
    `
const TopContent = styled.div`
    font: 12px/16px Helvetica;
    color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    `

const FooterBot = styled.div`
    color: #AEAEAE;
    width: 100%;
    height: 30px;
    display: flex;
    max-width: 960px;
    justify-content: space-between;
    `

export default function Footer() {

    

    return (
        <Container>
            <FooterTop>
                <TopContent>
                    <Link href="/">
                    <a><img src={`/images/logo_transparent2.png`} height="70px" /></a>
                    </Link>
                    <p>This is practice Next.js with Web3 for De-fi & ICO</p>
                </TopContent>
            </FooterTop>
            <FooterBot>
                <p style={{textAlign: "center"}}>Copyright © 2021 . All rights reserved. </p>
                <div>
                    <span style={{padding: "0 8px", borderRight: "1px solid #AEAEAE"}}>Terms of Service</span>
                    <span style={{padding: "0 8px", borderRight: "1px solid #AEAEAE"}}>Privacy Policy</span>
                    <span style={{padding: "0 8px", borderRight: "1px solid #AEAEAE"}}>Help Center</span>
                    <span style={{padding: "0 8px" }}>support@HeavyKite.com</span>
                </div>
            </FooterBot>
        </Container>
    )
}