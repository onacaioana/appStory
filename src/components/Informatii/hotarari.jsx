import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Title from '../Title/title';
import Divider from '@material-ui/core/Divider';
import Anunt from './anunt';


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

class Hotarari extends Component {

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

                    {/* <h2>Aici vin hotararile de colegiu</h2> */}

                    {items.map((item, index) => {
                        return (
                            <Anunt
                                key={index}
                                icon={"../../images/icons/law2.png"}
                                altText={"iconHotarare"}
                                titlu={item.titlu}
                                subtitlu={item.data}
                                docs={item}
                            />
                        );
                    })}


                </div>
            </React.Fragment>
        );
    }
}

export default Hotarari;