import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/SaveAlt';
import PrintIcon from '@material-ui/icons/Print';
import CloseIcon from '@material-ui/icons/Close';

// const options = {
//   cMapUrl: "cmaps/",
//   cMapPacked: true
// };

class Pdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      isModalOpen: true
    };
  }

  // onFileChange = event => {
  //   this.setState({
  //     file: event.target.files[0]
  //   });
  // };

  handleClose = () => {
    console.log("Closing modal");
    this.setState({ isModalOpen: false });
  };

  handleSave = () => {
    const linkSource = this.props.fileName;
    const downloadLink = document.createElement("a");
    const fileName = "vct_illustration.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();

  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages, isModalOpen } = this.state;
    let downloadLink = this.props.fileName;
    console.log(downloadLink);
    return (
      <Modal
        open={isModalOpen}
        style={{ overflowY: "scroll", textAlign: "center" }}
      >

        <div className="container__document">
          <AppBar className="bg-dark text-light"  >
            <Toolbar className="ml-auto" >
              <IconButton href={this.props.fileName} onClick={this.handleSave} color="inherit" aria-label="Save">
                <PrintIcon />
              </IconButton>
              <IconButton href={this.props.fileName} onClick={this.handleSave} color="inherit" aria-label="Save">
                <SaveIcon />
              </IconButton>
              <IconButton href={this.props.fileName} onClick={this.handleClose} color="inherit" className="mx-3">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Document
            file={this.props.fileName}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {Array.from(
              new Array(this.props.pages || numPages), //show first 'this.props.pages' pages or all pages
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={1.5}
                />
              )
            )}
          </Document>
        </div>
      </Modal>
    );
  }
}

export default Pdf;