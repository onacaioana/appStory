import React, { Component } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import axios from 'axios';
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
        locatie: "/files/sample.pdf"
      },
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      },
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      },
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      },
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      }
    ]
  },
  {
    data: "13 noiembrie 2015",
    titlu: "Concurs de promovare grefier sef",
    listOfDocs: [
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      },
      {
        titlu: "asdasd",
        locatie: "/files/sample.pdf"
      }
    ]
  }
];

class Concursuri extends Component {
  componentDidMount = () => {
    axios
      .get(`http://localhost:8080/getFiles`, {
        params: {
          folderName: "PDFs/Anunturi"
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log("Eroare la deschiderea fișierului", e);
      });
  }

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
                  icon={require("../../images/icons/list.png")}
                  altText={"altText"}
                  titlu={item.titlu}
                  subtitlu={item.data}
                  docs={item.listOfDocs}
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

export default Concursuri;
