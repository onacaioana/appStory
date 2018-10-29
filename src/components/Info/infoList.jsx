import React, { Component } from 'react';
import './infoList.css';
import { Icon } from "react-icons-kit";
import { fax } from "react-icons-kit/fa/fax";
import { notepad_remove } from 'react-icons-kit/ikons/notepad_remove'
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import WhenInView from '../whenInView';
import Grow from '@material-ui/core/Grow';
import HeaderFormat from '../header';

const lista = [{
    title: 'Noua legislație penală',
    icon: fax,
},

{
    title: ' Asistenţă judiciară',
    icon: phoneSquare,
},
{
    title: ' Informaţii taxe',
    icon: mail,

},
{
    title: ' Legalizare şi investire',
    icon: mail,
},
{

    title: 'Hotărâri străine',
    icon: mail,

},
{
    title: 'Medierea',
    icon: notepad_remove,

},
{
    title: 'Liste experţi',
    icon: notepad_remove,
},
{
    title: ' Apostilă',
    icon: notepad_remove,
}];

class InfoList extends Component {
    state={
        show:false,
    }

    handlerInfo = (e) => {
       this.setState({show:true})
    }
    closeInfo = (e) => {
        this.setState({show:false});
    }

    render() {
        const items = lista.map((item, index) => {
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
                                    
                                  {/*   <div style={{position:'absolute',bottom:0,}}>
                                        <Button className="float-xs-left" size='small' href="#text-buttons">
                                           Save
                                        </Button>
                                        <Button className="float-xs-right " size='small' href="#text-buttons" >
                                            Print
                                        </Button>
                                    </div> */}
                                    
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
