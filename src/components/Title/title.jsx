import './style.css';
import React, { Component } from 'react';
import WhenInView from '../whenInView';
import Fade from '@material-ui/core/Fade';

class title extends Component {
    render() {
        return (
            <div className="site-blocks-cover inner-page overlay mb-1" style={{ backgroundImage: 'url(' + require("../../images/4.jpg") + ')' }} data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <WhenInView>
                                {({ inView }) =>
                                    <Fade in={inView}
                                        {...(inView ? { timeout: (4000 ) } : {})}>
                                        <h1 className="mb-4 text-light"><strong>{this.props.title}</strong></h1>
                                    </Fade>
                                }
                            </WhenInView>
                            <div className="breadcrumbs">
								<ul>
									<li><a href="/">Acasă</a></li>
                                    {this.props.subpage ? <li>{this.props.subpage}</li> : '' }
									<li> {this.props.page}</li>
								</ul>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default title;
