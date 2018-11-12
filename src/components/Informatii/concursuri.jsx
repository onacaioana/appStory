import React, { Component } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";

import Title from "../Title/title";

import Anunt from "./anunt";

const items = [
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "Proces verbal lista candidati",
        locatie: "loc1"
      },
      {
        titlu: "Proces verbal rezultate proba scrisa",
        locatie: "loc2"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "loc3"
      },
      {
        titlu: "asdasd",
        locatie: "loc4"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "adsdas"
      },
      {
        titlu: "asdasd",
        locatie: "adsdas"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "adsdas"
      },
      {
        titlu: "asdasd",
        locatie: "adsdas"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "adsdas"
      },
      {
        titlu: "asdasd",
        locatie: "adsdas"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "adsdas"
      },
      {
        titlu: "asdasd",
        locatie: "adsdas"
      }
    ]
  }
];

class Concursuri extends Component {
  render() {
    return (
      <React.Fragment>
        <Title
          title="Anunţuri / Concursuri"
          page="Anunţuri"
          breadcrumbs={true}
          subpage="Informații"
        />

        <div className="my-5 container">
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">
                Tribunalul Cluj - Posturi vacante
              </ListSubheader>
            }
          >
            {/* <h2>Aici vin concursurile</h2> */}

            {items.map((item, index) => {
              return (
                <Anunt
                  key={index}
                  icon={"../../images/icons/list.png"}
                  altText={"altText"}
                  titlu={item.titlu}
                  subtitlu={item.data}
                  docs={item.listOfDocs}
                />
              );
            })}
          </List>
        </div>
      </React.Fragment>
    );
  }
}

export default Concursuri;
