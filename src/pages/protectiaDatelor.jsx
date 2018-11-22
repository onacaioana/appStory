import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Divider from '@material-ui/core/Divider';
import Anunt from '../components/anunt';
import axios from 'axios';

class ProtectiaDatelor extends Component {
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
          folderName: "PDFs/InfoUtile/Date cu caracter personal"
        }
      })
      .then(res => {

        let i = 0;

        for (i = 0; i < res.data.length; i++) {

          /* Extract data field from pdf name */
          let indexStop = res.data[i].indexOf('.pdf');
          let titluDoc = res.data[i].substring(0, indexStop);
          const object = Object.assign({ titlu: titluDoc, locatie: "InfoUtile/Date cu caracter personal/" + res.data[i] });
          this.setState({ items: [...this.state.items, object] });
        }

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
          title="Protecţia datelor cu caracter personal"
          page="GDPR"
          breadcrumbs={true}
        />

        <div className="my-5 container">
          <h6 className="py-3" variant="body1">
            {" "}
            Plângerile pot fi formulate de către persoanele fizice ale căror date personale au fost prelucrate cu încălcarea dispozițiilor legale aplicabile în materia protecției datelor personale (”persoane vizate”), în special în cazul în care reşedinţa obişnuită a petentului, locul său de muncă sau presupusa încălcare se află sau, după caz, are loc pe teritoriul României.În situația în care nu vă încadrați în această categorie (”persoane vizate”), vă rugăm să transmiteți cererea dvs. folosind adresa anspdcp@dataprotection.ro sau adresa poștală a ANSPDCP.Înainte de a începe completarea formularului de plângere, vă rugăm să consultați condițiile de admisibilitate din Procedura de primire și soluționare a plângerilor.
          </h6>
          <Divider />

          {/* <h2>Aici vin hotararile de colegiu</h2> */}
          <Anunt
            icon={require("../images/icons/law2.png")}
            altText={"iconGDPR"}
            docs={this.state.items}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProtectiaDatelor;
