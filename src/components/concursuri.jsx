import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Title from './Title/title';


const items = [{
    date: "13 decembrie 2018",
    title: "Concurs grefier de sedinta",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}, {
    date: "13 decembrie 2015",
    title: "Concurs specialist IT",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018", "Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}, {
    date: "13 ianuarie 2017",
    title: "Concurs de promovare judecatori",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018", "Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    title: "Concurs de promovare grefier sef",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018", "Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    title: "Concurs grefier registrator",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018", "Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    title: "Concurs grefier registrator",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018", "Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}, {
    date: "13 noiembrie 2015",
    title: "Concurs grefier registrator",
    content: ["Concurs grefier de sedinta nr 38 din 13 decembrie 2018", "Concurs grefier de sedinta nr 38 din 13 decembrie 2018"],
    location: "./simple.pdf",
}];

class Concursuri extends Component {


    state = {
        expanded: 0,
    };

    handleChange = index => (event, expanded) => {
        console.log({ index });
        console.log({ expanded });
        this.setState({
            expanded: index,
        });
    };

    render() {
        const { expanded } = this.state;

        let listItems = items.map((item, index) => {
            let peopleToReturn = [];
            for (let i = 0; i < item.content.length; i++) {
                peopleToReturn.push(
                    <ListItem key={i} className="mx-5 px-5" button >
                      
                            <img src={require("../images/icons/arow2.png")}></img>
                  
                        <ListItemText color="white" inset primary={item.content[i]} />
                    </ListItem>
                );
            }

            return (
                <React.Fragment>
                    <ListItem key={index} button onClick={this.handleChange(index)}>
                        <ListItemIcon>
                            <img src={require("../images/icons/list.png")}></img>
                        </ListItemIcon>
                        <ListItemText style={{color:'red'}} inset primary={item.title} secondary={item.date} />
                        {expanded === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {peopleToReturn}
                        </List>
                    </Collapse>
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <Title
                    title="Concursuri"
                    page="Concursuri"
                    subpage="Informații"
                />

                <div className="my-5 container">
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Tribunalul Cluj - Posturi vacante</ListSubheader>}
                    >
                        {listItems}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Concursuri;