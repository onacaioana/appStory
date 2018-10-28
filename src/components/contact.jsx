import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { fax } from "react-icons-kit/fa/fax";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import Harta from "../components/Harta/harta";
import Pdf from "../components/Pdf/pdf";
import Title from './Title/title';
// import 'mapbox-gl/dist/mapbox-gl.css';

class Contact extends Component {
  render() {
    const style = { marginLeft: "10%", marginRight: "10%", marginTop: "10px" };
    return (
      <React.Fragment>
        <Title title="Contact" page="Contact us" />
        <div style={style}>
          <div className="card mb-4 bg-light text-dark shadow-lg h-md-250 justify-content-center ">
            <div className="card-header text-white bg-secondary  border-0 py-2 d-flex align-items-center">
              <h4 className="text-center">PROGRAM DE FUNCȚIONARE</h4>
            </div>
            <div className="card-body">
              <p className="card-text px-2">Programul de lucru al instituţiei: <br/>Luni - Vineri între orele 08:00 - 16:00;</p>
              <p className="card-text px-2">Programul de lucru cu publicul al Registraturii (parter, camera 24A), al Arhivei (parter, camera 24B):<br/> Luni - Vineri între orele 8:00 - 12:00; </p>
              <p className="card-text px-2">Programul de lucru cu publicul pe perioada vacantei judecatoresti (01.07.-31.08.) al Registraturii (parter, camera 24A), al Arhivei (parter, camera 24B):<br/> Luni Miercuri Joi între orele 09:00 - 11:00;</p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4">
              <div className="card mb-4 shadow-lg h-md-250">
                <div className="card-header text-white r bg-secondary  border-0 py-2 d-flex align-items-center">
                  <Icon size={30} icon={phoneSquare} />
                  <h5 className="card-text px-3">Contact</h5>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    <b> Registratură: </b>
                    0748 523.258
                </p>
                  <p className="card-text">
                    <b> Arhivă: </b>
                    0748 523.258
                </p>
                  <p className="card-text">
                    <b>Purtator de cuvant: </b>
                    0748 523.258
                </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-lg h-md-250">
                <div className="card-header text-white r bg-secondary  border-0 py-2 d-flex align-items-center">
                  <Icon size={30} icon={fax} />
                  <h5 className="card-text px-3">Fax</h5>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    <b> Registratură: </b>
                    0748 523.258
                </p>
                  <p className="card-text">
                    <b> Arhivă: </b>
                    0748 523.258
                </p>
                  <p className="card-text">
                    <b>Purtator de cuvant: </b>
                    0748 523.258
                </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-lg h-md-250">
                <div className="card-header text-white r bg-secondary  border-0 py-2 d-flex align-items-center">
                  <Icon size={30} icon={mail} />
                  <h5 className="card-text px-3">Mail</h5>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    <b> Registratură: </b>
                    0748 523.258
                </p>
                  <p className="card-text">
                    <b> Arhivă: </b>
                    0748 523.258
                </p>
                  <p className="card-text">
                    <b>Purtator de cuvant: </b>
                    0748 523.258
                </p>
                </div>
              </div>
            </div>
          </div>

          <Harta />
          <Pdf fileName="/sample.pdf" />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
