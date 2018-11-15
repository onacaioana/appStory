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

  //get pdf data when item is clicked
  handleClickToOpen = () => {
    axios
      .get(`http://localhost:8080/ass`, {
        params: {
          fileName: this.props.locatie
        }
      })
      .then(res => {
        this.setState({
          blob: res.data,
          openFile: true
        });
      })
      .catch(e => {
        console.log("Eroare la deschiderea fișierului", e);
      });
  };

  //closing the modal containing pdf file
  onCloseModal = () => {
    this.setState({
      openFile: false,
      blob: []
    });
  };

  render() {
    return (
      <div>
        <ListItem
          className="mx-5 px-5 "
          button={this.props.button}
          onClick={this.handleClickToOpen}
        >
          <ListItemText
            color="white"
            inset
            primary={this.props.titlu}
            secondary={this.props.data}
          />
        </ListItem>

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
