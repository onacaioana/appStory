import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {linksImages} from '../utils/constants';
import "../css/titleStyle.css";


class LinksBar extends Component {
    render() {
        const styles = {
            width: '60px',
            height: '60px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }

        const list = linksImages.map((item, index) => {
            return (
                <div className="item" key={index} style={{ textAlign: 'center' }}>
                    <a href={item.link}><img style={styles} src={item.icon} alt="links"></img></a>
                    <a href={item.link}>{item.title}</a>
                </div>
            )
        });
        return (
            <React.Fragment>
               <h2 className="titleClass" >Legături utile</h2>
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