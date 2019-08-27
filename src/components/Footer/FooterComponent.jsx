import React from 'react';
import './Footer.css';

const FooterPage1 = () => {
    return (
        <div className="copyrights">
            <div className="container">
                <div className="footer-distributed">
                    <a href="/home"> <img style={{ width: '20%' }} src={require("../../images/ministerul_justitiei.PNG")} alt="logo-ministerul-justitiei" /></a>
                    <div className="footer-center">
                        <p className="footer-company-name">
                            All Rights Reserved. &copy; 2019. Design By :
					                <a href="http://www.tribunalulcluj.ro/">Compartimentul IT - Tribunalul Cluj</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPage1;