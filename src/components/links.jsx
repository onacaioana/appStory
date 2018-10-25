import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HeaderFormat from './header';
class LinksBar extends Component {
    render() {
        const styles = {
            width: '60px',
            height: '60px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        return (
            <React.Fragment>
                <HeaderFormat title="Link-uri utile" />
                <div className="container py-5 pl-5">
                    <OwlCarousel
                        className="owl-theme"
                        loop={true}
                        margin={10}

                        autoplay={true}
                        autoplaySpeed={1000}
                        autoplayTimeout={2000}
                        autoplayHoverPause={true}
                        responsive={{ 0: { items: 2 }, 600: { items: 4 }, 1024: { items: 7 } }}
                    >
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.just.ro/"><img style={styles} src={require("../images/ministerul_justitiei.PNG")} alt="ministerul_justitiei"></img></a>
                            <a href="http://www.just.ro/">Ministerul Justiţiei</a>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.mpublic.ro/"><img style={styles} src={require("../images/ministerulPublic_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.mpublic.ro/">Ministerul Public</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.presidency.ro/"><img style={styles} src={require("../images/presedinteleRomaniei_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.presidency.ro/">Preşedintele României</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.guv.ro/"><img style={styles} src={require("../images/GuvernulRomaniei_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.guv.ro/">Guvernul României</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="https://www.csm1909.ro/"><img style={styles} src={require("../images/csm_link.jpg")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="https://www.csm1909.ro/">Consiliul Superior al Magistraturii</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="https://www.ccr.ro/"><img style={styles} src={require("../images/ccr_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="https://www.ccr.ro">Curtea Constituţională (CCR)</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.baroul-cluj.ro/"><img style={styles} src={require("../images/BaroulCluj_link.jpg")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.baroul-cluj.ro/">Baroul Cluj</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="https://www.icj-cij.org/"><img style={styles} src={require("../images/cij_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="https://www.icj-cij.org/">Curtea Internaţională de Justiţiei</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.echr.coe.int/"><img style={styles} src={require("../images/cedo_link.jpg")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.echr.coe.int/">Curtea Europeană a Drepturilor Omului</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.clr.ro/"><img style={styles} src={require("../images/CL_link.bmp")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.clr.ro/">Consiliul Legislativ</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="https://www.cmediere.ro/"><img style={styles} src={require("../images/Consiliuldemediere_link.JPG")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="https://www.cmediere.ro/">Consiliul de Mediere</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.scj.ro/"><img style={styles} src={require("../images/ministerul_justitiei.PNG")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.scj.ro/">Înalta Curte de Casaţie şi Justiţie</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.inm-lex.ro/"><img style={styles} src={require("../images/inm_link.jpg")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.inm-lex.ro/">Institutul Naţional de Magistratură</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="http://www.grefieri.ro/"><img style={styles} src={require("../images/sng_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="http://www.grefieri.ro/">Şcoala Naţională de Grefieri</a>
                            </div>
                        </div>
                        <div className="item" style={{ textAlign: 'center' }}>
                            <a href="https://curia.europa.eu/jcms/jcms/j_6/ro/"><img style={styles} src={require("../images/CVRIA_link.png")} alt="ministerul_justitiei"></img></a>
                            <div>
                                <a href="https://curia.europa.eu/jcms/jcms/j_6/ro/">C.V.R.I.A.</a>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </React.Fragment>

        );
    }
}

export default LinksBar;