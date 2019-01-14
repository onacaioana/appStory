import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from '../components/anunt';
import axios from 'axios';
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
                    title="Compentenţă materială şi teritoriala"
                    page="Competenţe"
                    subpage="Despre instanţă"
                    breadcrumbs={true}
                />

                <div className="my-5 container">
                    <Anunt
                        icon={require("../images/icons/law2.png")}
                        altText={"altText"}
                        docs={this.state.items}
                        expanded={false}
                    />

                </div>
            </React.Fragment>
        );
    }
}

export default Competente;