import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Icon } from "react-icons-kit";
import { androidArrowDropleftCircle } from 'react-icons-kit/ionicons/androidArrowDropleftCircle'
import { androidArrowDroprightCircle } from 'react-icons-kit/ionicons/androidArrowDroprightCircle'
import Typography from '@material-ui/core/Typography';
import { carouselImages } from '../../utils/constants';

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
                       
                    </div>
                ))}
            </Slider>
        );

    }
}

export default Carousel