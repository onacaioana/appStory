import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/Contacts';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/People';
import Grid from '@material-ui/core/Grid';
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


class Organizare extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid container className=" my-3 bg-light" spacing={16} >
                    {/* Oragnigramă */}
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
                        <div id="organigrama" className="mx-4">
                            <Typography color="primary" className="mx-3" variant="display1">Organigramă</Typography>
                            <Divider className="m-3" />
                            <img onClick={this.toggle} style={{ width: '98%', borderRadius: '30px' }} src={require("../images/organigrama.png")}></img>

                        </div>
                        {/* Conducerea Tribunalului Cluj*/}
                        <div id="conducere" className="mx-4">
                            <Divider className="my-3" />
                            <Typography color="primary" className="my-3" variant="display1">Conducere</Typography>
                            <Divider className="my-3" />

                            <Typography variant="title">Preşedinte</Typography>
                            <div className="m-3">
                                <Typography variant="subheading"> SELEŞIU Ana Sorina</Typography>
                            </div>

                            <Typography variant="title">Vicepreşedinţi</Typography>
                            <div className="m-3">
                                <Typography variant="subheading">FĂRCAŞ-Hîngan Georgiana Rodica</Typography>
                                <Typography variant="subheading">GUZU Rodica Elisabeta</Typography>
                            </div>


                            <Typography variant="title">Colegiul de Conducere</Typography>
                            <div className="m-3">
                                <Typography variant="subheading">SELEŞIU Ana Sorina - Președinte – membru ales</Typography>
                                <Typography variant="subheading">DANILEŢ Cristi Vasilică - Judecator – membru ales</Typography>
                                <Typography variant="subheading">GAGA Ioan - Judecator – membru ales</Typography>
                                <Typography variant="subheading">GUZU Rodica - Judecător– membru ales</Typography>
                                <Typography variant="subheading">JACOTĂ Cătălin - Judecător – membru ales</Typography>
                                <Typography variant="subheading">ONEŢ Georgeta - Judecător – membru ales</Typography>
                                <Typography variant="subheading">TRESTIAN Simona - Judecător – membru ales</Typography>
                            </div>


                            <Typography variant="title">Prim grefier</Typography>
                            <div className="m-3">
                                <Typography variant="subheading">KOZMA Daniela</Typography>
                            </div>

                        </div>


                        {/* Organizarea Tribunalului Cluj*/}
                        <div id="organiz" className="mx-4">
                            <Divider className="my-3" />
                            <Typography color="primary" className="my-3" variant="display1">Oraganizare</Typography>
                            <Divider className="my-3" />

                            <Typography variant="title">Secţia Civilă</Typography>

                            <Typography className="m-3" variant="title" color="secondary">Judecatori: </Typography>
                            <div className="mx-5">
                                <Typography variant="subheading">Boiciuc Ioana Nora</Typography>
                                <Typography variant="subheading">Cociş Liliana-Anişoara</Typography>
                                <Typography variant="subheading">Danileţ Vasilică Cristi</Typography>
                                <Typography variant="subheading">Fărcaş-Hîngan Georgiana Rodica</Typography>
                                <Typography variant="subheading">Ilieş Ariana</Typography>
                                <Typography variant="subheading">Lupea Ioan-Marius</Typography>
                                <Typography variant="subheading">Mornăilă Ramona</Typography>
                                <Typography variant="subheading">Trestian Simona</Typography>
                                <Typography variant="subheading">Ţopan Alina</Typography>
                            </div>
                            <Typography className="m-3" variant="title" color="secondary">Grefieri: </Typography>
                            <div className="mx-5">
                                <Typography variant="subheading"> Blăjan Camelia-Luminiţa</Typography>
                                <Typography variant="subheading"> Brie Alina</Typography>
                                <Typography variant="subheading"> Borbely Malvin</Typography>
                                <Typography variant="subheading"> Burnete Daiana-Andra</Typography>
                                <Typography variant="subheading"> Dan Andreea</Typography>
                                <Typography variant="subheading"> Doboş Maria </Typography>
                                <Typography variant="subheading"> Miron Carmen-Gabriela</Typography>
                                <Typography variant="subheading"> Moldovan Briciu Maria C ristina</Typography>
                                <Typography variant="subheading"> Oneş Dan Paul</Typography>
                                <Typography variant="subheading"> Parv Faia</Typography>
                                <Typography variant="subheading"> Stîngaci Mirela</Typography>
                            </div>
                            <Divider className="my-3" />
                            <Typography variant="title">Secţia Penală</Typography>
                            <Typography className="m-3" variant="title" color="secondary">Grefieri: </Typography>
                            <div className="mx-5">
                                <Typography variant="subheading">Balint Camelia</Typography>
                                <Typography variant="subheading">Bolchiş Florina-Sanda</Typography>
                                <Typography variant="subheading">Cimbrudean Corina-Anca</Typography>
                                <Typography variant="subheading">Guzu Rodica</Typography>
                                <Typography variant="subheading">Doica Alin-Florin</Typography>
                                <Typography variant="subheading">Ghişoiu Oana Raluca</Typography>
                                <Typography variant="subheading">Jacotă Cătălin</Typography>
                                <Typography variant="subheading">Luca Emeşe</Typography>
                                <Typography variant="subheading">Taşcă Dan-Ioan </Typography>
                                <Typography variant="subheading">Tatu Claudia-Oana</Typography>
                                <Typography variant="subheading">Tatu Dorin </Typography>
                                <Typography variant="subheading">Oncică Sanislav Marcela</Typography>
                                <Typography variant="subheading">Seleşiu Ana Sorina </Typography>
                            </div>
                            <Typography className="m-3" variant="title" color="secondary">Grefieri: </Typography>
                            <div className="mx-5">
                                <Typography variant="subheading">Andresi Olimpia</Typography>
                                <Typography variant="subheading">Bărăian Ioana Maria</Typography>
                                <Typography variant="subheading">Boţioc Alina-Pompilia</Typography>
                                <Typography variant="subheading">Ciceu Oana Raluca</Typography>
                                <Typography variant="subheading">Coman Livia</Typography>
                                <Typography variant="subheading">Curuţiu Elvira</Typography>
                                <Typography variant="subheading">Deac Aniela</Typography>
                                <Typography variant="subheading">Duma Ioana Daniela</Typography>
                                <Typography variant="subheading">Herişanu Claudia</Typography>
                                <Typography variant="subheading">Miclea Laura</Typography>
                                <Typography variant="subheading">Petruş Gabriela</Typography>
                                <Typography variant="subheading">Pop Alina</Typography>
                                <Typography variant="subheading">Ţifrea Cristina</Typography>
                                <Typography variant="subheading">Șofron Claudia</Typography>
                                <Typography variant="subheading">Voila Andreea</Typography>
                            </div>
                            <Divider className="my-3" />

                            <Typography variant="title">Colegiul de Conducere</Typography>
                            <div className="m-3">
                                <Typography variant="subheading">SELEŞIU Ana Sorina - Președinte – membru ales</Typography>
                                <Typography variant="subheading">DANILEŢ Cristi Vasilică - Judecator – membru ales</Typography>
                                <Typography variant="subheading">GAGA Ioan - Judecator – membru ales</Typography>
                                <Typography variant="subheading">GUZU Rodica - Judecător– membru ales</Typography>
                                <Typography variant="subheading">JACOTĂ Cătălin - Judecător – membru ales</Typography>
                                <Typography variant="subheading">ONEŢ Georgeta - Judecător – membru ales</Typography>
                                <Typography variant="subheading">TRESTIAN Simona - Judecător – membru ales</Typography>
                            </div>
                            <Divider className="my-3" />

                            <Typography variant="title">Prim grefier</Typography>
                            <div className="m-3">
                                <Typography variant="subheading">KOZMA Daniela</Typography>
                            </div>

                        </div>

                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default Organizare;