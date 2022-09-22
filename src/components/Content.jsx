import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        height:200vh;
        display:flex;
        justify-content: center;
        /* align-items: center; */
        margin-top: 5rem;
        `;



const Content = () => {
    return (
        <Container>
            <h1>Welcome to Home Page.</h1>
        </Container>
    )
}

export default Content