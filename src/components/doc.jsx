import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Pdf from "./Pdf/pdf";
import axios from "axios";
const { detect } = require('detect-browser');
const browser = detect();

class Doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blob: [],
      openFile: false,
    };
  }

  //get pdf data when item is clicked
  handleClickToOpen = () => {
    axios
      .get(`/ass`, {
        params: {
          fileName: this.props.locatie
        }
      })
      .then(res => {
        /* Check browser version and name */
        if (browser.name === "ie" && browser.version.indexOf('9') !== -1) {
          //  let pdfData = atob(res.data);
          //  let uint8ArrayPdf = new Uint8Array(200)
          //  for (let i = 0; i < pdfData.length; i++) {
          //   uint8ArrayPdf[i] = pdfData.charCodeAt(i)
          // }

          //   var url = 'pdfViewer/web/viewer.html?file=';

          //  var binaryData = [];
          //  binaryData.push(uint8ArrayPdf);
          //   var dataPdf = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));

          //  window.open(url + encodeURIComponent(dataPdf), '_blank');
        }
        else this.setState({
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
    const { button, data, icon, titlu, locatie } = this.props;
    const { blob } = this.state;
    return (
      <div>
        {/* If locatie is a href then redirect using component a */}

        {locatie.substring(0, 4) === "http"

          ? <ListItem
            className="mx-5 px-5 "
            button
            component="a"
            href={locatie}
          >
            {icon ? (
              <ListItemIcon className="mx-1 px-1">
                <img src={icon} alt="Icon_Document" />
              </ListItemIcon>
            ) : (
                ""
              )}

            <ListItemText
              color="white"
              inset
              primary={titlu}
              secondary={data}
            />
          </ListItem >
          :
          <ListItem
            className="mx-5 px-5 "
            button={button}
            onClick={this.handleClickToOpen}
          >
            {icon ? (
              <ListItemIcon className="mx-1 px-1">
                <img src={icon} alt="Icon_Document" />
              </ListItemIcon>
            ) : (
                ""
              )}
            <ListItemText
              color="white"
              inset
              primary={titlu}
              secondary={data}
            />
          </ListItem>
        }

        {this.state.openFile ? (
          <Pdf
            data={`data:application/pdf;base64,${blob}`}
            print={blob}
            handleCloseModal={this.onCloseModal}
            fileName={locatie}
          />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default Doc;
