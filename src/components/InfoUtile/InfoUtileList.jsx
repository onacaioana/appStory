import React, { Component } from 'react';
import './InfoUtileStyle.css';
import HeaderFormat from '../Header/Header';
import CardInfo from './InfoUtileCard';
import { fax } from "react-icons-kit/fa/fax";
import { notepad_remove } from 'react-icons-kit/ikons/notepad_remove'
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
//icon: require('../../images/icons/gdpr.png'),
const lista = [
    {
        title: 'Protecția datelor',
        icon: notepad_remove,
        locatie: "/gdpr",
    },
    {
        title: ' Asistenţă judiciară',
        icon: phoneSquare,
        locatie: "InfoUtile/Asistenta judiciara.pdf",
    },
    {
        title: ' Informaţii taxe',
        icon: mail,
        locatie: "/taxe",

    },
    {
        title: ' Legalizare şi investire',
        icon: mail,
        locatie: "InfoUtile/Legalizare si investire.pdf",
    },
    {

        title: 'Recunoasterea hotărâri',
        icon: mail,
        locatie: "InfoUtile/Recunoasterea hotarari.pdf",

    },
    {
        title: 'Medierea',
        icon: notepad_remove,
        locatie: "InfoUtile/medierea.pdf",

    },
    {
        title: 'Noua legislație penală',
        icon: fax,
        locatie: "InfoUtile/Popularizarea noii legislatii penale.pdf",
    },
    {
        title: ' Apostilă',
        icon: notepad_remove,
        locatie: "InfoUtile/apostila.pdf",
    }];


class InfoList extends Component {

    render() {
        const { browserName, browserVersion } = this.props;
        const items = lista.map((item, index) => {
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
