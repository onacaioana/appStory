import React, { Component } from 'react';
import Title from '../Title/title';
import Divider from '@material-ui/core/Divider';
import Anunt from './anunt';
import axios from 'axios';

const items = [{
  data: "03 decembrie 2016",
  titlu: "Hotararea de colegiu nr 3 din 09 decembrie 2016",
  locatie: "/Hotarari/2016.03.09 Hotărârea nr. 3 din 09 martie 2016.pdf",
},
{
  data: "10 iunie 2016",
  titlu: "Hotărârea nr 7 din 10 iunie 2016",
  locatie: "/Hotarari/2016.06.10 Hotărârea nr. 7 din 10 iunie 2016.pdf",
}, {
  data: "29 noimebrie 2016",
  titlu: "Hotărârea nr. 11 din 29 noiembrie 2016",
  locatie: "/Hotarari/2016.11.29 Hotărârea nr. 11 din 29 noiembrie 2016.pdf",
}, {
  data: "19 decembrie 2016",
  titlu: "Hotărârea nr. 13 din 19 decembrie 2016",
  locatie: "/Hotarari/2016.12.19 Hotărârea nr. 13 din 19 decembrie 2016.pdf",
}, {
  data: "11 ianuarie 2017",
  titlu: "Hotărârea nr. 1 din 11 ianuarie 2017",
  locatie: "/Hotarari/2017.01.11 Hotărârea nr. 1 din 11 ianuarie 2017.pdf",
}, {
  data: "13 decembrie 2017",
  titlu: "Hotărârea nr. 8 din 13 decembrie 2017",
  locatie: "/Hotarari/2017.12.13 Hotărârea nr. 8 din 13 decembrie 2017.pdf",
}, {
  data: "10 ianuarie 2018",
  titlu: "Hotărârea nr. 1 din 10 ianuarie 2018",
  locatie: "/Hotarari/2018.01.10 Hotărârea nr. 1 din 10 ianuarie 2018.pdf",
}];

class Hotarari extends Component {
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
          folderName: "PDFs/Hotarari"
        }
      })
      .then(res => {

        let i = 0;

        for (i = 0; i < res.data.length; i++) {

          /* Extract data field from pdf name */
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
      });
    window.scrollTo(0, 0);
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

          {/* <h2>Aici vin hotararile de colegiu</h2> */}
          <Anunt
            icon={require("../../images/icons/law2.png")}
            altText={"iconHotarare"}
            docs={this.state.items}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Hotarari;
