import React from 'react'
import styled from 'styled-components'
import logo5 from '../logo/logo5.png'


const Container = styled.div`
        height: 100%;
        /* width: 100vw; */
        background-color: purple;
        padding: 20px;
        overflow: hidden;
        `;

const Logo = styled.img`
        width: 10%;
        `;

const Navbar = () => {
    return (
        <Container>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '3rem' }}>Logo</span>
            <Logo src={logo5} alt='logo' />
        </Container>
    )
}

export default Navbar