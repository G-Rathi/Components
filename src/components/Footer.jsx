import React from 'react'
import styled from "styled-components"
import ScrollToTopBtn from './ScrollToTopBtn';
import logo5 from '../logo/logo5.png'




const Container = styled.div`
        color: white;
        /* background-color: black; */
        /* background: linear-gradient(rgba(49,67,87,0.9),rgba(49,67,87,0.9)), url("https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg") center ; */
        /* background: linear-gradient(rgba(49,67,87,0.8),rgba(49,67,87,0.8)), url("https://images.unsplash.com/photo-1622126755582-16754165dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") center ; */
        background: linear-gradient(rgba(49,67,87,0.9),rgba(49,67,87,0.99)), url("https://images.unsplash.com/photo-1557338031-c704009b03d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") center ;

        background-size: cover;
        align-content: center;
        overflow: hidden;
        padding: 0rem 7rem;
        position: relative;
        `;

const Wrapper = styled.div`
        display:flex;
        color: white;
        padding:40px 0px 25px 0px;
        `;

const Left = styled.div`
        flex:1;
        display:flex;
        flex-direction: column;
        `;

const Logo = styled.span`
        cursor:pointer;
        `;

const LogoText = styled.div`
        width:50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        `;

const Desc = styled.p`
                margin: 20px 0px;
                `;

const SocialContainer = styled.div`
                display:flex;
                justify-content: end;
                margin-top: 2rem;
                `;

const SocialIcon = styled.div`
                width: 39px;
                height: 39px;
                /* border-radius:50%; */
                /* background-color:${props => props.color}; */
                background-color: rgba(66,83,103, 1);
                color: white;
                font-size: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                /* transition: all 0.5s ease; */
                cursor: pointer;

                /* &:hover{
                        transform: scale(1.5);
                        color:wheat;
                } */
                `;

const Center = styled.div`
        flex:1;
        padding-left: 92px;
        display:flex;
        justify-content: space-between;
        `;

const Title = styled.h3`
                margin-bottom: 30px;
                `;

const List = styled.ul`
                margin:0;
                padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                `;

const ListItem = styled.li`
                cursor:pointer;
                /* width: 50%; */
                margin-bottom: 25px;
                /* transition: all 0.5s ease; */


                /* &:hover{
                        transform: scale(1.1)
                } */
                `;


const Right = styled.div`
        flex:1;
        /* padding: 20px; */
        text-align: right;
        `;

const Hr = styled.hr`
        width:100%;
        font-size: 1px;
        `;

const CopyRight = styled.div`
        display:flex;
        flex-direction: column;
       
        `;

const CopyRightItems = styled.div`
        display:flex;
        justify-content: space-between;
        padding: 40px 0;
        `;



const Footer = () => {

    return (
        <Container>
            <div>
                <Wrapper>

                    <Left>
                        {/* <Logo>Mypencode</Logo> */}
                        <Logo>
                            <div>
                                <img src={logo5} alt='logo' style={{ width: '50%' }} />
                                <LogoText>
                                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>ACC INFRA</span>
                                    <span style={{ fontSize: '11px' }}>Let your dream be our project</span>
                                </LogoText>
                            </div>
                        </Logo>

                        <Desc>
                            It is a long established fact that a render will be distracted by the readable content of a page when looking at its layout. The point of using Lorem lpsum is that it has a more-or-less normal
                        </Desc>
                    </Left>


                    <Center>
                        <div>
                            <Title>QUICK LINKS</Title>
                            <List>
                                <ListItem>+ Home</ListItem>
                                <ListItem>+ About Us</ListItem>
                                <ListItem>+ Services</ListItem>
                                <ListItem>+ Photo Gallery</ListItem>
                                <ListItem>+ Testimonials</ListItem>
                                <ListItem>+ Contact Us</ListItem>
                            </List>
                        </div>
                        <div>
                            <Title>PROJECTS</Title>
                            <List>
                                <ListItem>+ Upcoming Projects</ListItem>
                                <ListItem>+ Completed Projects</ListItem>

                            </List>
                        </div>
                    </Center>


                    <Right>
                        <Title>CONTACT INFO</Title>
                        <div>
                            <span style={{ display: 'block', fontWeight: 'bold', fontSize: '28px' }}>+91 123 456 7890</span>
                            <span style={{ display: 'block', fontWeight: 'bold' }}>hello@aacinfra.com</span>
                            <SocialContainer>
                                <SocialIcon>
                                    <i class="fa-brands fa-twitter" />
                                </SocialIcon>
                                <SocialIcon>
                                    <i class="fa-brands fa-facebook-f" />
                                </SocialIcon>
                                <SocialIcon>
                                    <i class="fa-brands fa-instagram" />
                                </SocialIcon>
                                <SocialIcon>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </SocialIcon>
                            </SocialContainer>
                        </div>
                    </Right>

                </Wrapper>

                <CopyRight>
                    <Hr />
                    <CopyRightItems>
                        <span>&#169; 2021 | Real Estate & Luxury Homes</span>
                        <span style={{ marginRight: '5px' }}>Site created by WebMatriks Technologies</span>
                    </CopyRightItems>
                </CopyRight>
            </div>
            <ScrollToTopBtn />

        </Container>
    )
}

export default Footer