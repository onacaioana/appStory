import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { fax } from "react-icons-kit/fa/fax";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import Harta from "../components/Harta/harta";
import Pdf from '../components/Pdf/pdf';
// import 'mapbox-gl/dist/mapbox-gl.css';

class Contact extends Component {
  render() {
    const style = { marginLeft: "10%", marginRight: "10%", marginTop: "10px" };
    return (
      <div style={style}>
        <div className="card mb-4 bg-light text-dark shadow-lg h-md-250 justify-content-center align-items-center">
          <h1>Noutăţi</h1>
          <p className="px-4">
            <br />
            In perioada 02 august - 10 septembrie 2018, cereriile si petitiile
            pentru biroul de informare si relatii publice se vor trimite la
            adresa de e-mail a registraturii: tr-cluj-reg@just.ro !!!
          </p>
          <p>sdjsdhkfsdfhk</p>
          <p>sdjsdhkfsdfhk</p>
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
        <Pdf />
      </div>
    );
  }
}

export default Contact;
