import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from '../components/anunt';
import axios from 'axios';
import List from '@material-ui/core/List';

class Comunicate extends Component {
    state = {
        folders: [],
    };
    componentDidMount = () => {
        /**
         * Get all files from a folder and create an array of objects
         */
        window.scrollTo(0, 0);
        /* Request all Folders 
         * Each year has a folder
         */
        axios
            .get(`/getFiles`, {
                params: {
                    folderName: "PDFs/Comunicate"
                }
            })
            .then(res => {

                /* Foreach folder from res, requeat all pdf files  */
                let i = res.data.length - 1;
                for (i; i >= 0; i--) {
                    let year = res.data[i];
                    axios
                        .get(`/getFiles`, {
                            params: {
                                folderName: "PDFs/Comunicate/" + year
                            }
                        })
                        .then(res2 => {
                            
                            let m = res2.data.length - 1;
                            let object2;
                            let object3 = [];

                            /* Extract data field from pdf filename */
                            for (m; m >= 0; m--) {
                                let indexStart = res2.data[m].indexOf('-');
                                let indexStop = res2.data[m].indexOf('.pdf');
                                let dataDoc = res2.data[m].substring(indexStart + 1, indexStop);
                                let titluDoc = res2.data[m].substring(0, indexStop);

                                object2 = Object.assign({ titlu: titluDoc, data: dataDoc, locatie: "Comunicate/" + year + "/" + res2.data[m] });
                                object3.push(object2);
                            }

                            /* Create an object[{folder,docs[]}] where:
                             * folder  - folder name 
                             * docs - list of Pdf files from folder
                             *  
                             * Add created object to {this.state.folders}
                             */
                            console.log(year);
                            const object = Object.assign({ folder: year, docs: object3 });
                            this.setState({ folders: [...this.state.folders, object] });
                        })
                        .catch(e => {
                            console.log("Eroare la deschiderea fișierului", e);
                        });
                }
            })
            .catch(e => {
                console.log("Eroare la deschiderea folderului", e);
            });
    }


    render() {
        return (
            <React.Fragment>
                <Title
                    title="Comunicate de presă"
                    page="Comunicate"
                    subpage="Informații"
                    breadcrumbs={true}
                />

                {/* Create a List 
                  * Add each folder and docs in List using component <Anunt/>
                  */}
                <div className="my-5 container">
                    <List component="nav">
                        {this.state.folders.map((item, index) => {
                            return (
                                <Anunt
                                    key={index}
                                    icon={require("../images/icons/law2.png")}
                                    altText={"comunicate"}
                                    titlu={item.folder}
                                    docs={item.docs}
                                    expanded={true}
                                />
                            );
                        })}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Comunicate;