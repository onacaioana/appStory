import React, { Component } from 'react';
import './infoList.css';
import { Icon } from "react-icons-kit";
import WhenInView from '../whenInView';
import Grow from '@material-ui/core/Grow';
import HeaderFormat from '../header';

class InfoList extends Component {

    render() {
        const items = this.props.lista.map((item, index) => {
            return (
                <li key={index}>

                    <WhenInView>
                        {({ inView }) =>
                            <Grow in={inView}
                                style={{ transformOrigin: '50% 50% 0' }}
                                {...(inView ? { timeout: (2000 + index * 100) } : {})}>
                                <div className="single-list-topics-content rounded shadow">
                                    <div className="single-list-topics-icon">
                                        <Icon style={{ color: '#8c7b75' }} size={40} icon={item.icon} />
                                    </div>
                                    <h6 key={index} onClick={e => this.handlerInfo(e)} style={{cursor:'pointer'}}>
                                    {item.title}
                                    </h6>            
                                </div>
                            </Grow>
                        }</WhenInView>
                </li>)
        });

        return (
            <React.Fragment>
                <HeaderFormat title="Informaţii utile" bg="bg-light text-center" />
                <section id="list-topics" className="list-topics bg-light py-5">
                    <div className="container">
                        <div className="list-topics-content" style={{ textAlign: '-webkit-center' }}>
                            <ul>
                                {items}

                            </ul>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default InfoList;
