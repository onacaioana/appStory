import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Pdf from "./Pdf/pdf";
import axios from "axios";

class Doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blob: [],
      openFile: false
    };
  }

  handleClickToOpen = () => {
    // console.log(fileName);
    axios
      .get(`http://localhost:8080/ass`, {
        params: {
          fileName: this.props.locatie
        }
      })
      .then(res => {
        console.log("aduc documentul");
        this.setState({
          blob: res.data,
          openFile: true
        });
      })
      .catch(e => {
        console.log("error opening file", e);
      });
  };

  onCloseModal = () => {
    console.log("onCloseModal in doc");
    this.setState({
      openFile: false,
      blob: []
    });
    console.log("this.state.openFile", this.state.openFile);
  };

  render() {
    console.log("Rendering doc.js");
    return (
      <div>
        <div onClick={this.handleClickToOpen}> VASILE </div>
        {this.state.openFile ? (
          <Pdf
            data={`data:application/pdf;base64,${this.state.blob}`}
            print={this.state.blob}
            handleCloseModal={this.onCloseModal}
            fileName={this.props.locatie}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Doc;
