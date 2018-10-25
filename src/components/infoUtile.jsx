import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopy from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';

const tileData = [{
    img: require('../images/jud_dej.jpg'),
    title: 'Popularizarea noii legislații penale',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219",
},

{
    img: require('../images/jud-cluj.jpg'),
    title: ' Asistenţă judiciară',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211"
},
{
    img: require('../images/jud-gherla.jpg'),
    title: ' Informaţii taxe',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235"
},
{
    img: require('../images/jud-huedin.jpg'),
    title: ' Legalizare şi investire',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242"
}];



const tileData1 = [{
    img: require('../images/jud-turda.jpg'),
    title: '    Recunoaştere hotărâri străine',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328"
},
{
    img: require('../images/jud-turda.jpg'),
    title: 'Medierea',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328"
},
{
    img: require('../images/jud-turda.jpg'),
    title: 'Liste experţi',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328"
},
{
    img: require('../images/jud-turda.jpg'),
    title: ' Apostilă',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    text: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328"
}];

const options = [
    'View',
    'Print',
];


class InfoUtile extends Component {
    state = {
        anchorEl: null,
    };


    routeChange = () => {
        window.location = '/taxe';
    }

    render() {
        return (

            <Grid container spacing={16} alignItems="center" justify="center">
                <Grid item xs={12} sm={12} md={3}>
                    <Paper className="shadow">
                        <List>
                            {tileData.map((item, index) =>
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <FileCopy />
                                    </ListItemIcon>
                                    <ListItemText
                                        onClick={this.routeChange}
                                        primary={item.title}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Paper className="shadow">
                        <List>
                            {tileData.map((item, index) =>
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <FileCopy />
                                    </ListItemIcon>
                                    <ListItemText
                                        onClick={this.routeChange}
                                        primary={item.title}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Paper className="shadow">
                        <List>
                            {tileData1.map((item, index) =>
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <FileCopy />
                                    </ListItemIcon>
                                    <ListItemText

                                        onClick={this.routeChange}
                                        primary={item.title}
                                    />
                                </ListItem>

                            )}
                        </List>
                    </Paper>
                </Grid>
            </Grid>


        );
    }
}

export default InfoUtile;