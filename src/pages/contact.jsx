import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { fax } from "react-icons-kit/fa/fax";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import Harta from "../components/Harta/harta";
import Title from '../components/Header/HeaderTitlePage';
import PhoneNumber from 'react-phone-number';
import "../css/index.css";
import { red } from "@material-ui/core/colors";



class Contact extends Component {
  state = {
    data: {
      program: [{ where: "", hours: "" }],
      massMedia: [{ functie: "", nume: "", email: "", phone: "" }],
      email: [{ locatie: "", adresa: "" }],
      faxuri: [{ locatie: "", adresa: "" }],
      telefon: [{ phone1: "", phone2: "" }]
    }

  }

  componentDidMount() {

    fetch('/contactJson')
      .then((response) => response.json())
      .then((findresponse) => {
        this.setState({
          data: findresponse,
        })
      })

    window.scrollTo(0, 0);
  }

  render() {
    
    /* Mapare program de functionare */
    let orar = this.state.data.program.map((item, index) => {
      return (
        <div className="card-div" key={index}>
          <p><b>{item.where}</b></p>
          <p style={{ color: 'red' }}><b>{item.hours}</b></p>
        </div>
      )
    });

    /*Mapare Relatie cu presa / mass-media */
    let presa = this.state.data.massMedia.map((item, index) => {
      return (
        <div className="card-div" key={index}>

          <p><b>{item.functie}</b></p>
          <p>{item.nume}</p>
          <p> E-mail: <a href={"mailto:" + item.email}>{item.email}</a></p>
          <p> Tel. <PhoneNumber number={item.phone} isLinked={true} />, Int. 105</p>
          <p style={{color: 'red'}}><b>{item.obs1}</b></p>
          <p style={{color: 'red'}}>{item.obs2}</p>
          <p style={{color: 'red'}}>{item.obs3}</p>
          <p style={{color: 'red'}}>{item.obs4}</p>
          <p style={{color: 'red'}}>{item.obs5}</p>
        </div>
      )
    });


    /* Maparea numerelor de telefon din const -------telefon------------ */
    let contactTelefon = this.state.data.telefon.map((tel, index) => {
      return (
        <div className="card-div" key={index}>
          <p>
            <b>Tel. Tribunal: </b>
            <PhoneNumber number={tel.phone1} isLinked="true" /> ;
            <PhoneNumber number={tel.phone2} isLinked="true" />
          </p>
        </div>
      )
    });


    /* Maparea numerelor de telefon din const -------email------------ */
    let contactEmail = this.state.data.email.map((mail, index) => {
      return (
        <div className="card-div" key={index}>
          <p>
            <b>{mail.locatie} </b>
            <a href={"mailto:" + mail.adresa}>{mail.adresa}</a>
          </p>
        </div>
      )
    });

    /* Maparea numerelor de telefon din const -------fax------------ */
    let contactFax = this.state.data.faxuri.map((mail, index) => {
      return (
        <div className="card-div" key={index}>
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


          <Harta />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
