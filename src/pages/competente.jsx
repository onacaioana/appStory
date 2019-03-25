import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from '../components/anunt';
import axios from 'axios';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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
                    folderName: "PDFs/Competente"
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
                    const object = Object.assign({ titlu: titluDoc, data: dataDoc, locatie: "Competente/" + res.data[i] });
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
                    title="Competenţe şi Circumscripţie"
                    page="Competenţe şi Circumscripţie"
                    subpage="Despre instituţie"
                    breadcrumbs={true}
                />

                <div className="my-5 container">
                    <h2 className="pt-5 " style={{ color: '#164164', fontWeight: 'bold' }}>Competenţă materială şi teritorială</h2>
                    <Anunt
                        icon={require("../images/icons/law2.png")}
                        altText={"altText"}
                        docs={this.state.items}
                        expanded={false}
                    />

                </div>

                <div className="my-5 container">
                    <h2 className="pt-5 " style={{ color: '#164164', fontWeight: 'bold' }}>Circumscripţie</h2>
                    <ListItem
                        className="mx-5 px-5 "
                        button
                        component="a"
                        href="http://portal.just.ro/117/SitePages/Circumscriptii.aspx?id_inst=117"
                    >

                        <ListItemIcon className="mx-1 px-1">
                            <img src={require("../images/icons/list.png")} alt="Icon_Document" />
                        </ListItemIcon> 

                        <ListItemText
                            color="white"
                            inset
                            primary="Circumscripţii în raza Tribunalului Cluj"
                        />
                    </ListItem >
                </div>


            </React.Fragment>
        );
    }
}

export default Competente;