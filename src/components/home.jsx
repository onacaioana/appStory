import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Slider from './slider';
import LinksBar from './links';
import Typography from '@material-ui/core/Typography';
import InfoUtile from './infoUtile';
class HomePage extends Component {

    constructor(props) {
        super(props);
       
    }

    routeChange = () =>{
        let path = "/taxe";
        this.props.history.push(path);
    }

    render() {
        return (
            <React.Fragment>
                <Slider></Slider>
                <div className="container">
                    <div className="row">
                        <div className="col md-4">
                            <Button onClick={this.routeChange} className="bg-secondary text-light mx-2">Calculator Taxa Timbru</Button>
                        </div>
                    </div>
                     <div className="row my-3 py-2 d-block">
                        <Typography variant="headline" color="primary">INFORMAŢII UTILE</Typography>
                        <InfoUtile />
                    </div> 
                    <div className="row my-3">
                        <Typography variant="headline" color="primary">LINK-URI UTILE</Typography>
                        <LinksBar />
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default HomePage;