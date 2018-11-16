import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Title from './Title/title';
import ListOfDocs from './listOfDocs';


const items = [{
    titlu: "Rapoarte de activitate a Tribunalului Cluj ",
    icon: require("../images/icons/list.png"),
    listOfDocs: [{
        titlu: "Bilant Tribunalul Cluj 2017",
        locatie: "/Bilant/Bilant2017.pdf",
    },
    {
        titlu: "Bilant Tribunalul Cluj 2016",
        locatie: "/Bilant/Bilant2016.pdf",
    },
    {
        titlu: "Bilant Tribunalul Cluj 2015",
        locatie: "/Bilant/Bilant2015.pdf",
    },
    {
        titlu: "Bilant Tribunalul Cluj 2014",
        locatie: "/Bilant/Bilant2014.pdf",
    },
    {
        titlu: "Bilant Tribunalul Cluj 2013",
        locatie: "/Bilant/Bilant2013.pdf",
    }],

}, {
    titlu: "Informații Statistice ",
    icon: require("../images/icons/report.png"),
    listOfDocs: [{
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
}, {
    titlu: "Surse Financiare ",
    icon: require("../images/icons/report.png"),
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "/PDFs/Buget/Buget2017.pdf",
    },
    {
        titlu: "Buget Tribunalul Cluj 2016",
        locatie: "/PDFs/Buget/Buget2016.pdf",
    },{
        titlu: "Buget Tribunalul Cluj 2015",
        locatie: "/PDFs/Buget/Buget2015.pdf",
    }],
},
];

class Rapoarte extends Component {

    render() {
        let listItems = items.map((item, index) => {
            return (
                <React.Fragment>
                    <ListItem key={index} >
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