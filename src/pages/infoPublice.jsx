import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from "../components/anunt";
import axios from 'axios';
import { informatiiPublice } from '../utils/constants';
import InfoList from '../components/infoPubliceList';


class InfoPublice extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        axios
            .get(`http://localhost:8080/getFiles`, {
                params: {
                    folderName: "PDFs/Informatii publice/Birou de informare si relaţii publice"
                }
            })
            .then(res => {

                let i = 0;
                var list = [];
                for (i = 0; i < res.data.length; i++) {

                    /* Extract data field from pdf name */
                    let indexStop = res.data[i].indexOf('.pdf');
                    let titluDoc = res.data[i].substring(0, indexStop);
                    const object = Object.assign({ titlu: titluDoc, locatie: "Informatii publice/Birou de informare si relaţii publice/" + res.data[i] });
                    list.push(object);
                }

                /* Create an object and append to state */
                const itemObject = Object.assign({ titlu: "Birou de Informare și Relații publice", listOfDocs: list });
                this.setState({ items: [...this.state.items, itemObject] });
            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });

        window.scrollTo(0, 0);
    }

    render() {

        let infoList = informatiiPublice.map((item, index) => {
            return (
                <InfoList index={index}
                    titlu={item.titlu}
                    text={item.text}
                />
            )
        })

        return (
            <React.Fragment>
                <Title
                    title="Informații Publice"
                    page="Informații Publice"
                    subpage="Informații"
                    breadcrumbs={true}
                />

                <div className="my-5 container">

                    {/* List of ListItems :
                      * 1. case when pdf files exist in ListItem component
                      * 2. case when ListItem component contains only text 
                      */}
                    <List component="nav">

                        {/* Case 1 */}
                        {this.state.items.map((item, index) => {
                            return (
                                <Anunt
                                    key={index}
                                    icon={require("../images/icons/law2.png")}
                                    altText={item.text}
                                    titlu={item.titlu}
                                    docs={item.listOfDocs}
                                    expanded={true}
                                />
                            );
                        })}

                        {/* Case 2 */}
                        {infoList}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default InfoPublice;