import React from 'react';
import './Footer.css';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar
} from "reactstrap";

const FooterPage1 = () => {
    return (
        <div className="copyrights">
            <div className="container">
                <div className="footer-distributed">
                    <a href="/home"> <img style={{ width: '25%' }} src={require("../../images/ministerul_justitiei.PNG")} alt="logo-ministerul-justitiei" /></a>
                    <div className="footer-center">
                        <p className="footer-company-name">
                            All Rights Reserved. &copy; 2018. Design By :
					                <a href="http://www.tribunalulcluj.ro/">Tribunalul Cluj</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPage1;