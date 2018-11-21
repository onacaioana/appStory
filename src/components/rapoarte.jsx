import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Title from './Title/title';
import ListOfDocs from './listOfDocs';
import axios from 'axios';

/**
 *  Define icons for each category from this page:
 *  Bilant  -----   Statistica ----   Buget */
const icons = [require("../images/icons/list.png"), require("../images/icons/report.png"), require("../images/icons/finance.png")];

class Rapoarte extends Component {
    state = {
        items: []
    }

    componentDidMount = () => {
        /**
        * Get all files from a folder and create an array of objects
        * 
        * This request return folders and fubfoders from PDFs/Rapoarte
        */

        window.scrollTo(0, 0);
    
        axios
            .get(`http://localhost:8080/getFiles`, {
                params: {
                    folderName: "PDFs/Rapoarte"
                }
            })
            .then(res1 => {
                /* Foreach folder returned -> request all files */
                res1.data.map((folder, index) => {
                    return (

                        axios
                            .get(`http://localhost:8080/getFiles`, {
                                params: {
                                    folderName: "PDFs/Rapoarte/" + folder
                                }
                            })
                            .then(res => {

                                /* Foreach file will create the state docs and final objects */
                                var list = [];
                                res.data.map((file) => {

                                    /* Extract title filed from pdf name */
                                    let indexStop = file.indexOf('.pdf');
                                    let title = file.substring(0, indexStop);

                                    /* Create a doc file type object with 2 params: {titlu, locatie} */
                                    const docObject = Object.assign({ titlu: title, locatie: "Rapoarte/" + folder + "/" + file });
                                    
                                    list.push(docObject);
                                });

                                /* Create an item from state array and append to state */
                                const itemObject = Object.assign({ titlu: folder, icon: icons[index], listOfDocs: list });
                                this.setState({ items: [...this.state.items, itemObject] });
                            })
                    )
                });
            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });
    }


    render() {
        let listItems = this.state.items.map((item, index) => {
            return (
                <React.Fragment key={index} >
                    <ListItem >
                        <ListItemText inset primary={<h2 style={{ color: '#146496' }}>{item.titlu}</h2>} />
                    </ListItem>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <ListOfDocs
                            list={item.listOfDocs}
                            icon1={item.icon}
                            button={true}
                            component="div"
                        />
                    </Collapse>
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <Title
                    title="Instanța în cifre"
                    page="Instanța în cifre"
                    subpage="Despre instanță"
                    breadcrumbs={true}
                />
                <div className="my-5 container">

                    <List component="nav" >
                        {listItems}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Rapoarte;