import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Title from '../../components/Header/HeaderTitlePage';
import { personalTribunal1 } from '../../utils/constants';
import ListaPersonal from '../../components/Employees/EmployeesDepartments';


class Organizare extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment >
                <Title
                    title="Organizare"
                    page="Organizare"
                    subpage="Despre Instanță"
                    breadcrumbs={true}
                />
                <div className="container">

                    {/* Organigrama */}
                    <div id="idOrganigrama" className="mx-4">
                        <Typography color="primary" className="mx-3" variant="display1"> Organigramă </Typography>
                        <Divider className="m-3" />
                        <img onClick={this.toggle}
                            style={{ width: '98%', maxWidth: '100%', borderRadius: '30px' }}
                            src={require("../../images/organigrama.png")}
                            alt="oragnigrama"
                        />
                    </div>

                    {/* Organizare 
                      *  1. Devider and Title
                      *  2. list of employees
                      */}
                    <div id="idOrganizare" className="mx-4">
                        <Divider className="m-3" />
                        <Typography color="primary" className="mx-1 py-2" variant="display1">Organizare </Typography>
                        <ListaPersonal list={personalTribunal1} expended={false} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Organizare;