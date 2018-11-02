import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HeaderFormat from './header';

const items = [{
    link: "http://www.just.ro/",
    icon: require("../images/links/ministerul_justitiei.PNG"),
    title: "Ministerul Justiţiei"
},
{
    link: "http://www.mpublic.ro/",
    icon: require("../images/links/ministerulPublic_link.png"),
    title: "Ministerul Public"
},
{
    link: "http://www.presidency.ro/",
    icon: require("../images/links/presedinteleRomaniei_link.png"),
    title: "Preşedintele României"
},
{
    link: "http://www.guv.ro/",
    icon: require("../images/links/GuvernulRomaniei_link.png"),
    title: "Guvernul României"
},
{
    link: "https://www.csm1909.ro/",
    icon: require("../images/links/csm_link.jpg"),
    title: "Consiliul Superior al Magistraturii"
},
{
    link: "https://www.ccr.ro/",
    icon: require("../images/links/ccr_link.png"),
    title: "Curtea Constituţională (CCR)"
},
{
    link: "http://www.baroul-cluj.ro/",
    icon: require("../images/links/BaroulCluj_link.jpg"),
    title: "Baroul Cluj"
},
{
    link: "https://www.icj-cij.org/",
    icon: require("../images/links/cij_link.png"),
    title: "Curtea Internaţională de Justiţiei"
},
{
    link: "http://www.echr.coe.int/",
    icon: require("../images/links/cedo_link.jpg"),
    title: "Curtea Europeană a Drepturilor Omului"
},
{
    link: "http://www.clr.ro/",
    icon: require("../images/links/CL_link.bmp"),
    title: "Consiliul Legislativ"
},
{
    link: "https://www.cmediere.ro/",
    icon: require("../images/links/Consiliuldemediere_link.JPG"),
    title: "Consiliul de Mediere"
},
{
    link: "http://www.scj.ro/",
    icon: require("../images/links/ministerul_justitiei.PNG"),
    title: "Înalta Curte de Casaţie şi Justiţie"

},
{
    link: "http://www.inm-lex.ro/",
    icon: require("../images/links/inm_link.jpg"),
    title: "Institutul Naţional de Magistratură"

},
{
    link: "http://www.grefieri.ro/",
    icon: require("../images/links/sng_link.png"),
    title: "Şcoala Naţională de Grefieri"

},
{
    link: "https://curia.europa.eu/jcms/jcms/j_6/ro/",
    icon: require("../images/links/CVRIA_link.png"),
    title: "C.V.R.I.A."

}]

class LinksBar extends Component {
    render() {
        const styles = {
            width: '60px',
            height: '60px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
      
        const list = items.map((item, index) => {
            return (
                <div className="item" key={index} style={{ textAlign: 'center' }}>
                    <a href={item.link}><img style={styles} src={item.icon} alt="links"></img></a>
                    <a href={item.link}>{item.title}</a>
                </div>
            )
        });
        return (
            <React.Fragment>
                <HeaderFormat title="Link-uri utile" bg="text-center" />
                <div className="container py-5 pl-5">
                    <OwlCarousel
                        className="owl-theme"
                        loop={true}
                        margin={10}

                        autoplay={true}
                        autoplayspeed={1000}
                        autoplayTimeout={2000}
                        autoplayHoverPause={true}
                        responsive={{ 0: { items: 2 }, 600: { items: 4 }, 1024: { items: 7 } }}
                    >

                        {list}

                    </OwlCarousel>
                </div>
            </React.Fragment>

        );
    }
}

export default LinksBar;