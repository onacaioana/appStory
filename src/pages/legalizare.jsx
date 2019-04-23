import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from '../components/anunt';
import axios from 'axios';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import "../css/listStyle.css";
import { orarInstante } from "../utils/constants";


class Competente extends Component {
    state = {
        items: [],
    };
    componentDidMount = () => {
        /**
         * Get all files from a folder and create an array of objects
         */
        window.scrollTo(0, 0);

        axios
            .get(`/getFiles`, {
                params: {
                    folderName: "PDFs/Legalizare"
                }
            })
            .then(res => {

                let i = 0;
                for (i = 0; i < res.data.length; i++) {
                    /* Extract data filed from pdf name */
                    let indexStart = res.data[i].indexOf('-');
                    let indexStop = res.data[i].indexOf('.pdf');
                    let dataDoc = res.data[i].substring(indexStart + 1, indexStop);
                    let titluDoc = res.data[i].substring(0, indexStop);
                    const object = Object.assign({ titlu: titluDoc, data: dataDoc, locatie: "Legalizare/" + res.data[i] });
                    this.setState({ items: [...this.state.items, object] });
                }

            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });
    }


    render() {
        return (
            <React.Fragment>
                <Title
                    title="Legalizare şi definitivare"
                    page="Legalizare şi definitivare"
                    breadcrumbs={true}
                />

                <div className="my-5 container">
                    {/* <h2 className="titleListCompetente">Documente</h2> */}
                    <Anunt
                        icon={require("../images/icons/law2.png")}
                        altText={"altText"}
                        docs={this.state.items}
                        expanded={false}
                    />

                </div>

                <div className="my-5 container">
                    <h2 className="titleListCompetente">Orar Arhivă şi Registratură </h2>
                    {orarInstante.map((item, index) => {
                        return (
                            <ListItem
                                className="mx-5 px-2"
                                button
                                component="a"
                                href={item.refOrar}
                            >

                                <ListItemIcon className="mx-1 px-1">
                                    <img src={require("../images/icons/institution.png")} alt="Icon_Document" />
                                </ListItemIcon>

                                <ListItemText
                                    className="TextCollapse"
                                    color="white"
                                    inset
                                    primary={item.nume}
                                />
                            </ListItem >
                        );
                    })}
                </div>


            </React.Fragment>
        );
    }
}

export default Competente;