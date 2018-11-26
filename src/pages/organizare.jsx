import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/People';
import Grid from '@material-ui/core/Grid';
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Title from '../components/Header/HeaderTitlePage';
import { personalTribunal1 } from '../utils/constants';
import ListaPersonal from '../components/Personal/ListaSectii';


class Organizare extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <React.Fragment>
                <Title
                    title="Organizare"
                    page="Organizare"
                    subpage="Despre Instanță"
                    breadcrumbs={true}
                />
                <div>
                    <Grid container className=" my-3 bg-light" spacing={16} >

                        {/*            Grid style: style={{ backgroundColor: "#CDCDCD" }}*/}
                        <Grid item xs={2} className="d-none d-lg-block d-xl-block" >
                            <MenuList className="position-fixed "  >
                                <Link to="/organizare#idOrganigrama" style={{ textDecoration: 'none', display: 'block' }}>
                                    <MenuItem style={{ backgroundColor: 'transparent' }}>
                                        <ListItemIcon>
                                            <ShareIcon />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Organigramă" />
                                    </MenuItem>
                                </Link>
                                <Link to="/organizare#idOrganizare" style={{ textDecoration: 'none', display: 'block' }}>
                                    <MenuItem style={{ backgroundColor: 'transparent' }}>
                                        <ListItemIcon>
                                            <PeopleIcon />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Organizarea" />
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Grid>

                        <Grid item xs={10} >
                            {/* Organigrama */}
                            <div id="idOrganigrama" className="mx-4">
                                <Typography color="primary" className="mx-3" variant="display1">Organigramă</Typography>
                                <Divider className="m-3" />
                                <img onClick={this.toggle} style={{ width: '98%', maxWidth: '100%', borderRadius: '30px' }} src={require("../images/organigrama.png")} alt="oragnigrama"></img>

                            </div>


                            {/* ORGANIZARE - Personalul Tribunalului Cluj*/}
                            <div id="idOrganizare" className="mx-4">
                                
                                {/* Title of section - "Organizare" */}
                                <Divider className="m-3" />
                                <Typography
                                    color="primary"
                                    className="mx-1 py-2"
                                    variant="display1"
                                >
                                    Organizare
                                </Typography>

                                {/* List of employees of Tribunalul Cluj */}
                                <ListaPersonal list={personalTribunal1} />
                            </div>
                        </Grid>
                    </Grid>
                </div >
            </React.Fragment>
        );
    }
}

export default Organizare;