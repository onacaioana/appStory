import './TitleStyle.css';
import React from 'react';
import WhenInView from '../../utils/whenInView';
import Fade from '@material-ui/core/Fade';

const title = (props) => {
    return (
        <div className="site-blocks-cover inner-page overlay mb-1" style={{ backgroundImage: 'url(' + require("../../images/4.jpg") + ')' }} data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col">
                        <WhenInView>
                            {({ inView }) =>
                                <Fade in={inView}
                                    {...(inView ? { timeout: (4000) } : {})}>
                                    <h1 className="mb-4 text-light"><strong>{props.title}</strong></h1>
                                </Fade>
                            }
                        </WhenInView>
                        {props.breadcrumbs === true ?
                            <div className="breadcrumbs">
                                <ul>
                                    <li><a href="/">Acasă</a></li>
                                    {props.subpage ? <li>{props.subpage}</li> : ''}
                                    <li> {props.page}</li>
                                </ul>
                            </div>
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default title;
