import React, { Component } from 'react';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from '../components/anunt';
import axios from 'axios';
import PhoneNumber from 'react-phone-number';
import "../css/index.css";
import "../css/titleStyle.css";

class ListeExperti extends Component {
  state = {
    items: [],
  };
  componentDidMount = () => {
    /**
     * Get all files from a folder and create an array of objects
     */
    axios
      .get(`/getFiles`, {
        params: {
          folderName: "PDFs/InfoUtile/Liste Experti"
        }
      })
      .then(res => {

        let i = 0;

        for (i = 0; i < res.data.length; i++) {

          /* Extract data field from pdf name */
          let indexStop = res.data[i].indexOf('.pdf');
          let titluDoc = res.data[i].substring(0, indexStop);
          const object = Object.assign({ titlu: titluDoc, locatie: "InfoUtile/Liste Experti/" + res.data[i] });
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
          title="Experţi judiciari"
          page="Liste experţi"
          breadcrumbs={true}
        />
        <div className="container">
          <div className="card my-3 bg-light shadow-lg h-md-250 text-center">
            <div style={{ backgroundColor: '#146496' }} className="card-header text-white border-0 py-2 d-flex ">
              <h5 className="card-text mx-auto">BIROUL LOCAL DE EXPERTIZE JUDICIARE CLUJ</h5>
            </div>
            <div className="card-body">
              <div className="card-div" >

                <p> Telefon: <PhoneNumber number="0264431871" isLinked={true} /></p>
                <p> E-mail: <a href="mailto:tr-cluj-blej@just.ro">tr-cluj-blej@just.ro</a></p>
                <p></p>
                <p style={{ color: 'red', paddingTop: '20px' }}><b>PLĂŢI EXPERTIZE JUDICIARE:</b></p>
                <div >
                  <p> CUI: 4565300</p>
                  <p> <b>CONTURI BANCARE</b> deschise la CEC Bank Sucursala Cluj S.A: </p>
                  <p> depunere numerar: RO48CECECJ01G9RON0454047</p>
                  <p> transfer bancar: RO62CECECJ0137RON0101732</p>
                  <p style={{ color: 'red', paddingTop: '10px' }}> Vă rugăm să precizaţi numărul dosarului şi numele expertului!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 container">
          <h2 className="titleClass" >Liste Experţi</h2>
          <Anunt
            icon={require("../images/icons/list.png")}
            altText={"iconGDPR"}
            docs={this.state.items}
          />
        </div>
      </React.Fragment >
    );
  }
}

export default ListeExperti;
