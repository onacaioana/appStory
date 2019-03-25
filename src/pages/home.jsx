import React, { Component } from 'react';
import Carousel from '../components/Header/HeaderCarousel';
import LinksBar from '../components/links';
import InfoLista from '../components/InfoUtile/InfoUtileList';
import HeaderFormat from '../components/Header/Header';
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator.js";
import "core-js/modules/es6.array.from.js";
import "whatwg-fetch";
import "es6-map/implement";


const { detect } = require('detect-browser');
const browser = detect();
  
  const linkHanlder = (link) => {
    window.open(link, '_blank');
  }
  const toggleHandler = (id, value) => {
    console.log(id, value)
  }

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    render() {
        /**
         *  Check browser compatibility
         * All IE browser besides IE 11 will render => renderForIE 
         * */
        
         /*         if (browser.name === 'ie' && browser.version.indexOf("11") === -1) {
                    return this.renderForIE();
                }
                else */
        return this.renderForAll();
    }

    renderForIE() {
        return (
            <div>
                <p>Acest site nu suporta aceasta versiune de browser. Va rugam sa updataţi browserul dumneavostră sau să folositi Chorme sau FireFox </p>
            </div>
        )
    }

    renderForAll() {
        return (
            <React.Fragment>

                <Carousel></Carousel>
                <HeaderFormat />
                {/* Div's porpose is only for id
                  * Used for redirect 
                  * From HeaderCarousel.js page - header slider
                  */}
                <div id="idInfoUtile">
                    <InfoLista browserName={browser.name} browserVersion={browser.version} />
                </div>
                <div id="idLinkuriUtile">
                    <LinksBar />
                </div>

            </React.Fragment>
        );

    }
}

export default HomePage;