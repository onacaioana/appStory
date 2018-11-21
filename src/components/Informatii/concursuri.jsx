import React, { Component } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import axios from 'axios';
import Title from "../Title/title";

import Anunt from "./anunt";
const itemss = [];

class Concursuri extends Component {
  state = {
    items: []
  }

  componentDidMount = () => {
    /**
    * Get all files from a folder and create an array of objects
    * 
    * This request return folders and fubfoders from PDFs/Rapoarte
    */


    axios
      .get(`http://localhost:8080/getFiles`, {
        params: {
          folderName: "PDFs/Anunturi"
        }
      })
      .then(res1 => {
        /* Foreach folder returned -> request all files */
        res1.data.map((folder,index) => {

            axios
              .get(`http://localhost:8080/getFiles`, {
                params: {
                  folderName: "PDFs/Anunturi/" + folder
                }
              })
              .then(res => {

                let indexStart = folder.indexOf('An');
                let dataFolder = folder.substring(0, indexStart);
                let folderTitle = folder.substring(indexStart);
                /* Foreach file will create the state docs and final objects */
                var list = [];
                res.data.map((file) => {

                  /* Extract title filed from pdf name */
                  let indexStop = file.indexOf('.pdf');
                  let title = file.substring(0, indexStop);

                  /* Create a doc file type object with 2 params: {titlu, locatie} */
                  const docObject = Object.assign({ titlu: title, locatie: "Anunturi/" + folder + "/" + file });
                  list.push(docObject);
                  
                });

                /* Create an item from state array and append to state */
                const itemObject = Object.assign({ titlu: folderTitle, data: dataFolder, listOfDocs: list });
                this.setState({ items: [...this.state.items, itemObject] });

              })
          
        });
      })
      .catch(e => {
        console.log("Eroare la deschiderea fișierului", e);
      });
      window.scrollTo(0, 0);
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

            {this.state.items.map((item, index) => {
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
