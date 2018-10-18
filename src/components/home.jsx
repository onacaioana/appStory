import React, { Component } from 'react';
import {Button} from 'reactstrap';


class HomePage extends Component {
    
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(){
        let path = "/taxe";
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col md-4">
                       <Button onClick={this.routeChange}  className="bg-secondary text-light mx-2">Calculator Taxa Timbru</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;