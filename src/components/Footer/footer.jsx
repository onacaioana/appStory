import React, { Component, Fragment } from 'react';

import { Navbar } from 'reactstrap';
import './footer.css';
import PropTypes from 'prop-types';
import NavBarComp from '../navbar';


class FooterPage1 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="copyrights">
                    <div className="container">
                        <div className="footer-distributed">
                            <a href="/home"> <img style={{ width: '25%' }} src={require("../../images/ministerul_justitiei.PNG")} alt="logo-ministerul-justitiei" /></a>
                            <div className="footer-center">
                                <Navbar className="navbar-dark text-light" expand="md">
                                    <NavBarComp />
                                </Navbar>
                                <p className="footer-company-name">All Rights Reserved. &copy; 2018. Design By :
					            <a href="http://www.tribunalulcluj.ro/"><p className="footer-links">Tribunalul Cluj</p></a></p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>
        );
    }
}

export default FooterPage1;