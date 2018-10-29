import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/Contacts';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/People';
import Grid from '@material-ui/core/Grid';
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Title from './Title/title';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const people = [{
    sectia: "Conducere",
    title: "Preşedinte",
    team: ["SELEȘIU Ana Sorina"],
},
{
    title: "Vicepreşedinţi",
    team: ["FĂRCAŞ-Hîngan Georgiana Rodica", "GUZU Rodica Elisabeta"]
},
{
    title: "Colegiul de Conducere",
    team: ["SELEŞIU Ana Sorina - Președinte – membru ales",
        "DANILEŢ Cristi Vasilică - Judecator – membru ales",
        "GAGA Ioan - Judecator – membru ales",
        "GUZU Rodica - Judecător– membru ales",
        "JACOTĂ Cătălin - Judecător – membru ales",
        "ONEŢ Georgeta - Judecător – membru ales",
        "TRESTIAN Simona - Judecător – membru ales"],
}, {
    title: "Prim grefier",
    team: ["KOZMA Daniela"],
}, {
    sectia: "Secția Civilă",
    title: "Judecatori:",
    team: ["Boiciuc Ioana Nora",
        "Cociş Liliana-Anişoara",
        "Danileţ Vasilică Cristi",
        "Fărcaş-Hîngan Georgiana Rodica",
        "Ilieş Ariana",
        "Lupea Ioan-Marius",
        "Mornăilă Ramona",
        "Trestian Simona",
        "Ţopan Alina"],
},
{
    title: "Grefieri",
    team: ["Blăjan Camelia-Luminiţa",
        "Brie Alina",
        "Borbely Malvin",
        "Burnete Daiana-Andra",
        "Dan Andreea",
        "Doboş Maria",
        "Miron Carmen-Gabriela",
        "Moldovan Briciu Maria Cristina",
        "Oneş Dan Paul",
        "Parv Fabia",
        "Stîngaci Mirela"]
}, {
    sectia: "Secţia Penală",
    title: "Judecători",
    team: ["Balint Camelia",
        "Bolchiş Florina-Sanda",
        "Cimbrudean Corina-Anca",
        "Guzu Rodica",
        "Doica Alin-Florin",
        "Ghişoiu Oana Raluca",
        "Jacotă Cătălin",
        "Luca Emeşe",
        "Taşcă Dan-Ioan ",
        "Tatu Claudia-Oana",
        "Tatu Dorin ",
        "Oncică Sanislav Marcela",
        "Seleşiu Ana Sorina "],
}, {
    sectie: "",
    title: "Grefieri",
    team: ["Andresi Olimpia", "Bărăian Ioana Maria", "Boţioc Alina-Pompilia", "Ciceu Oana Raluca", "Coman Livia", "Curuţiu Elvira", "Deac Aniela", "Duma Ioana Daniela", "Herişanu Claudia", "Miclea Laura", "Petruş Gabriela", "Pop Alina", "Ţifrea Cristina", "Șofron Claudia", "Voila Andreea"]
}
]

class Organizare extends Component {
    state = {
        expanded: 0,
    }

    handleChange = index => (event, expanded) => {
        this.setState({
            expanded: index,
        });
    };

    render() {
        const { expanded } = this.state;

        let listItems = people.map((p, index) => {
            let peopleToReturn = [];
            for (let i = 0; i < p.team.length; i++) {
                peopleToReturn.push(
                    <ListItem key={i} className="mx-5 px-5" >
                        <ListItemText color="white" inset primary={p.team[i]} />
                    </ListItem>
                );
            }
            return (
                <React.Fragment>
                    <List
                        component="nav"
                    >
                        {/* Title of list */}
                        <Typography color="primary" className="my-3" variant="display1">{p.sectia}</Typography>

                        {/* All team */}
                        <ListItem key={index} button onClick={this.handleChange(index)}>
                            <ListItemIcon>
                                <img src={require("../images/icons/arow2.png")}></img>
                            </ListItemIcon>
                            <ListItemText
                                style={{ color: 'red' }}
                                inset
                                primary={<h5 style={{ color: '#146496' }}>{p.title}</h5>}
                            />
                            {expanded === index ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {peopleToReturn}
                            </List>
                        </Collapse>
                    </List>
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <Title title="Organizare" page="Organizare" subpage="Despre Instanță" />
                <div>
                    <Grid container className=" my-3 bg-light" spacing={16} >
                        {/* Meniu */}
                        <Grid item xs={2}>
                            {/*  className="position-fixed "           Grid style: style={{ backgroundColor: "#CDCDCD" }}*/}
                            <MenuList >
                                <Link to="/organizare#organigrama" style={{ textDecoration: 'none', display: 'block' }}>
                                    <MenuItem >
                                        <ListItemIcon>
                                            <ShareIcon />
                                        </ListItemIcon>
                                        <ListItemText className="d-none d-lg-block d-xl-block" inset primary="Organigramă" />
                                    </MenuItem>
                                </Link>
                                <Link to="/organizare#conducere" style={{ textDecoration: 'none', display: 'block' }}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <ContactIcon />
                                        </ListItemIcon>
                                        <ListItemText className="d-none d-lg-block d-xl-block" inset primary="Conducerea" />
                                    </MenuItem>
                                </Link>
                                <Link to="/organizare#organiz" style={{ textDecoration: 'none', display: 'block' }}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <PeopleIcon />
                                        </ListItemIcon>
                                        <ListItemText className="d-none d-lg-block d-xl-block" inset primary="Organizarea" />
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Grid>

                        <Grid item xs={10} >
                            {/* Organigrama */}
                            <div id="organigrama" className="mx-4">
                                <Typography color="primary" className="mx-3" variant="display1">Organigramă</Typography>
                                <Divider className="m-3" />
                                <img onClick={this.toggle} style={{ width: '98%', borderRadius: '30px' }} src={require("../images/organigrama.png")} alt="oragnigrama"></img>

                            </div>


                            {/* Organizarea Tribunalului Cluj*/}
                            <div id="organiz" className="mx-4">
                                {listItems}
                            </div>
                        </Grid>
                    </Grid>
                </div >
            </React.Fragment>
        );
    }
}

export default Organizare;