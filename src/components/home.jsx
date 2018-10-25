import React, { Component } from 'react';
import Slider from './slider';
import LinksBar from './links';
import Typography from '@material-ui/core/Typography';
import InfoUtile from './infoUtile';
import Grid from '@material-ui/core/Grid';
import InfoList from './Info/infoList';
import HeaderFormat from './header';

class HomePage extends Component {

    constructor(props) {
        super(props);

    }

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