import React from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.div`
        position: absolute;
        width:4rem;
        height:4rem;
        background-color: skyblue;
        color: white;
        bottom: 0;
        right:0;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 0px 20px 0px auto;
        font-size: 2rem;
        cursor: pointer;
        `;

const ScrollToTopBtn = () => {

    // const [visible, setVisible] = useState(false)

    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if (scrolled > 300) {
    //         setVisible(true)
    //     }
    //     else if (scrolled <= 300) {
    //         setVisible(false)
    //     }
    // };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    // window.addEventListener('scroll', toggleVisible);
    // style={{ display: visible ? 'inline' : 'inline' }} // this is attribute of icon
    return (
        <Button onClick={scrollToTop}>
            <i class="fa-sharp fa-solid fa-angle-up" />

        </Button>
    );
}

export default ScrollToTopBtn;