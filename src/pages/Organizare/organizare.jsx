import React, { Component } from 'react';
import Title from '../../components/Header/HeaderTitlePage';
import { personalTribunal1 } from '../../utils/constants';
import ListaPersonal from '../../components/Employees/EmployeesDepartments';
import "../../css/organizare.css";

class Organizare extends Component {

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
                    <div className="organizareDiv">
                        {/* Organigrama */}
                        <h2> Organigramă </h2>
                        <img src={require("../../images/organigrama.png")} alt="oragnigrama" />

                        {/* Organizare */}
                        <h2>Structură organizatorică</h2>
                        <ListaPersonal list={personalTribunal1} expended={false} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Organizare;