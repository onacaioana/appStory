import React from "react";
import { instante } from "./instante";
import ReactMapboxGl, { Popup } from "react-mapbox-gl";
import "./harta.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZHJ5YW4yNTEiLCJhIjoiY2puZXVxb3V5MDcyMTNxcHNvd2F3dGs1ZyJ9.M-k9C2x3ROLSE6S6ugL-yA"
});
const zoom = [8];
const defaultCenter = [23.59043061733246, 46.870762064862225];
let feature = {};
let instanta = {};

class Harta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: {},
      popup: undefined,
      center: defaultCenter,
      radius: 0.5
    };
  }

  handleMapClick = (map, e) => {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["instante"] // replace this with the name of the layer
    });

    if (!features.length) {
      if (this.state.radius === 0.0005) {
        this.setState({ radius: 0.5 });
      } else {
        this.setState({
          popup: undefined,
          center: defaultCenter
        });
      }
    } else {
      feature = features[0];
      instanta = instante.filter(i => {
        console.log(i.nume);
        console.log(feature.properties.name);
        return i.nume === feature.properties.name;
      });

      console.log(instanta);
      if (feature.properties.name.includes("Cluj")) {
        if (this.state.radius !== 0.0005) {
          this.setState({
            radius: 0.0005,
            center: feature.geometry.coordinates,
            popup: undefined
          });
        } else {
          this.setState({
            center: feature.geometry.coordinates,
            popup: { coord: feature.geometry.coordinates }
          });
        }
      } else {
        this.setState({
          radius: 0.5,
          center: feature.geometry.coordinates,
          popup: {
            coord: feature.geometry.coordinates
          }
        });
      }
      this.setState({});
    }
  };

  popupClick = () => {
    this.setState({
      popup: undefined
    });
  };

  render() {
    return (
      <Map
        style="mapbox://styles/dryan251/cjngesw1k4bx72rschxaogtec"
        fitBounds={[
          [
            this.state.center[0] - this.state.radius,
            this.state.center[1] - this.state.radius + 0.0002
          ],
          [
            this.state.center[0] + this.state.radius,
            this.state.center[1] + this.state.radius + 0.0002
          ]
        ]}
        center={this.state.center}
        zoom={zoom}
        containerStyle={{ height: "600px" }}
        onClick={this.handleMapClick}
      >
        {this.state.popup && (
          <Popup coordinates={this.state.popup.coord} onClick={this.popupClick}>
            <div className="popup_title">{feature.properties.name}</div>
            <div className="popup_text">
              {instanta[0].adresa.oras}, Strada {instanta[0].adresa.str} Nr.{" "}
              {instanta[0].adresa.nr}
            </div>
            <div className="popup_text">
              Cod postal: {instanta[0].adresa.cod}
            </div>
            <ul className="telefon">
              <li>Telefon: </li>
              {instanta[0].tel.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <div className="popup_text">Fax: {instanta[0].fax}</div>
            <div className="popup_text">E-mail: {instanta[0].email}</div>
          </Popup>
        )}
      </Map>
    );
  }
}

export default Harta;
