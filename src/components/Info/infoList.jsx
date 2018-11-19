import React, { Component } from 'react';
import './infoList.css';
import WhenInView from '../whenInView';
import Grow from '@material-ui/core/Grow';
import HeaderFormat from '../header';
import CardInfo from './CardInfo';
import { fax } from "react-icons-kit/fa/fax";
import { notepad_remove } from 'react-icons-kit/ikons/notepad_remove'
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";

const lista = [{
    title: 'Noua legislație penală',
    icon: fax,
    locatie: "InfoUtile/1.pdf",
},

{
    title: ' Asistenţă judiciară',
    icon: phoneSquare,
    locatie: "Bilant/Bilant2009.pdf",
},
{
    title: ' Informaţii taxe',
    icon: mail,
    locatie: "",

},
{
    title: ' Legalizare şi investire',
    icon: mail,
    locatie: "",
},
{

    title: 'Hotărâri străine',
    icon: mail,
    locatie: "",

},
{
    title: 'Medierea',
    icon: notepad_remove,
    locatie: "",

},
{
    title: 'Liste experţi',
    icon: notepad_remove,
    locatie: "",
},
{
    title: ' Apostilă',
    icon: notepad_remove,
    locatie: "",
}];


class InfoList extends Component {

    render() {
        const { browserName, browserVersion } = this.props;
        const items = lista.map((item, index) => {
            return (
                <li key={index}>

                    {/* WhenInView - used to make a transition when compoment will be in view */}
                    <WhenInView>
                        {({ inView }) =>

                            /* Create a grow transition of component "cardInfo" */
                            <Grow
                                in={inView}
                                style={{ transformOrigin: '50% 50% 0' }}
                                {...(inView ? { timeout: (2000 + index * 100) } : {})}
                            >
                                <CardInfo
                                    locatie={item.locatie}
                                    icon={item.icon}
                                    title={item.title}
                                    index={index}
                                    browserName={browserName}
                                    browserVersion={browserVersion}
                                />


                            </Grow>
                        }</WhenInView>
                </li>
            )
        });

        return (
            <React.Fragment>
                <HeaderFormat title="Informaţii utile" bg="bg-light text-center" />
                <section id="list-topics" className="list-topics bg-light py-5" >
                    <div className="container" >
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
