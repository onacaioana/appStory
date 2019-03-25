import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Title from '../components/Header/HeaderTitlePage';
import { personalTribunal1 } from '../utils/constants';
import ListaPersonal from '../components/Employees/EmployeesDepartments';
import Meniu from '../components/menuOrganizare';


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
                <Grid container className=" my-3 bg-light" spacing={16} >

                    {/*
                    * Left menu go to "Organigrama" and "Organizare" 
                    */}
                    <Grid item xs={2} className="d-none d-lg-block d-xl-block" >
                        <Meniu />
                    </Grid>

                    <Grid item xs={10} >

                        {/* Organigrama */}
                        <div id="idOrganigrama" className="mx-4">
                            <Typography
                                color="primary"
                                className="mx-3"
                                variant="display1"
                            > Organigramă
                                </Typography>

                            <Divider className="m-3" />
                            <img
                                onClick={this.toggle}
                                style={{ width: '98%', maxWidth: '100%', borderRadius: '30px' }}
                                src={require("../images/organigrama.png")}
                                alt="oragnigrama"
                            />
                        </div>

                        {/* Organizare */}
                        <div id="idOrganizare" className="mx-4">
                            <Divider className="m-3" />
                            <Typography
                                color="primary"
                                className="mx-1 py-2"
                                variant="display1"
                            >Organizare
                                </Typography>

                            {/* List of employees of Tribunalul Cluj */}
                            <ListaPersonal list={personalTribunal1} />
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Organizare;