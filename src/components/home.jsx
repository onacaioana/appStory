import React, { Component } from 'react';
import Slider from './slider';
import LinksBar from './links';
import InfoList from './Info/infoList';
import HeaderFormat from './header';

class HomePage extends Component {

    routeChange = () => {
        let path = "/taxe";
        this.props.history.push(path);
    }

    render() {
        return (
            <React.Fragment>
                <Slider></Slider>
                <HeaderFormat />
                <InfoList />
                <LinksBar />
            </React.Fragment>
        );
    }
}

export default HomePage;