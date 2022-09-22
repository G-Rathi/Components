import React, { useState } from 'react'
// import styled from 'styled-components';
import './HamburgerMenu.css'



// const Container = styled.div``;

// const Hamburger = styled.div`
//         color: white;
//         font-size: 1.8rem;
//         position: absolute;
//         right: 3.5rem;
//         top: 3rem;
//         z-index:4;
//         cursor: pointer;
//         `;

// const Bar = styled.div`
//         position: absolute;
//         top:0;
//         right:0;
//         width: 20rem;
//         height:100vh;
//         background:  linear-gradient(rgba(30,29,25,0.8),rgba(30,29,25,0.8));
//         z-index: 2;
//         `;

// const MenuItemsContainer = styled.div`
//         position: absolute;
//         top: 8rem;
//         width: 100%;
//         right: 3.5rem;
//         display: flex;
//         flex-direction: column;
//         align-items: flex-end;
//         user-select: none;
//         z-index: 2;
//         `;

// const NavItem = styled.div`
//         /* color: rgb(249, 247, 247); */
//         color: white;
//         margin: 0.5rem 0;
//         cursor: pointer;
//         `;



const HamburgerMenu = () => {
    const [bar, setBar] = useState(false);

    const handleHamburger = () => {
        setBar(!bar)
    }


    return (
        <div>

            <div className='hamburger' onClick={handleHamburger} >
                {bar === false && <i className="fa-sharp fa-solid fa-bars" />}
                {bar === true && <i className="fa-solid fa-x" />}
            </div>


            {bar === true &&
                <div className='barContainer'>
                    <div className='menuItemsContainer'>
                        <div className='menuItem'>Home</div>
                        <div className='menuItem'>About Us</div>
                        <div className='menuItem' style={{ color: 'white', fontWeight: '700' }}>Projects +</div>
                        <div className='menuItem'>Upcoming Projects</div>
                        <div className='menuItem'>Completed Projects</div>
                        <div className='menuItem'>Services</div>
                        <div className='menuItem'>Photo Gallery</div>
                        <div className='menuItem'>Contact Us</div>
                    </div>
                </div>}
        </div>

    )
}

export default HamburgerMenu