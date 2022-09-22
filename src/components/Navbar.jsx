import React from 'react'
import styled from 'styled-components'
import logo5 from '../logo/logo5.png'
import HamburgerMenu from './HamburgerMenu';


const Container = styled.div`
        height: 100%;
        /* width: 100vw; */
        background-color: purple;
        padding: 20px;
        overflow: hidden;
        /* position: relative; */
        `;

const Wrapper = styled.div``;

const Logo = styled.img`
        width: 10%;
        `;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '3rem' }}>Logo</span>
                <Logo src={logo5} alt='logo' />
            </Wrapper>
            <HamburgerMenu />

        </Container>
    )
}
export default Navbar
