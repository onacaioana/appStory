import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Title from './Title/title';
import ListOfDocs from './listOfDocs';

const items = [{
    data: "13 decembrie 2018",
    titlu: "Hotararea de colegiu nr 38 din 13 decembrie 2018",
    locatie: "./simple.pdf",
}, {
    data: "13 decembrie 2015",
    titlu: "Hotararea de colegiu nr 3 din 13 decembrie 2015",
    locatie: "./simple.pdf",
}, {
    data: "13 ianuarie 2017",
    titlu: "Hotararea de colegiu nr 3 din 2 ianuarie 2017",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3 din 13 ian 2015",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 iunie 2018",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
}, {
    data: "13 noiembrie 2015",
    titlu: "Hotararea de colegiu nr 3",
    locatie: "./simple.pdf",
},];

class Comunicate extends Component {

    render() {
        return (
            <React.Fragment>
                <Title
                    title="Comunicate de presă"
                    page="Comunicate"
                    subpage="Informații"
                />

                <div className="my-5 container">
                    <ListOfDocs
                        list={items}
                        component="nav"
                        subheader={<ListSubheader component="div">Tribunalul Cluj -  Comunicate de presă</ListSubheader>}
                        icon={require("../images/icons/law2.png")}
                        button={true}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Comunicate;