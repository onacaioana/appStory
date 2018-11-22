import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
    constructor(props) {
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.state = {
            inView: false
        };
    }

    onEnter(e) {
        if (e.currentPosition === Waypoint.inside ||e.priviousPosition === Waypoint.below)  {
            this.setState({ inView: true });
        }
    }
    render() {
        return (
            <div>
                <Waypoint onEnter={e => this.onEnter(e)}></Waypoint>
                {this.props.children({ inView: this.state.inView })}
            </div>
        );
    }
}

export default WhenInView;