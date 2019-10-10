import React from 'react';
import { carouselImages } from '../../utils/constants';
import { HashLink as Link } from 'react-router-hash-link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled,{keyframes} from 'styled-components';

export const keyFrameExampleOne = keyframes`
  0% {
     font-size: 0.2rem;
  }
  100% {
    font-size: 1.25rem;
  }
`
const Container = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    line-height: 1.65;
    & * {
        color: white;
    }
`
const Header = styled.div`
    padding: 5% 0;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    background-image: -moz-radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
    background-image: -webkit-radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
    background-image: -ms-radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
    background-image: radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
    max-width: 100%;
    text-align: center;

    & > *{
        position: relative;
        margin-top: 3.5rem;
    }

    &:first-child {
        margin-top: 0;
    }

    &:first-child:before {
         display: none;
    }
    @media screen and (max-width: 736px){
        & > *:before {
            top: calc(-2rem - 1px);
            height: calc(2rem + 1px);
        }
        & > * {
            margin-top: 3.5rem;
        }
    }
    @media screen and (max-width: 480px) {
        padding: 1.5rem 0;
    }
`

const Content = styled.div`
    &:before{
        content: '';
        display: block;
        position: absolute;
        top: calc(-3.5rem - 1px);
        left: calc(50% - 1px);
        width: 1px;
        height: calc(3.5rem + 1px);
        background: white;
    }

    max-width: 85%;
    border-bottom: 1px solid white;
    border-top: 1px solid white;

    @media screen and (max-width: 980px) {
        p br {
            display: none;
        }
    }
    @media screen and (max-width: 736px){
        p {
            line-height: 1.875;
        }
    }
`;



const InnerContent = styled.div`

    h5 {
    animation-duration: 3s;
    animation-name: crescendo;
    }
    @keyframes crescendo {
    0%   {transform: scale(.2);}
    100% {transform: scale(1);}
    }

    padding: 3rem 2rem;
    max-height: 40rem;
    overflow: hidden;
    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 736px){
        padding: 2.5rem 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 2.5rem 0;
    }
`;

const Nav = styled.nav`
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: calc(-3.5rem - 1px);
        left: calc(50% - 1px);
        width: 1px;
        height: calc(3.5rem + 1px);
        background: white;
    }

    ul{
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
        border: solid 1px white;
        border-radius: 4px;
    }


    @media screen and (max-width: 480px) {
        ul {
            -moz-flex-direction: column;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 10rem;
            max-width: 100%;
        }
    }
`
const ListItemNav = styled.li`
    padding-left: 0;
    border-left: solid 1px white;
    &:first-child{
        border-left: 0;
    }
    a{
        display: block;
        min-width: 7.5rem;
        height: 2.75rem;
        line-height: 2.75rem;
        padding: 0 1.25rem 0 1.45rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        font-size: 1rem;
        border-bottom: 0;
        color: ${props=> props.transparent ? 'white' : 'black'} ; 
        background-color: ${props=> props.transparent ? '' : 'white' };
    }

    @media screen and (max-width: 480px) {
        border-left: 0;
        border-top: solid 1px white;
    }
`


class Carousel1 extends React.Component {
    render() {
        return (
            <Carousel
                infiniteLoop
                showThumbs={false}
                showIndicators={false}
            >
            {carouselImages.map((item, index) => (
                <Container key={index} image={item.src} primary >
                    <Header>
                        <h2>TRIBUNALUL CLUJ</h2>
                        <Content>
                            <InnerContent>
                                <h5>ANUNȚ!!</h5>
                                <h5>Incepand cu 24.05.2019 Tribunalul Cluj a lansat noul site oficial!</h5>
                            </InnerContent>
                        </Content>
                        <Nav >
                            <ul>
                                <ListItemNav><a white href="#idInfoUtile"> Informații utile</a></ListItemNav>
                                <ListItemNav transparent><a href="https://www.curteadeapelcluj.ro/Dosare_ecris.aspx">INFO DOSAR</a></ListItemNav>
                                <ListItemNav><a href="#idLinkuriUtile">Legături utile</a></ListItemNav>
                            </ul>
                        </Nav>
                    </Header>
                </Container>
            ))}
            </Carousel>

        );

    }
}

export default Carousel1