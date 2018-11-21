import React from 'react';
import './footer.css';
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
                        <Navbar className="navbar-dark text-light text-justify" expand="md">
                            <Nav className="m-auto" navbar style={{ fontSize: "14px" }} >
                                <NavItem className="mr-4">
                                    <NavLink onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/`} >ACASĂ</NavLink>
                                </NavItem>
                                <NavItem className="mr-4">
                                    <NavLink href="https://www.curteadeapelcluj.ro/Dosare_ecris.aspx">INFO-DOSAR</NavLink>
                                </NavItem>
                                <NavItem className="mr-4">
                                    <NavLink href="https://www.curteadeapelcluj.ro/ListeSedinta.aspx">INFO-ŞEDINŢE</NavLink>
                                </NavItem>
                                <NavItem className="mr-4">
                                    <NavLink onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/contact`}>CONTACT</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
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