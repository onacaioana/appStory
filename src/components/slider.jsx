import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Icon } from "react-icons-kit";
import {androidArrowDropleftCircle} from 'react-icons-kit/ionicons/androidArrowDropleftCircle'
import {androidArrowDroprightCircle} from 'react-icons-kit/ionicons/androidArrowDroprightCircle'
const items = [
    {
        src: require('../images/5.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: '"Nimic nu e mai presus de lege"'
    },
    {
        src: require('../images/5.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege'
    },
    {
        src: require('../images/5.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege'
    }
];

class Carousel extends React.Component {
    render() {
        return (
            <Slider 
             classNames={horizontalCss}
             touchDisabled={true}
             previousButton={<Icon size={40} icon={androidArrowDropleftCircle} style={{color:"white"}} />}
             nextButton={<Icon size={40} icon={androidArrowDroprightCircle}  style={{color:"white"}} />}
             >
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{backgroundImage: `url(${item.src})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',}}
                    >
                        <div className="text-light">
                            <h1 className="d-flex justify-content-center align-self-center mt-4">{item.caption}</h1>
                            <p className="d-flex justify-content-center align-self-center mt-5">{item.subcaption}</p>

                        </div>
                    </div>
                ))}
            </Slider>
        );

    }
}

export default Carousel