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
import ListOfDocs from './listOfDocs';

const items = [{
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [{
        titlu: "asdasd",
        locatie: "adsdas",
    },
    {
        titlu: "asdasd",
        locatie: "adsdas",
    }],
}, {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [{
        titlu: "asdasd",
        locatie: "adsdas",
    },
    {
        titlu: "asdasd",
        locatie: "adsdas",
    }],
}, {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [{
        titlu: "asdasd",
        locatie: "adsdas",
    },
    {
        titlu: "asdasd",
        locatie: "adsdas",
    }],
}, {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [{
        titlu: "asdasd",
        locatie: "adsdas",
    },
    {
        titlu: "asdasd",
        locatie: "adsdas",
    }],
}, {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [{
        titlu: "asdasd",
        locatie: "adsdas",
    },
    {
        titlu: "asdasd",
        locatie: "adsdas",
    }],
}, {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [{
        titlu: "asdasd",
        locatie: "adsdas",
    },
    {
        titlu: "asdasd",
        locatie: "adsdas",
    }],
},];

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
            return (
                <React.Fragment>
                    <ListItem key={index} button onClick={this.handleChange(index)}>
                        <ListItemIcon>
                            <img src={require("../images/icons/list.png")} alt="list concursuri si anunturi"></img>
                        </ListItemIcon>
                        <ListItemText inset primary={item.titlu} secondary={item.data} />
                        {expanded === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                        <ListOfDocs
                            list={item.listOfDocs}
                            button={true}
                            icon={require("../images/icons/arow2.png")}
                            component="div"
                        />
                    </Collapse>
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <Title
                    title="Anunţuri / Concursuri"
                    page="Anunţuri"
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