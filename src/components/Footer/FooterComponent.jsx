import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    border-top: 1px dashed rgba(255, 255, 255, 0.1);
    background-color: #1f1f1f;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 30px 0px;
    overflow: hidden;
`

const FooterDistributed = styled.div`
    .footer-company-name{
        font-weight: 300;
        margin: 0 10px;
        color: #666;
        padding: 0;
    }
    .a{
        margin-bottom: 20px;
        display: inline-block;
    }
    .image{
        width: 5em;
    }
`

const FooterPage1 = () => {
    return (
        <Container>
                <FooterDistributed>
                    <a href="/home"> <img className="image" src={require("../../images/ministerul_justitiei.PNG")} alt="logo-ministerul-justitiei" /> </a>
                    <p className="footer-company-name">
                        All Rights Reserved. &copy; 2019. Design By :
                        <a href="http://www.tribunalulcluj.ro/">Compartimentul IT - Tribunalul Cluj</a>
                    </p>      
                </FooterDistributed>
        </Container>
    );
}

export default FooterPage1;