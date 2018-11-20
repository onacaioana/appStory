import React, { Component } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import axios from 'axios';
import Title from "../Title/title";

import Anunt from "./anunt";
const itemss = [];

class Concursuri extends Component {
  state = {
    items: [],
  };
  componentDidMount = () => {
    /**
     * Get all files from a folder and create an array of objects
     */
    axios
      .get(`http://localhost:8080/getFiles`, {
        params: {
          folderName: "PDFs/Anunturi"
        }
      })
      .then(res => {

        let i = 0;
        for (i = 0; i < res.data.length; i++) {
          const object3 = Object.assign({ titlu: res.data[i], locatie: "/Anunturi/" + res.data[i], });
          const list = [];
          list.push(object3);
          const object2 = Object.assign({ titlu: res.data[i], data: res.data[i], listOfDocs: list });

          /* No rerender if state not changed - TO DO!! */
         this.setState({ items: [...this.state.items, object2] });
          itemss.push(object2);
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

            {itemss.map((item, index) => {
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
