import styled from "@emotion/styled"

import Nav from "./Nav"
import Footer from "./Footer"


const ContainerWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const Container = styled.div`
 
    `

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <ContainerWrap>
                    {children}  
            </ContainerWrap>
            <Footer />
        </div>
    )
}