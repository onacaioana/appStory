import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import { Button } from "@material-ui/core";

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
    var FileSaver = require('file-saver');
    var blob = new Blob([this.props.save], { type: "application/pdf" });
    FileSaver.saveAs(blob, "world.pdf");

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
          <Button onClick={this.handleSave}>Save</Button>
          <Button>Print</Button>
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
