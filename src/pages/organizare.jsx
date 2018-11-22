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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListFromStringsArray from '../components/listFromStringsArray';
import {personalTribunal} from '../utils/constants';


class Organizare extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        let listItems = personalTribunal.map((p, index) => {
            return (

                <List
                    component="nav"
                >
                    {/* Title of list */}
                    <Typography color="primary" className="my-3" variant="display1">{p.sectia}</Typography>

                    {/* All team */}
                    <ListItem key={index}>
                        <ListItemIcon>
                            <img src={require("../images/icons/arow2.png")} alt={index}></img>
                        </ListItemIcon>
                        <ListItemText
                            style={{ color: 'red' }}
                            inset
                            primary={<h5 style={{ color: '#146496' }}>{p.title}</h5>}
                        />
                    </ListItem>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <ListFromStringsArray list={p.team} />
                    </Collapse>
                </List>
            )
        });

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
                        <Grid  item xs={2} className="d-none d-lg-block d-xl-block" >
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
                                    <MenuItem  style={{ backgroundColor: 'transparent' }}>
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


                            {/* Organizarea Tribunalului Cluj*/}
                            <div id="idOrganizare" className="mx-4">
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