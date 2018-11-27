import React, { Component } from 'react';
import './InfoUtileStyle.css';
import HeaderFormat from '../Header/Header';
import CardInfo from './InfoUtileCard';
import {infoUtile} from '../../utils/constants';
//icon: require('../../images/icons/gdpr.png'),

class InfoList extends Component {

    render() {
        const { browserName, browserVersion } = this.props;
        const items = infoUtile.map((item, index) => {
            return (
                <li key={index}>
                    <CardInfo
                        locatie={item.locatie}
                        icon={item.icon}
                        title={item.title}
                        index={index}
                        browserName={browserName}
                        browserVersion={browserVersion}
                    />
                </li>
            )
        });

        return (
            <React.Fragment>
                <HeaderFormat title="Informaţii utile" bg="bg-light text-center" />
                <section id="list-topics" className="list-topics bg-light py-5" >
                    <div className="container" >
                        <div className="list-topics-content text-wrap" style={{ textAlign: '-webkit-center' }}>
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
