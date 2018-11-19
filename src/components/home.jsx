import React, { Component } from 'react';
import Carousel from './slider';
import LinksBar from './links';
import InfoList from './Info/infoList';
import HeaderFormat from './header';
import Title from './Title/title';
import axios from 'axios';
import PDFJS from 'pdfjs-dist';
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator.js";
import "core-js/modules/es6.array.from.js";
import "whatwg-fetch";
import "es6-map/implement";
import PdfViewerIE from './Pdf/PdfViewerIE';

const { detect } = require('detect-browser');
const browser = detect();

class HomePage extends Component {

    state = {
        base: []
    }
    componentDidMount = () => {
        // add setActivePage for scroll event (after scrolls detect the active page)
        // document.getElementById('container__document').addEventListener('scroll', this.setActivePage);

    

    }
  //closing the modal containing pdf file
  onCloseModal = () => {
    this.setState({
      openFile: false,
      blob: []
    });
  };

    routeChange = () => {
        let path = "/taxe";
        this.props.history.push(path);
    }
    render() {
        /*    if (browser.name === 'ie' && browser.version.indexOf("11") !== -1) {
               return this.renderForIE11();
           }
           else if (browser.name === 'ie') {
               return this.renderForNoCompatibility();
           }
           else 
    */
        return this.renderForMost();
    }
    renderForNoCompatibility() {
        return (
            <div>
                <p>Acest site nu suporta aceasta versiune de browser. Va rugam sa updataţi browserul dumneavostră sau să folositi Chorme sau FireFox </p>
            </div>
        )
    }
    renderForIE11() {
        return (
            <div>
                <Title title="TRIBUNALUL CLUJ" breadcrumbs={false}></Title>
             
                <HeaderFormat />
                <InfoList />
                <LinksBar />
            </div>
        );
    }

    renderForMost() {
        /*  */
        return (
            <React.Fragment>
                <Carousel></Carousel>
                <PdfViewerIE  handleCloseModal={this.onCloseModal} />
                <HeaderFormat />
                <InfoList />
                <LinksBar />
            </React.Fragment>
        );

    }
}

export default HomePage;