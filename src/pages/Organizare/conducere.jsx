import React, { Component } from 'react';
import Title from '../../components/Header/HeaderTitlePage';
/* import { conducere } from '../../utils/constants'; */
import ListaPersonal from '../../components/Employees/EmployeesDepartments';


class Conducere extends Component {
    state = {
        conducere: [{
            sectia: "",
            personal: [
                {
                    title: "",
                    team: []
                }
            ]
        }]
    }

    componentDidMount() {
        fetch("/personalJson")
            .then((response) => response.json())
            .then((findresponse) =>
                this.setState({
                    conducere: findresponse.conducereTribunal
                })
            )


        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Title title="Conducerea instanţei" page="Conducere" subpage="Despre Instanță / Organizare" breadcrumbs={true} />

                {/* Management team*/}
                <div className="container">
                    <ListaPersonal list={this.state.conducere} expended={true} />
                </div>
            </React.Fragment>
        );
    }
}

export default Conducere;