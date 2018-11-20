import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Title from './Title/title';
import ListOfDocs from './listOfDocs';
import axios from 'axios';

class Rapoarte extends Component {
    state = {
        items: [{
            titlu: "Rapoarte de activitate a Tribunalului Cluj ",
            icon: require("../images/icons/list.png"),
            listOfDocs: [],

        }, {

            titlu: "Informații Statistice ",
            icon: require("../images/icons/report.png"),
            listOfDocs: [],
        }, {
            titlu: "Surse Financiare ",
            icon: require("../images/icons/report.png"),
            listOfDocs: [],
        }
        ]
    }

    componentDidMount = () => {
        /**
        * Get all files from a folder and create an array of objects
        */
        axios
            .get(`http://localhost:8080/getFiles`, {
                params: {
                    folderName: "PDFs/Rapoarte"
                }
            })
            .then(res1 => {
                const items = this.state.items;
                var i = 0;
                for (i = 0; i < res1.data.length; i++) {
                    let list = [];
                    list = this.readSubfolders(res1.data[i]);
                    items[i].listOfDocs = list;

                }

                this.setState({
                    items
                });
            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });
    }

    readSubfolders = (folder) => {
        const list = [];
        axios
            .get(`http://localhost:8080/getFiles`, {
                params: {
                    folderName: "PDFs/Rapoarte/" + folder
                }
            })
            .then(res => {

                let j = 0;
                for (j = 0; j < res.data.length; j++) {
                    const object3 = Object.assign({ titlu: res.data[j], locatie: folder +"/"+ res.data[j], });
                    list.push(object3);
                }
            })
        return list;
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