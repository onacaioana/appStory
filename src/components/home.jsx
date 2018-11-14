import React, { Component } from 'react';
import Carousel from './slider';
import LinksBar from './links';
import InfoList from './Info/infoList';
import HeaderFormat from './header';
import { fax } from "react-icons-kit/fa/fax";
import { notepad_remove } from 'react-icons-kit/ikons/notepad_remove'
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import Title from './Title/title';
import "core-js/modules/es6.promise";

import "core-js/modules/es6.array.iterator.js";

import "core-js/modules/es6.array.from.js";

import "whatwg-fetch";

import "es6-map/implement";


const { detect } = require('detect-browser');
const browser = detect();


const listaInformatiiUtile = [{
    title: 'Noua legislație penală',
    icon: fax,
},

{
    title: ' Asistenţă judiciară',
    icon: phoneSquare,
},
{
    title: ' Informaţii taxe',
    icon: mail,

},
{
    title: ' Legalizare şi investire',
    icon: mail,
},
{

    title: 'Hotărâri străine',
    icon: mail,

},
{
    title: 'Medierea',
    icon: notepad_remove,

},
{
    title: 'Liste experţi',
    icon: notepad_remove,
},
{
    title: ' Apostilă',
    icon: notepad_remove,
}];

class HomePage extends Component {
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
        var data = this.state.blob;
        var fileName = "your_file_name.pdf";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE workaround
            var byteCharacters = atob(data);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob1 = new Blob([byteArray], { type: 'application/pdf' });
            window.navigator.msSaveOrOpenBlob(blob1, fileName);
        }
        return (
            <div>
                <Title title="TRIBUNALUL CLUJ" breadcrumbs={false}></Title>
                <HeaderFormat />
                <InfoList lista={listaInformatiiUtile} />
                <LinksBar />
            </div>
        );
    }

    renderForMost() {
        /*  */
        return (
            <React.Fragment>
                <Carousel></Carousel>
                <HeaderFormat />
                <InfoList lista={listaInformatiiUtile} />
                <LinksBar />
            </React.Fragment>
        );

    }
}

export default HomePage;