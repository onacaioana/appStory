import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Icon } from "react-icons-kit";
import { androidArrowDropleftCircle } from 'react-icons-kit/ionicons/androidArrowDropleftCircle';
import { androidArrowDroprightCircle } from 'react-icons-kit/ionicons/androidArrowDroprightCircle';
import { carouselImages } from '../../utils/constants';
import '../../css/prezentare.css';
import '../../css/headerArea.css';
import '../../css/font-awesome.min.css'
import { HashLink as Link } from 'react-router-hash-link';
import Zoom from '@material-ui/core/Zoom';

class Carousel extends React.Component {
    render() {
        return (
            /* Slider config contains:
             * 1. touchDisabled - for phone 
             * 2. autoplay photos (doesn't work)
             * 3. infinite loop for photo slider
             * 4. prev and next bottons + icons
             */
            <Slider
                classNames={horizontalCss}
               
                autoPlay={30}
                infinite={true}
                previousButton={<Icon size={40} icon={androidArrowDropleftCircle} style={{ color: "white", opacity: 0.6 }} />}
                nextButton={<Icon size={40} icon={androidArrowDroprightCircle} style={{ color: "white", opacity: 0.6 }} />}>
                {carouselImages.map((item, index) => (

                    <div
                        /* Upload mapped photos
                         * Variable carouselImages from utils/contants
                         * contains all redirects for photos location
                         */
                        key={index}
                        style={{
                            backgroundImage: `url(${item.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                        }}>


                        {/* Used for text and menu over Carousel Header
                          * css files: headerAdrea.css and font-awesome.min.css
                          * js files: 
                          */}
                        <div id="wrapper">
                            <header id="header">
                                <div className="content">
                                    <div className="inner">
                                        <h2>TRIBUNALUL CLUJ</h2>
                                        <Zoom
                                            in={true}
                                            style={{ transformOrigin: '50% 50% 0' }}
                                            {...(true ? { timeout: (3000) } : {})}
                                        >
                                            <h5>ANUNȚ!!<br />
                                                Incepand cu 01.04.2019 Tribunalul Cluj a alansat <br />
                                                noul site oficial!</h5>
                                        </Zoom>
                                    </div>
                                </div>
                                <nav>
                                    <ul id="ulOverHeader" >
                                        <li>
                                            <Link style={{ color: 'black', fontSize: '18px', backgroundColor: 'white' }} to="#idInfoUtile" >
                                                Informații utile
                                            </Link>
                                        </li>
                                        <li><a style={{ color: 'white', fontSize: '18px' }} href="https://www.curteadeapelcluj.ro/Dosare_ecris.aspx">INFO DOSAR</a></li>
                                        <li>
                                            <Link style={{ color: 'black', fontSize: '18px', backgroundColor: 'white' }} to="#idLinkuriUtile" >
                                                Legături utile
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </header>
                        </div>

                    </div>
                ))}

            </Slider>
        );

    }
}

export default Carousel