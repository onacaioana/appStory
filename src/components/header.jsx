import React, { Component } from 'react';

class HeaderFormat extends Component {
    render() {
        return (
            <div className={`row section-heading justify-content-center pt-5 ${this.props.bg}`}>
            <div className="col-md-8 text-center">
                <h1 className="heading mb-3 " style={{fontWeight:'bold',color: '#146496'}}>{this.props.title}</h1>
            </div>
        </div>

        );
    }
}

export default HeaderFormat;