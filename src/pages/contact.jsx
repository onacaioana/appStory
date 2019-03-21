import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { fax } from "react-icons-kit/fa/fax";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import Harta from "../components/Harta/harta";
import Title from '../components/Header/HeaderTitlePage';
import PhoneNumber from 'react-phone-number';
// import 'mapbox-gl/dist/mapbox-gl.css';

const program = [{
  where: "Programul de lucru al instituţiei:",
  hours: "Luni - Vineri între orele 08:00 - 16:00;"
},
{
  where: "Registratură(parter, camera 24A) şi Arhivă(parter, camera 24B):",
  hours: "Luni - Vineri între orele 8:00 - 12:00;"
}, {
  where: "În perioada vacantei judecatoresti (01.07.-31.08.) program Registratura şi Arhiva:",
  hours: "Luni, Miercuri şi Joi între orele 09:00 - 11:00;",
}];

const massMedia = [{
  functie: "Purtător de cuvânt:",
  nume: "Judecător SIMONA ŞULEA",
  email: "simona.sulea@just.ro",
  phone: "0264596110"
}];

const telefon = [{
  phone1: <PhoneNumber number="0264596111" isLinked="true" />,
  phone2: <PhoneNumber number="0264431057" isLinked="true" />
},
{
  phone1: <PhoneNumber number="0264431908" isLinked="true" />,
  phone2: <PhoneNumber number="0264595812" isLinked="true" />
}];

const email = [{
  locatie: "Registratură:",
  adresa: "tr-cluj-reg@just.ro"
},
{
  locatie: "Biroul Expertize:",
  adresa: "tr-cluj-blej@just.ro "
}];

const faxuri = [{
  locatie: "Cabinet Preşedinte:",
  adresa: "0264-595844",
},
{
  locatie: "Serviciu Contabilitate:",
  adresa: "0264-431965",
}];


class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    /* Mapare program de functionare */
    let orar = program.map((item, index) => {
      return (
        <div className="py-4">
          <p className="card-text "><b>{item.where}</b></p>
          <p className="card-text " style={{ color: 'red' }}><b>{item.hours}</b></p>
        </div>
      )
    });


    /*Mapare Relatie cu presa / mass-media */
    let presa = massMedia.map((item, index) => {
      return (
        <div key={index}>

          <p className="card-text"><b>{item.functie}</b></p>
          <p>{item.nume}</p>
          <p> E-mail: <a href={"mailto:" + item.email}>{item.email}</a></p>
          <p> Tel. <PhoneNumber number={item.phone} isLinked={true} />, Int. 105</p>
        </div>
      )
    });


    /* Maparea numerelor de telefon din const -------telefon------------ */
    let contactTelefon = telefon.map((tel, index) => {
      return (
        <div key={index}>
          <p>
            <b>Tel. Tribunal: </b>
            {tel.phone1} ; {tel.phone2}
          </p>
        </div>
      )
    });


    /* Maparea numerelor de telefon din const -------email------------ */
    let contactEmail = email.map((mail, index) => {
      return (
        <div key={index}>
          <p>
            <b>{mail.locatie} </b>
            <a href={"mailto:" + mail.adresa}>{mail.adresa}</a>
          </p>
        </div>
      )
    });

    /* Maparea numerelor de telefon din const -------fax------------ */
    let contactFax = faxuri.map((mail, index) => {
      return (
        <div key={index}>
          <p>
            <b>{mail.locatie} </b>
            {mail.adresa}
          </p>
        </div>
      )
    });

    const style = { marginLeft: "10%", marginRight: "10%", marginTop: "20px" };
    

  /* Return's render function */
    return (
      <React.Fragment>
        <Title title="Contact" page="Contact us" breadcrumbs={true} />
        <div style={style}>

          {/*********************** BEGIN  Contact Info ******************************/}
          <div className="row mb-2">
            
            {/* Crearea Cardului pentru contact -----TELEFON----- al Tribunalului Cluj */}
            <div className="col-md-4">
              <div className="card mb-4 shadow-lg h-md-250">
                <div style={{ backgroundColor: '#146496' }} className="card-header text-white border-0 py-2 d-flex align-items-center">
                  <Icon size={30} icon={phoneSquare} />
                  <h5 className="card-text px-3">Telefon</h5>
                </div>
                <div className="card-body">
                  {contactTelefon}
                </div>
              </div>
            </div>

            {/* Crearea Cardului pentru contact -----E-MAIL----- al Tribunalului Cluj */}
            <div className="col-md-4">
              <div className="card mb-4 shadow-lg h-md-250">
                <div style={{ backgroundColor: '#146496' }} className="card-header text-white border-0 py-2 d-flex align-items-center">
                  <Icon size={30} icon={mail} />
                  <h5 className="card-text px-3">Mail</h5>
                </div>
                <div className="card-body">
                  {contactEmail}
                </div>
              </div>
            </div>

            {/* Crearea Cardului pentru contact ----FAX--- al Tribunalului Cluj */}
            <div className="col-md-4">
              <div className="card mb-4 shadow-lg h-md-250">
                <div style={{ backgroundColor: '#146496' }} className="card-header text-white border-0 py-2 d-flex align-items-center">
                  <Icon size={30} icon={fax} />
                  <h5 className="card-text px-3">Fax</h5>
                </div>
                <div className="card-body">
                  {contactFax}
                </div>
              </div>
            </div>
          </div>
          {/**************************** END Contact Info ******************************/}



          {/************************** BEGIN Program de functionare *************************/}
          <div className="card my-3 bg-light shadow-lg h-md-250 text-center">
            <div style={{ backgroundColor: '#146496' }} className="card-header text-white border-0 py-2 d-flex ">
              <h5 className="card-text px-3">Program de funcţionare</h5>
            </div>
            <div className="card-body">
              {orar}
            </div>
          </div>
          {/************************** END Program de functionare *************************/}



          {/********************* BEGIN Relatie cu mass-media ******************************/}
          <div className="card my-3 bg-light shadow-lg h-md-250 text-center">
            <div style={{ backgroundColor: '#146496' }} className="card-header text-white border-0 py-2 d-flex ">
              <h5 className="card-text px-3">Relaţia cu mass-media</h5>
            </div>
            <div className="card-body">
              {presa}
            </div>
          </div>
          {/********************** END Relatie cu mass-media ********************************/}



          {/********************* Location Map *****************************/}
          <Harta />

        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
