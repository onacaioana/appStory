import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Title from '../Title/title';
import ListOfDocs from '../listOfDocs';
import Anunt from './anunt';

const items = [{
    data: "13 decembrie 2018",
    titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
    hot: [{
        titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
        locatie: "./simple.pdf"
    }
    ]
},
{
    data: "13 decembrie 2018",
    titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
    hot: [{
        titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
        locatie: "./simple.pdf"
    }]
},
{
    data: "13 decembrie 2018",
    titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
    hot: [{
        titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
        locatie: "./simple.pdf"
    }]
},
{
    data: "13 decembrie 2018",
    titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
    hot: [{
        titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
        locatie: "./simple.pdf"
    }]
},
{
    data: "13 decembrie 2018",
    titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
    hot: [{
        titlu: "Comunicatul Tribunalului Cluj din 13 decembrie 2018",
        locatie: "./simple.pdf"
    }]
},
];

class Comunicate extends Component {

    render() {
        return (
            <React.Fragment>
                <Title
                    title="Comunicate de presă"
                    page="Comunicate"
                    subpage="Informații"
                    breadcrumbs={true}
                />

                <div className="my-5 container">

                    {/* <h2>Aici vin concursurile</h2> */}

                    {items.map((item, index) => {
                        return (
                            <Anunt
                                key={index}
                                icon={"../../images/icons/law2.png"}
                                altText={"altText"}
                                titlu={item.titlu}
                                subtitlu={item.data}
                                docs={item.hot}
                                expanded = {true}
                            />
                        );
                    })}

                    {/* <ListOfDocs
                        list={items}
                        component="nav"
                        subheader={<ListSubheader component="div">Tribunalul Cluj -  Comunicate de presă</ListSubheader>}
                        icon={require("../../images/icons/law2.png")}
                        button={true}
                    /> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Comunicate;