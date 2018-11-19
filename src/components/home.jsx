import React, { Component } from 'react';
import Carousel from './slider';
import LinksBar from './links';
import InfoList from './Info/infoList';
import HeaderFormat from './header';

import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator.js";
import "core-js/modules/es6.array.from.js";
import "whatwg-fetch";
import "es6-map/implement";

const { detect } = require('detect-browser');
const browser = detect();

class HomePage extends Component {

    render() {
        /**
         *  Check browser compatibility
         * All IE browser besides IE 11 will render => renderForIE */
        if (browser.name === 'ie' && browser.version.indexOf("11") === -1) {
            return this.renderForIE();
        }
        else
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
                <InfoList browserName={browser.name} browserVersion={browser.version}/>
                <LinksBar />
            </React.Fragment>
        );

    }
}

export default HomePage;