import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";

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
    console.log('Closing modal');
    this.setState({ isModalOpen: false });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages, isModalOpen } = this.state;

    return (

      <Modal open={isModalOpen}
        style={{ overflowY: "scroll", textAlign: "center" }}
        onClose={this.handleClose}
        onClick={this.handleClose}
      >
        <div className="container__document">
          <Document
            file={this.props.fileName}
            onLoadSuccess={this.onDocumentLoadSuccess}

          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={1.5}
              />
            ))}
          </Document>
        </div>
      </Modal>
    );
  }
}

export default Pdf;
