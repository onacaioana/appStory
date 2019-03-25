import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from "../components/anunt";
import axios from 'axios';
import { informatiiPublice } from '../utils/constants';
import InfoList from '../components/infoPubliceList';


class InfoPublice extends Component {
    state = {
        items: [],
        folders: [],
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    componentWillMount() {
        axios
            .get(`/getFiles`, {
                params: {
                    folderName: "PDFs/Informatii publice"
                }
            })
            .then(res => {
                /* Foreach folder from res, requeat all pdf files  */
                let i = 0;
                for (i = 0; i < res.data.length; i++) {
                    let year = res.data[i];
                    axios
                        .get(`/getFiles`, {
                            params: {
                                folderName: "PDFs/Informatii publice/" + year
                            }
                        })
                        .then(res2 => {
                            console.log("year:",year);
                            let m = res2.data.length - 1;
                            let object2;
                            let object3 = [];

                            /* Extract data field from pdf filename */
                            for (m; m >= 0; m--) {
                                let indexStop = res2.data[m].indexOf('.pdf');
                                let titluDoc = res2.data[m].substring(0, indexStop);

                                object2 = Object.assign({ titlu: titluDoc, locatie: "Informatii publice/" + year + "/" + res2.data[m] });
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
                            console.log("this.state.folders:",this.state.folders);
                        })
                        .catch(e => {
                            console.log("Eroare la deschiderea fișierului", e);
                        });
                }
            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });





        /* Create an object and append to state */
        /* Extract data field from pdf name */
        /*                     let i = 0;
                            var list = [];
                            for (i = 0; i < res.data.length; i++) {
            
                               
                                let indexStop = res.data[i].indexOf('.pdf');
                                let titluDoc = res.data[i].substring(0, indexStop);
                                const object = Object.assign({ titlu: titluDoc, locatie: "Informatii publice/Birou de informare si relaţii publice/" + res.data[i] });
                                list.push(object);
                            }
            
        
                            const itemObject = Object.assign({ titlu: "Birou de Informare și Relații publice", listOfDocs: list });
                            this.setState({ items: [...this.state.items, itemObject] }); */

    }

    render() {

        let infoList = informatiiPublice.map((item, index) => {
            if (item.folder === "") {
                return (
                    <InfoList index={index}
                        titlu={item.titlu}
                        text={item.text}
                    />
                )
            }
        })

        let result = informatiiPublice.map((item, index) => {
          /*   console.log("item.folder: ",item.folder);
            console.log("state.folders: ",this.state.folders); */
            if (item.folder !== "") {
                let stateFolder = this.state.folders.find(x => x.folder === item.folder);
                console.log("stateFolder: ",stateFolder);
                return (
                    <Anunt
                        key={index}
                        icon={require("../images/icons/law2.png")}
                        altText={item.text}
                        titlu={item.titlu}
                        docs={item.listOfDocs}
                        expanded={true}
                    />
                )
            }
            else {
                console.log("Else: ",item.titlu);
                return (
                    <InfoList index={index}
                        titlu={item.titlu}
                        text={item.text}
                    />
                )
            }
        });

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
                      * 1. case when ListItem component contains pdf files and text
                      * 2. case when ListItem component contains only text 
                      */}
                    <List component="nav">

                        {/* Case 1 */}
                       {/*  {this.state.items.map((item, index) => {
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
                        })} */}

                        {/* Case 2 */}
                        {result}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default InfoPublice;