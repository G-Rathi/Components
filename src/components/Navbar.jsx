import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
        height: 5rem;
        /* width: 100vw; */
        background-color: purple;
        padding: 20px;
        overflow: hidden;
        `;

const Navbar = () => {
    return (
        <Container>
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '3rem' }}>Logo</div>
        </Container>
    )
}

export default Navbar