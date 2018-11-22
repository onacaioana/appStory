import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { fax } from "react-icons-kit/fa/fax";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail";
import Harta from "../components/Harta/Harta";
import Title from '../components/Header/HeaderTitlePage';
// import 'mapbox-gl/dist/mapbox-gl.css';

const program = [{
  where: "Programul de lucru al instituţiei:",
  hours: "Luni - Vineri între orele 08:00 - 16:00;"
},
{
  where: "Programul de lucru cu publicul al Registraturii (parter, camera 24A), al Arhivei (parter, camera 24B):",
  hours: "Luni - Vineri între orele 8:00 - 12:00;"
}, {
  where: "Programul de lucru cu publicul pe perioada vacantei judecatoresti (01.07.-31.08.) al Registraturii (parter, camera 24A), al Arhivei (parter, camera 24B):",
  hours: "Luni Miercuri Joi între orele 09:00 - 11:00;",
}];

const contacte = [{
  icon: phoneSquare,
  name: "Contact",
  items: [{
    name: "Telefon Tribunal",
    item: "0264-596111 ; 0264-431057"
  }, {
    name: "Telefon Tribunal",
    item: "0264-431908 ; 0264-595812",
  }]
},
{
  icon: mail,
  name: "Mail",
  items: [{
    name: "Registratură",
    item: "tr-cluj-reg@just.ro",
  },
  {
    name: "Biroul Expertize",
    item: "tr-cluj-blej@just.ro ",
  }, {
    name: "Purtător de cuvânt",
    item: "simona.sulea@just.ro"
  }]
},
{
  icon: fax ,
  name: "Fax",
  items: [{
    name: "Cabinet Preşedinte",
    item: "0264-595844",
  },
  {
    name: "Serviciu Contabilitate",
    item: "0264-431965",
  }]
},]

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    let orar = program.map((item, index) => {
      return (
        <div>
          <p className="card-text px-2">{item.where}</p>
          <p className="card-text px-2"><b>{item.hours}</b></p>
        </div>
      )
    });

    let contactUs = contacte.map((cont, index) => {
      let count = [];

      for (let i = 0; i < cont.items.length; i++) {
        count.push(
          <p className="card-text">
            <b> {cont.items[i].name}: </b>
            {cont.items[i].item}
          </p>
        );
      }
      return (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-lg h-md-250">
            <div style={{backgroundColor: '#146496'}} className="card-header text-white border-0 py-2 d-flex align-items-center">
              <Icon size={30} icon={cont.icon} />
              <h5 className="card-text px-3">{cont.name}</h5>
            </div>
            <div className="card-body">
              {count}
            </div>
          </div>
        </div>
      )
    });

    const style = { marginLeft: "10%", marginRight: "10%", marginTop: "10px" };
    return (
      <React.Fragment>
        <Title title="Contact" page="Contact us" breadcrumbs={true} />
        <div style={style}>

          <div className="card my-3 bg-light shadow-lg h-md-250 text-center">
            <div style={{backgroundColor: '#146496'}}  className="card-header text-white border-0 py-2 d-flex ">
              <h5 className="card-text px-3">Program de funcţionare</h5>
            </div>
            <div className="card-body">
              {orar}
            </div>
          </div>

          <div className="row mb-2">
            {contactUs}
          </div>

          <Harta />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
