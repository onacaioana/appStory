import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Icon } from "react-icons-kit";
import { androidArrowDropleftCircle } from 'react-icons-kit/ionicons/androidArrowDropleftCircle'
import { androidArrowDroprightCircle } from 'react-icons-kit/ionicons/androidArrowDroprightCircle'
import Typography from '@material-ui/core/Typography';
import { carouselImages } from '../../utils/constants';
import '../../css/prezentare.css';

class Carousel extends React.Component {
    render() {
        return (
            <Slider
                classNames={horizontalCss}
                touchDisabled={true}
                autoPlay={30}
                infinite={true}
                previousButton={<Icon size={40} icon={androidArrowDropleftCircle} style={{ color: "white", opacity: 0.6 }} />}
                nextButton={<Icon size={40} icon={androidArrowDroprightCircle} style={{ color: "white", opacity: 0.6 }} />}
            >
                {carouselImages.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${item.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                         {/* Istoricul Palatului de justitie */}

                       
                        <div class="row text-center my-auto ">
                            <div class="col-md-12 col-sm-6">
                                <div class="skill-item1 px-5">
                                <h2 style={{ fontWeight: 'bold' }}>TRIBUNALUL CLUJ</h2>
                               
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        );

    }
}

export default Carousel