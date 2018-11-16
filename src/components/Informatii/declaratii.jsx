import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Title from '../Title/title';
import Anunt from "./anunt";


const items = [
    {
        title: "Tribunalul Cluj",
        content: [
            {
                titlu: "Declaratii de avere",
                locatie: "https://www.curteadeapelcluj.ro/DA.aspx?id=TRCJ"
            },
            {
                titlu: "Declaratii de interese",
                locatie: "https://www.curteadeapelcluj.ro/DI.aspx?id=TRCJ"
            }
        ]
    },

    {
        title: "Judecătoria Cluj-Napoca",
        content: [
            {
                titlu: "Declaratii de avere",
                locatie: "https://www.curteadeapelcluj.ro/DA.aspx?id=JCN"
            },
            {
                titlu: "Declaratii de interese",
                locatie: "https://www.curteadeapelcluj.ro/DI.aspx?id=JCN"
            }
        ]
    },

    {
        title: "Judecătoria Dej",
        content: [
            {
                titlu: "Declaratii de avere",
                locatie: "https://www.curteadeapelcluj.ro/DA.aspx?id=JD"
            },
            {
                titlu: "Declaratii de interese",
                locatie: "https://www.curteadeapelcluj.ro/DI.aspx?id=JD"
            }
        ]
    },

    {
        title: "Judecătoria Gherla",
        content: [
            {
                titlu: "Declaratii de avere",
                locatie: "https://www.curteadeapelcluj.ro/DA.aspx?id=JG"
            },
            {
                titlu: "Declaratii de interese",
                locatie: "https://www.curteadeapelcluj.ro/DI.aspx?id=JG"
            }
        ]
    },

    {
        title: "Judecătoria Huedin",
        content: [
            {
                titlu: "Declaratii de avere",
                locatie: "https://www.curteadeapelcluj.ro/DA.aspx?id=JH"
            },
            {
                titlu: "Declaratii de interese",
                locatie: "https://www.curteadeapelcluj.ro/DI.aspx?id=JH"
            }
        ]
    },

    {
        title: "Judecătoria Turda",
        content: [
            {
                titlu: "Declaratii de avere",
                locatie: "https://www.curteadeapelcluj.ro/DA.aspx?id=JT"
            },
            {
                titlu: "Declaratii de interese",
                locatie: "https://www.curteadeapelcluj.ro/DI.aspx?id=JT"
            }
        ]
    }

];

class Declaratii extends Component {

    render() {

        return (
            <React.Fragment>
                <Title
                    title="Declarații"
                    page="Declarații"
                    subpage="Informații"
                    breadcrumbs={true}
                />


                <div className="my-5 container">
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Declarații de avere și de interese</ListSubheader>}
                    >
                        {/* Aici vin declaratiile */}
                        {items.map((item, index) => {
                            return (
                                <Anunt
                                    key={index}
                                    icon={require("../../images/icons/institution.png")}
                                    titlu={item.title}
                                    docs={item.content}
                                    expanded={true}
                                />
                            );
                        })}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default Declaratii;