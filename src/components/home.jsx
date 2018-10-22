import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Slider from './slider';
import LinksBar from './links';
import Typography from '@material-ui/core/Typography';
import InfoUtile from './infoUtile';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = "/taxe";
        this.props.history.push(path);
    }

    render() {
        return (
            <React.Fragment>
                <Slider></Slider>

                <div className="row d-block mx-5">
                    <Typography variant="headline" className="my-3" color="primary">INFORMAȚII UTILE</Typography>
                    <InfoUtile />
                </div>

                <div className="row my-3 ">
                    <Divider />
                    <div className="col text-light" style={{backgroundColor:'#364e80'}}>
                        <p>bg-secondary</p>
                        <p>bg-secondary</p>
                        <p>bg-secondary</p>

                    </div>
                    <div className="col text-light" style={{backgroundColor:'#98a4bd'}} align="center">
                        COntact:sdasda
                    </div>

                </div>

                <div className="row mx-5">
                    <Typography component="h2" variant="title" className="my-1" color="primary">LINK-URI UTILE</Typography>
                    <LinksBar />

                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;