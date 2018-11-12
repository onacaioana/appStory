import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Title from './Title/title';
import Divider from '@material-ui/core/Divider';
import ListOfDocs from './listOfDocs';

const items = [{
    data: "13 decembrie 2018",
    titlu: "Hotararea de colegiu nr 38 din 13 decembrie 2018",
    locatie: "/files/sample.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "/files/1.pdf",
},];

class Hotarari extends Component {
    state = {
        expanded: 0,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    render() {
        return (
            <React.Fragment>
                <Title
                    title="Hotărâri de colegiu"
                    page="Hotarâri"
                    subpage="Informații"
                    breadcrumbs={true}
                />

                <div className="my-5 container">
                    <h6 className="py-3" variant="body1"> Potrivit modificărilor aduse Regulamentului de ordine interioară al instanţelor judecătoreşti, respectiv dispoziţiile art. 22 alin. 3 din Regulamentul de ordine interioară a instanţelor judecătoreşti aprobat prin Hotărârea nr. 387 din 22 septembrie 2005 elaborată de Consiliul Superior al Magistraturii, suntem obligaţi să publicăm pe site-ul instanţei toate hotărârile de colegiu care vizează completele de judecată şi listele de permanenţă.</h6>
                    <Divider />
                    <ListOfDocs
                        list={items}
                        component="nav"
                        subheader={<ListSubheader component="div">Tribunalul Cluj - Hotărâri de conducere</ListSubheader>}
                        icon={require("../images/icons/law2.png")}
                        button={true}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Hotarari;