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

class Comunicate extends Component {
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
                <ListItem key={index} button >
                    <ListItemIcon>
                        <img src={require("../images/icons/law2.png")} alt="law comunicate"></img>
                    </ListItemIcon>
                    <ListItemText inset primary={item.content} secondary={item.date} />
                </ListItem>
            )
        })

        return (
            <React.Fragment>
                <Title
                    title="Comunicate de presă"
                    page="Comunicate"
                    subpage="Informații"
                />

                <div className="my-5 container">
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Tribunalul Cluj - Comunicate de presă</ListSubheader>}
                    >
                        {listItems}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Comunicate;