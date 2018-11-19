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
  state = {
    files: [
      
    ]
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:8080/getFiles`, {
        params: {
          folderName: "PDFs/Anunturi"
        }
      })
      .then(res => {
        console.log(res.data.length);
        console.log(res.data[0]);

        let i = 0;
        for (i = 0; i < res.data.length; i++) {
          const object3 = Object.assign({ titlu: res.data[i], locatie: "/Anunturi/"+ res.data[i], });
          const list = [];
          list.push(object3);
          const object2 = Object.assign({ titlu: res.data[i], data: res.data[i], listOfDocs: list});
          console.log(object2);
          this.setState({ files: [...this.state.files, object2] })
          console.log(this.state.files);
        }

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

            {this.state.files.map((item, index) => {
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
