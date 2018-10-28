import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Title from './Title/title';
import { Typography, Divider } from '@material-ui/core';


const items = [{
    date: "13 decembrie 2018",
    content: "Hotararea de colegiu nr 38 din 13 decembrie 2018",
    location: "./simple.pdf",
}, {
    date: "13 decembrie 2015",
    content: "Hotararea de colegiu nr 3 din 13 decembrie 2015",
    location: "./simple.pdf",
}, {
    date: "13 ianuarie 2017",
    content: "Hotararea de colegiu nr 3 din 2 ianuarie 2017",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3 din 13 ian 2015",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 iunie 2018",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    content: "Hotararea de colegiu nr 3",
    location: "./simple.pdf",
},];

class Hotarari extends Component {
    state = {
        expanded: 0,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    render() {
        const listItems = items.map((item, index) => {
            return (
                <ListItem button>
                    <ListItemIcon>
                        <img src={require("../images/icons/law2.png")}></img>
                    </ListItemIcon>
                    <ListItemText inset primary={item.content} secondary={item.date} />
                </ListItem>
            )
        })

        return (
            <React.Fragment>
                <Title
                    title="Hotărâri de colegiu"
                    page="Hotarâri"
                    subpage="Informații"
                />

                <div className="my-5 container">
                    <Typography className="py-3" variant="body1"> Potrivit modificărilor aduse Regulamentului de ordine interioară al instanţelor judecătoreşti, respectiv dispoziţiile art. 22 alin. 3 din Regulamentul de ordine interioară a instanţelor judecătoreşti aprobat prin Hotărârea nr. 387 din 22 septembrie 2005 elaborată de Consiliul Superior al Magistraturii, suntem obligaţi să publicăm pe site-ul instanţei toate hotărârile de colegiu care vizează completele de judecată şi listele de permanenţă.</Typography>
                    <Divider/>
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Tribunalul Cluj - Colegiu de conducere</ListSubheader>}
                    >
                        {listItems}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Hotarari;