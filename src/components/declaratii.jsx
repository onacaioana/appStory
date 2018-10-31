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
import ListFromStringsArray from './listFromStringsArray';


const items = [{
    title: "Tribunalul Cluj",
    content: ["Declarații de avere", "Declarații de interese"],
    location: ["https://www.curteadeapelcluj.ro/DA.aspx?id=TRCJ", "https://www.curteadeapelcluj.ro/DI.aspx?id=TRCJ"],
}, {
    title: "Judecătoria Cluj-Napoca",
    content: ["Declarații de avere", "Declarații de interese"],
    location: ["https://www.curteadeapelcluj.ro/DA.aspx?id=JCN", "https://www.curteadeapelcluj.ro/DI.aspx?id=JCN"],
}, {
    title: "Judecătoria Dej",
    content: ["Declarații de avere", "Declarații de interese"],
    location: ["https://www.curteadeapelcluj.ro/DA.aspx?id=JD", "https://www.curteadeapelcluj.ro/DI.aspx?id=JD"],
}, {
    title: "Judecătoria Gherla",
    content: ["Declarații de avere", "Declarații de interese"],
    location: ["https://www.curteadeapelcluj.ro/DA.aspx?id=JG", "https://www.curteadeapelcluj.ro/DI.aspx?id=JG"],
}, {
    title: "Judecătoria Huedin",
    content: ["Declarații de avere", "Declarații de interese"],
    location: ["https://www.curteadeapelcluj.ro/DA.aspx?id=JH", "https://www.curteadeapelcluj.ro/DI.aspx?id=JH"],
}, {
    title: "Judecătoria Turda",
    content: ["Declarații de avere", "Declarații de interese"],
    location: ["https://www.curteadeapelcluj.ro/DA.aspx?id=JT", "https://www.curteadeapelcluj.ro/DI.aspx?id=JT"],
}];

class Declaratii extends Component {


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
                    <ListItem key={i} className="mx-5 px-5" button href={item.location[i]} >

                        <img src={require("../images/icons/arow2.png")} alt="arow declaratii"></img>

                        <ListItemText color="white" inset primary={item.content[i]} />
                    </ListItem>
                );
            }

            return (
                <React.Fragment>
                    <ListItem key={index} button onClick={this.handleChange(index)}>
                        <ListItemIcon>
                            <img src={require("../images/icons/institution.png")} alt="icon institutie declaratii"></img>
                        </ListItemIcon>
                        <ListItemText style={{ color: 'red' }} inset primary={item.title} secondary={item.date} />
                        {expanded === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                       
                            <ListFromStringsArray
                                list={item.content}
                                icon={require("../images/icons/arow2.png")}
                                href={item.location}
                                button={true}
                                component="a"
                            />
                    </Collapse>
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <Title
                    title="Declarații"
                    page="Declarații"
                    subpage="Informații"
                />

                <div className="my-5 container">
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Declarații de avere și de interese</ListSubheader>}
                    >
                        {listItems}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Declaratii;