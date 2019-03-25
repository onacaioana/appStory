import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Divider from '@material-ui/core/Divider';
import Anunt from '../components/anunt';
import axios from 'axios';
import List from '@material-ui/core/List';

class Hotarari extends Component {
  state = {
    folders: [],
};
  componentDidMount = () => {
    window.scrollTo(0, 0);

    /**
     * Get all files from a folder and create an array of objects
     */
    /* Request all Folders 
             * Each year has a folder
             */
    axios
      .get(`/getFiles`, {
        params: {
          folderName: "PDFs/Hotarari"
        }
      })
      .then(res => {

        /* Foreach folder from res, requeat all pdf files  */
        let i = res.data.length - 1;
        for (i; i >= 0; i--) {
          let year = res.data[i];
          axios
            .get(`/getFiles`, {
              params: {
                folderName: "PDFs/Hotarari/" + year
              }
            })
            .then(res2 => {

              let m = res2.data.length - 1;
              let object2;
              let object3 = [];

              /* Extract data field from pdf filename */
              for (m; m >= 0; m--) {
                let indexStart = res2.data[m].indexOf('-');
                let indexStop = res2.data[m].indexOf('.pdf');
                let dataDoc = res2.data[m].substring(indexStart + 1, indexStop);
                let titluDoc = res2.data[m].substring(0, indexStop);

                object2 = Object.assign({ titlu: titluDoc, data: dataDoc, locatie: "Hotarari/" + year + "/" + res2.data[m] });
                object3.push(object2);
              }

              /* Create an object[{folder,docs[]}] where:
               * folder  - folder name 
               * docs - list of Pdf files from folder
               *  
               * Add created object to {this.state.folders}
               */
              console.log(year);
              const object = Object.assign({ folder: year, docs: object3 });
              this.setState({ folders: [...this.state.folders, object] });
            })
            .catch(e => {
              console.log("Eroare la deschiderea fișierului", e);
            });
        }
      })
      .catch(e => {
        console.log("Eroare la deschiderea folderului", e);
      });

    /* 
        axios
          .get(`/getFiles`, {
            params: {
              folderName: "PDFs/Hotarari"
            }
          })
          .then(res => {
    
            let i = 0;
    
            for (i = 0; i < res.data.length; i++) {
              let indexStart = res.data[i].indexOf('-');
              let indexStop = res.data[i].indexOf('.pdf');
              let dataDoc = res.data[i].substring(indexStart + 1, indexStop);
              let titluDoc = res.data[i].substring(0, indexStop);
              const object = Object.assign({ titlu: titluDoc, data: dataDoc, locatie: "Hotarari/" + res.data[i] });
              this.setState({ items: [...this.state.items, object] });
            }
          })
          .catch(e => {
            console.log("Eroare la deschiderea fișierului", e);
          }); */


  }

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
          <h6 className="py-3" variant="body1">
            {" "}
            Potrivit modificărilor aduse Regulamentului de ordine interioară al
            instanţelor judecătoreşti, respectiv dispoziţiile art. 22 alin. 3
            din Regulamentul de ordine interioară a instanţelor judecătoreşti
            aprobat prin Hotărârea nr. 387 din 22 septembrie 2005 elaborată de
            Consiliul Superior al Magistraturii, suntem obligaţi să publicăm pe
            site-ul instanţei toate hotărârile de colegiu care vizează
            completele de judecată şi listele de permanenţă.
          </h6>
          <Divider />


          {/* Create a List 
            * Add each folder and docs in List using component <Anunt/>
            */}
          <List component="nav">
            {this.state.folders.map((item, index) => {
              return (
                <Anunt
                  key={index}
                  icon={require("../images/icons/law2.png")}
                  altText={"hotarari"}
                  titlu={item.folder}
                  docs={item.docs}
                  expanded={true}
                />
              );
            })}
          </List>
        </div>
      </React.Fragment >
    );
  }
}

export default Hotarari;
