import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListOfDocs from '../components/listOfDocs';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from "../components/anunt";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class Declaratii extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    type: "Declarații de avere",
                    instance: [
                        {
                            name: "Tribunalul Cluj",
                            location: "Declaratii/Declaratii de avere/Tribunalul Cluj",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Cluj-Napoca",
                            location: "Declaratii/Declaratii de avere/Judecatoria Cluj-Napoca",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Gherla",
                            location: "Declaratii/Declaratii de avere/Judecatoria Gherla",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Dej",
                            location: "Declaratii/Declaratii de avere/Judecatoria Dej",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Turda",
                            location: "Declaratii/Declaratii de avere/Judecatoria Turda",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Huedin",
                            location: "Declaratii/Declaratii de avere/Judecatoria Huedin",
                            listOfDocs: []
                        }]
                },
                {
                    type: "Declarații de interese",
                    instance: [
                        {
                            name: "Tribunalul Cluj",
                            location: "Declaratii/Declaratii de interese/Tribunalul Cluj",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Cluj-Napoca",
                            location: "Declaratii/Declaratii de interese/Judecatoria Cluj-Napoca",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Gherla",
                            location: "Declaratii/Declaratii de interese/Judecatoria Gherla",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Dej",
                            location: "Declaratii/Declaratii de interese/Judecatoria Dej",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Turda",
                            location: "Declaratii/Declaratii de interese/Judecatoria Turda",
                            listOfDocs: []
                        },
                        {
                            name: "Judecătoria Huedin",
                            location: "Declaratii/Declaratii de interese/Judecatoria Huedin",
                            listOfDocs: []
                        }]
                }]
        };
    };
    componentDidMount() {
        this.state.items.map((declaratii, dIdx) => {
            declaratii.instance.map((item, index) => {
                axios.get(`/getFiles`, { params: { folderName: "PDFs/" + item.location } })
                    .then(result => {
                        let list = [];
                        result.data.map((file) => {
                            /* Extract title */
                            let indexStop = file.indexOf('.pdf');
                            let title = file.substring(0, indexStop);
                            /* Create a doc file type object with 2 params: {titlu, locatie} */
                            const docObject = Object.assign({ titlu: title, locatie: item.location + "/" + file });
                            list.push(docObject);
                            return true;
                        });
                        /* Create an item from state array and append to state */
                        let currentState = [...this.state.items];
                        currentState[dIdx].instance[index].listOfDocs = list;
                        this.setState({ item: currentState });
                    })
            });
        });

        window.scrollTo(0, 0);
    }
    render() {

        let list_dAvere = this.state.items[0].instance.map((dAvere, index) => {
            return (
                <Anunt
                    key={index}
                    icon={require("../images/icons/institution.png")}
                    titlu={dAvere.name}
                    docs={dAvere.listOfDocs}
                    expanded={true}
                />
            )
        });

        let list_dInterese = this.state.items[1].instance.map((dInterese, index) => {
            return (
                <Anunt
                    key={index}
                    icon={require("../images/icons/institution.png")}
                    titlu={dInterese.name}
                    docs={dInterese.listOfDocs}
                    expanded={true}
                    open={false}
                />
            )
        });

        return (
            <React.Fragment>
                <Title
                    title="Declarații de avere şi interese"
                    page="Declarații"
                    subpage="Informații"
                    breadcrumbs={true}
                />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <List>
                            {/* Declaratii de avere */}
                            <ListItem >
                                <ListItemText className="ListItemText" inset primary={this.state.items[0].type} />
                            </ListItem>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                {list_dAvere}
                            </Collapse>
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <List>
                            {/* Declaratii de interese */}
                            <ListItem >
                                <ListItemText className="ListItemText" inset primary={this.state.items[1].type} />
                            </ListItem>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                {list_dInterese}
                            </Collapse>
                        </List>
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }
}

export default Declaratii;