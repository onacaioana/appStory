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
                <HeaderFormat/>
                <InfoList/>
                <div className="row d-block py-5 pl-5" style={{ backgroundColor: "#a4a4a4" }}>
                    <Typography variant="display1" className="text-dark">INFORMAŢII UTILE</Typography>
                    <div className="row">
                        <InfoUtile />

                    </div>
                </div>
               
                <div className="row d-block bg-light py-5 pl-5">
                    <Typography variant="display1" className="text-dark">LINK-URI UTILE</Typography>
                    <div className="container">
                        <LinksBar />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;