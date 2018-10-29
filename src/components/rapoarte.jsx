import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Title from './Title/title';


const items = [{
    title: "Rapoarte de activitate a Tribunalului Cluj ",
    content: ["Bilant Tribunalul Cluj 2018", "Bilant Tribunalul Cluj 2017", "Bilant Tribunalul Cluj 2016", "Bilant Tribunalul Cluj 2015"],
    location: "./simple.pdf",
}, {
    title: "Informații Statistice ",
    content: ["Raport privind situatia", "Raport privind situatia", "Raport privind situatia", "Raport privind situatia"],
    location: "./simple.pdf",
}, {

    title: "Surse Financiare ",
    content: ["Buget Tribunalul Cluj 2018", "Buger Tribunalul Cluj 2017", "Buget Tribunalul Cluj 2016", "Buget Tribunalul Cluj 2015"],
    location: "./simple.pdf",
},
];

class Rapoarte extends Component {

    render() {

        let listItems = items.map((item, index) => {
            let peopleToReturn = [];
            for (let i = 0; i < item.content.length; i++) {
                peopleToReturn.push(
                    <ListItem key={i} className="mx-5 px-5" button >
                        <ListItemIcon>
                            {index === 0 ?
                                <img src={require("../images/icons/list.png")} alt="list"></img> :
                                <img src={require("../images/icons/report.png")} alt="report"></img>
                            }
                        </ListItemIcon>
                        <ListItemText color="white" inset primary={item.content[i]} />
                    </ListItem>
                );
            }

            return (
                <React.Fragment>
                    <ListItem key={index} >

                        <ListItemText inset primary={<h2 style={{ color: '#146496' }}>{item.title}</h2>} />

                    </ListItem>
                    <Collapse in={true} timeout="auto" unmountOnExit>
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
                    title="Instanța în cifre"
                    page="Instanța în cifre"
                    subpage="Despre instanță"
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