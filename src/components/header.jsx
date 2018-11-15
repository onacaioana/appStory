import React, { Component } from 'react';

class HeaderFormat extends Component {
    render() {
        return (
            <div className={`row section-heading justify-content-center ${this.props.bg}`}>
            <div className="col-md-8 ">
                <h3 className="heading" style={{fontWeight:'bold',color: '#146496'}}>{this.props.title}</h3>
            </div>
        </div>

        );
    }
}

export default HeaderFormat;